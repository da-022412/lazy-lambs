import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T25GPNX');`,
                        }}
                    ></script>
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
                    <link
                        rel='manifest'
                        href='/assets/favicon/site.webmanifest'
                    />
                    <link
                        rel='mask-icon'
                        href='/assets/favicon/safari-pinned-tab.svg'
                        color='#171717'
                    />
                    <meta name='msapplication-TileColor' content='#171717' />
                    <meta name='theme-color' content='#171717' />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,600;0,700;1,500;1,800&display=swap'
                        rel='stylesheet'
                    />
                </Head>
                <body>
                    <noscript>
                        <iframe
                            src='https://www.googletagmanager.com/ns.html?id=GTM-T25GPNX'
                            height='0'
                            width='0'
                            style={{ display: 'none', visibility: 'hidden' }}
                        />
                    </noscript>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
