import { Box, Flex, Image, Spacer } from '@chakra-ui/react';
import Link from 'next/link';

const Navbar = () => {
  	return (
		<Flex p='1rem 8rem'>
			<Box>
				<Link href='/' passHref>
					<a>
						<Image src='/images/logo.png' alt='Logo' />
					</a>
				</Link>
			</Box>
			<Spacer />
			<Flex gap='4rem' alignItems='center'>
				<Link href="/">
					<a>About Me</a>
				</Link>
				<Link href="#skills">
					<a>Skills</a>
				</Link>
				<Link href="#projects">
					<a>Projects</a>
				</Link>
				<Link href="#contact">
					<a>Contact</a>
				</Link>
			</Flex>
		</Flex>
  	)
};

export default Navbar;
