"use client";
import { useState } from 'react';
import Link from "next/link";
import { Button, Grid, Box, Typography, Stack } from "@mui/material";
import { Input, Checkbox, PrimaryButton } from "@/components";
import { useRouter } from "next/navigation";

const Cart = ({totalPrice, discount, totalQuantity, num, handleSubmit}) => {
  const router = useRouter();
  const [check, setCheck] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/checkout')
  }

  return (
    <Box bgcolor={"custom.grayLight"} px={3} py={2}>
      <Grid container direction={"column"}>
        <Typography
          variant="h7"
          color="custom.orange"
          fontWeight={"bold"}
          lineHeight="38px"
          textTransform="uppercase"
          fontFamily="inherit"
          textAlign={"center"}
        >
          <span style={{ fontSize: "22px" }}>S</span>ummary
        </Typography>
        <Box py={3}>
          <Stack
            spacing={0}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            py={1}
          >
            <Typography>Original Price ({num > 1 ?  `${num} Items` : `${num} Item`})</Typography>
            <Typography size="sm" textAlign="end">
              Rs. <span>{totalPrice}.00</span>
            </Typography>
          </Stack>
          <Stack
            spacing={0}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            py={1}
          >
            <Typography>Total Quantity</Typography>
            <Typography size="sm" textAlign="end">
              <span>{totalQuantity}</span>
            </Typography>
          </Stack>
          <Stack
            spacing={0}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            py={1}
          >
            <Typography>Delivery</Typography>
            <Typography size="sm" textAlign="end">
              Rs. <span>2.00</span>
            </Typography>
          </Stack>
          <Stack
            spacing={0}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            py={1}
          >
            <Typography>Discount</Typography>
            <Typography size="sm" textAlign="end">
              Rs. <span>{discount}.00</span>
            </Typography>
          </Stack>
          <Stack
            spacing={0}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            py={1}
          >
            <Typography fontWeight={"bold"}>Total</Typography>
            <Typography size="sm" textAlign="end" fontWeight={"bold"}>
              Rs. <span>{totalPrice - discount + 2}</span>
            </Typography>
          </Stack>
        </Box>
        <Input placeholder="Enter Promo Code" />
        <Box py={5}>
          <Checkbox
            value={check}
            onChange={(e) => setCheck(!check)}
            label={
              <span>
                By Clicking the button below, I agree to the{" "}
                <Link href="/terms">
                  <Typography as="span" fontWeight={"bold"}>
                    Terms of Use
                  </Typography>
                </Link>{" "}
                and{" "}
                <Link href="/privacypolicy">
                  <Typography as="span" fontWeight={"bold"}>
                    Privacy Statement
                  </Typography>
                </Link>
              </span>
            }
          />
        </Box>
        {/* <PrimaryButton onClick={(e) => handleSubmit(e)} size="sm">Place order</PrimaryButton> */}
        <Button
          variant='contained'
          size='large'
          color='primary'
          onClick={(e) => handleSubmit(e)}
          disabled={check == true}
          sx={{
            fontWeight: "bold",
            textTransform: "capitalize",
            boxShadow: "none",
            padding: "15px 30px",
            transition: 'opacity 0.3s',
            opacity: check === true ? 0.5 : 1,
            pointerEvents: check === true ? 'none' : 'auto',
            color: "white"
          }}
        >Place order</Button>
      </Grid>
    </Box>
  );
};
export default Cart;
