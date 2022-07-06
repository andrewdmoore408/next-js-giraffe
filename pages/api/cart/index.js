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


import data from './cartData.json';

export function getCartItems() {
  return data;
}

export default function handler(req, res) {
  // if (req.method !== 'GET') {
  //   res.setHeader('Allow', ['GET']);
  //   res.status(405).json({ message: `Method ${req.method} is not allowed` });
  // } else {
    if (req.method === 'GET') {
      const products = getCartItems();
      res.status(200).json(products);
    } else if (req.method === 'POST') {
      const { id, product, price, category, image } = req.body;
      const newProduct = { id, product, price, category, image, quantity: 1 };
      console.log(newProduct);
      res.status(201).json(newProduct);
    }
  // }
}

// export default async function handlePostRequest(req, res) {
//   if (req.method === 'POST') {
//     const { id, product, price, category, image } = req.body;
//     const newProduct = { id, product, price, category, image, quantity: 1 };
//     res.status(201).json(newProduct);
//   }
// }

// router.post("/add-to-cart", (req, res, next) => {
//   const { productId } = req.body;
//   Product.findById(productId)
//     .then((product) => {
//       if (product.quantity === 0) {
//         product.error = "No more items";
//         return product;
//       }
//       return Product.findByIdAndUpdate(
//         productId,
//         {
//           quantity: product.quantity - 1,
//         },
//         { new: true }
//       );
//     })
//     .then((updatedProduct) => {
//       CartItem.findOne({
//         productId,
//       })
//         .then((item) => {
//           if (updatedProduct.error) {
//             return item;
//           }
//           if (!item) {
//             return CartItem.create({
//               title: updatedProduct.title,
//               price: updatedProduct.price,
//               quantity: 1,
//               productId,
//             });
//           } else {
//             return CartItem.findOneAndUpdate(
//               { productId },
//               {
//                 quantity: item.quantity + 1,
//               },
//               { new: true }
//             );
//           }
//         })
//         .then((item) => {
//           const { error, ...product } = updatedProduct.toObject();
//           res.json({ product, item });
//         });
//     });
// });
