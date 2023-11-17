/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
"use client";
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
    Select,
    MenuItem,
    useTheme,
    Rating
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../configuration';

const AddReview = ({ open, setOpen, setReviewsList, currentRowData }) => {
    const theme = useTheme();
    const [productsList, setProductsList] = useState([]);
    const [id, setId] = useState('');
    const handleClose = () => {
        setOpen(false);
    };
    let newArray= []
    useEffect(() => {
        const user = JSON?.parse(localStorage.getItem('user'))
        setId(user?.id);
        axios.get(`${API_URL}/order/user/${user?.id}`)
        .then((res) => {
            console.log('here---  ',res.data)
         fetchOrderItems(res?.data)
    })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log({productsList})

    const fetchOrderItems = (orders) => {
        // Loop through each order and fetch its associated order items
        orders.forEach((order) => {
          axios.get(`${API_URL}/orderitem/order/${order.id}`)
            .then((response) => {
            //   setProductsList((prevOrderItems) => ({
            //     ...prevOrderItems,
            //     [order.id]: response.data,
            //   }));
            console.log('res-----  ',response.data)
            response.data.map((item) => (
                fetchItems(item?.item_id)
            ));
            
            })
            .catch((error) => {
              console.error('Error fetching order items:', error);
            });
        });
      };

      const fetchItems = (id) => {
        axios.get(`${API_URL}/menuitem/${id}`)
          .then((response) => {
            setProductsList([...productsList, response?.data]);
            newArray.push(response?.data)
          })
          .catch((error) => {
            console.error('Error fetching items:', error);
          });
      };
      console.log({newArray})
    return (
        <Dialog maxWidth="md" open={open} onClose={handleClose} fullWidth>
            <Box p={2} mt={2}>
                <Typography variant="h2">Add Review</Typography>
            </Box>
            <DialogContent>
                <Formik
                    initialValues={{
                        item_id: currentRowData?.item_id,
                        rating: currentRowData?.rating,
                        review_text: currentRowData?.review_text,
                        submit: null
                    }}
                    validationSchema={Yup.object().shape({
                        item_id: Yup.number().required('Item is required'),
                        rating: Yup.number().required('Rating is required'),
                        // review_text: Yup.string().required('Review is required'),
                    })}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        console.log({values})
                        try {
                            if(currentRowData?.id) {
                                await axios.put(`${API_URL}/review/${currentRowData?.id}`, { ...currentRowData, ...values})
                            } else {
                                await axios.post(`${API_URL}/review`, {...values, auth_user_id: id})
                            }
                            await axios.get(`${API_URL}/review`)
                            .then((res) => {
                                setReviewsList(res?.data)
                            })
                            // if (scriptedRef.current) {
                                setStatus({ success: true });
                                setSubmitting(false);
                                setOpen(false)
                                // login(values);
                            // }
                        } catch (err) {
                            console.error(err);
                            // if (scriptedRef.current) {
                                setStatus({ success: false });
                                setErrors({ submit: err.message });
                                setSubmitting(false);
                            // }
                        }
                    }}
                >
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth error={Boolean(touched.item_id && errors.item_id)}>
                                        <InputLabel htmlFor="add-item-id">Food Item*</InputLabel>
                                        <Select
                                            id="add-item-id"
                                            value={values.item_id}
                                            name="item_id"
                                            label="Food Item"
                                            onChange={handleChange}
                                            // onBlur={handleBlur}
                                        >
                                            {productsList?.map((item) => (
                                                <MenuItem key={item?.id} value={item?.id}>{item?.name}</MenuItem>
                                            ))}
                                        </Select>
                                        {touched.item_id && errors.item_id && <FormHelperText error>{errors.item_id}</FormHelperText>}
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth error={Boolean(touched.review_text && errors.review_text)}>
                                        <InputLabel htmlFor="add-review-text">Review Text*</InputLabel>
                                        <OutlinedInput
                                            id="add-review-text"
                                            value={values?.review_text}
                                            name="review_text"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            label="Review Text"
                                            // inputProps={{}}
                                        />
                                        {touched.review_text && errors.review_text && <FormHelperText error>{errors.review_text}</FormHelperText>}
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth error={Boolean(touched.rating && errors.rating)}>
                                        <InputLabel htmlFor="add-rating" sx={{marginTop: '10px'}}>Rating</InputLabel>
                                        <Rating
                                            name="rating"
                                            value={values.rating}
                                            onChange={handleChange}
                                        />
                                        {touched.rating && errors.rating && <FormHelperText error>{errors.rating}</FormHelperText>}
                                    </FormControl>
                                </Grid>
                                {errors.submit && (
                                    <Box sx={{ mt: 3 }}>
                                        <FormHelperText error>{errors.submit}</FormHelperText>
                                    </Box>
                                )}
                                <Grid container sx={{ py: 2, mt: 2 }} justifyContent="flex-end">
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
export default AddReview;
