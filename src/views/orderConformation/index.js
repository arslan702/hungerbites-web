import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import tickcircle from "../../assets/images/tickcircle.png";
import smallcircle from "../../assets/images/smallcircle.png";
import PrimaryButton from "../../components/PrimaryButton";
import axios from "axios";
import { API_URL } from "../../configuration";
import ProductSlider from "../products/ProductSlider";
import { useRouter } from "next/navigation";

function OrderConformation() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState('');
  const router = useRouter();

  useEffect(() => {
    setUser(JSON?.parse(localStorage.getItem('user')))
    axios.get(`${API_URL}/menuitem`).then((res) => {
      setProducts(res?.data);
    });
  }, []);

  const handleShopping = (e) => {
    e.preventDefault();
    router.push('/');
  }
  
  return (
    <Container maxWidth="xl" disableGutters>
      <Grid container direction={{ xs: "column", md: "row" }} spacing={2}>
        <Grid item xs>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box sx={{ background: "#F9F7F7", width: "70%", height: "520px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  marginTop: "43px",
                }}
              >
                <Box
                  sx={{ position: "relative", width: "67px", height: "67px" }}
                >
                  <Image src={tickcircle} width={67} height={67} alt="circle" />
                  <Image
                    src={smallcircle}
                    width={20}
                    height={20}
                    alt="circle"
                    style={{
                      position: "absolute",
                      top: "50.5px",
                      left: "35.5px",
                    }}
                  />
                </Box>
                <Typography variant="h2" color="custom.orange" mt="63px">
                  THANK YOU
                </Typography>
                <Typography variant="h3" mt="21px" textAlign={"center"}>
                  Your order has been received
                </Typography>
                <Typography variant="h5" mt="21px" fontWeight={400}>
                  We are preparing your food
                </Typography>
                <Typography variant="h5" mt="21px" fontWeight={500}>
                  Order Number is: #0987654
                </Typography>
                <PrimaryButton onClick={(e) => handleShopping(e)} sx={{ marginTop: "21px", color: 'white' }}>
                  Continue Shopping
                </PrimaryButton>
              </Box>
            </Box>
          </Box>
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
          <ProductSlider data={!products ? [] : products?.items} />
        </Box>
      </Box>
    </Container>
  );
}

export default OrderConformation;
