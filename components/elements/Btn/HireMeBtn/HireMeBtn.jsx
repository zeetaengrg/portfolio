import { Button } from "@chakra-ui/react";
import { FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBtn = motion(Button);

const btnVariants = {
    hidden: {
        opacity: 0,
        y: "10vh",
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 1,
            type: "spring",
            stiffness: 110,
        }
    }
}

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
            <MotionBtn
                variant="outline"
                size="lg"
                sx={btnStyle}
                rightIcon={
                    <FaHandshake
                        style={{ fontSize: "1.5rem" }}
                    />
                }
                variants={btnVariants}
                initial="hidden"
                animate="visible"
            >
                Hire Me
            </MotionBtn>
        </>
    );
};

export default HireMeBtn;
