/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { 
  Container,Box,
  Grid,
  Typography,
  Stack,
  Rating,
  IconButton,
  Button,
  Divider,
 } from '@mui/material'
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { API_URL } from "../../configuration";
import CloseIcon from '@mui/icons-material/Close';

// eslint-disable-next-line react/prop-types
const OrderDetails = ({id, setOpenDetails}) => {
  const [orderItem, setOrderItem] = useState([]);

  async function getProductInfo(productId) {
    try {
      const response = await axios.get(`${API_URL}/menuitem/${productId}`);
      return response.data; // Assuming the response contains the product information
    } catch (error) {
      console.error(`Error retrieving product with ID ${productId}:`, error);
      return null;
    }
  }

  useEffect(() => {
    const fetchOrderItems = async () => {
      try {
        const response = await axios.get(`${API_URL}/orderitem/order/${id}`);
        const orderItems = response?.data;
  
        // Fetch product information and merge into orderItems
        const updatedOrderItems = await Promise.all(orderItems.map(async (orderItem) => {
          const productId = orderItem.item_id;
          const productInfo = await getProductInfo(productId);
  
          if (productInfo) {
            orderItem.productInfo = productInfo;
          }
  
          return orderItem;
        }));
  
        setOrderItem(updatedOrderItems);
      } catch (error) {
        console.error('Error retrieving order items:', error);
      }
    };
  
    fetchOrderItems();
  },[id])

  console.log({orderItem})
  return (
    <Container maxWidth="xl">
      <Box sx={{ position: 'relative' }}>
      <IconButton
    sx={{
          position: 'absolute',
          top: -40,
          right: -10,
          zIndex: 1,
    }}
    onClick={() => setOpenDetails(false)}
  >
    <CloseIcon />
  </IconButton>
      {orderItem?.map((item) => (
      <Grid key={item?.id} container mt={8} gap={8} width={400}>
        <Grid
          item
          xs={12}
          sm={2}
          md={5}
          sx={{
            objectFit: "contain",
            overflow: "hidden",
            position: "relative",
            width: "100%",
            height: 300,
          }}
        >
          <Image
            // src="https://via.placeholder.com/1000"
            src={item?.productInfo?.image_url}
            alt="product-image"
            fill
          />
        </Grid>
        <Grid item xs={12} sm="auto">
          <Typography
            variant="h5"
            sx={{ textTransform: "capitalize", mb: "12px" }}
          >
            {item?.productInfo?.name}
          </Typography>
          <Typography variant="subtitle1" fontWeight={700}>
            Brand:
            <Typography
              variant="caption"
              sx={{ ml: 1, color: "custom.red" }}
              fontWeight="bold"
            >
              {item?.productInfo?.Brand?.name}
            </Typography>
          </Typography>
          <Typography
            variant="h5"
            mt={2}
            sx={{ color: "custom.red" }}
            fontWeight="bold"
          > {item?.price}
          </Typography>
          <Stack direction={"row"} alignItems="center" mt={2}>
            <Typography mr={2}>Quantity: </Typography>
            <Typography fontWeight={"bold"} px={2}>
              {item?.quantity}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      ))}
  </Box>
    </Container>
  )
}

export default OrderDetails