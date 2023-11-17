"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import tickcircle from "../../../assets/images/tickcircle.png";
import smallcircle from "../../../assets/images/smallcircle.png";
import { strengthColor, strengthIndicator } from "@/utils";
import { Input } from "@/components";
import { FiCamera } from "react-icons/fi";
import axios from "axios";
import { API_URL } from "@/configuration";
import { useRouter } from "next/navigation";
import Image from "next/image";

const AuthRegister = () => {
  const router = useRouter();
  const [area, setArea] = useState([]);
  const [level, setLevel] = useState();
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [frontFile, setFrontFile] = useState(null);
  const [file, setFile] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleFrontFileChange = (e) => {
    setFrontFile(e.target.files[0]);
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword("");
    axios
      .get(`${API_URL}/area`)
      .then((res) => setArea(res?.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmpassword: "",
        }}
        validationSchema={Yup.object().shape({
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          console.log({ values });
          try {
            await axios
              .post(`${API_URL}/auth/register`, values)
              .then((res) => {
                router.push("/login")
                setStatus({ success: false });
                setSubmitting(false);
                // setOpen(true)
              });
          } catch (err) {
            console.log("Called");
            setStatus({ success: false });
            setErrors({ submit: err.message });
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
                    id="name-login"
                    type="text"
                    label="Name*"
                    labelHtml="name-signup"
                    value={values.name}
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John"
                    fullWidth
                    error={Boolean(touched.name && errors.name)}
                  />
                  {touched.name && errors.name && (
                    <FormHelperText error id="helper-text-name-signup">
                      {errors.name}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <Input
                    labelHtml="email-signup"
                    label="Email Address*"
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="demo@company.com"
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error id="helper-text-email-signup">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <Input
                    label="Password*"
                    labelHtml="password-signup"
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="password-signup"
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
                    placeholder="******"
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error id="helper-text-password-signup">
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <Input
                    label="Confirm Password*"
                    labelHtml="confirm-password-signup"
                    fullWidth
                    error={Boolean(
                      touched.confirmpassword && errors.confirmpassword
                    )}
                    id="confirmpassword-signup"
                    type={showPassword ? "text" : "password"}
                    value={values.confirmpassword}
                    name="confirmpassword"
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
                    placeholder="******"
                  />
                  {touched.confirmpassword && errors.confirmpassword && (
                    <FormHelperText
                      error
                      id="helper-text-confirmpassword-signup"
                    >
                      {errors.confirmpassword}
                    </FormHelperText>
                  )}
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
                      textTransform: "capitalize",
                      boxShadow: "none",
                      color: 'white'
                    }}
                  >
                    Register
                  </Button>
                {/* </AnimateButton> */}
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogContent>
          <Grid container direction={{ xs: "column", md: "row" }} spacing={2}>
            <Grid item xs>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ width: "100%", height: "420px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      marginTop: "43px",
                    }}
                  >
                    <Image
                      src={tickcircle}
                      width={67}
                      height={67}
                      alt="circle"
                    />
                    <Typography variant="h2" color="custom.orange" mt="63px">
                      THANK YOU
                    </Typography>
                    <Typography variant="h3" mt="21px" textAlign={"center"}>
                      For Registeration
                    </Typography>
                    <Typography variant="h5" mt="21px" fontWeight={400}>
                      We will inform you after reviewing your application with
                      in 3 to 4 working days
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AuthRegister;
