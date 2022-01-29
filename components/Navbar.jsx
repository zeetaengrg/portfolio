import { Box, Flex, Image, Link, Spacer } from '@chakra-ui/react';
import NextLink from 'next/link';

const Navbar = () => {
  	return (
		<Flex p='1rem 8rem'>
			<Box>
				<NextLink href='/'>
					<Link>
							<Image src='/images/logo.png' alt='Logo' />
					</Link>
				</NextLink>
			</Box>
			<Spacer />
			<Flex gap='4rem' alignItems='center'>
				<NextLink href='/'>
					<Link _hover={{ textDecoration: 'none' }}>
						About Me
					</Link>
				</NextLink>
				<NextLink href='#skills'>
					<Link _hover={{ textDecoration: 'none' }}>
						Skills
					</Link>
				</NextLink>
				<NextLink href='#projects'>
					<Link _hover={{ textDecoration: 'none' }}>
						Projects
					</Link>
				</NextLink>
				<NextLink href='#contact'>
					<Link _hover={{ textDecoration: 'none' }}>
						Contact
					</Link>
				</NextLink>
			</Flex>
		</Flex>
  	)
};

export default Navbar;
