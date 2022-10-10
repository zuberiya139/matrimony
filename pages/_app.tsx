/* eslint-disable import/no-unresolved */
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Navbar from 'components/common/Navbar';
import Footer from 'components/common/Footer/Footer';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
    </>
);

export default MyApp;
