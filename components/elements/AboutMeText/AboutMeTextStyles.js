export const commonVariants = {
    hidden: {
        opacity: 0,
        y: "5vh",
    },
    visible: {
        opacity: 1,
        y: 0,
    }
}

export const linkStyle = {
    _hover:{
        "&::after": { content: "none" },
    },
    _focus: { outline: "none" },
    _active: { outline: "none" },
    textTransform: "none",
    fontWeight: "normal",
    fontSize: {
        base: "1rem",
        md: "1.2rem",
    }
}

export const specialLinkStyle = {
    _hover:{
        "&::after": { content: "none" },
    },
    _focus: { outline: "none" },
    _active: { outline: "none" },
    textTransform: "none",
    fontFamily: "inherit",
    fontSize: { base: "1rem", md: "1.2rem" },
    fontWeight: "normal",
    textDecoration: "underline",
    fontStyle: "italic",
}