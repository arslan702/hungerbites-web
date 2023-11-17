"use client";
import { Button } from "@mui/material";
const PrimaryButton = ({ children, ...rest }) => {
  return (
    <Button
      variant="contained"
      size="large"
      sx={{
        fontWeight: "bold",
        textTransform: "capitalize",
        boxShadow: "none",
        padding: "15px 30px",
        color: 'white'
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
export default PrimaryButton;
