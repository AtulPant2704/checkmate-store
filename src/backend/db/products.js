import { v4 as uuid } from "uuid";
import { boardImg, pieceImg, bookImg, clockImg, image1, image2, image3, image4, image5, image7, image8, image9, image10, image11, image12 } from "../../assets";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "You Can WIN",
    image: pieceImg,
    price: "5000",
    badge: "Out of Stock",
    wishlist: false,
    categoryName: "chess-pieces"
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    image: bookImg,
    price: "8000",
    badge: "None",
    wishlist: true,
    categoryName: "chess-book"
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    image: clockImg,
    price: "2000",
    badge: "None",
    wishlist: false,
    categoryName: "chess-clock"
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    image: boardImg,
    price: "1000",
    badge: "None",
    wishlist: false,
    categoryName: "chess-board"
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    image: image1,
    price: "1500",
    badge: "None",
    wishlist: false,
    categoryName: "chess-pieces"
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    image: image2,
    price: "2300",
    badge: "None",
    wishlist: false,
    categoryName: "chess-pieces"
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    image: image3,
    price: "5100",
    badge: "Out of Stock",
    wishlist: false,
    categoryName: "chess-pieces"
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    image: image4,
    price: "4500",
    badge: "None",
    wishlist: false,
    categoryName: "chess-pieces"
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    image: image5,
    price: "3100",
    badge: "None",
    wishlist: false,
    categoryName: "chess-pieces"
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    image: image7,
    price: "9000",
    badge: "None",
    wishlist: false,
    categoryName: "chess-pieces"
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    image: image8,
    price: "7100",
    badge: "None",
    wishlist: false,
    categoryName: "chess-pieces"
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    image: image9,
    price: "7000",
    badge: "Out of Stock",
    wishlist: false,
    categoryName: "chess-pieces"
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    image: image10,
    price: "5900",
    badge: "None",
    wishlist: false,
    categoryName: "chess-pieces"
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    image: image11,
    price: "8000",
    badge: "None",
    wishlist: false,
    categoryName: "chess-pieces"
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    image: image12,
    price: "8500",
    badge: "Out of Stock",
    wishlist: false,
    categoryName: "chess-pieces"
  },
];
