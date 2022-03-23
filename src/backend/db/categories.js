import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Hoodies",
    display: "large",
  },
  {
    _id: uuid(),
    categoryName: "Caps",
    display: "small",
  },
  {
    _id: uuid(),
    categoryName: "T-shirts",
    display: "small",
  },
  {
    _id: uuid(),
    categoryName: "Bags",
    display: "small",
  },
  {
    _id: uuid(),
    categoryName: "Helmets",
    display: "small",
  },
];
