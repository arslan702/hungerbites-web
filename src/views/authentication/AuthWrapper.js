"use client";
import { Box, Grid } from "@mui/material";
import AuthCard from "./AuthCard";
import styles from './auth.module.css';

const AuthWrapper = ({ children }) => (
  <Box className={styles.register} sx={{ minHeight: "100vh" }}>
    <Grid container direction="column" justifyContent="flex-end">
      <Grid item xs={12}>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight: { xs: "calc(100vh - 134px)", md: "calc(100vh - 112px)" },
          }}
        >
          <Grid item>
            <AuthCard>{children}</AuthCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
);

export default AuthWrapper;
