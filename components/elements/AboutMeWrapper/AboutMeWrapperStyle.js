import { FaGraduationCap } from "react-icons/fa";
import { GiAchievement, GiBookshelf } from "react-icons/gi";

export const wrapperList = [
	{
		id: 1,
		icon: <FaGraduationCap />,
		title: "Education",
		subtitle: "M.Sc. Computer Science(ongoing)",
	},
	{
		id: 2,
		icon: <GiBookshelf />,
		title: "Curriculums",
		subtitle: "3+ Courses",
	},
	{
		id: 3,
		icon: <GiAchievement />,
		title: "Certifications",
		subtitle: "2+ Certs",
	},
];

export const listItemStyle = {
	width: "7rem",
	bgColor: "#141E39",
	borderRadius: "0.5rem",
	padding: "0.8rem",
	display: "flex",
	gap: "0.5rem",
	textAlign: "center",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	boxShadow:
		"4px 4px 8px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset",
};

export const iconStyle = {
	color: "#fff",
	fontSize: "1.5rem",
	marginInlineEnd: "0rem",
};

export const titleStyle = {
	color: "#a5abbd",
	fontSize: "0.9rem",
};

export const subTitleStyle = {
	color: "#3892f9",
	fontSize: "0.8rem",
};
