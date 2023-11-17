"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Grid, Stack, Typography, Button } from "@mui/material";
import AuthWrapper from "./AuthWrapper";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AuthRestaurant from "./auth-forms/AuthRestaurant";

const RegisterRestaurant = () => {
  const router = useRouter();
  const handelBackClick = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Button
          variant="text"
          startIcon={<ArrowBackIosIcon />}
          onClick={handelBackClick}
        >
          Back
        </Button>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            sx={{ mb: { xs: -0.5, sm: 0.5 } }}
          >
            <Typography variant="h4">Sign up</Typography>
            <Link href="/login" style={{ textDecoration: "none" }}>
              <Typography
                variant="body2"
                sx={{ color: "custom.orange" }}
                color="primary"
              >
                Already have an account?
              </Typography>
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthRestaurant />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default RegisterRestaurant;
