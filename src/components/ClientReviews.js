"use client";
import { Stack, Typography, Rating, Avatar } from "@mui/material";
const ClientReviews = ({ rating, name, review, ...rest }) => {
  return (
    <Stack direction={"row"} mb={3} spacing={2} alignItems="center" {...rest}>
      <Avatar alt="Remy Sharp" sx={{ width: 80, height: 80 }} />
      <Stack direction={"column"} spacing={1}>
        <Typography variant="h5" fontWeight={"bold"}>
          {name}
        </Typography>
        <Rating name="read-only" value={rating} readOnly />
        <Typography>{review}</Typography>
      </Stack>
    </Stack>
  );
};
export default ClientReviews;
