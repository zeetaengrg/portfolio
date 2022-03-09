const imgVariants = {
    hidden: {
        scale: 0,
    },
    visible: {
        scale: 1,
        transition: {
            delay: 0.4,
            duration: 0.5,
            type: "spring",
            stiffness: 110
        }
    }
}

export const imgStyle = {
    display: {
        base: "none",
        md: "block"
    },
    position: "absolute",
    bottom: "5rem",
    width: "50rem",
    opacity: "0.2"
}

export const flexStyle = {
    p: { base: "1.5rem", md: "2rem 0rem" },
    gap: { base: "2rem" },
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: { base: "column", md: "row" },
    position: "relative",
}