"use client";
import React from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Input } from "@/components";
import axios from "axios";
import { API_URL } from "../../../configuration";

const AuthLogin = () => {
  // const router = useRouter();
  const [checked, setChecked] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
          password: Yup.string().max(255).required("Password is required"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            // await signIn("credentials", {
            //   redirect: false,
            //   ...values,
            // });
            await axios.post(`${API_URL}/auth/login`, values)
            .then((res) => {
              if(res?.data?.status === 'inactive') {
                alert('Your application is under review. You will be activated soon.')
              } else if(res?.data?.user?.role === 'restaurant') {
                localStorage.setItem('user', JSON?.stringify(res?.data?.user))
                localStorage.setItem('token', res?.data?.token)
                window.location.href = '/dashboard'
                setStatus({ success: false });
                setSubmitting(false);
              } else {
                localStorage.setItem('user', JSON?.stringify(res?.data?.user))
                localStorage.setItem('token', res?.data?.token)
                window.location.href = '/products'
                setStatus({ success: false });
                setSubmitting(false);
              }
              // router.back();
              // localStorage.setItem('user', JSON?.stringify(res?.data?.user))
              // localStorage.setItem('token', res?.data?.token)
              // window.location.href = '/products'
              // setStatus({ success: false });
              // setSubmitting(false);
            })
          } catch (err) {
            console.log({err})
            setStatus({ success: false });
            setErrors({ submit: err?.response?.data?.error });
            setSubmitting(false);
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <Input
                    label="Email Address"
                    labelHtml={"email-login"}
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-email-login"
                    >
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <Input
                    label="Password"
                    labelHtml={"password-login"}
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="-password-login"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? (
                            <AiOutlineEye />
                          ) : (
                            <AiOutlineEyeInvisible />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="Enter password"
                  />
                  {touched.password && errors.password && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} sx={{ mt: -1 }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        name="checked"
                        color="primary"
                        size="small"
                      />
                    }
                    label={
                      <Typography variant="subtitle2">
                        Keep me sign in
                      </Typography>
                    }
                  />
                  <Typography
                    variant="subtitle1"
                    color="text.primary"
                    sx={{ cursor: "pointer" }}
                  >
                    Forgot Password?
                  </Typography>
                </Stack>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                {/* <AnimateButton> */}
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    sx={{
                      bgcolor: "custom.orange",
                      fontWeight: "bold",
                      color: 'white',
                      textTransform: "capitalize",
                      boxShadow: "none",
                    }}
                  >
                    Login
                  </Button>
                {/* </AnimateButton> */}
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthLogin;
