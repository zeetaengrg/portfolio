import { Button } from "@chakra-ui/react";
import { FaHandshake } from "react-icons/fa";

const HireMeBtn = () => {

    const btnStyle = {
        padding: "0 0.8rem",
        backgroundColor: "#141E39",
        fontSize: "1.2rem",
        _focus: { boxShadow: "none" },
        _hover: { bg: "#a5abbd", color: "#384765", borderColor: "#384765" },
        _active: { bg: "#a5abbd", color: "#384765", transform: "scale(0.99)" },
    };

    return (
        <>
            <Button
                variant="outline"
                size="lg"
                sx={btnStyle}
                rightIcon={
                    <FaHandshake
                        style={{ fontSize: "1.5rem" }}
                    />
                }
            >
                Hire Me
            </Button>
        </>
    );
};

export default HireMeBtn;
