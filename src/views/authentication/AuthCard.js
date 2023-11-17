"use client";
import { Box } from "@mui/material";
import { MainCard } from "@/components";

const AuthCard = ({ children, ...other }) => (
  <MainCard
    sx={{
      maxWidth: { xs: 400, md: 600 },
      margin: { xs: 2.5, md: 3 },
      "& > *": {
        flexGrow: 1,
        flexBasis: "50%",
      },
    }}
    content={false}
    {...other}
    border={false}
  >
    <Box sx={{ p: { xs: 2, sm: 3, md: 5, xl: 5 } }}>{children}</Box>
  </MainCard>
);

export default AuthCard;
