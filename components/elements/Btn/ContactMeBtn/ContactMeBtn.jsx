import { Link, Text } from "@chakra-ui/react";
import { MdAccountCircle } from "react-icons/md";
import { motion } from "framer-motion";
import { btnLinkStyle } from "../BtnLinkStyle";

const MotionLink = motion(Link);

const commonVariants = {
	hidden: {
		opacity: 0,
		y: "5vh",
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};

const ContactMeBtn = () => {
	return (
		<MotionLink
			href="#contacts"
			sx={btnLinkStyle}
			variants={commonVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{
				delay: 0.5,
				duration: 0.5,
			}}
			aria-label="Link To Contacts Section"
			aria-describedby="contact-me-btn-title"
		>
			<Text id="contact-me-btn-title">Contact Me</Text>
			<MdAccountCircle fontSize="1.5rem" aria-label="Contact Icon" />
		</MotionLink>
	);
};

export default ContactMeBtn;
