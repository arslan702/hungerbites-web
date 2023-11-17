import { faker } from "@faker-js/faker";
import { sample } from "lodash";
import image1 from "@/assets/images/slider/1.png";
import image2 from "@/assets/images/slider/2.png";
import image3 from "@/assets/images/slider/3.png";
import image4 from "@/assets/images/slider/4.png";
import image5 from "@/assets/images/slider/5.png";
import image6 from "@/assets/images/slider/6.png";
import image7 from "@/assets/images/slider/7.png";
import image8 from "@/assets/images/slider/8.png";
import image9 from "@/assets/images/slider/9.png";
import image10 from "@/assets/images/slider/10.png";
import image11 from "@/assets/images/slider/11.png";
import image12 from "@/assets/images/slider/12.png";
import image13 from "@/assets/images/slider/13.png";
import image14 from "@/assets/images/slider/14.png";
import image15 from "@/assets/images/slider/15.png";
import image16 from "@/assets/images/slider/16.png";
import image17 from "@/assets/images/slider/17.png";
import image18 from "@/assets/images/slider/18.png";
import image19 from "@/assets/images/slider/19.png";
import image20 from "@/assets/images/slider/20.png";
import image21 from "@/assets/images/slider/21.png";
import image22 from "@/assets/images/slider/22.png";
export const sliderImages = [
  {
    image: image1,
    alt: "image-1",
  },
  {
    image: image2,
    alt: "image-2",
  },
  {
    image: image3,
    alt: "image-3",
  },
  {
    image: image4,
    alt: "image-4",
  },
  {
    image: image5,
    alt: "image-5",
  },
  {
    image: image6,
    alt: "image-6",
  },
  {
    image: image7,
    alt: "image-7",
  },
  {
    image: image8,
    alt: "image-8",
  },
  {
    image: image9,
    alt: "image-9",
  },
  {
    image: image10,
    alt: "image-10",
  },
  {
    image: image11,
    alt: "image-11",
  },
  {
    image: image12,
    alt: "image-11",
  },
  {
    image: image13,
    alt: "image-13",
  },
  {
    image: image14,
    alt: "image-14",
  },
  {
    image: image15,
    alt: "image-15",
  },

  {
    image: image16,
    alt: "image-16",
  },
  {
    image: image17,
    alt: "image-17",
  },
  {
    image: image18,
    alt: "image-18",
  },
  {
    image: image19,
    alt: "image-19",
  },
  {
    image: image20,
    alt: "image-20",
  },
  {
    image: image21,
    alt: "image-21",
  },
  {
    image: image22,
    alt: "image-22",
  },
];

export const ProductCategories = [
  {
    id: 1,
    title: "Food Items",
    children: [
      {
        id: 1,
        label: "Dairy",
        href: "/dairy",
        subitems: [
          {
            id: 1,
            name: "Nougat",
          },
          {
            id: 2,
            name: "Lollipop",
          },
        ],
      },
      { id: 2, label: "Oil", href: "/oil" },
      { id: 3, label: "Berverages", href: "/berverages" },
    ],
  },
  { id: 2, title: "Personal Care" },
  { id: 3, title: "Baby Care" },
  { id: 4, title: "Home Care" },
];

export const productDetailData = {
  id: 1,
  title: "The longest name of the products ",
  rating: 82,
  brand: "Somthing",
  sellPrice: 500,
  originalPrice: 1000,
  discount: 50,
  totalItem: 5,
  description:
    "Lorem ipsum dolor sit amet consectetur. Et nulla feugiat viverra purus dolor congue. Elementum nisi cursus vel vitae a et. Vel mattis pretium in ornare. Vitae sagittis ut vehicula cursus dolor placerat id. Lorem ipsum dolor sit amet consectetur. Et nulla feugiat viverra purus dolor congue. Elementum nisi cursus vel vitae a et. Vel mattis pretium in ornare. Vitae sagittis ut vehicula cursus dolor placerat id.Lorem ipsum dolor sit amet consectetur. Et nulla feugiat viverra purus dolor congue. Elementum nisi cursus vel vitae a et. Vel mattis pretium in ornare. Vitae sagittis ut vehicula cursus dolor placerat id...",
};

export const allOrders = [...Array(5)].map((_, index) => ({
  id: faker.datatype.uuid(),
  created: "21 jul, 2020",
  avatarUrl: "",
  item: faker.commerce.productName(),
  fulfillment: sample(["Pending Orders", "Delivered", "Order Returs"]),
  quantity: faker.random.numeric(5),
  totalPrice: faker.random.numeric(5),
  updated: "21 jul, 2020",
  status: sample(["paid", "unfilled", "canceled", "Returned"]),
}));
