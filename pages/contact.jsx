import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Container from "react-bootstrap/Container";
import Heading from "../components/common/Heading";
import ContactForm from "../components/forms/ContactForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/**
 * Creates the Contact page
 */

export default function Contact() {
  return (
    <Layout>
      <Head title="Contact" />
      <Row className="justify-content-center">
        <Col md={8}>
          <Container className="p-5">
            <Heading content="Contact Page" />
            <ContactForm />
          </Container>
        </Col>
      </Row>
    </Layout>
  );
}
