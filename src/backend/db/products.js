import { v4 as uuid } from "uuid";
import {
  boardImg, pieceImg, bookImg, clockImg, image1, image2, image3, image4, image5, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22,
} from "../../assets";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Fischer-Spassky Chess Set",
    image: pieceImg,
    price: "5000",
    badge: "Out of Stock",
    rating: "2.5",
    reviewers: "20",
    categoryName: "pieces"
  },
  {
    _id: uuid(),
    title: "Fianchetto Grunfield",
    image: bookImg,
    price: "8000",
    badge: "In Stock",
    rating: "4",
    reviewers: "40",
    categoryName: "books"
  },
  {
    _id: uuid(),
    title: "DGT 2010 Digital Clock",
    image: clockImg,
    price: "2000",
    badge: "In Stock",
    rating: "1.5",
    reviewers: "35",
    categoryName: "clock"
  },
  {
    _id: uuid(),
    title: "Berlin Minimalist Set",
    image: image1,
    price: "1500",
    badge: "In Stock",
    rating: "5",
    reviewers: "48",
    categoryName: "pieces"
  },
  {
    _id: uuid(),
    title: "Alban Wooden Chess Set",
    image: image2,
    price: "2300",
    badge: "In Stock",
    rating: "2",
    reviewers: "23",
    categoryName: "pieces"
  },
  {
    _id: uuid(),
    title: "Nimzo Larsen Attack",
    image: image3,
    price: "5100",
    badge: "Out of Stock",
    rating: "3.5",
    reviewers: "19",
    categoryName: "books"
  },
  {
    _id: uuid(),
    title: "Stauton Pattern Camel Set",
    image: image4,
    price: "4500",
    badge: "In Stock",
    rating: "2",
    reviewers: "57",
    categoryName: "pieces"
  },
  {
    _id: uuid(),
    title: "Sikh Empire Chess Set",
    image: image5,
    price: "3100",
    badge: "In Stock",
    rating: "4.5",
    reviewers: "59",
    categoryName: "pieces"
  },
  {
    _id: uuid(),
    title: "Dark Knight System",
    image: image7,
    price: "9000",
    badge: "In Stock",
    rating: "3",
    reviewers: "74",
    categoryName: "books"
  },
  {
    _id: uuid(),
    title: "Berliner Colored Chess Set",
    image: image15,
    price: "5499",
    badge: "In Stock",
    rating: "4.5",
    reviewers: "21",
    categoryName: "pieces"
  },
  {
    _id: uuid(),
    title: "Travel Series Chess Board",
    image: image8,
    price: "7100",
    badge: "In Stock",
    rating: "2",
    reviewers: "33",
    categoryName: "board"
  },
  {
    _id: uuid(),
    title: "Multiple Choice Chess-2",
    image: image9,
    price: "7000",
    badge: "Out of Stock",
    rating: "2.5",
    reviewers: "47",
    categoryName: "books"
  },
  {
    _id: uuid(),
    title: "Offbeat Spanish",
    image: image10,
    price: "5900",
    badge: "In Stock",
    rating: "1.5",
    reviewers: "51",
    categoryName: "books"
  },
  {
    _id: uuid(),
    title: "Rules of Winning Chess",
    image: image11,
    price: "8000",
    badge: "In Stock",
    rating: "4",
    reviewers: "22",
    categoryName: "books"
  },
  {
    _id: uuid(),
    title: "Round Magnetic Board",
    image: image12,
    price: "8500",
    badge: "Out of Stock",
    rating: "3",
    reviewers: "27",
    categoryName: "board"
  },
  {
    _id: uuid(),
    title: "Apache Luxury Chess Set",
    image: image13,
    price: "7499",
    badge: "In Stock",
    rating: "3.5",
    reviewers: "21",
    categoryName: "pieces"
  },
  {
    _id: uuid(),
    title: "Wooden Deluxe Board",
    image: boardImg,
    price: "1000",
    badge: "In Stock",
    rating: "1",
    reviewers: "15",
    categoryName: "board"
  },
  {
    _id: uuid(),
    title: "Berlin Green Chess Set",
    image: image14,
    price: "2499",
    badge: "Out of Stock",
    rating: "2.5",
    reviewers: "29",
    categoryName: "pieces"
  },
  {
    _id: uuid(),
    title: "Chess Brilliancy",
    image: image16,
    price: "4300",
    badge: "In Stock",
    rating: "3.5",
    reviewers: "21",
    categoryName: "books"
  },
  {
    _id: uuid(),
    title: "Easy Guide to Chess",
    image: image17,
    price: "3900",
    badge: "In Stock",
    rating: "2.5",
    reviewers: "21",
    categoryName: "books"
  },
  {
    _id: uuid(),
    title: "Jacques Vintage Chess Set",
    image: image18,
    price: "7499",
    badge: "In Stock",
    rating: "3.5",
    reviewers: "21",
    categoryName: "pieces"
  },
  {
    _id: uuid(),
    title: "The Marshall Attack",
    image: image19,
    price: "8499",
    badge: "In Stock",
    rating: "4.5",
    reviewers: "51",
    categoryName: "books"
  },
  {
    _id: uuid(),
    title: "Columbian Series Chess Set",
    image: image20,
    price: "1499",
    badge: "Out of Stock",
    rating: "1.5",
    reviewers: "9",
    categoryName: "pieces"
  },
  {
    _id: uuid(),
    title: "Play the Ponziani",
    image: image21,
    price: "8500",
    badge: "Out of Stock",
    rating: "1.5",
    reviewers: "31",
    categoryName: "books"
  },
  {
    _id: uuid(),
    title: "The Torre Attack",
    image: image22,
    price: "6500",
    badge: "In Stock",
    rating: "3.5",
    reviewers: "33",
    categoryName: "books"
  },
];
