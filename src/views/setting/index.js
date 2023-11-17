"use client";
import {
  Alert,
  Grid,
  Card,
  CardHeader,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Stack,
  Divider,
  Box,
  TextField,
  Button,
  DialogActions,
} from "@mui/material";
import MainCard from "@/ui-component/cards/MainCard";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { gridSpacing } from "@/utils";
import axios from "axios";
import { API_URL } from "@/configuration";
import { Formik, Form, Field } from "formik";
import PrimaryButton from "../../components/PrimaryButton";

const SettingsView = () => {
  const [user, setUser] = useState([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const authUser = JSON?.parse(localStorage.getItem("user"));
    setUser(authUser);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MainCard title={`My Settings`} darkTitle>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={6} md={6}>
            <Card>
              <CardHeader
                disableTypography
                title={<Typography variant="h3">Change Password</Typography>}
              />
              <Formik
                initialValues={{
                  password: "",
                  confirmPassword: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.password) {
                    errors.password = "Required";
                  }
                  if (!values.confirmPassword) {
                    errors.confirmPassword = "Required";
                  } else if (values.confirmPassword !== values.password) {
                    errors.confirmPassword = "Passwords do not match";
                  }
                  return errors;
                }}
                onSubmit={(values) => {
                  console.log(values);
                  axios
                    .put(`${API_URL}/auth/resetpassword/${user?.id}`, values)
                    .then((res) => {
                      setMessage("Password reset successfully");
                      setOpen(true);
                    });
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Field
                        name="password"
                        label="New Password"
                        required
                        as={TextField}
                        size="small"
                        sx={{
                          width: "90%",
                          borderRadius: "10px",
                          margin: "15px",
                        }}
                      />
                      {errors.password && touched.password && (
                        <div>{errors.password}</div>
                      )}
                      <Field
                        name="confirmPassword"
                        label="Confirm Password"
                        required
                        as={TextField}
                        size="small"
                        sx={{
                          width: "90%",
                          borderRadius: "10px",
                          margin: "15px",
                        }}
                      />
                      {errors.confirmPassword && touched.confirmPassword && (
                        <div>{errors.confirmPassword}</div>
                      )}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          marginRight: "7%",
                          marginBottom: "10px",
                        }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "custom.green",
                            fontWeight: "bold",
                            textTransform: "capitalize",
                            boxShadow: "none",
                          }}
                          type="submit"
                        >
                          Save
                        </Button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </Card>
          </Grid>
        </Grid>
      </MainCard>
      <Dialog open={open}>
      <Alert onClose={handleClose}>{message}</Alert>
      </Dialog>
      {/* <Dialog open={open} fullWidth maxWidth="sm">
        <DialogContent>
          <Grid container direction={{ xs: "column", md: "row" }} spacing={1}>
            <Grid item xs>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ width: "50%", height: "50px", backgroundColor: 'yellow' }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="h5" mt="21px" fontWeight={400}>
                      {message} password changes successfully
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
    <Button onClick={handleClose} variant="contained" color="primary">
      OK
    </Button>
  </DialogActions>
      </Dialog> */}
    </>
  );
};
export default SettingsView;
