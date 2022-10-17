import Container from "react-bootstrap/Container";
import Heading from "../layout/Heading";
import EditForm from "./EditForm";

function EditPage() {
  return (
    <Container className="form-container universal">
      <Heading content="Edit" />
      <hr />
      <EditForm />
    </Container>
  );
}

export default EditPage;
