"use client";
import { useEffect, useState, useRef } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
// import Select from 'react-select';
import * as Yup from "yup";
import { Formik } from "formik";
import tickcircle from "../../assets/images/tickcircle.png";
import { strengthColor, strengthIndicator } from "@/utils";
import { Input } from "@/components";
import axios from "axios";
import { API_URL } from "@/configuration";
import { useRouter } from "next/navigation";
import Image from "next/image";

const DineInForm = () => {
  const router = useRouter();
  const [level, setLevel] = useState();
  const [open, setOpen] = useState(false);
  const [id, setId] = useState();
  const [restaurants, setRestaurants] = useState();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [food, setFood] = useState();
  const [restaurant, setRestaurant] = useState();

  const handleClose = () => {
    setOpen(false);
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    setId(user?.id);
    axios.get(`${API_URL}/auth/getrestaurants`).then((res) => {
      setRestaurants(res?.data?.users);
    });
  }, []);

  // const handleSelectChange = selectedOptions => {
  //   setSelectedOptions(selectedOptions);
  // };
  const handleSelectChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  console.log({ food });

  return (
    <>
      <Formik
        initialValues={{
          restaurant: "",
          menu_items: "",
          persons: "",
          order_date: "",
          order_time: "",
        }}
        validationSchema={Yup.object().shape({})}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          console.log({ values });
          try {
            await axios
              .post(`${API_URL}/dineorder`, { ...values, restaurant: restaurant, menu_items: selectedOptions, auth_user_id: id })
              .then((res) => {
                // router.push("/dashboard")
                // localStorage.setItem("user", JSON?.stringify(res?.data?.user));
                // localStorage.setItem(
                //   "profile",
                //   JSON?.stringify(res?.data?.profile)
                // );
                // localStorage.setItem("token", res?.data?.token);
                setStatus({ success: false });
                setSubmitting(false);
                setOpen(true);
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
                  <InputLabel id="demo-multiple-name-label">
                    Select Restaurant
                  </InputLabel>
                  <Select
                    id="add-item-id"
                    value={restaurant}
                    name="restaurant"
                    label="Restaurant"
                    sx={{ borderRadius: "8px", backgroundColor: "#f9b686" }}
                    onChange={(e) => {
                      // handleChange(e);
                      setRestaurant(e.target.value.name)
                      axios
                        .get(`${API_URL}/menuitem/restaurant/${e.target.value.id}`)
                        .then((res) => {
                          console.log(res?.data)
                          const formattedOptions = res?.data?.items?.map((item) => ({
                            value: item.id,
                            label: item.name,
                          }));
                          setFood(formattedOptions);
                        });
                    }}
                  >
                    {restaurants?.map((item) => (
                      <MenuItem key={item?.id} value={item}>
                        {item?.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {touched.restaurant && errors.restaurant && (
                    <FormHelperText error id="helper-text-name-signup">
                      {errors.restaurant}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel id="demo-multiple-name-label">
                    Select Food Menu
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={selectedOptions}
                    onChange={handleSelectChange}
                    input={<OutlinedInput label="Name" />}
                    sx={{ borderRadius: "8px", backgroundColor: "#f9b686" }}
                  >
                    {food?.map((item) => (
                      <MenuItem
                        key={item?.value}
                        value={item?.label}
                        // style={getStyles(item, personName, theme)}
                      >
                        {item?.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {touched.contactNumber && errors.contactNumber && (
                    <FormHelperText error id="helper-text-email-signup">
                      {errors.contactNumber}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <Input
                    labelHtml="persons"
                    label="No of People*"
                    fullWidth
                    error={Boolean(touched.persons && errors.persons)}
                    id="persons"
                    type="persons"
                    value={values.persons}
                    name="persons"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="No of People"
                  />
                  {touched.persons && errors.persons && (
                    <FormHelperText error id="helper-text-person-signup">
                      {errors.persons}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <Input
                    label="Order Date*"
                    labelHtml="order_date"
                    fullWidth
                    error={Boolean(touched.order_date && errors.order_date)}
                    id="order_date"
                    type="date"
                    value={values.order_date}
                    name="order_date"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="******"
                  />
                  {touched.order_date && touched.order_date && (
                    <FormHelperText error id="helper-text-order_date">
                      {touched.order_date}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <Input
                    label="Order Time*"
                    labelHtml="order_time"
                    fullWidth
                    error={Boolean(touched.order_time && errors.order_time)}
                    id="order_time"
                    type={"time"}
                    value={values.order_time}
                    name="order_time"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="******"
                  />
                  {touched.order_time && errors.order_time && (
                    <FormHelperText error id="order_time">
                      {errors.order_time}
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
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: "custom.orange",
                    color: "white",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    boxShadow: "none",
                  }}
                >
                  Place Order
                </Button>
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
                      THANK YOU FOR ORDERING
                    </Typography>
                    {/* <Typography variant="h3" mt="21px" textAlign={"center"}>
                      For Registeration
                    </Typography> */}
                    <Typography variant="h5" mt="21px" fontWeight={400}>
                      Your Dine in Order is placed successfully.
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

export default DineInForm;
