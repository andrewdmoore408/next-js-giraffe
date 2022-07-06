import Image from 'next/image';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../redux/cart.slice';
import styles from '../styles/ProductCard.module.css';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';

const ProductCard = ({ product }) => {
  const addToCart = async () => {
    await axios.post(`${baseUrl}/api/cart`, product);
    alert('Added To Cart!');
  };

  // const dispatch = useDispatch();

  return (
    <div className={styles}>
      <Image src={product.image} height={300} width={220} />
      <h4 className={styles.title}>{product.product}</h4>
      <h5 className={styles.category}>{product.category}</h5>
      <p>$ {product.price}</p>
      <button
        onClick={() => addToCart()}
        className={styles.button}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;