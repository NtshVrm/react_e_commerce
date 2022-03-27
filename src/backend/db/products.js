import { v4 as uuid } from "uuid";
import {
  alonso_helmet,
  cap_ferrari,
  cap_mclaren,
  cap_mercedes,
  cap_redbull,
  ferari_bag,
  ferrari_hoodie,
  ferrari_shirt,
  hamilton_helmet,
  leclerc_helmet,
  max_verstappen_helmet,
  mclaren_hoodie,
  mclaren_womens,
  mercedes_hoodie,
  merc_bag,
  merc_shirt,
  merc_womens,
  redbull_bag,
  redbull_hoodie,
  redbull_shirt,
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
    badge: false,
    category: "Helmets",
    gender: "unisex",
    rating: 4.5,
  },
  {
    _id: uuid(),
    title: "Fernando Alonso Helmet",
    info: "Fernando Alonso 2021 1:1 Scale Helmet",
    image: alonso_helmet,
    price: "99.99",
    discountPrice: "59.99",
    badge: false,
    category: "Helmets",
    gender: "unisex",
    rating: 3.5,
  },
  {
    _id: uuid(),
    title: "Lewis Hamilton Helmet",
    info: "Lewis Hamilton 2022 1:1 Scale Helmet",
    image: hamilton_helmet,
    price: "99.99",
    discountPrice: "59.99",
    badge: true,
    category: "Helmets",
    gender: "unisex",
    rating: 2.5,
  },
  {
    _id: uuid(),
    title: "Charles Leclerc Helmet",
    info: "Charles Leclerc 2021 1:1 Scale Helmet",
    image: leclerc_helmet,
    price: "99.99",
    discountPrice: "59.99",
    badge: false,
    category: "Helmets",
    gender: "unisex",
    rating: 1.5,
  },
  {
    _id: uuid(),
    title: "MCLAREN HOODIE",
    info: "McLaren 2021 Team Hoodie",
    image: mclaren_hoodie,
    price: "149.99",
    discountPrice: "79.99",
    badge: false,
    category: "Hoodies",
    gender: "male",
    rating: 4.5,
  },
  {
    _id: uuid(),
    title: "FERRARI HOODIE",
    info: "FERRARI 2022 Team Hoodie",
    image: ferrari_hoodie,
    price: "149.99",
    discountPrice: "79.99",
    badge: true,
    category: "Hoodies",
    gender: "male",
    rating: 3.5,
  },
  {
    _id: uuid(),
    title: "MERCEDES HOODIE",
    info: "MERCEDES 2021 Team Hoodie",
    image: mercedes_hoodie,
    price: "149.99",
    discountPrice: "79.99",
    badge: false,
    category: "Hoodies",
    gender: "male",
    rating: 2.5,
  },
  {
    _id: uuid(),
    title: "REDBULL HOODIE",
    info: "REDBULL 2021 Team Hoodie",
    image: redbull_hoodie,
    price: "149.99",
    discountPrice: "79.99",
    badge: false,
    category: "Hoodies",
    gender: "male",
    rating: 1.5,
  },
  {
    _id: uuid(),
    title: "FERRARI CAP",
    info: "Scuderia Ferrari 2021 Team Cap Curved",
    image: cap_ferrari,
    price: "49.99",
    discountPrice: "29.99",
    badge: false,
    category: "Caps",
    gender: "unisex",
    rating: 4.5,
  },
  {
    _id: uuid(),
    title: "MCLAREN CAP",
    info: "MCLAREN 2021 Team Cap Curved",
    image: cap_mclaren,
    price: "49.99",
    discountPrice: "29.99",
    badge: true,
    category: "Caps",
    gender: "unisex",
    rating: 3.5,
  },
  {
    _id: uuid(),
    title: "MERCEDES CAP",
    info: "MERCEDES 2021 Team Cap Curved",
    image: cap_mercedes,
    price: "49.99",
    discountPrice: "29.99",
    badge: false,
    category: "Caps",
    gender: "unisex",
    rating: 2.5,
  },
  {
    _id: uuid(),
    title: "REDBULL CAP",
    info: "REDBULL 2021 Team Cap Curved",
    image: cap_redbull,
    price: "49.99",
    discountPrice: "29.99",
    badge: false,
    category: "Caps",
    gender: "unisex",
    rating: 1.5,
  },
  {
    _id: uuid(),
    title: "FERRARI T SHIRT",
    info: "FERRARI SAINZ 2022 Team SHIRT",
    image: ferrari_shirt,
    price: "89.99",
    discountPrice: "49.99",
    badge: true,
    category: "T-Shirts",
    gender: "male",
    rating: 4.5,
  },
  {
    _id: uuid(),
    title: "MERCEDES T SHIRT",
    info: "MERCEDES 2021 Team SHIRT",
    image: merc_shirt,
    price: "89.99",
    discountPrice: "49.99",
    badge: false,
    category: "T-Shirts",
    gender: "male",
    rating: 3.5,
  },
  {
    _id: uuid(),
    title: "REDBULL T SHIRT",
    info: "REDBULL 2021 Team SHIRT",
    image: redbull_shirt,
    price: "89.99",
    discountPrice: "49.99",
    badge: false,
    category: "T-Shirts",
    gender: "male",
    rating: 2.5,
  },
  {
    _id: uuid(),
    title: "MERCEDES WOMENS DRESS",
    info: "MERCEDES 2021 Team DRESS",
    image: merc_womens,
    price: "89.99",
    discountPrice: "49.99",
    badge: true,
    category: "T-Shirts",
    gender: "female",
    rating: 1.5,
  },
  {
    _id: uuid(),
    title: "MCLAREN WOMENS T-SHIRT",
    info: "MCLAREN 2021 Team T-SHIRT",
    image: mclaren_womens,
    price: "89.99",
    discountPrice: "49.99",
    badge: false,
    category: "T-Shirts",
    gender: "female",
    rating: 2.5,
  },
  {
    _id: uuid(),
    title: "FERRARI BAG",
    info: "FERRARI 2021 Team BAG",
    image: ferari_bag,
    price: "449.99",
    discountPrice: "249.99",
    badge: true,
    category: "Bags",
    gender: "unisex",
    rating: 4.5,
  },
  {
    _id: uuid(),
    title: "MERCEDES BAG",
    info: "MERCEDES 2021 Team BAG",
    image: merc_bag,
    price: "449.99",
    discountPrice: "249.99",
    badge: false,
    category: "Bags",
    gender: "unisex",
    rating: 3.5,
  },
  {
    _id: uuid(),
    title: "REDBULL BAG",
    info: "REDBULL 2021 Team BAG",
    image: redbull_bag,
    price: "449.99",
    discountPrice: "249.99",
    badge: false,
    category: "Bags",
    gender: "unisex",
    rating: 2.5,
  },
];
