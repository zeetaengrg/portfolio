import { Link, Text } from "@chakra-ui/react";
import { FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import { btnLinkStyle } from "../BtnLinkStyle";

const MotionLink = motion(Link);

const btnVariants = {
	hidden: {
		opacity: 0,
		y: "5vh",
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 1.9,
			duration: 0.6,
		},
	},
};

const HireMeBtn = () => {
	return (
		<MotionLink
			sx={btnLinkStyle}
			href="#contacts"
			variants={btnVariants}
			initial="hidden"
			animate="visible"
			aria-label="Link To Contact Me Section"
			aria-describedby="hire-me-btn-title"
		>
			<Text id="hire-me-btn-title">Hire Me</Text>
			<FaHandshake fontSize="1.5rem" aria-label="Handshake Icon" />
		</MotionLink>
	);
};

export default HireMeBtn;
