import { Flex, Image, Tooltip } from "@chakra-ui/react";
import { icons } from "../../../../data/icons-data";
import { motion, AnimatePresence } from "framer-motion";

// const MotionImage = motion(Image)

// const imgVariants = {
//     hidden: {
//         opacity: 0,
//         y: "10vh",
//     },
//     visible: {
//         opacity: 1,
//         y: 0,
//     }
// }

const ToolsTab = () => {

    const flexStyle = {
        justifyContent: "center",
        gap: "2rem",
        flexWrap: {
            base: "wrap",
            md: "nowrap",
        }
    }

    const imageStyle = {
        height: { base: "4rem", md: "5.625rem" },
        width: { base: "4rem", md: "5.625rem" },
        objectFit: "contain",
    };

    return (
        <>
            {icons.map((icon, index) => (
                <Flex key={index} sx={flexStyle} >
                    {icon.tools.map(i => (
                        <Tooltip key={i.id} label={i.name} placement="top">
                            {/* <AnimatePresence> */}
                                <Image
                                    src={i.image}
                                    alt={i.name}
                                    sx={imageStyle}
                                    // variants={imgVariants}
                                    // initial="hidden"
                                    // animate="visible"
                                    // exit={{
                                    //     opacity: 0,
                                    //     y: "-10vh",
                                    // }}
                                    // transition={{ duration: 0.15 }}
                                />
                            {/* </AnimatePresence> */}
                        </Tooltip>
                    ))}
                </Flex>
            ))}
        </>
    );
};

export default ToolsTab;
