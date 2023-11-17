"use client";
import { Stack, Typography, Rating, Slider } from "@mui/material";
const RatingAndReview = ({ rating, name, totalReviews, ...rest }) => {
  return (
    <Stack
      direction={["column", "row"]}
      mb={3}
      spacing={8}
      alignItems="center"
      {...rest}
    >
      <Stack direction={"column"} spacing={1}>
        <Typography variant="h1" fontWeight={"bold"}>
          {rating}
          <Typography as="span" color="custom.gray" variant="h3">
            /5
          </Typography>
        </Typography>
        <Rating name="read-only" value={rating} readOnly />
        <Typography color="custom.gray" fontWeight={"bold"}>
          {totalReviews} rating
        </Typography>
      </Stack>
    </Stack>
  );
};
export default RatingAndReview;
