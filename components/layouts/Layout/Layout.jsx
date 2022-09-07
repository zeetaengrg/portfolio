import { Box } from "@chakra-ui/react";
import { Footer, Navbar } from "@components/templates";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box as="main" display="flex" flexDirection="column" gap="5rem">
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
