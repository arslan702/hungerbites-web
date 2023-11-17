"use client";
import Image from "next/image";
import Link from "next/link";
import { Grid, Box, Typography, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const ProductCategory = () => {
  return (
    <Link style={{ textDecoration: "none" }} href="/">
      <Box>
        <Image
          src={"https://via.placeholder.com/300.png"}
          alt="product-image"
          width={250}
          height={200}
        />
      </Box>
      <Typography color="black" mt={2}>
        Long name of the Product...
      </Typography>
      <Typography variant="h6" color="custom.red" fontWeight={"bold"}>
        Rs. 476.75.
      </Typography>
      <Box
        sx={{
          width: 200,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Rating
          name="text-feedback"
          value={62}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <Box sx={{ ml: 2 }}>(82)</Box>
      </Box>
    </Link>
  );
};

export default ProductCategory;
