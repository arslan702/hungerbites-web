"use client";
import useSWR from "swr";
import Slider from "react-slick";
import { Product } from "@/components";
import { API_ROOT } from "@/configuration";

// const fetcher = (url) => fetch(url).then((res) => res.json());

const ProductSlider = ({data}) => {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {data?.map((item, index) => (
        <Product key={index} item={item} link={index} />
      ))}
    </Slider>
  );
};

export default ProductSlider;
