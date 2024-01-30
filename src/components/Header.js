import Link from 'next/link';
import { useSelector } from 'react-redux';

function Header() {

    const { cartItems } = useSelector(state => state.cart);

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 d-flex justify-content-between align-items-center bg-dark text-white py-2'>
                    <h1><Link href='/' className='px-2'>Shopping</Link></h1>
                    <ul className='d-flex  m-0 p-0'>
                        <li className='me-1'><Link href='/cart' className='px-2'>Cart <span>{cartItems.reduce((acc, cur) => acc + cur.qty, 0)}</span></Link></li>
                        <li><Link href='/login' className='px-2'>Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;