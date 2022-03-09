import { Box } from "@chakra-ui/react";
import { FaCodeBranch } from "react-icons/fa";

const SourceBtn = () => {
    return (
        <Box
            display="flex"
            gap="0.5rem"
            alignItems="center"
            justifyContent="center"
        >
            Source Code
            <FaCodeBranch />
        </Box>
    );
}

export default SourceBtn;