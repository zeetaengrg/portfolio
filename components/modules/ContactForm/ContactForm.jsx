import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
import { RiSendPlaneFill } from "react-icons/ri";
import { VStack, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import { commonVariants, inputStyle, btn } from "./ContactFormStyles";

const MotionVStack = motion(VStack);

const ContactForm = () => {
  const formRef = useRef();
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleFullName = (e) => setFullName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleSubject = (e) => setSubject(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const canSend =
    Boolean(fullName) && Boolean(email) && Boolean(subject) && Boolean(message);

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
    router.push("/thankyou");
  };

  return (
    <form ref={formRef} onSubmit={sendEmail}>
      <MotionVStack
        as="article"
        spacing={2}
        alignItems="flex-start"
        variants={commonVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 0.5,
        }}
      >
        <FormLabel htmlFor="fullName" mb="0rem" fontSize={{ base: "1.1rem" }}>
          Full Name
        </FormLabel>
        <Input
          sx={inputStyle}
          type="text"
          placeholder="Insert Your Full Name..."
          id="fullName"
          name="fullName"
          onChange={handleFullName}
        />
        <FormLabel htmlFor="email" fontSize={{ base: "1.1rem" }}>
          Email Address
        </FormLabel>
        <Input
          sx={inputStyle}
          type="email"
          placeholder="Insert Your Email Address..."
          id="email"
          name="email"
          onChange={handleEmail}
        />
        <FormLabel htmlFor="subject" fontSize={{ base: "1.1rem" }}>
          Subject
        </FormLabel>
        <Input
          sx={inputStyle}
          type="text"
          placeholder="Insert Your Subject..."
          id="subject"
          name="subject"
          onChange={handleSubject}
        />
        <FormLabel htmlFor="message" mb="0rem" fontSize={{ base: "1.1rem" }}>
          Message
        </FormLabel>
        <Textarea
          sx={inputStyle}
          placeholder="Insert Your Message..."
          name="message"
          id="message"
          height="10rem"
          aria-label="Write your message here"
          onChange={handleMessage}
        />
        <Button
          mt="1rem"
          sx={btn}
          type="submit"
          rightIcon={
            <RiSendPlaneFill
              style={{ fontSize: "1.5rem" }}
              aria-label="Send Icon"
            />
          }
          disabled={!canSend}
          aria-label="Sends your message to me"
        >
          Send
        </Button>
      </MotionVStack>
    </form>
  );
};

export default ContactForm;
