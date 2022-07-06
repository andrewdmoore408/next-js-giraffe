import Image from 'next/image';
// Importing hooks from react-redux
// import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/CartPage.module.css';
import { getCartItems } from './api/cart/index';

const CartPage = ({ cartItems }) => {

  // Extracting cart state from redux store
  // const cart = useSelector((state) => state.cart);

  // Reference to the dispatch function from redux store
  // const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cartItems.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className={styles.container}>
      {cartItems.length === 0 ? (
        <h1>Your Cart is Empty! Put some stuff in it!</h1>
      ) : (
        <>
          <div className={styles.header}>
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total Price</div>
          </div>
          {cartItems.map((item) => (
            <div className={styles.body} key={item.id}>
              <div className={styles.image}>
                <Image src={item.image} height="90" width="65" />
              </div>
              <p>{item.product}</p>
              <p>$ {item.price}</p>
              <p>{item.quantity}</p>
              <p>$ {item.quantity * item.price}</p>
            </div>
          ))}
          <h2>Grand Total: $ {getTotalPrice()}</h2>
        </>
      )}
    </div>
  );
};

export default CartPage;

export async function getServerSideProps() {
  const cartItems = await getCartItems();
  return { props: { cartItems } };
}

// import React, { Fragment, useEffect } from 'react';
// import axios from 'axios';

// function Home({ products }) {
//   console.log(products);

//   return <Fragment>home</Fragment>;
// }

// // Fetch data and return response data as props object
// // This props object can be passed to a component prior to the component mounts
// // It's an async function
// // NOTE: getServerSideProps does the same thing as getInitialProps function
// export async function getServerSideProps() {
//   // fetch data on server
//   const url = 'http://localhost:3000/api/products';
//   const response = await axios.get(url);
//   // return response data as an object
//   // note: this object will be merged with existing props
//   return { props: { products: response.data } };
// };

// export default Home;
