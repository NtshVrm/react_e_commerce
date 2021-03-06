import {
  faArrowRightArrowLeft,
  faEarthAsia,
  faPercent,
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

const review = [
  {
    id: 1,
    name: "Lewis Hamilton",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint enim iure id praesentium, atque repudiandae minus quasi ut voluptatibus, delectus iusto ratione nostrum quos officia aspernatur doloremque aliquid dicta accusantium?",
  },
  {
    id: 2,
    name: "Max Verstappen",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint enim iure id praesentium, atque repudiandae minus quasi ut voluptatibus, delectus iusto ratione nostrum quos officia aspernatur doloremque aliquid dicta accusantium?",
  },
  {
    id: 3,
    name: "Alex Albon",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint enim iure id praesentium, atque repudiandae minus quasi ut voluptatibus, delectus iusto ratione nostrum quos officia aspernatur doloremque aliquid dicta accusantium?",
  },
];

const filterComp = [
  {
    id: 1,
    filterClosed: false,
    title: "Rating",
    options: [
      {
        val: "4 star and above",
      },
      {
        val: "3 star and above",
      },
      {
        val: "2 star and above",
      },
      {
        val: "1 star and above",
      },
    ],
    type: "radio",
  },
  {
    id: 2,
    filterClosed: false,
    title: "Gender",
    options: [
      {
        val: "Men",
      },
      {
        val: "Women",
      },
      {
        val: "Unisex",
      },
    ],
    type: "radio",
  },
  {
    id: 3,
    filterClosed: false,
    title: "Category",
    options: [
      {
        val: "Caps",
      },
      {
        val: "Hoodies",
      },
      {
        val: "T-Shirts",
      },
      {
        val: "Bags",
      },
      {
        val: "Helmets",
      },
    ],
    type: "checkbox",
  },
];

export { teams, feature, review, filterComp };
