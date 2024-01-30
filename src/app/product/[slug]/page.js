import AddToCart from '@/components/AddToCart';
import { products } from '@/data/products';
import Image from 'next/image';

function Product({ params: { slug } }) {

    const product = products.find((item) => item.slug === slug);

    return (
        <>
            <div className='row'>
                <div className='col-12 py-4'>
                    <div className='pb-5'>
                        <Image src={product.image} alt={product.title} width={200} height={160} className='mx-auto' />
                    </div>
                    <div className='text-center'>
                        <h2 className='my-2'>{product.title}</h2>
                        <p>Category : {product.category}</p>
                        <p className='my-2'>{product.description}</p>
                        <p>Count : {product.count}</p>
                        <p className='my-2'>Price : {product.price}</p>
                        <AddToCart product={product} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;