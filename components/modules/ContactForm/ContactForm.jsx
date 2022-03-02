import { VStack, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import { RiSendPlaneFill } from "react-icons/ri";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { btnStyle } from "../../elements/Btn/Btn";

const MotionVStack = motion(VStack)

const commonVariants = {
    hidden: {
        opacity: 0,
        y: "5vh",
    },
    visible: {
        opacity: 1,
        y: 0,
    }
}

const ContactForm = () => {
    const inputStyle = {
        width: { base: "20rem", md: "22rem" },
        bgColor: "#141E39",
        color: "#a5abbd",
        border: "none",
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset",
    };

    const btn = {
        ...btnStyle,
        fontSize: "1.1rem",
        width: { base: "20rem", md: "22rem" },
        textTransform: "uppercase",
    };

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    };

    const validationSchema = Yup.object().shape({
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

    const onSubmit = (values, actions) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.resetForm();
            actions.setSubmitting(false);
        }, 2000);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(props) => (
                <Form>
                    <form
                        action="https://formsubmit.co/69c115d95dc7b2b56652acc2a86de33b"
                        method="POST"
                    >
                        <MotionVStack
                            spacing={2}
                            alignItems="flex-start"
                            variants={commonVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.2,
                                duration: 0.5,
                                type: "tween",
                            }}
                        >
                            <input
                                type="hidden"
                                name="_next"
                                value="https://jitendragurung.com.np/thankyou"
                            />
                            <input
                                type="hidden"
                                name="_template"
                                value="table"
                            />
                            <input
                                type="hidden"
                                name="_autoresponse"
                                value="Thank you for reaching out. I will get back to you shortly!!!"
                            />
                            <input
                                type="hidden"
                                name="_subject"
                                value="New submission!"
                            />
                            <FormLabel htmlFor="firstName" mb="0rem">
                                First Name
                            </FormLabel>
                            <Input
                                sx={inputStyle}
                                type="text"
                                placeholder="Insert Your First Name..."
                                id="firstName"
                                name="firstName"
                                required
                            />
                            <FormLabel htmlFor="lastName">Last Name</FormLabel>
                            <Input
                                sx={inputStyle}
                                type="text"
                                placeholder="Insert Your Last Name..."
                                id="lastName"
                                name="lastName"
                                required
                            />
                            <FormLabel htmlFor="email">Email Address</FormLabel>
                            <Input
                                sx={inputStyle}
                                placeholder="Insert Your Email..."
                                name="email"
                                id="email"
                                type="email"
                                required
                            />
                            <FormLabel htmlFor="message">Message</FormLabel>
                            <Textarea
                                sx={inputStyle}
                                placeholder="Insert Your Message..."
                                name="message"
                                id="message"
                                height="10rem"
                                required
                            />
                            <Button
                                mt="1rem"
                                sx={btn}
                                type="submit"
                                isLoading={props.isSubmitting}
                                loadingText="Sending..."
                                rightIcon={
                                    <RiSendPlaneFill
                                        style={{ fontSize: "1.5rem" }}
                                    />
                                }
                            >
                                Send
                            </Button>
                        </MotionVStack>
                    </form>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;
