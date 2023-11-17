import React from "react";
import styles from "./about.module.css";
import { Grid, Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import img from "../../../assets/images/about-inset.jpg";
import Image from "next/image";

export default function About() {
  return (
    <Box className={styles.about}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box className={styles.aboutheader}>
              {" "}
              <br />
              <Typography className={styles.head1}>About Us</Typography>
              <Typography className={styles.head2}>
                <b>IT STARTED, QUITE SIMPLY, LIKE THIS...</b>
              </Typography>{" "}
              <br />
              <Typography className={styles.head3}>
                A contemporary restaurant, with a menu built around fresh,
                vibrant ingredients. Serving a selection of wholesome dishes
                inspired by the Mediterranean.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box className={styles.aboutImg}>
              <Image src={img} className={styles.img} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
