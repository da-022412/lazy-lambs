import Head from 'next/head';

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

                @font-face {
                    font-family: 'Work Sans';
                    font-style: normal;
                    font-weight: 400;
                    src: url('../../assets/fonts/WorkSans-Regular.ttf')
                        format('truetype');
                }

                @font-face {
                    font-family: 'Work Sans';
                    font-style: italic;
                    font-weight: 500;
                    src: url('../../assets/fonts/WorkSans-MediumItalic.ttf')
                        format('truetype');
                }

                @font-face {
                    font-family: 'Work Sans';
                    font-style: italic;
                    font-weight: 600;
                    src: url('../../assets/fonts/WorkSans-SemiBoldItalic.ttf')
                        format('truetype');
                }

                @font-face {
                    font-family: 'Work Sans';
                    font-style: normal;
                    font-weight: 700;
                    src: url('../../assets/fonts/WorkSans-Bold.ttf')
                        format('truetype');
                }

                @font-face {
                    font-family: 'Work Sans';
                    font-style: italic;
                    font-weight: 800;
                    src: url('../../assets/fonts/WorkSans-ExtraBoldItalic.ttf')
                        format('truetype');
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
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
