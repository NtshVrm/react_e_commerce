import { v4 as uuid } from "uuid";
import { f1_hoodie, cap, shirt } from "../../assets";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Hoodies",
    image: f1_hoodie,
    display: "large",
  },
  {
    _id: uuid(),
    categoryName: "Caps",
    image: cap,
    display: "small",
  },
  {
    _id: uuid(),
    categoryName: "T-shirts",
    image: shirt,
    display: "small",
  },
  {
    _id: uuid(),
    categoryName: "Bags",
    image: "",
    display: "small",
  },
  {
    _id: uuid(),
    categoryName: "Helmets",
    image: "",
    display: "small",
  },
];
