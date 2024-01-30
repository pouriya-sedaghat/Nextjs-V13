'use client';

import Header from './Header';
import Footer from './Footer';

function App({ children }) {
    return (
        <>
            <Header />
            <main className='container py-3'>{children}</main>
            <Footer />
        </>
    );
}

export default App;