import React from 'react'
import { Grid, Box, Typography, Card } from "@mui/material";
import Image from "next/image";
import styles from './gallery.module.css'
import img1 from '../../../assets/images/gallery_01.jpg'
import img2 from '../../../assets/images/gallery_02.jpg'
import img3 from '../../../assets/images/gallery_03.jpg'
import img4 from '../../../assets/images/gallery_04.jpg'
import img5 from '../../../assets/images/gallery_05.jpg'
import img6 from '../../../assets/images/gallery_06.jpg'
import img7 from '../../../assets/images/gallery_07.jpg'
import img8 from '../../../assets/images/gallery_08.jpg'
import img9 from '../../../assets/images/gallery_09.jpg'
import img10 from '../../../assets/images/gallery_10.jpg'

export default function Gallery() {
    return (
        <Box>
            <Box className={styles.gallery} >
                <center>
                    <Box>
                        <Typography className={styles.galleryhead}><i>Our Gallery</i></Typography>
                        <br />
                        <br />
                        <Typography>Are you feeling hungry?</Typography>
                    </Box>
                    <br />
                    <Grid container >
                        <Grid item xs={12} sm={12} md={8} lg={8} >
                            <Card className={styles.card} >
                                <Image src={img1} className={styles.img} />
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Card className={styles.card} >
                                <Image src={img2} className={styles.img} />
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Card className={styles.card} >
                                <Image src={img3} className={styles.img} />
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Card className={styles.card} >
                                <Image src={img4} className={styles.img} />
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Card className={styles.card} >
                                <Image src={img5} className={styles.img}/>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Card className={styles.card} >
                                <Image src={img6} className={styles.img}/>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} lg={8}>
                            <Card className={styles.card} >
                                <Image src={img7} className={styles.img}/>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Card className={styles.card} >
                                <Image src={img8} className={styles.img}/>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Card className={styles.card} >
                                <Image src={img9} className={styles.img} />
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Card className={styles.card} >
                                <Image src={img10} className={styles.img} />
                            </Card>
                        </Grid>
                    </Grid>
                </center>
            </Box>
        </Box>
    )
}
