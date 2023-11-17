import React from 'react'
import { Grid, Box, Typography, Card } from "@mui/material";
import styles from './special.module.css'
import { Container } from 'postcss';
import Image from "next/image";
import img from '../../../assets/images/2.jpg';
import img1 from '../../../assets/images/3.jpg';
import img2 from '../../../assets/images/4.jpg';
import Link from 'next/link';


export default function Special() {
    return (
        <Box>
            <Box className={styles.special} >
            <h1>Hello</h1>
                <Box>
                    <center>
                        <Typography className={styles.text} ><i>Specials</i></Typography>
                    </center>
                </Box>
                <center>
                    <Grid container className={styles.cardImg} >
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Card className={styles.card}>
                                <Image src={img} alt='img' className={styles.img} />
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Card className={styles.card}>
                                <Image src={img1} alt='img' className={styles.img} />
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Card className={styles.card}>
                                <Image src={img2} alt='img' className={styles.img} />
                            </Card>
                        </Grid>
                    </Grid>
                    <br />
                    <Box>
                        <Link href={'/registerRestaurant'} className={styles.btns}><b>Register Restaurant</b></Link>
                    </Box>
                </center>
            </Box>
        </Box>
    )
}
