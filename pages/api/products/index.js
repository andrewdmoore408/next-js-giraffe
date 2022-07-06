// import axios from 'axios';
// import Product from '../../../models/Product';
// import connectDB from '../../../utils/connectDb';

// export async function getProducts() {
//   const url = 'http://localhost:3000/api/products';
//   const res = await axios.get(url);
//   const { data } = res;
// }

// export default function handler(req, res) {
//   if (req.method !== 'GET') {
//     res.setHeader('Allow', ['GET']);
//     res.status(405).json({ message: `Method ${req.method} is not allowed` });
//   } else {
//     const products = getProducts();
//     res.status(200).json(products);
//   }
// }

// Execute the connectDB function to connect to MongoDB
// connectDB();

// export default async (req, res) => {
//   const products = await Product.find({});
//   res.status(200).json(products);
// };


// import data from './data.json';
import connectDB from "../../../utils/connectDb";
import Product from "../../../models/product";
// import loadProductModel from "../../../models/product";
// const Product = loadProductModel();

// export function getProducts() {
//   return data;
// }

// export default function handler(req, res) {
//   if (req.method !== 'GET') {
//     res.setHeader('Allow', ['GET']);
//     res.status(405).json({ message: `Method ${req.method} is not allowed` });
//   } else {
//     const products = getProducts();
//     res.status(200).json(products);
//   }
// }

connectDB();

export default async function (req, res) {
  // await connectDB();

  // const products = await db.collection('product').find({}).toArray();
  // res.json(products);

  const products = await Product.find({})
  // res.status(200).json({success: true, data: products})
  res.status(200).json(products)
};


// router.get("/products", (req, res, next) => {
//   Product.find({})
//     .then((products) => res.json(products))
//     .catch(next);
// });

