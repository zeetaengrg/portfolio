import { motion } from "framer-motion";
import {
	Flex,
	Text,
	Link,
	Divider,
	List,
	ListItem,
	Box,
} from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub, FaCodepen } from "react-icons/fa";
import { MdLocationPin, MdMailOutline } from "react-icons/md";
import {
	commonVariants,
	links,
	iconStyle,
	mailStyle,
	textStyle,
	flexStyle,
	socialIconStyle,
} from "./ContactInfoStyles";

const MotionFlex = motion(Flex);

const ContactInfo = () => {
	return (
		<MotionFlex
			as="section"
			display={{ base: "block", md: "none" }}
			flexDirection="column"
			justifyContent="center"
			gap={{ base: "1rem", md: "2rem" }}
			alignItems={{ base: "center" }}
			variants={commonVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			fontSize={{ base: "1.1rem" }}
			transition={{
				delay: 0.2,
				duration: 0.5,
				type: "tween",
			}}
		>
			<Flex
				as="article"
				direction="column"
				justifyContent="center"
				gap={{ base: "1rem", md: "2rem" }}
				alignItems={{ base: "center", md: "flex-start" }}
			>
				<Flex sx={flexStyle}>
					<MdLocationPin style={iconStyle} aria-label="Location Icon" />
					<Text sx={textStyle}>London, United Kingdom</Text>
				</Flex>
				<Flex sx={flexStyle}>
					<MdMailOutline style={iconStyle} aria-label="Mail Icon" />
					<Link
						href="mailto:zeetaen.gurung@gmail.com"
						sx={mailStyle}
						aria-label="Link to send mail to zeetaen.gurung@gmail.com"
					>
						<Text sx={textStyle}>zeetaen.gurung@gmail.com</Text>
					</Link>
				</Flex>
			</Flex>
			<Divider m="1rem 0rem" />
			<List display="flex" gap="5rem">
				{links.map((link) => (
					<ListItem key={link.id} m="0 auto">
						<Link
							href={link.url}
							aria-label={`Link to ${link.name} page`}
							_focus={{ outline: "none" }}
							target="_blank"
							rel="noopener noreferrer nofollow"
						>
							<Box as="figure" {...socialIconStyle}>
								{link.name === "LinkedIn" ? (
									<FaLinkedinIn aria-label="LinkedIn Icon" />
								) : link.name === "Github" ? (
									<FaGithub aria-label="Github Icon" />
								) : (
									<FaCodepen aria-label="Codepen Icon" />
								)}
							</Box>
						</Link>
					</ListItem>
				))}
			</List>
			<Divider m="1rem 0rem" />
		</MotionFlex>
	);
};

export default ContactInfo;
