import { Box, Link, List, ListItem } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { linkStyle } from "../LinkStyle";
import { links, iconStyle } from "./SocialIconsLinksStyles";

const SocialIconLinks = () => {
  return (
    <List display="flex" justifyContent="center" alignItems="center" gap="1rem">
      {links.map((link) => (
        <ListItem key={link.id}>
          <Link href={link.url} aria-label={link.name} {...linkStyle}>
            <Box as="figure" {...iconStyle}>
              {link.name === "Facebook" ? (
                <FaFacebook />
              ) : link.name === "Instagram" ? (
                <FaInstagram />
              ) : (
                <FaTwitter />
              )}
            </Box>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default SocialIconLinks;
