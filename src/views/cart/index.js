"use client";
import { Grid, Container, Box, Typography } from "@mui/material";
import Cart from "./cart";
import Details from "./details";
import useSWR from "swr";
import ProductSlider from "../products/ProductSlider";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/configuration";

const fetcher = (url) => fetch(url).then((res) => res.json());

const DetailCart = () => {
  const [cart, setCart] = useState([]);
  const [userId, setUserId] = useState('');
  const [newQuantity, setNewQuantity] = useState(0);

  useEffect(() => {
    const user = JSON?.parse(localStorage.getItem('user'))
    axios.get(`${API_URL}/shoppingcart/auth/${user?.id}`)
    .then((res) => {
      setUserId(res?.data?.id);
      axios.get(`${API_URL}/shoppingcartitem/cart/${res?.data?.id}`)
      .then((res) => {
        setCart(res?.data)
      })
    })
  },[newQuantity])

  console.log({cart})

  const { data } = useSWR(`${API_URL}/menuitem`, fetcher)

  return (
  <Container maxWidth="xl" disableGutters>
    <Grid container direction={{ xs: "column", md: "row" }} spacing={2}>
      <Grid item xs>
        <Details cart={cart} setCart={setCart} userId={userId} newQuantity={newQuantity} setNewQuantity={setNewQuantity}/>
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Cart cart={cart} setCart={setCart}/>
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
        <ProductSlider data={!data ? [] : data?.items}/>
      </Box>
    </Box>
  </Container>
  )
};

export default DetailCart;
