import { VStack, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import { RiSendPlaneFill } from "react-icons/ri";
import { Formik, Form, ErrorMessage } from "formik";
import { motion } from "framer-motion";
import { commonVariants, inputStyle, btn, initialValues, validationSchema, onSubmit } from "./ContactFormStyles";

const MotionVStack = motion(VStack)

const ContactForm = () => {

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({isSubmitting}) => (
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
                        <ErrorMessage name="firstName" />
                        <FormLabel htmlFor="lastName">Last Name</FormLabel>
                        <Input
                            sx={inputStyle}
                            type="text"
                            placeholder="Insert Your Last Name..."
                            id="lastName"
                            name="lastName"
                            required
                        />
                        <ErrorMessage name="lastName" />
                        <FormLabel htmlFor="email">Email Address</FormLabel>
                        <Input
                            sx={inputStyle}
                            placeholder="Insert Your Email..."
                            name="email"
                            id="email"
                            type="email"
                            required
                        />
                        <ErrorMessage name="email" />
                        <FormLabel htmlFor="message">Message</FormLabel>
                        <Textarea
                            sx={inputStyle}
                            placeholder="Insert Your Message..."
                            name="message"
                            id="message"
                            height="10rem"
                            required
                        />
                        <ErrorMessage name="message" />
                        <Button
                            mt="1rem"
                            sx={btn}
                            type="submit"
                            isLoading={isSubmitting}
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
            )}
        </Formik>
    );
};

export default ContactForm;
