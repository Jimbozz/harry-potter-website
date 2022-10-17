import Container from "react-bootstrap/Container";
import Heading from "../layout/Heading";
import HomeList from "./HomeList";

function HomePage() {
  return (
    <Container className="py-5 universal">
      <Heading content="Home" />
      <hr />
      <HomeList />
    </Container>
  );
}

export default HomePage;
