"use client";
import { Grid, Container, Box, Typography } from "@mui/material";
import Cart from "./cart";
import Details from "./details";
import ProductSlider from "../products/ProductSlider";
import { API_URL } from "@/configuration";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const CheckOut = () => {
  const router = useRouter();
  const [contact, setContact] = useState({auth_user_id: '', name: '', address: '', city: '', state: '', phone_number: '', area_id: ''})
  const [shippingAddress, setShippingAddress] = useState({auth_user_id: '', name: '', address: '', city: '', state: '', phone_number: '', area_id: ''})
  const [order, setOrder] = useState({tracking: '1234', auth_user_id: '', order_date: '', total_amount: 0, status: 'pending' })
  const [invoice, setInvoice] = useState({order_id: '', auth_user_id: '', amount: 0})
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    const user = JSON?.parse(localStorage.getItem('user'))
    setId(user?.id)
    axios.get(`${API_URL}/shoppingcart/auth/${user?.id}`)
    .then((res) => {
      axios.get(`${API_URL}/shoppingcartitem/cart/${res?.data?.id}`)
      .then((res) => {
        setCart(res?.data)
      })
    })
    axios.get(`${API_URL}/menuitem`)
    .then((res) => {
      setProducts(res?.data)
    })
  },[])

  const totalPrice = cart?.reduce((sum, item) => sum + (parseFloat(item?.MenuItem?.price) * item?.quantity), 0)
  const totalQuantity = cart?.reduce((sum, item) => sum + item?.quantity, 0);

  const multipledResult = cart?.map((item) => {
    const multipliedquantity = item?.quantity * item?.Discount?.discount_amount;
    return multipliedquantity;
  })

  const discount = multipledResult?.reduce((acc, curr) => {
    if(isNaN(curr)) {
      return acc;
    }
    return acc + curr;
  }, 0);

  const num = cart?.length;
  let currentDate = new Date();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const orderRes = await axios.post(`${API_URL}/order`, {...order, total_amount: totalPrice+2, auth_user_id: id})
      for (const item of cart) {
        await axios.post(`${API_URL}/orderitem`, {
          order_id: orderRes?.data?.id,
          item_id: item?.MenuItem?.id,
          quantity: item?.quantity,
          price: item?.MenuItem?.price,
        })
        await axios.delete(`${API_URL}/shoppingcartitem/${item?.id}`)
      }
      await axios.post(`${API_URL}/invoice`, {...invoice, order_id: orderRes?.data?.id, amount: totalPrice+2, auth_user_id: id, status: 'outstanding', due_date: currentDate})
      router.push('/conformation')
    } catch (error) {
      console.log(error)
    }
  }

  return (
  <Container maxWidth="xl" disableGutters>
    <Grid container direction={{ xs: "column", md: "row" }} spacing={2}>
      <Grid item xs>
        <Details totalPrice={totalPrice} shippingAddress={shippingAddress} cart={cart} setShippingAddress={setShippingAddress} contact={contact} setContact={setContact}/>
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Cart totalPrice={totalPrice} totalQuantity={totalQuantity} discount={discount} num={num} handleSubmit={handleSubmit}/>
      </Grid>
    </Grid>
    <Box py={10}>
      <Grid item xs>
        <Typography
          variant="h2"
          color="custom.orange"
          textTransform="uppercase"
          textAlign={"center"}
        >
          <Typography variant="h1" as="span" color={"inherit"}>
            Y
          </Typography>
          ou
          <Typography variant="h1" as="span" color={"inherit"}>
            &nbsp;M
          </Typography>
          ay
          <Typography variant="h1" as="span" color={"inherit"}>
            &nbsp;A
          </Typography>
          lso
          <Typography variant="h1" as="span" color={"inherit"}>
            &nbsp;L
          </Typography>
          ike
        </Typography>
      </Grid>
      <Box mt={5}>
        <ProductSlider data={!products ? [] : products?.items}/>
      </Box>
    </Box>
  </Container>
  )
};

export default CheckOut;
