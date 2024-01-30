'use client';

import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_ITEM } from '@/redux/slices/cartSlice';
import Image from 'next/image';

function Cart() {

    const { cartItems, totalPrice } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    function removeItem(product) {
        dispatch(REMOVE_ITEM(product));
    }

    return (
        <>
            <div className='row'>
                <div className='col-9 py-5'>
                    <table className='table table-bordered table-dark table-hover table-striped text-center align-middle'>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map((item) => (
                                    <tr key={item.slug}>
                                        <td>
                                            <span className='d-flex justify-content-around align-items-center'><Image src={item.image} width={30} height={35} alt={item.title} /> {item.title}</span>
                                        </td>
                                        <td>{item.qty}</td>
                                        <td>{item.price}</td>
                                        <td><button className='btn btn-danger' onClick={removeItem.bind(null, item)}>Remove</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className='col-3 py-5'>
                    <p className='text-center p-5 bg-dark text-white'>totalPrice : {totalPrice ? totalPrice : 0}</p>
                </div>
            </div>
        </>
    );
}

export default Cart;