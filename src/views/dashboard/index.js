/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
"use client";
import { useState } from 'react';
import { Grid, Box } from '@mui/material';
import Board from './Board';
import EditShipping from './modal/EditShipping';
import EditProfile from './modal/EditProfile';

const DashBoard = () => {
    const [open, setOpen] = useState(false);
    const [currentRowData, setCurrentRowData] = useState({});
    const [openProfile, setOpenProfile] = useState(false);
    const [profile, setProfile] = useState([]);
    const [shipping, setShipping] = useState([]);

    return (
        <>
            <>
                <Grid container spacing={3}>
                    <Grid item xs={12} mt={5}>
                        <Grid container spacing={3} direction="column">
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Board
                                        setCurrentRowData={setCurrentRowData}
                                        profile={profile}
                                        setProfile={setProfile}
                                        shipping={shipping}
                                        setShipping={setShipping}
                                        setOpen={setOpen}
                                        setOpenProfile={setOpenProfile}
                                    />
                                </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </>
            <EditProfile
                currentRowData={currentRowData}
                setProfile={setProfile}
                open={openProfile}
                setOpen={setOpenProfile}
            />
        </>
    );
};

export default DashBoard;
