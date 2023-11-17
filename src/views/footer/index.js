import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { hideLayoutRoutes } from "@/utils";
import { useSelectedLayoutSegment, useRouter } from "next/navigation";
import styles from './footer.module.css';

export default function Footer() {
    let segment = useSelectedLayoutSegment();
    const isLayoutNeeded = !hideLayoutRoutes.includes(segment);
    return (
        <>
        {isLayoutNeeded ? (
        <Box>
            <Box className={styles.footer} >
                {/* <Box>
                    <center>
                        <Image src={logo} className='logo' />
                        <h3>Hunger Bites</h3>
                    </center>
                </Box> */}
                {/* <br />
                <br /> */}
                <Container>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={3} lg={3} >
                            <Typography className={styles.head}>ABOUT US</Typography>
                            <br />
                            <Typography className={styles.text} >A contemporary restaurant, with a menu built around fresh, vibrant ingredients. Serving a selection of wholesome dishes inspired by the Mediterranean.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} >
                            <Typography className={styles.head}>SOCIAL NETWORKS</Typography>
                            <br />
                            <div style={{display: 'flex'}}>
                            <Typography className={styles.text2}><FacebookIcon/></Typography>
                            <Typography className={styles.text2} style={{marginLeft: '10px', marginTop: '5px'}}>hungerbites@facebook.com</Typography>
                            </div>
                            <br/>
                            <div style={{display: 'flex'}}>
                            <Typography className={styles.text2}><TwitterIcon/></Typography>
                            <Typography className={styles.text2} style={{marginLeft: '10px', marginTop: '5px'}}>hungerbites@twitter.com</Typography>
                            </div>
                            <br/>
                            <div style={{display: 'flex'}}>
                            <Typography className={styles.text2}><InstagramIcon/></Typography>
                            <Typography className={styles.text2} style={{marginLeft: '10px', marginTop: '5px'}}>hungerbites@twitter.com</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} >
                            <Typography className={styles.head}>CONTACT US</Typography>
                            <br />
                            <Typography className={styles.text2} >D 141, Block 4 ,Clifton Karachi, Pakistan 75600</Typography>
                            <br/>
                            <Typography className={styles.text2} >D 141, Block 4 ,Clifton Karachi, Pakistan 75600</Typography>
                            <br/>
                            <Typography className={styles.text2} >D 141, Block 4 ,Clifton Karachi, Pakistan 75600</Typography>
                            <br/>
                            <Typography className={styles.text2} >D 141, Block 4 ,Clifton Karachi, Pakistan 75600</Typography>
                            <br/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} >
                            <Typography className={styles.head}>OPENING HOURS</Typography>
                            <br />
                            <Typography className={styles.text2}>Karachi</Typography>
                            <Typography className={styles.text3}>03:00 PM - 09:45 PM</Typography>
                            <br/>
                            <Typography className={styles.text2}>Lahore</Typography>
                            <Typography className={styles.text3}>03:00 PM - 09:45 PM</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
        ) : (
            <></>
        )}
        </>
    )
}
