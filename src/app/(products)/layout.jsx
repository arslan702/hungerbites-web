"use client";
import {
  Box,
  Container,
  Stack,
  OutlinedInput,
  InputAdornment,
  Grid,
  Pagination,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/configuration";
import { Product } from "@/components";

const DashboardLayout = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if(name == "") {
        setProducts(null);
    } else {
      axios.get(`${API_URL}/menuitem/name/keyword/${name}?page=${page}`).then((res) => {
        setProducts(res?.data?.result);
        setTotalPages(res?.data?.totalPages);
      });
    }
  }, [name, page]);

  console.log({products})

  return (
    <Box mt={"40px"} display="flex" flex={1} flexDirection="column">
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          mt: 3,
          height: "100%",
        }}
      >
        <Stack sx={{ mb: 5 }}>
          <Container maxWidth="md">
            <OutlinedInput
              padding="8px"
              sx={{
                bgcolor: "#F5F5F5",
                borderRadius: "20px",
              }}
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Search products..."
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon color="primary" />
                </InputAdornment>
              }
            />
          </Container>
        </Stack>
        {products?.length ? (
          <>
          <Grid container>
            {products?.map((item, index) => (
              <Grid item xs={12} md={3}>
                <Product key={index} item={item} link={index} />
              </Grid>
            ))}
          </Grid>
          <Pagination
            sx={{display: 'flex', justifyContent: 'flex-end', marginBottom: '10px'}}
            count={totalPages}
            page={page}
            onChange={(e, value) => setPage(value)}
          />
          </>
        ) : (
          <>
          { children }
          </>
        )}
      </Container>
    </Box>
  );
};
export default DashboardLayout;
