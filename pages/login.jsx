import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Container from "react-bootstrap/Container";
import Heading from "../components/common/Heading";
import LoginForm from "../components/forms/LoginForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/**
 * Creates the Login page
 */

export default function Login() {
  return (
    <Layout>
      <Head title="Login" />
      <Row className="justify-content-center">
        <Col md={6}>
          <Container className="p-5">
            <Heading content="Login Page" />
            <LoginForm />
          </Container>
        </Col>
      </Row>
    </Layout>
  );
}
