export const linkVariants = {
    hidden: {
        opacity: 0,
        y: -20,
    },
    visible: i => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 1,
            type: "spring",
            stiffness: 110,
        }
    })
}

export const linkItem = ["About Me", "Skills", "Projects", "Contacts"];

export const linkStyle = {
    _hover: {
        textDecoration: "none",
    },
    fontSize: {
        base: "0.72rem",
        md: "0.9rem",
    },
    _focus: { boxShadow: "none" },
    display: {
        base: "none",
        md: "block",
        lg: "block",
    }
};