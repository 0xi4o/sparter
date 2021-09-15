import {
	Link as ChakraLink,
	Text,
	Code,
	List,
	ListIcon,
	ListItem,
	Stack,
} from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import { Container, Footer, Header } from '../../components/common';

const Index = () => (
	<Container height='100vh'>
		<Header />
		<Stack
			spacing='1.5rem'
			width='100%'
			maxWidth='48rem'
			pt='8rem'
			px='1rem'
			flexDirection='column'
			alignItems='center'
			justifyContent='flex-start'
			flex='1 0 auto'
		>
			<Text>
				Example repository of <Code>Next.js</Code> +{' '}
				<Code>chakra-ui</Code> + <Code>typescript</Code>.
			</Text>

			<List spacing={3} my={0}>
				<ListItem>
					<ListIcon as={CheckCircleIcon} color='green.500' />
					<ChakraLink
						isExternal
						href='https://chakra-ui.com'
						flexGrow={1}
						mr={2}
					>
						Chakra UI <LinkIcon />
					</ChakraLink>
				</ListItem>
				<ListItem>
					<ListIcon as={CheckCircleIcon} color='green.500' />
					<ChakraLink
						isExternal
						href='https://nextjs.org'
						flexGrow={1}
						mr={2}
					>
						Next.js <LinkIcon />
					</ChakraLink>
				</ListItem>
			</List>
		</Stack>
		<Footer />
	</Container>
);

export default Index;
