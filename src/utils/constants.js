import feature1 from "@/assets/images/features/0.png";
import feature2 from "@/assets/images/features/1.png";
import feature3 from "@/assets/images/features/2.png";
import feature4 from "@/assets/images/features/3.png";
import feature5 from "@/assets/images/features/4.png";
import feature6 from "@/assets/images/features/5.png";
import feature7 from "@/assets/images/features/6.png";
import feature8 from "@/assets/images/features/7.png";

export const gridSpacing = 3;
export const drawerWidth = 260;
export const appDrawerWidth = 320;

export const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Our Values",
    href: "/aboutUs",
  },
  {
    label: "Food Menu",
    href: "/products",
  },
  {
    label: "Dine In",
    href: "/dinein",
  },
  {
    label: "Contact Us",
    href: "#contact",
  },
];

export const OTHER_LINK = [
  {
    label: "Terms & Conditions",
    href: "/terms",
  },
  {
    label: "Privacy Policy",
    href: "/privacypolicy",
  },
  // {
  //   label: "Returns",
  //   href: "/",
  // },
  // {
  //   label: "FAQ's",
  //   href: "/",
  // },
];

export const features = [
  {
    image: feature1,
    title: "Quality Assurance",
  },
  {
    image: feature2,
    title: "Fast Delivery",
  },
  ,
  {
    image: feature3,
    title: "Designated Relationship Manager",
  },
  ,
  {
    image: feature4,
    title: "Digital Transactions",
  },
  {
    image: feature5,
    title: "OPTIMUM MARKET PRICE",
  },
  {
    image: feature6,
    title: "EFFICIENT LOGISTICS",
  },
  ,
  {
    image: feature7,
    title: "24X7  CUSTOMER SERVICE",
  },
  ,
  {
    image: feature8,
    title: "RETURNS MANAGEMENT",
  },
];

export const ALERT_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
  INFO: "info",
};

export const asyncActionType = (type) => ({
  PENDING: `${type} - Pending`,
  SUCCESS: `${type} - Success`,
  ERROR: `${type} - Error`,
});

export const ACTIONS = {
  ENQUEUE_SNACKBAR: "[K_T]ENQUEUE_SNACKBAR",
  CLOSE_SNACKBAR: "[K_T]CLOSE_SNACKBAR",
  REMOVE_SNACKBAR: "[K_T]REMOVE_SNACKBAR",
  REGISTER_USER: asyncActionType("[K_T]REGISTER_USER"),
  UPDATE_PROFILE: asyncActionType("[K_T]UPDATE_PROFILE"),
};

export const FETCH_STATUS = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export const hideLayoutRoutes = ["login", "register", "(admin)", "registerRestaurant"];
