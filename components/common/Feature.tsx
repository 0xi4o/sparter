import React from 'react';
import {
	chakra,
	Box,
	Flex,
	useColorModeValue,
	Icon,
	SimpleGrid,
	Stack,
	GridItem,
} from '@chakra-ui/react';

const Feature = () => {
	const FeatureItem = (props) => {
		return (
			<Flex>
				<Flex shrink={0}>
					<Icon
						boxSize={5}
						mt={1}
						mr={2}
						color={useColorModeValue('brand.500', 'brand.300')}
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path
							fillRule='evenodd'
							d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
							clipRule='evenodd'
						/>
					</Icon>
				</Flex>
				<Box ml={4}>
					<chakra.dt
						fontSize='lg'
						fontWeight='bold'
						lineHeight='6'
						color={useColorModeValue('gray.900', '')}
					>
						{props.title}
					</chakra.dt>
					<chakra.dd
						mt={2}
						color={useColorModeValue('gray.500', 'gray.400')}
					>
						{props.children}
					</chakra.dd>
				</Box>
			</Flex>
		);
	};

	return (
		<Flex
			py={16}
			w='auto'
			maxW='container.xl'
			justifyContent='center'
			alignItems='center'
			borderRadius='lg'
		>
			<Box
				shadow='xl'
				bg={useColorModeValue('white', 'gray.800')}
				px={12}
				py={20}
				mx='auto'
				borderRadius='lg'
			>
				<SimpleGrid
					alignItems='center'
					columns={{ base: 1, lg: 3 }}
					spacingY={{ base: 10, lg: 32 }}
					spacingX={{ base: 10, lg: 24 }}
				>
					<Box alignSelf='start'>
						<chakra.h2
							color={useColorModeValue('brand.500', '')}
							fontWeight='semibold'
							textTransform='uppercase'
							letterSpacing='wide'
						>
							Everything you need
						</chakra.h2>
						<chakra.h2
							mb={3}
							fontSize={{ base: '3xl', md: '4xl' }}
							fontWeight='extrabold'
							textAlign={{ base: 'center', sm: 'left' }}
							color={useColorModeValue('black', '')}
							lineHeight='shorter'
							letterSpacing='tight'
						>
							All-in-one web application starter
						</chakra.h2>
						<chakra.p
							mb={6}
							fontSize={{ base: 'lg', md: 'xl' }}
							textAlign={{ base: 'center', sm: 'left' }}
							color={useColorModeValue('gray.600', 'gray.500')}
						>
							Sparter is web application starter written in{' '}
							<chakra.a
								color='brand.200'
								href='https://nextjs.org'
								target='_blank'
								rel='noopener noreferrer'
							>
								Next.js
							</chakra.a>
							. Focus on building your product and avoid spending
							time configuring the different parts of your SaaS.
						</chakra.p>
					</Box>
					<GridItem colSpan={2}>
						<Stack
							spacing={{ base: 10, md: 0 }}
							display={{ md: 'grid' }}
							gridTemplateColumns={{ md: 'repeat(2,1fr)' }}
							gridColumnGap={{ md: 8 }}
							gridRowGap={{ md: 10 }}
						>
							<FeatureItem title='Server-side rendered'>
								Powered by Next.js, your landing pages are
								pre-rendered at build time and application is
								rendered at request time.
							</FeatureItem>
							<FeatureItem title='Postgres and MongoDB Connectors'>
								Connects to PostgreSQL and MongoDB using Prisma
								to quickly connect your database to your
								application.
							</FeatureItem>
							<FeatureItem title='Transactional Email'>
								Transactional Emails powered by AWS SES along
								with beautiful, pre-made HTML email templates.
							</FeatureItem>
							<FeatureItem title='Authentication'>
								Fully configurable authentication with
								passwordless and popular OAuth providers.
								Powered by NextAuth.
							</FeatureItem>
							<FeatureItem title='File Upload'>
								Pre-configured Upload API that uploads files to
								AWS S3 for user avatars, media files and more.
							</FeatureItem>
							<FeatureItem title='Analytics and Error Tracking'>
								Analytics for landing pages using Google
								Analytics. Error Tracking in your application
								using Sentry.
							</FeatureItem>
							<FeatureItem title='Built-in blog (Coming Soon)'>
								Beautiful, minimal blog powered by GraphCMS to
								deliver rich content to your customers.
							</FeatureItem>
							<FeatureItem title='Marketing Pages (Coming Soon)'>
								Sample landing pages, feature and call-to-action
								sections, newsletter forms and more blocks you
								can mix-and-match to build beautiful marketing
								pages.
							</FeatureItem>
							<FeatureItem title='Changelogs (Coming Soon)'>
								Announce product updates, releases, banners to
								your users right within your application.
							</FeatureItem>
							<FeatureItem title='Docs (Coming Soon)'>
								Need docs for your product? Easily create
								interactive documentation using MDX.
							</FeatureItem>
						</Stack>
					</GridItem>
				</SimpleGrid>
			</Box>
		</Flex>
	);
};

export default Feature;
