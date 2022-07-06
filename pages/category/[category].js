import { useRouter } from 'next/router';
import ProductCard from '../../components/ProductCard';
import styles from '../../styles/ShopPage.module.css';
import { connectToDatabase } from '../../utils/mongoDb';
// import { getProductsByCategory } from '../api/products/[category]';

const CategoryPage = ({ products }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Results for {router.query.category}</h1>
      <div className={styles.cards}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

export async function getServerSideProps(ctx) {
  const { db } = await connectToDatabase();

  const category = ctx.query.category;
  const products = await db
    .collection("product")
    .find({ category })
    .toArray();

  return { props: { products: JSON.parse(JSON.stringify(products)) } };
}
