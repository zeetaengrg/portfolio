import { Button } from "@chakra-ui/react";
import { FaCloudDownloadAlt } from "react-icons/fa";

const DownloadBtn = () => {

    const btnStyle = {
        padding: "0 0.8rem",
        backgroundColor: "#141E39",
        fontSize: "1.2rem",
        justifyContent: {
            base: "center",
            md: "start"
        },
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
                onClick={(isLoading) => {}}
                isLoading={false}
                loadingText="Downloading"
                spinnerPlacement="end"
                rightIcon={
                    <FaCloudDownloadAlt
                        style={{ fontSize: "1.5rem" }}
                    />
                }
            >
                {/* {isLoading ? "Downloading..." : "Download CV"} */}
                Download CV
            </Button>
        </>
    );
};

export default DownloadBtn;
