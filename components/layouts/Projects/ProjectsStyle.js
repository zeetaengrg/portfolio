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

export const flexStyle = {
    margin: {
        base: "1.5rem 2rem",
        md: "4rem 6rem",
    },
    gap: {
        base: "1.5rem",
        md: "2rem",
    },
    justifyContent: "center",
}

export const boxStyle = {
    flex: "2",
}

export const imgStyle = {
    borderRadius: "0.5rem",
    boxShadow: "0 0.5rem 1.5rem 1rem rgba(0,0,0,0.5)",
};

export const linkContainer = {
    display: "flex",
    justifyContent: {
        base: "center",
        md: "flex-start",
    },
    gap: "1rem",
    marginTop: "0.5rem",
}

export const linkToProjects = {
    backgroundColor: "#141E39",
    padding: "0.3rem 0.4rem",
    borderRadius: "0.3rem",
    _hover: {
        "&::after": { content: "none" },
        backgroundColor: "#a5abbd",
        color: "#0B111E",
    },
    _focus: { boxShadow: "none" },
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset",
}

export const techTextStyle = {
    color: "#ecb7d4",
    mt: "0.5rem",
    textTransform: "uppercase",
    textAlign: {
        base: "center",
        md: "left",
    }
}