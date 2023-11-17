import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Image from "next/image";
import styles from './order.module.css'
import img1 from '../../../assets/images/gallery_01.jpg'
import { Box, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import img from '../../../assets/images/soup.jpg';
import img2 from '../../../assets/images/gallery_06.jpg'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// import LanguageIcon from '@mui/icons-material/Language';
import PaymentsIcon from '@mui/icons-material/Payments';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [value, setValue] = React.useState(0);
  const router = useRouter;

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDetail = (e) => {
    e.preventDefault();
    router.push('/products')
  }

  return (
    <div>
      <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
      {/* <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Box className={styles.text} >
          {/* <Typography>Cafe Aylanto</Typography> */}
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className={styles.tab}  >
                <Tab label="Menu" className={styles.tabhead} {...a11yProps(0)} />
                <Tab label="Info" className={styles.tabhead} {...a11yProps(1)} />
                <Tab label="Cart" className={styles.tabhead} {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Grid container spacing={3}>
                <Image src={img1} className={styles.img} />
                <Typography className={styles.title} ><b>SOUPS</b></Typography>
                <Grid container >
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box className={styles.hr} />
                    <Box className={styles.menu} >
                      <Box className={styles.item} >
                        <Typography><b>Cream of mashroom</b></Typography>
                        <Typography>Diced chicken</Typography>
                      </Box>
                      <Box className={styles.price} >
                        <Typography>900</Typography>
                      </Box>
                    </Box>
                    <Box className={styles.hr} />
                    <Box className={styles.menu} >
                      <Box className={styles.item} >
                        <Typography><b>Roasted of tomatto</b></Typography>
                        <Typography>Puree of plump</Typography>
                      </Box>
                      <Box className={styles.price} >
                        <Typography>700</Typography>
                      </Box>
                    </Box>
                    <Box className={styles.hr} />
                    <Box className={styles.menu} >
                      <Box className={styles.item} >
                        <Typography><b>Broccoli soup(dine)</b></Typography>
                        <Typography>With goat cheese</Typography>
                      </Box>
                      <Box className={styles.price} >
                        <Typography>400</Typography>
                      </Box>
                    </Box>
                    <Box className={styles.hr} />
                    <Box className={styles.menu} >
                      <Box className={styles.item} >
                        <Typography><b>French onion soup</b></Typography>
                        <Typography>beef broth</Typography>
                      </Box>
                      <Box className={styles.price} >
                        <Typography>500</Typography>
                      </Box>
                    </Box>
                    <Box className={styles.hr} />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Image src={img} className={styles.imge} />
                  </Grid>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid container spacing={3}>
                <Image src={img2} className={styles.img} />
                <br />
                <Typography className={styles.info} >For reliable on screen review of your order status, in real-time, your data may be saved on this device by using cookies. Please read our Cookie Policy and change your settings at any time.</Typography>
                <br />
                <Grid item xs={12} sm={12} md={6} lg={6} >
                  <Box className={styles.detail} >
                    <Typography><LocalShippingIcon className={styles.icon} /></Typography>
                    <Typography className={styles.icondetails} > <b>Delivery fees</b> </Typography>
                  </Box>
                  <br />
                  <Typography className={styles.infodetail}>Fee Rs 250.00 </Typography>
                  <br />
                  <br />
                  <Box className={styles.detail} >
                    <Typography><LocalShippingIcon className={styles.icon} /></Typography>
                    <Typography className={styles.icondetails} > <b>Delivery</b> </Typography>
                  </Box>
                  <br />
                  <Typography className={styles.infodetail}>Same as opening hours </Typography>
                  <br />
                  <Box className={styles.detail} >
                    <Typography><LocationOnIcon className={styles.icon} /></Typography>
                    <Typography className={styles.icondetails} > <b>Address</b> </Typography>
                  </Box>
                  <br />
                  <Typography className={styles.infodetail} >12C/1 , MM Alam Road Gulberg 3, Lahore 54000</Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6} >
                  <Box className={styles.detail} >
                    <Typography><AvTimerIcon className={styles.icon} /></Typography>
                    <Typography className={styles.icondetails} > <b>Opening hours</b> </Typography>
                  </Box>
                  <br />
                  <Typography className={styles.infodetail}> Monday - Friday   12:30 to 01:00AM </Typography>
                  <Typography className={styles.infodetail}>Saturday-Sunday 12:30 to 02:00PM </Typography>
                  <br />
                  <Box className={styles.detail} >
                    <Typography><ShoppingBasketIcon className={styles.icon} /></Typography>
                    <Typography className={styles.icondetails} > <b>Pickup</b> </Typography>
                  </Box>
                  <br />
                  <Typography className={styles.infodetail}>Same as opening hours </Typography>
                  <br />
                  <Box className={styles.detail} >
                    <Typography><PaymentsIcon className={styles.icon} /></Typography>
                    <Typography className={styles.icondetails} > <b>Payment method</b> </Typography>
                  </Box>
                  <br />
                  <Typography className={styles.infodetail} >Cash(Pickup, Delivery) </Typography>
                  <Typography className={styles.infodetail} >Card at pickup point </Typography>
                  <br />
                  <Box className={styles.detail} >
                    <Typography><LocalPhoneIcon className={styles.icon} /></Typography>
                    <Typography className={styles.icondetails} > <b>Phone</b> </Typography>
                  </Box> <br />
                  <Typography className={styles.infodetail} >+123456789 </Typography>
                  <Typography className={styles.infodetail} >+123456789 </Typography>

                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Grid container spacing={3}>
                <Grid container >
                  <Grid item xs={12} sm={12} md={6} lg={6} >
                    <Box className={styles.contact} >
                      <Typography className={styles.contacts} > <b>Contact</b> </Typography> <br />
                      <center>
                        <form className={styles.form} >
                          <input type='text' name='name' id='name' placeholder='Name' className={styles.input} required ></input>
                          <input type='email' name='name' id='name' placeholder='Email' className={styles.input} ></input>
                          <input type='number' name='name' id='name' placeholder='Phone' className={styles.input} required ></input>
                          <Typography className={styles.terms} >You agree to be remembered on this device and to receive money-off coupons & exclusive offers. </Typography>
                          <button className={styles.btn} >Save</button>
                        </form>
                      </center>
                      <Box className={styles.order} >
                        <Typography className={styles.ordering} ><b>Ordering Method</b></Typography>
                        <input type="checkbox" name="" id="" /> <span className={styles.check}>PickUp</span> <br />
                        <input type="checkbox" name="" id="" /> <span className={styles.check}>Delivery</span> <br />
                        <center>
                          <input type='name' class='adress' id='adress' placeholder='Add Your Adress' className={styles.adres} />
                          <button className={styles.btns} >Save</button>
                        </center>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={12} md={6} lg={6} >
                    <Box className={styles.cart} >
                      <Box className={styles.cartdetails} >
                        <Box className={styles.qty}>
                          <Typography>Qty</Typography>
                          <Typography className={styles.item} >Item</Typography>
                        </Box>
                        <Box className={styles.price}>
                          <Typography>Price</Typography>
                        </Box>
                      </Box>
                      <Box className={styles.cartdetail} >
                        <Box className={styles.qty}>
                          <Typography>1x</Typography>
                          <Typography className={styles.item} >Pizza</Typography>
                        </Box>
                        <Box className={styles.price}>
                          <Typography>1400/-</Typography>
                        </Box>
                      </Box>
                      <Box className={styles.cartdetail} >
                        <Box className={styles.qty}>
                          <Typography>Sub total</Typography>
                        </Box>
                        <Box className={styles.price}>
                          <Typography>1400/-</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>

                </Grid>
              </Grid>
            </TabPanel>
          </Box>


        </Box>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}