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

export const links = [
    {
        name: "LinkedIn Icon",
        url: "https://www.linkedin.com/in/zeetaen1878/",
    },
    {
        name: "Github Icon",
        url: "https://github.com/zeetaen1989"
    },
    {
        name: "Codepen Icon",
        url: "https://codepen.io/zeetaen1989"
    }
]

export const iconStyle = {
    fontSize: "2rem",
};

export const textStyle = {
    fontSize: "1.2rem",
    textTransform: "none",
};

export const flexStyle = {
    gap: "1rem",
    alignItems: "center",
};

export const socialLinkStyle = {
    textTransform: "none",
    _focus: { boxShadow: "none" },
    fontSize: "2rem",
    cursor: "pointer",
    transition: "all 0.25s linear",
    _hover: {
        transform: "translateY(5px)",
        color: "#fff",
        "&::after": { content: "none" },
    },
    target: "_blank",
    rel: "noopener noreferrer nofollow",
};