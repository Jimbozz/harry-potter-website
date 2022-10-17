import { useForm } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormWarning from "./FormWarning";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("Please enter your first name")
    .min(3, "Your first name must be at least 3 characters"),
  lastName: yup
    .string()
    .required("Please enter your last name")
    .min(4, "Your last name must be at least 4 characters"),
  email: yup.string().required("Please enter an email address").email(),
  subject: yup.string().required("Subject is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

/**
 * Contact form component and validates all inputs
 */

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    const formItem = document.querySelector(".form");
    console.log(data);
    setSubmitted(true);

    if (setSubmitted) {
      formItem.style.display = "none";
    }
  }

  return (
    <>
      {submitted && <Alert variant="success">Thanks for making contact.</Alert>}
      <Form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col sm={6}>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                aria-describedby="firstName"
                {...register("firstName")}
              />
              {errors.firstName && (
                <FormWarning>{errors.firstName.message}</FormWarning>
              )}
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                aria-describedby="lastName"
                {...register("lastName")}
              />
              {errors.lastName && (
                <FormWarning>{errors.lastName.message}</FormWarning>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="emailAddress">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email address"
            aria-describedby="emailAddress"
            {...register("email")}
          />
          {errors.email && <FormWarning>{errors.email.message}</FormWarning>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Select {...register("subject")}>
            <option value=""></option>
            <option value="say hello">Say hello</option>
            <option value="complaint">Complaint</option>
          </Form.Select>
          {errors.subject && (
            <FormWarning>{errors.subject.message}</FormWarning>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter message"
            aria-describedby="formMessage"
            {...register("message")}
          />
          {errors.message && (
            <FormWarning>{errors.message.message}</FormWarning>
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default ContactForm;
