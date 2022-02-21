import Head from 'next/head';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
    return (
        <>
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
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
