"use client";
import { useEffect, useState, useRef } from "react";
import {
  Grid,
  Box,
  Typography,
  Stack,
  FormControl,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  ButtonGroup,
  IconButton,
  OutlinedInput,
} from "@mui/material";
import { Input } from "@/components";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
  LoadScript,
  StandaloneSearchBox,
} from '@react-google-maps/api'
import axios from "axios";
import NearMeIcon from '@mui/icons-material/NearMe';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import StripeCheckout from "react-stripe-checkout";
import Stripe from "stripe";
import { API_URL, GOOGLE_API_KEY } from "@/configuration";

const center = { lat: 31.5204, lng: 74.3587 }

const DetailCart = ({totalPrice, shippingAddress, cart, setShippingAddress, contact, setContact}) => {
  console.log({cart})
  const [paymentMethod, setPaymentMethod] = useState(1);
  const [clicktoPay, setClickToPay] = useState('');
  const [user, setUser] = useState('');
  const [open, setOpen] = useState(false);
  const handleChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  useEffect(() => {
    setUser(JSON?.parse(localStorage?.getItem('user')))
  },[])

  console.log({user})
  console.log({totalPrice})

  const handleClose = (value) => {
    setOpen(false);
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_API_KEY,
    libraries: ['places'],
  })

  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
  const [desAddress, setDesAddress] = useState('');
  const [originPlace, setOriginPlace] = useState({ lat: Number(cart[0]?.MenuItem?.UserAuthentication?.latitude), lng: Number(cart[0]?.MenuItem?.UserAuthentication?.longitude)})
  const [destinationPlace, setDestinationPlace] = useState({ lat: '', lng: ''})

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()

  if (!isLoaded) {
    return 'loading...'
  }

const handleDestinationChanged = () => { 
  const [ place ] = destiantionRef.current.getPlaces();
  if(place) { 
    setDestinationPlace({...destinationPlace, lat: place?.geometry?.location?.lat(), lng: place?.geometry.location.lng()})
    setDesAddress(place?.formatted_address)
      console.log(place.formatted_address)
      console.log(place.geometry.location.lat())
      console.log(place.geometry.location.lng())
  } 
}

  async function calculateRoute() {
    // if (!dakota || !frick) {
    //   return
    // }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originPlace,
      destination: destinationPlace,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    console.log({results})
    setDirectionsResponse(results)
    axios.put(`${API_URL}/auth/${cart[0]?.auth_user_id}`, {...cart[0]?.UserAuthentication, address: desAddress, latitude: destinationPlace?.lat, longitude: destinationPlace?.lng})
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }

  console.log({distance})
  console.log({duration})

  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destiantionRef.current.value = ''
  }

    const payNow = async (token) => {
    try {
      const response = await axios({
        url: `${API_URL}/api/payment`,
        method: "post",
        data: {
          amount: priceForStripe,
          token,
        },
      });
      if (response.status === 200) {
        alert("payment Successful! Now Please submit the details form.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePayNow = () => {
    window.open(clicktoPay, '_blank');
    handleClose();
  };

  const priceForStripe = totalPrice * 100;

  return (
    <Stack
      bgcolor={"custom.grayLight"}
      px={5}
      py={6}
      direction="column"
      spacing={5}
      height={'930px'}
    >
      <Box>
        <Typography
          variant="h4"
          color="custom.orange"
          fontWeight={"bold"}
          lineHeight="38px"
          textTransform="uppercase"
        >
          <Typography variant="h3" as="span" color={"inherit"}>
            P
          </Typography>
          ayment
          <Typography variant="h3" as="span" color={"inherit"}>
            &nbsp;M
          </Typography>
          ethod
        </Typography>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={paymentMethod}
            onChange={handleChange}
            sx={{ bgcolor: "#D9D9D9", borderRadius: "15px" }}
          >
            <MenuItem value={'Cash on Delivery'}>Cash on Delivery</MenuItem>
            <MenuItem value={'Online Payment'}>
                            <StripeCheckout
                  stripeKey="pk_test_51IqurQFZ6cVEIy9oCNN0C6EVHeyx4w0p5s4mmlWMO65Ewv32XXGGfg6LWyrnQaSQXfWEoAfzdvol7doKAxnxqNM800Bp5d531u"
                  // className={styles.submitbtn}
                  label="Bank Transfer"
                  billingAddress
                  shippingAddress
                  amount={priceForStripe}
                  description={`Your total is ${totalPrice}`}
                  token={payNow}
                />
                </MenuItem>
                {/* <Button onClick={handlePayment}>Pay Now</Button> */}
          </Select>
        </FormControl>
      </Box>
      <Box>
        <Typography
          variant="h4"
          color="custom.orange"
          fontWeight={"bold"}
          lineHeight="38px"
          textTransform="uppercase"
        >
          <Typography variant="h3" as="span" color={"inherit"}>
            D
          </Typography>
          elivery
          <Typography variant="h3" as="span" color={"inherit"}>
            &nbsp;A
          </Typography>
          ddress
        </Typography>
        <Box
      >
        <Stack spacing={2} justifyContent='space-between'>
          <Grid container spacing={3}>
          <Grid item xs={4}>
                <Stack>
                Origin
                <StandaloneSearchBox
                    onLoad={ref => originRef.current = ref}
                    // onPlacesChanged={handleOriginChanged}
                >
                    <Input
                      type="text"
                      disabled={true}
                      className="form-control"
                      placeholder="Origin"
                      value={cart[0]?.MenuItem?.UserAuthentication?.address}
                      sx={{width: '100%', color: 'white', marginTop: '5px'}}
                    />
                </StandaloneSearchBox>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack>
                Destination
                <StandaloneSearchBox
                    onLoad={ref => destiantionRef.current = ref}
                    onPlacesChanged={handleDestinationChanged}
                >
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Destination"
                      sx={{width: '100%', color: 'white', marginTop: '5px'}}
                    />
                </StandaloneSearchBox>
                </Stack>
              </Grid>
              <Grid item xs={4}>
          <ButtonGroup sx={{marginTop: '35px', marginRight: '10px'}}>
            <Button type='submit' onClick={calculateRoute}>
              Calculate Route
            </Button>
          </ButtonGroup>
          </Grid>
          </Grid>
        </Stack>
        <Stack mt={2} mb={2} justifyContent='space-between' sx={{display: 'flex', flexDirection: 'row'}}>
          <Typography>Distance: {distance} </Typography>
          <Typography>Duration: {duration} </Typography>
          <IconButton
            aria-label='center back'
            icon={<NearMeIcon />}
            // isround
            onClick={() => {
              map.panTo(center)
              map.setZoom(15)
            }}
          />
        </Stack>
      </Box>
        <Box
      position='relative'
      flexDirection='column'
      alignItems='center'
      h='500px'
      w='100vw'
    >
      <Box position='absolute' left={0} top={0} width={'100%'} height={'500px'}>
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={map => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>
      
    </Box>
      </Box>
      <Dialog open={open}>
      <DialogTitle>Pay Now</DialogTitle>
        <DialogContent>
          <p>Click the button below to proceed with payment.</p>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handlePayNow}>Proceed to Payment</Button>
          <Button variant="outlined" onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default DetailCart;
