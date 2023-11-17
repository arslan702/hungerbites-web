/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
"use client";
import { useState } from 'react';
import { Grid, Button, Box } from '@mui/material';
import MainCard from '@/ui-component/cards/MainCard';
import AddOffer from './modals/AddReview';
import FeaturedProducts from './FeaturedProducts';

const Rating = () => {
    const [open, setOpen] = useState(false);
    const [currentRowData, setCurrentRowData] = useState({});
    const [reviewsList, setReviewsList] = useState([]);

    const handleAddOffer = () => {
        setOpen(true);
        setCurrentRowData([]);
    };

    // const handleDeleteOffer = () => {};
    return (
        <>
            <MainCard
                title="Reviews List"
                secondary={
                    <Box display={'flex'} gap={3}>
                        <Button variant="contained" color="brightBlue" sx={{ color: 'white', borderRadius: 2 }} onClick={handleAddOffer}>
                            Add Review
                        </Button>
                    </Box>
                }
            >
                <Grid container spacing={3}>
                    <Grid item xs={12} mt={5}>
                        <Grid container spacing={3} direction="column">
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <FeaturedProducts
                                        setCurrentRowData={setCurrentRowData}
                                        reviewsList={reviewsList}
                                        setReviewsList={setReviewsList}
                                        setOpenEdit={setOpen}
                                    />
                                </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </MainCard>
            <AddOffer 
                currentRowData={currentRowData}
                setReviewsList={setReviewsList} 
                open={open} 
                setOpen={setOpen} 
            />
        </>
    );
};

export default Rating;
