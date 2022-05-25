import { useRef } from "react";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
import { RiSendPlaneFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { VStack, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import { commonVariants, inputStyle, btn } from "./ContactFormStyles";

const MotionVStack = motion(VStack);

const ContactForm = () => {
  const formRef = useRef();
  const router = useRouter();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mp496km",
        "template_y2jo2km",
        formRef.current,
        "QYs6XPIDZILbDUvfX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
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
            onClick={() => router.push("/thankyou")}
          >
            Send
          </Button>
        </MotionVStack>
      </form>
    </>
  );
};

export default ContactForm;
