import { FaGraduationCap } from "react-icons/fa";
import { GiAchievement, GiBookshelf } from "react-icons/gi";

export const wrapperList = [
    {
        icon: <FaGraduationCap />,
        title: "Education",
        subtitle: "B.Sc. Hons",
    },
    {
        icon: <GiBookshelf />,
        title: "Curriculum",
        subtitle: "2+ Courses",
    },
    {
        icon: <GiAchievement />,
        title: "Certifications",
        subtitle: "2+ Certs",
    },
];

export const listItemStyle = {
    width: "7rem",
    bgColor: "#141E39",
    borderRadius: "0.3rem",
    padding: "0.8rem",
    display: "flex",
    gap: "0.5rem",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset",
}

export const iconStyle = {
    color: "#fff",
    fontSize: "1.5rem",
    marginInlineEnd: "0rem"
}

export const titleStyle = {
    color: "#a5abbd",
    fontSize: "0.8rem",
}

export const subTitleStyle = {
    color: "#3892f9",
    fontSize: "0.7rem"
}