"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Stack,
  Box,
  Typography,
  Rating,
  Card,
  CardContent,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../configuration";

const Product = ({ index, item, link }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/review/product/${item?.id}`)
    .then((res) => {
      setReviews(res?.data?.data);
    })
  },[])
  
  const numReviews = reviews.length;
  let totalRating = 0;

  for (let i = 0; i < numReviews; i++){
    totalRating += reviews[i].rating;
  }

  const averageRating = totalRating / numReviews;
  return (
    <Link style={{ textDecoration: "none" }} href={`/product/${item?.id}`}>
      <Card>
        <CardContent>
          <Stack
            justifyContent={"center"}
            direction="column"
            spacing={1}
            sx={{ overflow: "hidden" }}
          >
            <Image
              // src={"https://via.placeholder.com/300.png"}
              src={item?.image_url}
              alt="product-image"
              width={250}
              height={200}
            />
            <Typography color="black">{item?.name}</Typography>
            <Stack direction="row">
            <Typography variant="h6" color="custom.red" fontWeight={"bold"}>
              Rs {item?.price}
            </Typography>
            {item?.quantity < 1 ?
            <Typography variant="p" color="red" fontSize="11px" marginLeft="10px">
              *Out of Stock
            </Typography>
            : ''}
            </Stack>
            <Stack direction={"row"}>
              <Rating
                name="text-feedback"
                value={averageRating}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Box sx={{ ml: 2 }}>({numReviews})</Box>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Product;
