const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { ObjectId } = Schema.Types;

const CartItemSchema = new Schema(
  {
    id: {
      type: Number
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
    quantity: {
      type: Number
    },
    image: {
      type:String
    },
    // productId: {
    //   type: ObjectId,
    //   ref: "Product",
    // },
  },
  { collection: 'cartitems' }
);

// const CartItem = mongoose.model("CartItem", CartItemSchema);

// module.exports = CartItem;
