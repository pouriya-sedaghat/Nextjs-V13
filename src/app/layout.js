import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import localFont from 'next/font/local';
import App from '@/components/App';
import { StoreProvider } from '@/redux/StoreProvider';

export const metadata = {
  title: 'Shopping Cart',
  description: 'Develope With Nextjs V-13'
}

const customFont = localFont({
  src: './../../public/fonts/Satisfy-Regular.woff2'
})

function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${customFont.className} mode`}>
        <StoreProvider>
          <App>{children}</App>
        </StoreProvider>
      </body>
    </html>
  );
}

export default RootLayout;