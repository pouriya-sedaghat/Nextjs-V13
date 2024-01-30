import { products } from '@/data/products';
import ProductItem from '@/components/ProductItem';

function Home() {
  return (
    <>
      <div className='row justify-content-evenly'>
        {
          products.map((item) => (<ProductItem product={item} key={item.slug} />))
        }
      </div>
    </>
  );
}

export default Home;