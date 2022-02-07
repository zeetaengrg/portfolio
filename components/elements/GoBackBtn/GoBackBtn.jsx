import { Link, Button } from '@chakra-ui/react';
import { RiArrowGoBackLine } from 'react-icons/ri';

const GoBackBtn = () => {

    const linkStyle = {
        _hover: {
            "&::after": { content: "none" },
            color: "#a5abbd",
        },
        textTransform: "none",
        _focus: { boxShadow: "none" },
    };

    const btnStyle = {
        padding: "0 0.8rem",
        backgroundColor: "#141E39",
        fontSize: "1.2rem",
        _focus: { boxShadow: "none" },
        _hover: { bg: "#a5abbd", color: "#384765", borderColor: "#384765" },
        _active: { bg: "#a5abbd", color: "#384765", transform: "scale(0.98)" },
    };

    return (
        <>
            <Link sx={linkStyle} href="/">
                <Button
                    m={{ base: "2.69rem 0", md: "0.5rem 0" }}
                    variant="outline"
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
