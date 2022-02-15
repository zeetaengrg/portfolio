import { VStack, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import { RiSendPlaneFill } from "react-icons/ri";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

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
    };

    const btnStyle = {
        width: { base: "20rem", md: "22rem" },
        bgColor: "#141E39",
        color: "#a5abbd",
        fontSize: "1.1rem",
        textTransform: "uppercase",
        _focus: { boxShadow: "none" },
        _hover: { bg: "#a5abbd", color: "#384765", borderColor: "#0F3460" },
        _active: { bg: "#a5abbd", color: "#384765", transform: "scale(0.99)" },
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
                                variant="outline"
                                sx={btnStyle}
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
