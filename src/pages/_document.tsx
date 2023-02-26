import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html className='h-full bg-gray-100'>
                <Head>
                    <link
                        rel='preconnect'
                        href='https://rsms.me/inter/inter.css'
                    />
                </Head>
                <body className='h-full select-none'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
