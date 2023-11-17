"use client";
import { Container, Grid, Pagination } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import FallBackLoader from "@/components/CircularProgress";
import axios from "axios";
import { API_URL } from "../../configuration";
import { Product } from "@/components";

function CategoriesProducts({ id }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`${API_URL}/menuitem/category/${id}?page=${page}`)
      .then((res) => {
        setProducts(res?.data);
      });
  }, [page]);
  console.log({ products });
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        {products?.items?.map((item, index) => (
          <Grid item xs={12} md={3}>
            <Suspense fallback={<FallBackLoader/>}>
            <Product key={index} item={item} link={index} />
            </Suspense>
          </Grid>
        ))}
      </Grid>
      <Pagination
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "10px",
        }}
        // component="div"
        count={products?.totalPages}
        page={page}
        onChange={(e, value) => setPage(value)}
      />
    </Container>
  );
}

export default CategoriesProducts;
