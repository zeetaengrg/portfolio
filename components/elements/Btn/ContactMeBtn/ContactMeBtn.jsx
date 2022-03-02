import { Button } from "@chakra-ui/react";
import { IoMdContact } from "react-icons/io";
import { motion } from "framer-motion";
import { btnStyle } from "../Btn";

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

    return (
        <>
            <MotionBtn
                sx={btnStyle}
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
