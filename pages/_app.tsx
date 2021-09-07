import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import Head from 'next/head';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<ColorModeProvider
				options={{
					useSystemColorMode: true,
				}}
			>
				<Head>
					<title>
						Sparter - Server-side rendered, SaaS Application Starter
					</title>
				</Head>
				<Component {...pageProps} />
			</ColorModeProvider>
		</ChakraProvider>
	);
}

export default MyApp;
