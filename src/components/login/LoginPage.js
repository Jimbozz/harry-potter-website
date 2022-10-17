import Container from "react-bootstrap/Container";
import Heading from "../layout/Heading";
import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <Container className="form-container universal">
      <Heading content="Login" />
      <hr />
      <LoginForm />
    </Container>
  );
}

export default LoginPage;
