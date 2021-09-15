import { Flex, Icon, chakra, useColorModeValue } from '@chakra-ui/react';
import {
	Container,
	Feature,
	Footer,
	Header,
	Hero,
} from '../components/common/';
import React from 'react';
import { FiCopy } from 'react-icons/fi';

function Index() {
	function copy() {
		navigator.clipboard
			.writeText(
				'yarn create next-app --example https://github.com/opencatalysts/sparter my-app'
			)
			.catch((e) => {
				console.log(e);
			});
	}

	return (
		<Container height='auto' minH='100vh'>
			<Header />
			<chakra.div
				w='full'
				h='auto'
				d='flex'
				flexDirection='column'
				alignItems='center'
				justifyContent='flex-start'
				flex='1 0 auto'
			>
				<Hero />
				<Feature />
				<Flex
					w='full'
					maxW='container.xl'
					py={16}
					flexDirection='column'
					justifyContent='center'
					alignItems='start'
				>
					<chakra.h2
						mb={4}
						fontSize={{ base: '3xl', md: '4xl' }}
						fontWeight='extrabold'
						textAlign={{ base: 'center', sm: 'left' }}
						color={useColorModeValue('black', '')}
						lineHeight='shorter'
						letterSpacing='tight'
					>
						Quick to get started
					</chakra.h2>
					<chakra.p
						mb={6}
						fontSize={{ base: 'lg', md: 'xl' }}
						textAlign={{ base: 'center', sm: 'left' }}
						color={useColorModeValue('gray.600', 'gray.500')}
					>
						Create a new Next.js project with Sparter:
					</chakra.p>
					<Flex
						borderWidth={1}
						borderStyle='solid'
						borderRadius='lg'
						cursor='pointer'
						alignItems='center'
						justifyContent='space-between'
						fontSize='lg'
						mb={6}
						p={6}
						w='full'
						onClick={() => copy()}
					>
						<pre>
							<code>
								yarn create next-app --example
								https://github.com/opencatalysts/sparter my-app
							</code>
						</pre>
						<chakra.span>
							<Icon
								as={FiCopy}
								display='block'
								transition='color 0.2s'
								w='5'
								h='5'
								_hover={{ color: 'gray.600' }}
							/>
						</chakra.span>
					</Flex>
				</Flex>
			</chakra.div>
			<Footer />
		</Container>
	);
}

export default Index;
