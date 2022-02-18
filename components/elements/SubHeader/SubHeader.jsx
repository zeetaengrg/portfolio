import { motion } from "framer-motion";
import { Center, Text } from "@chakra-ui/react";

const MotionText = motion(Text)

const commonVariants = {
	hidden: {
        opacity: 0,
        y: "5vh",
    },
    visible: {
        opacity: 1,
        y: 0,
    }
};

const SubHeader = (props) => {

    const { subHeading } = props;

    return (
        <Center>
            <MotionText
                fontWeight="bold"
                fontSize="1.1rem"
                variants={commonVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.3, duration: 0.5, type: "tween" }}
                viewport={{ once: true }}
            >
                {subHeading}
            </MotionText>
        </Center>
    )
}

export default SubHeader;