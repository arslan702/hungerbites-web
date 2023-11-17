"use client";
import useSWR from "swr";
import Slider from "react-slick";
import { Category } from "@/components";
import { API_URL } from "@/configuration";

const fetcher = (url) => fetch(url).then((res) => res.json());

const CategorySlider = () => {
  let { data } = useSWR(`${API_URL}/auth/getrestaurants`, fetcher)
  console.log({data})
  const settings = {
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {!data ? data = [] : data?.users?.map((item, index) => (
          <Category key={index} item={item} link={index} />
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;
