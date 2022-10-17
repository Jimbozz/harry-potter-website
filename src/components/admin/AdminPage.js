import { useContext } from "react";
import Heading from "../layout/Heading";
import PageList from "./PageList";
import AuthContext from "../../context/AuthContext";
import Container from "react-bootstrap/Container";
import LoginPage from "../login/LoginPage";

function AdminPage() {
  const [auth] = useContext(AuthContext);

  if (!auth) {
    return <LoginPage />;
  } else {
    return (
      <Container className="py-5 universal">
        <Heading content="Admin" />
        <hr />
        <PageList />
      </Container>
    );
  }
}

export default AdminPage;
