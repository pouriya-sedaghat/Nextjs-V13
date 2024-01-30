'use client';

import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART } from '@/redux/slices/cartSlice';

function AddToCart({ product }) {
    const { cartItems } = useSelector(state => state.cart);

    const dispatch = useDispatch();

    function AddToCartHandler() {
        const existingItem = cartItems.find((item) => item.slug === product.slug);
        const qty = existingItem ? existingItem.qty + 1 : 1;
        if (product.count < qty) return alert('Product Is Out.');
        dispatch(ADD_TO_CART({ ...product, qty }));
    }

    return <button className='btn btn-dark' onClick={AddToCartHandler}>Add To Cart</button>
}

export default AddToCart;