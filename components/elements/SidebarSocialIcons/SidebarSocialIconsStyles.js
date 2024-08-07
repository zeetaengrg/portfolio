import {
	FaCodepen,
	FaFacebook,
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";

export const links = [
	{
		id: 1,
		title: "LinkedIn",
		url: "https://www.linkedin.com/in/zeetaen/",
		icon: <FaLinkedinIn aria-label="LinkedIn Icon" />,
	},
	{
		id: 2,
		title: "Github",
		url: "https://github.com/zeetaengrg/",
		icon: <FaGithub aria-label="Github Icon" />,
	},
	{
		id: 3,
		title: "CodePen",
		url: "https://codepen.io/zeetaen/",
		icon: <FaCodepen aria-label="Codepen Icon" />,
	},
	{
		id: 4,
		title: "Facebook",
		url: "https://www.facebook.com/zeetaen/",
		icon: <FaFacebook aria-label="Facebook Icon" />,
	},
	{
		id: 5,
		title: "Instagram",
		url: "https://www.instagram.com/zeetaen/",
		icon: <FaInstagram aria-label="Instagram Icon" />,
	},
	{
		id: 6,
		title: "Twitter",
		url: "https://twitter.com/zeetaen/",
		icon: <FaTwitter aria-label="Twitter Icon" />,
	},
];

export const commonVariants = {
	hidden: {
		opacity: 0,
		x: -20,
	},
	visible: {
		opacity: 1,
		x: 0,
	},
};

export const boxVariants = {
	start: {
		opacity: 0,
		transition: {
			when: "afterChildren",
		},
	},
	end: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.2,
		},
	},
};

export const arrowContainerStyle = {
	m: "auto 0",
	bg: "#141D38",
	p: "1rem 1.25rem",
	display: "grid",
	placeItems: "center",
	borderRadius: "0rem 2rem 2rem 0rem",
	boxShadow: "0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.3)",
	position: "relative",
	_before: {
		content: '""',
		position: "absolute",
		bg: "transparent",
		height: "1rem",
		width: "1rem",
		top: "-0.95rem",
		left: "0rem",
		borderBottomLeftRadius: "1rem",
		boxShadow: "-3px 4px 0 3px #141D38",
	},
	_after: {
		content: '""',
		position: "absolute",
		bg: "transparent",
		height: "1rem",
		width: "1rem",
		top: "2rem",
		left: "0rem",
		borderTopLeftRadius: "1rem",
		boxShadow: "-3px -4px 0 3px #141D38",
	},
};

export const arrowVariants = {
	start: {
		opacity: 0,
	},
	end: {
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: "easeInOut",
			repeat: Infinity,
			repeatType: "reverse",
		},
	},
};

export const socialLinkStyle = {
	fontSize: "1.5rem",
	cursor: "pointer",
	_focus: { boxShadow: "none" },
	_hover: {
		color: "#fff",
		"&::after": { content: "none" },
	},
	transition: "all 0.25s linear",
};
