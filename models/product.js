// import mongoose from 'mongoose';

// const { String, Number } = mongoose.Schema.Types;

// const ProductSchema = new mongoose.Schema({
//   product: {
//     type: String,
//     required: true
//   },
//   category: {
//     type: String,
//   },
//   image: {
//     type: String,
//   },
//   price: {
//     type: Number,
//   }
// });

// export default mongoose.models.Product ||
//   mongoose.model('product', ProductSchema);


import mongoose, { models } from 'mongoose';
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  id: {
    type: Number,
  },
  product: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
  image: {
    type: String
  }

}, { collection: 'product' })

// function loadProductModel() {
//   return mongoose.models ? mongoose.models.Product : mongoose.model('Product', ProductSchema);
// }

// const Product = mongoose.models ? mongoose.models.Product : mongoose.model('Product', ProductSchema);

// const Product = mongoose.model('Product', ProductSchema);

// module.exports = Product;
// module.exports = loadProductModel;
// export default loadProductModel()

// export default mongoose.models.Product ? mongoose.models.Product : mongoose.model('Product', ProductSchema)

// export default Product = mongoose.model('Product', ProductSchema);

console.log('in models/product.js: mongoose.models is ', mongoose.models);

// export default mongoose.models.Product || mongoose.model('Product', ProductSchema);

export let Product;

if (mongoose.models.Product === undefined) {
  Product = mongoose.model('Product', ProductSchema);
} else {
  Product = mongoose.models.Product;
}
