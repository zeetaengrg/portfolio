import { motion } from "framer-motion";
import { Box, Link, ListItem, UnorderedList } from "@chakra-ui/react";

import { LogoImage, MobileNavbar } from "@components/elements";
import { linkItem, linkStyle, linkVariants } from "./NavbarStyles";

const MotionLink = motion(Link);

const Navbar = () => {
	return (
		<Box
			as="header"
			display="flex"
			alignItems="center"
			justifyContent="space-between"
			p={{ base: "0.5rem 2rem", md: "0.5rem 4rem", lg: "0.5rem 6rem" }}
			position="relative"
			zIndex="999"
		>
			<Box as="figure">
				<LogoImage />
			</Box>
			<Box
				as="nav"
				display="flex"
				alignItems="center"
				aria-label="Primary navigation links"
			>
				<UnorderedList listStyleType="none" display="flex" gap="3rem">
					{linkItem.map((item, i) => (
						<ListItem key={item}>
							<MotionLink
								href={`/#${item.replace(/\s+/g, "").toLowerCase()}`}
								sx={linkStyle}
								variants={linkVariants}
								custom={i}
								initial="hidden"
								animate="visible"
								aria-label={`Navigation link to ${item} section`}
							>
								{item}
							</MotionLink>
						</ListItem>
					))}
				</UnorderedList>
				<MobileNavbar />
			</Box>
		</Box>
	);
};

export default Navbar;
