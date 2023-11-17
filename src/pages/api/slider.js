import tempsrc from '../../assets/images/plate.png';
import babyCare from "../../assets/images/chicken.png";
import drinks from "../../assets/images/drink.png";

function getItems() {
  return {
    slider: [
      {
        id: 1,
        title: "Delivery On Time at your Door Step",
        slug: "/products",
        image: tempsrc,
      },
      {
        id: 1,
        title: "Delivery On Time at your Door Step",
        slug: "/products",
        image: babyCare,
      },
      {
        id: 1,
        title: "Delivery On Time at your Door Step",
        slug: "/products",
        image: drinks,
      },
    ],
  };
}
export default function handler(req, res) {
  res.status(200).json(getItems());
}
