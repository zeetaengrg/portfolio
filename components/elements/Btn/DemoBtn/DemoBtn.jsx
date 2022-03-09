import { Box } from '@chakra-ui/react';
import { ImDisplay } from 'react-icons/im';

const DemoBtn = () => {
    return (
        <Box
            display="flex"
            gap="0.5rem"
            alignItems="center"
            justifyContent="center"
        >
            Live Demo
            <ImDisplay />
        </Box>
    );
}

export default DemoBtn;