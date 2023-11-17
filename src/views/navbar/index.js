"use client";
import styles from "./navbar.module.css";
import React, { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import NextLink from "next/link";
import { useSelectedLayoutSegment, useRouter } from "next/navigation";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoIcon from "@/assets/images/hungerbites.png";
import { inter } from "@/assets/fonts";
import { NAV_ITEMS, hideLayoutRoutes } from "@/utils";
import Sidebar from "../Sidebar";
import axios from "axios";
import { API_URL } from "@/configuration";

const settings = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Products", href: "/products" },
  { title: "Checkout", href: "/checkout" },
];

const Navbar = () => {
  const { data } = useSession();
  let segment = useSelectedLayoutSegment();
  const router = useRouter();
  const isLayoutNeeded = !hideLayoutRoutes.includes(segment);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [user, setUser] = useState()
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const profile = JSON?.parse(localStorage.getItem('user'))
    setUser(profile)
    if(profile) {
    axios.get(`${API_URL}/shoppingcart/auth/${profile?.id}`)
    .then((res) => {
      axios.get(`${API_URL}/shoppingcartitem/cart/${res?.data?.id}`)
      .then((res) => {
        setCart(res?.data)
      })
    })
  }
  },[])

  const handleOpenNavMenu = (event) => {
    setOpenDrawer(true);
  };

  const closeDrawer = () => {
    setOpenDrawer(false);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handelLogout = async () => {
    setAnchorElUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('profile');
    localStorage.removeItem('token');
    // router.replace("/");
    window.location.href = '/';
  };

  return (
    <>
      {isLayoutNeeded ? (
        <>
          <AppBar
            position="fixed"
            sx={{
              bgcolor: "custom.grayLight",
              boxShadow: "none",
              maxHeight: 90,
              top: 0,
            }}
          >
            <Toolbar
              disableGutters
              sx={{
                padding: { xs: "0px 20px", md: "0px 30px", lg: "0px 50px" },
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                >
                  <MenuIcon sx={{ color: "#000" }} />
                </IconButton>
              </Box>
              <NextLink href={"/"}>
                {/* <Image src={LogoIcon} width={70} height={60} alt="image-logo" /> */}
              </NextLink>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {NAV_ITEMS.map((page, index) => {
                  return (
                    <Box key={page.href + index} sx={{ px: 4 }}>
                      <NextLink
                        href={page.href ?? "#"}
                        style={{
                          textDecoration: "none",
                          color: "#199088",
                        }}
                        className={styles.navbar}
                      >
                        <Typography
                          underline="hover"
                          variant="h4"
                          color={"primary"}
                          fontWeight={400}
                          className={inter.className}
                        >
                          {page.label}
                        </Typography>
                      </NextLink>
                    </Box>
                  );
                })}
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                {user ? (
                  <>
                    <NextLink href="/cart">
                      <IconButton aria-label="cart" sx={{ mr: 3 }} size="large">
                        <Badge badgeContent={cart?.length} color="error">
                          <ShoppingCartIcon size={24} color="primary" />
                        </Badge>
                      </IconButton>
                    </NextLink>
                    <Tooltip title="Open settings">
                      <IconButton
                        size="medium"
                        onClick={handleOpenUserMenu}
                        sx={{ p: 0 }}
                      >
                        <Avatar alt="User" src={data?.user?.image} />
                      </IconButton>
                    </Tooltip>
                  </>
                ) : (
                  <Box sx={{display: 'flex'}}>
                  <Box sx={{ px: 0, paddingRight: '15px' }}>
                      <NextLink
                        href="/login"
                        style={{
                          textDecoration: "none",
                          color: "#199088",
                        }}
                        className={styles.navbar}
                      >
                        <Typography
                          underline="hover"
                          variant="h4"
                          color={"primary"}
                          fontWeight={400}
                          className={inter.className}
                        >
                          Login
                        </Typography>
                      </NextLink>
                    </Box>
                    <Box sx={{ px: 0, paddingRight: '0px' }}>
                      <NextLink
                        href="/register"
                        style={{
                          textDecoration: "none",
                          color: "#199088",
                        }}
                        className={styles.navbar}
                      >
                        <Typography
                          underline="hover"
                          variant="h4"
                          color={"primary"}
                          fontWeight={400}
                          className={inter.className}
                        >
                          Register
                        </Typography>
                      </NextLink>
                    </Box>
                    </Box>
                )}
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting.title} onClick={handleCloseUserMenu}>
                      <NextLink
                        href={setting.href}
                        style={{ textDecoration: "none", color: "#dc610a" }}
                      >
                        <Typography color="custom.orange">{setting.title}</Typography>
                      </NextLink>
                    </MenuItem>
                  ))}
                  <MenuItem onClick={handelLogout}>
                    <Typography
                      textAlign="center"
                      variant="caption"
                      fontWeight={"bold"}
                      color="custom.orange"
                    >
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </AppBar>
          <Sidebar open={openDrawer} closeDrawer={closeDrawer} />
          <Toolbar id="back-to-top-anchor" />
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default Navbar;
