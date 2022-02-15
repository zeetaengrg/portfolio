import { Button } from "@chakra-ui/react";
import { IoMdContact } from "react-icons/io";
import { motion } from "framer-motion";

const MotionBtn = motion(Button);

const commonVariants = {
    hidden: {
        opacity: 0,
        y: "5vh",
    },
    visible: {
        opacity: 1,
        y: 0,
    }
}

const ContactMeBtn = () => {

    const btnStyle = {
        padding: "0 0.8rem",
        backgroundColor: "#16213E",
        fontSize: "1.2rem",
        _focus: { boxShadow: "none" },
        _hover: { bg: "#a5abbd", color: "#384765", borderColor: "#384765" },
        _active: { bg: "#a5abbd", color: "#384765", transform: "scale(0.99)" },
    };

    return (
        <>
            <MotionBtn
                sx={btnStyle}
                variant="outline"
                size="lg"
                rightIcon={
                    <IoMdContact
                        style={{ fontSize: "1.5rem" }}
                    />
                }
                variants={commonVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                    delay: 0.1,
                    duration: 0.5,
                    type: "tween",
                    stiffness: 110,
                }}
            >
                Contact Me
            </MotionBtn>
        </>
    );
};

export default ContactMeBtn;
