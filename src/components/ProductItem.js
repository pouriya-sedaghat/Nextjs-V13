import Image from 'next/image';
import Link from 'next/link';
import AddToCart from './AddToCart';

function ProductItem({ product }) {
    return (
        <>
            <div className='col-4 py-3'>
                <div className='text-center mb-3'>
                    <Link href={`/product/${product.slug}`} className='d-inline-block w-fit'>
                        <Image src={product.image} alt={product.title} width={200} height={160} />
                    </Link>
                </div>
                <div className='text-center'>
                    <Link href={`/product/${product.slug}`} className='d-inline-block w-fit'><h2>{product.title}</h2></Link>
                    <p className='my-2'>Price : {product.price}</p>
                    <AddToCart product={product} />
                </div>
            </div>
        </>
    );
}

export default ProductItem;