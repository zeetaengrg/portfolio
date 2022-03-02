import { Link, Button } from '@chakra-ui/react';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { btnStyle } from '../Btn';

const GoBackBtn = () => {

    const linkStyle = {
        _hover: {
            "&::after": { content: "none" },
            color: "#a5abbd",
        },
        textTransform: "none",
        _focus: { boxShadow: "none" },
    };

    return (
        <>
            <Link sx={linkStyle} href="/">
                <Button
                    m={{ base: "2.69rem 0", md: "1.5rem 0" }}
                    sx={btnStyle}
                    rightIcon={<RiArrowGoBackLine />}
                >
                    Go Back
                </Button>
            </Link>
        </>
    );
};

export default GoBackBtn;
