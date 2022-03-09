import * as Yup from "yup";
import { btnStyle } from "../../elements/Btn/Btn";

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

export const inputStyle = {
    width: { base: "20rem", md: "22rem" },
    bgColor: "#141E39",
    color: "#a5abbd",
    border: "none",
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset",
};

export const btn = {
    ...btnStyle,
    fontSize: "1.1rem",
    width: { base: "20rem", md: "22rem" },
    textTransform: "uppercase",
};

export const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
};

export const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    lastName: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    email: Yup.string()
        .email("Please Enter Valid Email")
        .required("Required"),
    message: Yup.string()
        .min(100, "Too Short!")
        .max(2000, "Too Long!")
        .required("Required"),
});

export const onSubmit = (values, {resetForm, setSubmitting}) => {
    setTimeout(() => {
        resetForm(initialValues);
        setSubmitting(false);
    }, 2000);
};