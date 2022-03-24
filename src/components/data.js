import {
  faArrowRightArrowLeft,
  faEarthAsia,
  faPercent,
  faPercentage,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import {
  redbull,
  mercedes,
  ferrari,
  mclaren,
  alpine,
  alphatauri,
  aston,
  alfa,
  williams,
  haas,
} from "../assets";

const teams = [
  {
    id: 1,
    teamName: "Redbull",
    image: redbull,
    display: "large",
  },
  {
    id: 2,
    teamName: "Mercedes",
    image: mercedes,
    display: "large",
  },
  {
    id: 3,
    teamName: "Ferrari",
    image: ferrari,
    display: "large",
  },
  {
    id: 4,
    teamName: "mclaren",
    image: mclaren,
    display: "large",
  },
  {
    id: 5,
    teamName: "Alpine",
    image: alpine,
    display: "small",
  },
  {
    id: 6,
    teamName: "Alphatauri",
    image: alphatauri,
    display: "small",
  },
  {
    id: 7,
    teamName: "Aston Martin",
    image: aston,
    display: "small",
  },
  {
    id: 8,
    teamName: "Alfa Romeo",
    image: alfa,
    display: "small",
  },
  {
    id: 9,
    teamName: "Williams",
    image: williams,
    display: "small",
  },
  {
    id: 10,
    teamName: "Haas",
    image: haas,
    display: "small",
  },
];

const feature = [
  {
    id: 1,
    icon: faArrowRightArrowLeft,
    title: "Free Returns",
    description:
      "Get free returns on all your orders when returned within 7 days.",
  },
  {
    id: 2,
    icon: faTruckFast,
    title: "Fast Shipping",
    description: "Your orders are shipped within 36 hours of order placement.",
  },
  {
    id: 3,
    icon: faPercent,
    title: "Amazing Discounts",
    description:
      "Discounts on all categories all throughout the year with special offers on race weekends.",
  },
  {
    id: 4,
    icon: faEarthAsia,
    title: "Eco Friendly",
    description:
      "3% of all profits goes towards eco-friendly causes like teamtrees etc.",
  },
];

export { teams, feature };
