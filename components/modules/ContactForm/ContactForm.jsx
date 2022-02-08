import { VStack, FormLabel, Input, Textarea, Button, FormControl } from '@chakra-ui/react';
import { RiSendPlaneFill } from "react-icons/ri";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {

    const inputStyle = {
        width: { base: "20rem", md: "22rem" },
        bgColor: "#141E39",
        color: "#a5abbd",
    }

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
        message: ""
    };
    
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(3, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lastName: Yup.string()
            .min(3, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email('Please Enter Valid Email')
            .required('Required'),
        message: Yup.string()
            .min(100, 'Too Short!')
            .max(2000, 'Too Long!')
            .required('Required'),
    })
    
    const onSubmit = (values, actions) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.resetForm();
            actions.setSubmitting(false);
        }, 2000)
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(props) => (
                <Form>
                    <VStack spacing={2} alignItems="flex-start">
                        <FormLabel htmlFor="firstName">First Name</FormLabel>
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
                                <RiSendPlaneFill style={{ fontSize: "1.5rem" }} />
                            }
                        >
                            Send
                        </Button>
                    </VStack>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;
