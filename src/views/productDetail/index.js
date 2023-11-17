"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  Stack,
  Rating,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import useSWR from "swr";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { NumericFormat } from "react-number-format";
import ProductSlider from "../products/ProductSlider";
import { productDetailData } from "@/utils/data";
import { PrimaryButton, ClientReviews, RatingAndSlider } from "@/components";
import { API_URL } from "@/configuration";
import axios from "axios";
import { useRouter } from "next/navigation";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ProductDetail = ({ id }) => {
  const router = useRouter();
  const [isReadMore, setIsReadMore] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [shoppingcart, setShoppingCart] = useState([]);
  const [detail, setDetail] = useState([]);
  const [discount, setDiscount] = useState([]);
  const [diffBrand, setDiffBrand] = useState([]);
  const [sameBrand, setSameBrand] = useState([]);
  const [profile, setProfile] = useState([]);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  useEffect(() => {
    const user = JSON?.parse(localStorage.getItem("user"));
    setProfile(user);
    if(user) {
      axios.get(`${API_URL}/shoppingcart/auth/${user?.id}`).then((res) => {
        setShoppingCart(res?.data);
      });
    }
    axios.get(`${API_URL}/menuitem/${id}`).then((res) => {
      setDetail(res?.data);
      axios
        .get(
          `${API_URL}/menuitem/category/${res?.data?.category_id}`
        )
        .then((res) => {
          setDiffBrand(res?.data?.items);
        });
      axios
        .get(`${API_URL}/menuitem/restaurant/${res?.data?.auth_user_id}`)
        .then((res) => {
          setSameBrand(res?.data?.items);
        });
    });
    axios.get(`${API_URL}/discount/p/${id}`).then((res) => {
      setDiscount(res?.data);
    });
    axios.get(`${API_URL}/review/product/${id}`).then((res) => {
      setReviews(res?.data?.data);
    });
  }, []);

  const numReviews = reviews.length;
  let totalRating = 0;

  for (let i = 0; i < numReviews; i++) {
    totalRating += reviews[i].rating;
  }

  const averageRating = totalRating / numReviews;

  const handleClick = (e) => {
    console.log("clicked");
    e.preventDefault();
    if (!profile) {
      router.push("/login");
    } else {
      axios
        .post(`${API_URL}/shoppingcartitem`, {
          shopping_cart_id: shoppingcart?.id,
          menuitem_id: detail?.id,
          auth_user_id: profile?.id,
          quantity,
        })
        .then(() => {
          // router.push("/cart");
          window.location.href = "/cart";
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleBuyNow = (e) => {
    console.log("clicked");
    e.preventDefault();
    if (!profile) {
      router.push("/login");
    } else {
      axios
        .post(`${API_URL}/shoppingcartitem`, {
          shopping_cart_id: shoppingcart?.id,
          product_id: detail?.id,
          quantity,
        })
        .then(() => {
          router.push("/checkout");
          // window.location.href = "/cart";
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <Container maxWidth="xl">
      <Grid container mt={8} gap={8}>
        <Grid
          item
          xs={12}
          sm={2}
          md={3}
          sx={{
            objectFit: "contain",
            overflow: "hidden",
            position: "relative",
            width: "100%",
            height: 300,
          }}
        >
          <Image
            src={detail?.image_url}
            alt="product-image"
            fill
          />
        </Grid>
        <Grid item xs={12} sm="auto">
          <Typography
            variant="h1"
            sx={{ textTransform: "capitalize", mb: "12px" }}
          >
            {detail?.name}
          </Typography>
          <Grid container alignItems="center" mb={3}>
            <Rating
              value={averageRating}
              readOnly
              precision={0.1}
              size="small"
            />
            <Typography variant="caption" sx={{ ml: 1, color: "custom.gray" }}>
              ({numReviews})
            </Typography>
          </Grid>
          {/* <Typography variant="subtitle1" fontWeight={700}>
            Brand:
            <Typography
              variant="caption"
              sx={{ ml: 1, color: "custom.red" }}
              fontWeight="bold"
            >
              {detail?.Brand?.name}
            </Typography>
          </Typography> */}
          <Typography
            variant="h2"
            mt={2}
            sx={{ color: "custom.red" }}
            fontWeight="bold"
          >
            <NumericFormat
              thousandsGroupStyle="thousand"
              value={detail?.price || 0}
              prefix="Rs"
              decimalSeparator="."
              displayType="text"
              type="text"
              thousandSeparator={true}
              allowNegative={false}
              fixedDecimalScale={true}
              decimalScale={2}
              allowEmptyFormatting={false}
              allowLeadingZeros={false}
            />
          </Typography>
          <Typography mt={2} sx={{ color: "custom.gray" }}>
            <NumericFormat
              thousandsGroupStyle="thousand"
              value={discount?.discount_amount || 0}
              prefix="Rs"
              decimalSeparator="."
              displayType="text"
              type="text"
              thousandSeparator={true}
              allowNegative={false}
              fixedDecimalScale={true}
              decimalScale={2}
              allowEmptyFormatting={false}
              allowLeadingZeros={false}
            />
            <Typography ml={3} color="black" as="span">
              -
              {!discount?.discount_amount
                ? 0
                : ((discount?.discount_amount / detail?.price) * 100).toFixed(
                    2
                  )}
              %
            </Typography>
          </Typography>
          <Stack direction={"row"} alignItems="center" mt={2}>
            <Typography mr={2}>Quantity: </Typography>
            <IconButton
              sx={{ bgcolor: "#b4b4b4", borderRadius: 1 }}
              size="small"
              onClick={() => {
                if (quantity + 1 <= detail?.quantity) {
                  setQuantity((quantity) => quantity + 1)
                }
              }}
            >
              <AddIcon />
            </IconButton>
            <Typography fontWeight={"bold"} px={2}>
              {quantity}
            </Typography>
            <IconButton
              sx={{ bgcolor: "#b4b4b4", borderRadius: 1 }}
              size="small"
              onClick={() => {
                if (quantity - 1 >= 1) {
                  setQuantity((quantity) => quantity - 1)
                }
              }}
            >
              <RemoveIcon />
            </IconButton>
            <Typography sx={{ color: "custom.gray" }} fontWeight="bold" ml={3}>
              {detail?.quantity > 0 ? `${parseFloat(detail?.quantity).toFixed()} items left` : 'out of stock'}
              {/* // {parseFloat(detail?.quantity).toFixed() items left */}
            </Typography>
          </Stack>
          <Stack direction={"row"} mt={5}>
            <Button
              variant="contained"
              size="large"
              disabled={detail?.quantity < 1}
              sx={{
                textTransform: "capitalize",
                boxShadow: "none",
                padding: "15px 30px",
                bgcolor: "custom.red",
                mr: 3,
                color: "white",
              }}
              onClick={(e) => handleBuyNow(e)}
            >
              Buy now
            </Button>
            <Button 
              variant="contained" 
              size="large" 
              color="primary" 
              disabled={detail?.quantity < 1}
              sx={{
                fontWeight: "bold",
                textTransform: "capitalize",
                boxShadow: "none",
                padding: "15px 30px",
                color: "white"
              }} 
              onClick={(e) => handleClick(e)}
              >
              Add to cart
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Stack mt={10} spacing={3}>
        <Typography variant="h4">Description:</Typography>
        <Typography variant="body1" color="black">
          {isReadMore
            ? detail?.description?.slice(0, 200)
            : detail?.description}
          <Typography
            variant="subtitle1"
            onClick={toggleReadMore}
            sx={{ color: "custom.red" }}
          >
            {isReadMore ? "Read more" : " Show less"}
          </Typography>
        </Typography>
      </Stack>
      <Stack mt={5}>
        <Typography variant="h4" fontWeight={"bold"} mb={3}>
          Rating & reviews
        </Typography>
        <RatingAndSlider rating={!averageRating ? 0 : averageRating} totalReviews={numReviews} />
        {reviews?.map((item, index) => (
          <ClientReviews
            key={index}
            name="Client Name"
            rating={item?.rating}
            review={item?.review_text}
          />
        ))}
      </Stack>
      <Divider />
      <Link href="#" style={{ textDecoration: "none" }}>
        <Typography variant="h6" color="custom.orange" py={2} fontWeight="bold">
          See all Reviews &gt;
        </Typography>
      </Link>
      <Box py={10}>
        <Grid item xs>
          <Typography
            variant="h2"
            color="custom.orange"
            textTransform="uppercase"
            textAlign={"center"}
          >
            <Typography variant="h1" as="span" color={"inherit"}>
              S
            </Typography>
            imilar
            <Typography variant="h1" as="span" color={"inherit"}>
              &nbsp;F
            </Typography>
            ood
            <Typography variant="h1" as="span" color={"inherit"}>
              &nbsp;O
            </Typography>
            F
            <Typography variant="h1" as="span" color={"inherit"}>
              &nbsp;D
            </Typography>
            ifferent
            <Typography variant="h1" as="span" color={"inherit"}>
              &nbsp;R
            </Typography>
            estraunts
          </Typography>
        </Grid>
        <Box mt={5}>
          <ProductSlider data={diffBrand} />
        </Box>
      </Box>
      <Box py={5} mb={10}>
        <Grid item xs>
          <Typography
            variant="h2"
            color="custom.orange"
            textTransform="uppercase"
            textAlign={"center"}
          >
            <Typography variant="h1" as="span" color={"inherit"}>
              D
            </Typography>
            ifferent
            <Typography variant="h1" as="span" color={"inherit"}>
              &nbsp;F
            </Typography>
            ood
            <Typography variant="h1" as="span" color={"inherit"}>
              &nbsp;O
            </Typography>
            F
            <Typography variant="h1" as="span" color={"inherit"}>
              &nbsp;S
            </Typography>
            ame
            <Typography variant="h1" as="span" color={"inherit"}>
              &nbsp;R
            </Typography>
            estraunt
          </Typography>
        </Grid>
        <Box mt={5}>
          <ProductSlider data={sameBrand} />
        </Box>
      </Box>
    </Container>
  );
};
export default ProductDetail;
