/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Dialog,
  DialogContent,
  Button,
  Typography,
  Grid,
  InputLabel,
  OutlinedInput,
  FormControl,
  FormHelperText,
  Box,
  useTheme,
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import _ from 'lodash';

import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '@/configuration';

const EditProfile = ({ open, setOpen, currentRowData, setProfile }) => {
  const theme = useTheme();
  const [user, setUser] = useState([]);
  const handleClose = () => {
      setOpen(false);
  };

  useEffect(() => {
    const authUser = JSON?.parse(localStorage.getItem("user"));
    setUser(authUser);
  }, []);

  async function fetchProfile() {
      axios.get(`${API_URL}/user-profile/user/${user?.id}`)
      .then((res) => {
        setProfile(res?.data);
      })
  }

  console.log({ currentRowData });

  return (
      <Dialog maxWidth="md" open={open} fullWidth>
          <Box p={2} mt={2}>
              <Typography variant="h2">Edit Profile</Typography>
          </Box>
          <DialogContent>
              <Formik
                  initialValues={{
                      name: currentRowData?.name,
                      phone_number: currentRowData?.phone_number,
                      address: currentRowData?.address,
                      nic_number: currentRowData?.nic_number,
                      submit: null
                  }}
                  validationSchema={Yup.object().shape({
                      name: Yup.string().max(255).required('Name is required'),
                      phone_number: Yup.string().max(11).required('phone number is required'),
                      address: Yup.string().required('Address is required'),
                      nic_number: Yup.string().max(13).required('nic number is required'),
                  })}
                  onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                      try {
                          if (currentRowData?.id) {
                              axios.put(`${API_URL}/user-profile/${currentRowData?.id}`, { ...currentRowData, ...values }).then(() => {
                                fetchProfile();
                              })
                          }
                          setStatus({ success: true });
                          setSubmitting(false);
                          setOpen(false);
                      } catch (err) {
                          console.error(err);
                              setStatus({ success: false });
                              setErrors({ submit: err.message });
                              setSubmitting(false);
                      }
                  }}
              >
                  {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                      <form noValidate onSubmit={handleSubmit}>
                          <Grid container spacing={3}>
                              <Grid item xs={12} sm={6}>
                                  <FormControl fullWidth error={Boolean(touched.name && errors.name)}>
                                      <InputLabel htmlFor="add-product-name">Name*</InputLabel>
                                      <OutlinedInput
                                          id="add-product-name"
                                          value={values.name}
                                          name="name"
                                          onBlur={handleBlur}
                                          onChange={handleChange}
                                          label="Name"
                                          inputProps={{}}
                                      />
                                      {touched.name && errors.name && <FormHelperText error>{errors.name}</FormHelperText>}
                                  </FormControl>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                  <FormControl fullWidth error={Boolean(touched.phone_number && errors.phone_number)}>
                                      <InputLabel htmlFor="phone_number">Phone Number*</InputLabel>
                                      <OutlinedInput
                                          id="phone_number"
                                          value={values.phone_number}
                                          name="phone_number"
                                          onBlur={handleBlur}
                                          onChange={handleChange}
                                          label="Phone Number"
                                          inputProps={{}}
                                      />
                                      {touched.phone_number && errors.phone_number && <FormHelperText error>{errors.phone_number}</FormHelperText>}
                                  </FormControl>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                  <FormControl fullWidth error={Boolean(touched.address && errors.address)}>
                                      <InputLabel htmlFor="address">Address*</InputLabel>
                                      <OutlinedInput
                                          id="address"
                                          value={values.address}
                                          name="address"
                                          onBlur={handleBlur}
                                          onChange={handleChange}
                                          label="Address"
                                          inputProps={{}}
                                      />
                                      {touched.address && errors.address && <FormHelperText error>{errors.address}</FormHelperText>}
                                  </FormControl>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                  <FormControl fullWidth error={Boolean(touched.nic_number && errors.nic_number)}>
                                      <InputLabel htmlFor="nic_number">Nic Number*</InputLabel>
                                      <OutlinedInput
                                          id="nic_number"
                                          value={values.nic_number}
                                          name="nic_number"
                                          onBlur={handleBlur}
                                          onChange={handleChange}
                                          label="Nic Number"
                                          inputProps={{}}
                                      />
                                      {touched.nic_number && errors.nic_number && <FormHelperText error>{errors.nic_number}</FormHelperText>}
                                  </FormControl>
                              </Grid>
                              {errors.submit && (
                                  <Box sx={{ mt: 3 }}>
                                      <FormHelperText error>{errors.submit}</FormHelperText>
                                  </Box>
                              )}
                              <Grid container sx={{ py: 2, mt: 2 }} justifyContent="flex-end">
                                  <Grid item xs={2} mr={2}>
                                      <Button
                                          onClick={handleClose}
                                          disableElevation
                                          disabled={isSubmitting}
                                          fullWidth
                                          size="large"
                                          type="submit"
                                          variant="contained"
                                          color="primary"
                                          sx={{ backgroundColor: '#9B2915' }}
                                      >
                                          Cancel
                                      </Button>
                                  </Grid>
                                  <Grid item xs={2}>
                                      <Button
                                          disableElevation
                                          disabled={isSubmitting}
                                          fullWidth
                                          size="large"
                                          type="submit"
                                          variant="contained"
                                          color="primary"
                                      >
                                          Save
                                      </Button>
                                  </Grid>
                              </Grid>
                          </Grid>
                      </form>
                  )}
              </Formik>
          </DialogContent>
      </Dialog>
  );
};
export default EditProfile;
