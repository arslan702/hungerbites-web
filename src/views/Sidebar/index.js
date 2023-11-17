"use client";

import Link from "next/link";
import * as React from "react";
import { Drawer, IconButton, List, Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { NAV_ITEMS } from "@/utils";
import { inter } from "@/assets/fonts";

export default function Sidebar({ open, closeDrawer }) {
  const toggleDrawer = (value) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    closeDrawer(value);
  };

  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", py: 3, px: 2 }}>
        <IconButton
          size="small"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={toggleDrawer(false)}
        >
          <CloseIcon sx={{ color: "#000" }} />
        </IconButton>
      </Box>
      <List sx={{ width: 280, padding: "10px" }}>
        {NAV_ITEMS.map((page, index) => (
          <Link
            key={page.href + index}
            href={page.href ?? "#"}
            style={{
              textDecoration: "none",
              color: "#fb7524",
            }}
            className={inter.className}
          >
            <Typography sx={{ px: 3, py: 3 }}>{page.label}</Typography>
          </Link>
        ))}
      </List>
    </Drawer>
  );
}
