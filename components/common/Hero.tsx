import NextLink from 'next/link';
import {
	chakra,
	Box,
	useColorModeValue,
	Flex,
	Button,
	HStack,
} from '@chakra-ui/react';

const Hero = () => {
	return (
		<Flex maxW='container.xl' px={4} py={32} justifyContent='start'>
			<Box w={{ lg: 10 / 12, xl: 8 / 12 }}>
				<chakra.h1
					mb={4}
					fontSize={{ base: '3xl', md: '4xl' }}
					fontWeight='bold'
					lineHeight='tall'
					color={useColorModeValue('gray.900', 'white')}
				>
					All the things you need to start building your web
					application in one place
				</chakra.h1>
				<chakra.p
					mb={4}
					color='gray.500'
					fontSize='xl'
					lineHeight='tall'
				>
					Sparter comes with all the parts you need to quickly ship
					your product — component library, database connectors,
					authentication, transactional email, analytics, and more.
				</chakra.p>
				<HStack spacing={4}>
					<NextLink href='/docs' passHref={true}>
						<Button
							as='a'
							w={{ base: 'full', sm: 'auto' }}
							variant='solid'
							colorScheme='brand'
							size='lg'
							p={6}
							fontSize='xl'
							cursor='pointer'
						>
							Get Started
						</Button>
					</NextLink>
				</HStack>
			</Box>
		</Flex>
	);
};

export default Hero;
