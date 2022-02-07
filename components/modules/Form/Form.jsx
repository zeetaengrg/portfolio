import { VStack, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

const Form = () => {

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    };

    const onSubmit = (values, props) => {
        setTimeout(() => {
            props.resetForm();
            props.setSubmitting(false);
        }, 2000);
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(3, "Too Short!")
            .max(50, "Too Long!")    
            .required("Required!"),
        lastName: Yup.string()
            .min(3, "Too Short!")
            .max(50, "Too Long!")
            .required("Required!"),
        email: Yup.string()
            .email("Please Enter Valid Email!")
            .required("Required!"),
        message: Yup.string()
            .min(10, "Too Short!")
            .max(1000, "Too Long!")
            .required("Required!")
    });

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

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {props => (
                <VStack
                    spacing={2}
                    alignItems="flex-start"
                    onSubmit={props.handleSubmit}
                >
                    <FormLabel mb="0rem">First Name</FormLabel>
                    <Input
                        sx={inputStyle}
                        type="text"
                        placeholder="Insert Your First Name..."
                        name="firstName"
                        required
                    />
                    <FormLabel>Last Name</FormLabel>
                    <Input
                        sx={inputStyle}
                        type="text"
                        placeholder="Insert Your Last Name..."
                        name="lastName"
                        required
                    />
                    <FormLabel>Email Address</FormLabel>
                    <Input
                        sx={inputStyle}
                        placeholder="Insert Your Email..."
                        name="email"
                        type="email"
                        required
                    />
                    <FormLabel>Message</FormLabel>
                    <Textarea
                        sx={inputStyle}
                        placeholder="Insert Your Message..."
                        name="message"
                        height="10rem"
                        required
                    />
                    <Button
                        mt="1rem"
                        variant="outline"
                        sx={btnStyle}
                        type="submit"
                        disabled={props.isSubmitting}
                    >
                        {props.isSubmitting ? "Loading..." : "Send"}
                    </Button>
                </VStack>
            )}
        </Formik>
    );
};

export default Form;
