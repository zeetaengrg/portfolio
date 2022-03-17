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

export const wrapStyle = {
    display: "flex",
    fontSize: "1rem",
    padding: {
        base: "0.5rem 1.5rem",
        md: "0.5rem 1.5rem",
        lg: "1rem 3rem",
    }
}

export const linkStyle = {
    _hover:{
        "&::after": { content: "none" },
    },
    _focus: { outline: "none" },
    _active: { outline: "none" },
    textTransform: "none",
    fontWeight: "normal"
}

export const specialLinkStyle = {
    _hover:{
        "&::after": { content: "none" },
    },
    _focus: { outline: "none" },
    _active: { outline: "none" },
    textTransform: "none",
    fontFamily: "inherit",
    fontSize: { base: "1.1rem", md: "1.2rem" },
    fontWeight: "normal",
    textDecoration: "underline",
    fontStyle: "italic",
}