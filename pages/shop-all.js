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

import ProductCard from '../components/ProductCard';
import styles from '../styles/ShopPage.module.css';
import getProducts from './api/products/index';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';

const ShopPage = ({ products }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Results</h1>
      <div className={styles.cards}>
        {/* {console.log('in ShopPage component: products is ', products)} */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;

export async function getServerSideProps() {
  const url = `${baseUrl}/api/products`;
  // console.log('in shop-all.js, url ', url);
  const { data } = await axios.get(url);
  // console.log('in shop - all.js, data ', data);
  // const products = await getProducts();
  return { props: { products: data } };
}
