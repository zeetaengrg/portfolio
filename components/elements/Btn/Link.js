export const linkStyle = {
  borderRadius: "0.35rem",
  padding: "0.6rem 1rem",
  backgroundColor: "#141E39",
  fontSize: "1.2rem",
  fontWeight: "600",
  transition: "all 0.3s ease",
  textTransform: "none",
  _hover: {
    "&::after": { content: "none" },
    bg: "#a5abbd",
    color: "#0b111e",
  },
  _focus: { outline: "none" },
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  lineHeight: "1",
  boxShadow:
    "4px 4px 8px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset",
};
