export const blobOneVariants = {
    start: {
        scale: 0.9,
    },
    finish: {
        scale: 1.2,
        transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 3,
        }
    }
}

export const blobTwoVariants = {
    start: {
        scale: 0.8,
    },
    finish: {
        scale: 1.3,
        transition: {
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 3,
        }
    }
}

export const blobThreeVariants = {
    start: {
        scale: 0.8,
    },
    finish: {
        scale: 1.2,
        transition: {
            delay: 3,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 3,
        }
    }
}

export const blobFourVariants = {
    start: {
        scale: 0.8,
    },
    finish: {
        scale: 1.2,
        transition: {
            delay: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 3,
        }
    }
}

export const commonVariants = {

    hidden: {
        opacity: 0,
        y: "10vh",
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.8,
            duration: 1,
            type: "spring",
            stiffness: 110,
        },
    },
};

export const blobOneStyle = {
    position: "absolute",
    top: "12rem",
    left: "-10rem",
    width: "50vw",
    height: "100vh",
    opacity: "0.15",
    display: {
        base: "none",
        md: "block",
    }
}

export const blobTwoStyle = {
    position: "absolute",
    top: "5rem",
    right: "5em",
    width: "20vw",
    height: "40vh",
    opacity: "0.5",
    display: {
        base: "none",
        md: "block",
    }
}

export const blobThreeStyle = {
    position: "absolute",
    top: "10rem",
    left: "35rem",
    width: "20vw",
    height: "40vh",
    opacity: "0.2",
    display: {
        base: "none",
        md: "block",
    }
}

export const blobFourStyle = {
    position: "absolute",
    top: "7rem",
    left: "10rem",
    width: "5vw",
    height: "15vh",
    opacity: "0.5",
    display: {
        base: "none",
        md: "block",
    }
}

export const flexStyle = {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    height: {
        base: "100%",
        md: "60vh",
        lg: "87vh",
    },
    gap: {
        base: "1rem",
        md: "2rem",
    },
    flexDirection: {
        base: "column",
        md: "row",
    },
};

export const imgStyle = {
    borderRadius: "50%",
    boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.5)",
    width: {
        base: "8rem",
        md: "12rem",
        lg: "17rem",
    },
};

export const linkStyle = {
    _hover: {
        "&::after": {
            content: "none",
        },
    },
};