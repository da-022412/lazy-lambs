import Head from 'next/head';

import '../assets/styles/reset.css';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <style global jsx>{`
                body,
                html {
                    background-color: #000;
                    margin: 0;
                    max-width: 100vw;
                    min-height: 100vh;
                    overflow-x: hidden;
                    padding: 0;
                    scroll-behavior: smooth;
                }

                a {
                    text-decoration: none;
                }
            `}</style>
            <Head>
                <title>Lazy Lambs</title>
                <meta name='description' content='Lazy Lambs' />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/assets/favicon/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/assets/favicon/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/assets/favicon/favicon-16x16.png'
                />
                <link rel='manifest' href='/site.webmanifest' />
                <link
                    rel='mask-icon'
                    href='/assets/favicon/safari-pinned-tab.svg'
                    color='#5bbad5'
                />
                <meta name='msapplication-TileColor' content='#da532c' />
                <meta name='theme-color' content='#ffffff' />
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossorigin
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,600;0,700;1,500;1,800&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
