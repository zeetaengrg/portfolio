import { Button } from "@chakra-ui/react";
import { IoMdContact } from "react-icons/io";

const ContactMeBtn = () => {

    const btnStyle = {
        padding: "0 0.8rem",
        backgroundColor: "#16213E",
        fontSize: "1.2rem",
        _focus: { boxShadow: "none" },
        _hover: { bg: "#a5abbd", color: "#384765", borderColor: "#384765" },
        _active: { bg: "#a5abbd", color: "#384765", transform: "scale(0.98)" },
    };

    return (
        <>
            <Button
                sx={btnStyle}
                variant="outline"
                size="lg"
                rightIcon={
                    <IoMdContact
                        style={{ fontSize: "1.5rem" }}
                    />
                }
            >
                Contact Me
            </Button>
        </>
    );
};

export default ContactMeBtn;
