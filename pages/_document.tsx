import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link
						rel='preconnect'
						href='https://fonts.googleapis.com'
					/>
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='true'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap'
						rel='stylesheet'
					/>
					{/* -- Global site tag (gtag.js) - Google Analytics --> */}
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments)}
						gtag('js', new Date());
						gtag('config', '${process.env.NEXT_PUBLIC_GTM_ID}');
						`,
						}}
					/>
				</Head>
				<body className='bg-white dark:bg-gray-1000'>
					<Main />

					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
