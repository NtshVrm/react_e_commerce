import { v4 as uuid } from "uuid";
import {
  cap_ferrari,
  max_verstappen_helmet,
  mclaren_hoodie,
} from "../../assets";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Max Verstappen Helmet",
    info: "Max Verstappen 2021 1:1 Scale Helmet",
    image: max_verstappen_helmet,
    price: "99.99",
    discountPrice: "59.99",
    badge: true,
    inCart: false,
  },
  {
    _id: uuid(),
    title: "MCLAREN HOODIE",
    info: "McLaren 2021 Team Hoodie",
    image: mclaren_hoodie,
    price: "149.99",
    discountPrice: "79.99",
    badge: false,
    inCart: false,
  },
  {
    _id: uuid(),
    title: "FERRARI CAP",
    info: "Scuderia Ferrari 2021 Team Cap Curved",
    image: cap_ferrari,
    price: "49.99",
    discountPrice: "29.99",
    badge: false,
    inCart: false,
  },
];
