"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  CircularProgress,
  useTheme,
} from "@mui/material";

const Loader = ({ open = true, message }) => {
  const theme = useTheme();
  return (
    <Dialog
      PaperProps={{
        style: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      }}
      open={open}
      fullWidth
      onClose={(event, reason) => {
        if (reason !== "backdropClick") {
          onClose(event, reason);
        }
      }}
    >
      <DialogContent
        sx={{
          padding: 0,
          bg: "transparent",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CircularProgress size={60} style={{ color: "#199088" }} />
        <Typography
          variant="subtitle2"
          align="center"
          sx={{
            letterSpacing: 0,
            color: theme.palette.text.primary,
            opacity: 1,
            marginTop: "10px",
          }}
        >
          {message ? message : "Please wait..."}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};
export default Loader;
