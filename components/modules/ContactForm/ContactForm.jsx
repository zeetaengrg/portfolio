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
          <input
            type="hidden"
            name="_next"
            value="https://jitendragurung.com.np/thankyou"
          />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for reaching out. I will get back to you shortly!!!"
          />
          <input type="hidden" name="_subject" value="New submission!" />
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
          >
            Send
          </Button>
        </MotionVStack>
      </form>
    </>
  );
};

export default ContactForm;
