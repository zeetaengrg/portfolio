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
    width: {
        base: "250px",
        md: "750px",
    },
    height: {
        base: "150px",
        md: "362px",
    },
    margin: {
        base: "0 auto",
    },
    position: "relative",
    flex: "2",
    border: "1px solid rgba(165, 171, 189, 0.4)",
    borderRadius: "0.5rem",
    transition: "border 0.25s linear",
    _hover: {
        border: {
            base: "1px solid rgba(165, 171, 189, 0.4)",
            md: "none",
            lg: "none",
        },
    }
}

export const imgStyle = {
    objectFit: "cover",
    width: {
        base: "250px",
        md: "750px",
    },
    height: {
        base: "150px",
        md: "360px",
    },
    position: {
        base: "initial",
        md: "absolute",
    },
    top: {
        base: {
            margin: "0 auto",
        },
        md: "1.5rem",
    },
    left: {
        base: {
            margin: "0 auto",
        },
        md: "1.5rem",
    },
    borderRadius: "0.5rem",
    transition: "all 0.25s ease-in-out",
    boxShadow: "0 0.5rem 1.5rem 1rem rgba(0,0,0,0.5)",
    _hover: {
        base: "none",
        md: {
            transform: "translate(-1.5rem, -1.5rem)",
        },
    }
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

export const techFlexStyle = {
    flexWrap: "wrap",
    marginTop: "0.5rem",
    gap: "2rem",
    justifyContent: {
        base: "center",
        md: "left",
    },
}