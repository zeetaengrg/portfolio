import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
import { RiSendPlaneFill } from "react-icons/ri";
import {
  VStack,
  FormLabel,
  Input,
  Textarea,
  Button,
  Text,
  FormControl,
} from "@chakra-ui/react";
import { commonVariants, inputStyle, btn } from "./ContactFormStyles";
import { FaInfoCircle } from "react-icons/fa";

const MotionVStack = motion(VStack);

const USER_REGEX = /^[a-zA-Z ][a-zA-Z ]{3,23}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const ContactForm = () => {
  const router = useRouter();

  const formRef = useRef();
  const userRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();

  const [fullName, setFullName] = useState("");
  const [validFullName, setValidFullName] = useState(false);
  const [fullNameFocus, setFullNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [subject, setSubject] = useState("");
  const [subjectFocus, setSubjectFocus] = useState(false);

  const [message, setMessage] = useState("");
  const [messageFocus, setMessageFocus] = useState(false);

  useEffect(() => {
    const result = USER_REGEX.test(fullName);
    setValidFullName(result);
  }, [fullName]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

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
        <FormControl>
          <FormLabel htmlFor="fullName" fontSize={{ base: "1.1rem" }}>
            Full Name
          </FormLabel>
          <Input
            sx={inputStyle}
            ref={userRef}
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            autoComplete="off"
            placeholder="Insert Your Full Name..."
            aria-describedby="fullNameNote"
            aria-invalid={validFullName ? "false" : "true"}
            onFocus={() => setFullNameFocus(true)}
            onBlur={() => setFullNameFocus(false)}
          />
          {fullNameFocus && fullName && !validFullName ? (
            <Text
              id="fullNameNote"
              position="relative"
              padding="0.25rem 0.5rem"
              borderRadius="0.5rem"
              fontSize="0.75rem"
              color="red"
              backgroundColor="black"
              mt="0.5rem"
            >
              <FaInfoCircle
                style={{
                  position: "absolute",
                  top: "0.25rem",
                  right: "0.25rem",
                }}
              />
              4 to 24 characters.
              <br />
              Numbers & Special characters not allowed.
            </Text>
          ) : null}
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email" fontSize={{ base: "1.1rem" }}>
            Email Address
          </FormLabel>
          <Input
            sx={inputStyle}
            ref={emailRef}
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            required
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={validEmail ? "false" : "true"}
            aria-describedby="emailNote"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            placeholder="Insert Your Email Address..."
          />
          {emailFocus && email && !validEmail ? (
            <Text
              id="emailNote"
              position="relative"
              padding="0.25rem 0.5rem"
              borderRadius="0.5rem"
              fontSize="0.75rem"
              color="red"
              backgroundColor="black"
              mt="0.5rem"
            >
              <FaInfoCircle
                style={{
                  position: "absolute",
                  top: "0.25rem",
                  right: "0.25rem",
                }}
              />
              Please Insert Valid Email!
            </Text>
          ) : null}
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="subject" fontSize={{ base: "1.1rem" }}>
            Subject
          </FormLabel>
          <Input
            sx={inputStyle}
            ref={subjectRef}
            type="text"
            id="subject"
            name="subject"
            autoComplete="off"
            required
            onChange={(e) => setSubject(e.target.value)}
            aria-describedby="subjectNote"
            onFocus={() => setSubjectFocus(true)}
            onBlur={() => setSubjectFocus(false)}
            placeholder="Insert Your Subject..."
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="message" fontSize={{ base: "1.1rem" }}>
            Message
          </FormLabel>
          <Textarea
            sx={inputStyle}
            name="message"
            id="message"
            height="10rem"
            required
            onChange={(e) => setMessage(e.target.value)}
            aria-describedby="messageNote"
            onFocus={() => setMessageFocus(true)}
            onBlur={() => setMessageFocus(false)}
            placeholder="Insert Your Message..."
          />
        </FormControl>
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
