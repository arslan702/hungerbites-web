"use client";
import { Suspense } from "react";
import useSWR from "swr";
import styles from "./dashboard.module.css";
import NextLink from "next/link";
import { Box, Grid, Typography, Container, Stack } from "@mui/material";
import Categories from "./categories";
import FallBackLoader from "@/components/CircularProgress";
import BannerSlider from "./slider";
import ProductSlider from "./ProductSlider";
import CategorySlider from "./CategorySlider";
import { API_URL } from "@/configuration";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Dashboard = () => {
  const { data } = useSWR(`${API_URL}/discount`, fetcher)
  console.log({data})
  const discount = data?.map((item) => item?.MenuItem)
  const { data: products } = useSWR(`${API_URL}/menuitem`, fetcher)
  console.log({discount})
  return (
    <Container maxWidth="xl">
      <Grid container gap={6}>
        <Suspense fallback={<FallBackLoader />}>
          <Categories gri={3}/>
        </Suspense>
        <Grid item xs={12} md={8}>
          <Suspense fallback={<FallBackLoader />}>
            <BannerSlider />
          </Suspense>
        </Grid>
      </Grid>
      {discount?.length ?
      <Stack sx={{ mt: 10, mb: 5 }}>
        <Typography
          variant="h2"
          color="custom.orange"
          textTransform="uppercase"
          textAlign={"center"}
        >
          <Typography variant="h1" as="span" color={"inherit"}>
            D
          </Typography>
          eals &
          <Typography variant="h1" as="span" color={"inherit"}>
            &nbsp;P
          </Typography>
          romotions
        </Typography>
        <Grid container justifyContent={"flex-end"} py={3}>
          <NextLink href={"/topSelling"} style={{ textDecoration: "none" }}>
            <Typography variant="body2" color="custom.red">
              See more
            </Typography>
          </NextLink>
        </Grid>
        <ProductSlider data={!discount ? [] : discount}/>
      </Stack>
      : ''}
      <Stack>
        <Grid
          container
          justifyContent={"center"}
          alignItems="center"
          direction="column"
          sx={{ mt: 10, mb: 5 }}
        >
          <Grid item xs>
            <Typography
              variant="h2"
              color="custom.orange"
              textTransform="uppercase"
              textAlign={"center"}
            >
              <Typography variant="h1" as="span" color={"inherit"}>
                T
              </Typography>
              op
              <Typography variant="h1" as="span" color={"inherit"}>
                &nbsp;S
              </Typography>
              elling
              <Typography variant="h1" as="span" color={"inherit"}>
                &nbsp;P
              </Typography>
              roducts
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent={"flex-end"} py={3}>
          <NextLink href={"/topSelling"} style={{ textDecoration: "none" }}>
            <Typography variant="body2" color="custom.red">
              See more
            </Typography>
          </NextLink>
        </Grid>
        <ProductSlider data={!products ? [] : products?.items}/>
      </Stack>
      <Stack>
        <Grid
          container
          justifyContent={"center"}
          alignItems="center"
          direction="column"
          sx={{ mt: 10, mb: 2 }}
        >
          <Grid item xs>
            <Typography
              variant="h2"
              color="custom.orange"
              textTransform="uppercase"
              textAlign={"center"}
            >
              <Typography variant="h1" as="span" color={"inherit"}>
                R
              </Typography>
              estaurants
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent={"flex-end"} py={3}>
          <NextLink href={"/"} style={{ textDecoration: "none" }}>
            {/* <Typography variant="body2" color="custom.red">
              See more
            </Typography> */}
          </NextLink>
        </Grid>
        <Box mb={10}>
          <CategorySlider />
        </Box>
      </Stack>
    </Container>
  );
};
export default Dashboard;
