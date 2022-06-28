import { Box, Link, List, ListItem } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { linkStyle } from "../LinkStyle";
import { links, iconStyle } from "./SocialIconsLinksStyles";

const SocialIconLinks = () => {
  return (
    <List display="flex" justifyContent="center" alignItems="center" gap="1rem">
      {links.map((link) => (
        <ListItem key={link.id}>
          <Link
            href={link.url}
            aria-label={`Link to ${link.name} page`}
            {...linkStyle}
          >
            <Box as="figure" {...iconStyle}>
              {link.name === "Facebook" ? (
                <FaFacebook aria-label="Facebook Icon" />
              ) : link.name === "Instagram" ? (
                <FaInstagram aria-label="Instagram Icon" />
              ) : (
                <FaTwitter aria-label="Twitter Icon" />
              )}
            </Box>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default SocialIconLinks;
