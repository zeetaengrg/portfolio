import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Heading,
  Text,
  VStack,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import { RiSendPlaneFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { commonVariants, inputStyle, btn } from "./ContactFormStyles";

const MotionVStack = motion(VStack);

const ContactForm = () => {
  const formRef = useRef();
  const toast = useToast();
  const [isEmpty, setIsEmpty] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mp496km",
        "template_m3uh723",
        formRef.current,
        "QYs6XPIDZILbDUvfX"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsEmpty(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setTimeout(() => {
      e.target.reset();
    }, 500);
  };

  return (
    <>
      <form ref={formRef} onSubmit={sendEmail}>
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
            rightIcon={<RiSendPlaneFill style={{ fontSize: "1.5rem" }} />}
            onClick={() => {
              toast({
                render: () =>
                  isEmpty ? (
                    <Box
                      color="#0b111e"
                      p={3}
                      bg="#a5abbd"
                      borderRadius="0.4rem"
                      textAlign="center"
                    >
                      <Heading as="h3" size="md">
                        Please Fill Out the Form
                      </Heading>
                    </Box>
                  ) : (
                    <Box
                      color="#0b111e"
                      p={3}
                      bg="#a5abbd"
                      borderRadius="0.4rem"
                      textAlign="center"
                    >
                      <Heading as="h3">Message Sent!!!</Heading>
                      <Text fontSize="1rem">
                        Thank You for contacting me. Your message has been sent
                        successfully!
                      </Text>
                    </Box>
                  ),
                duration: 2500,
                isClosable: true,
              });
            }}
          >
            Send
          </Button>
        </MotionVStack>
      </form>
    </>
  );
};

export default ContactForm;
