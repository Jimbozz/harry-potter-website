import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Container from "react-bootstrap/Container";
import Heading from "../components/common/Heading";
import { API_URL } from "../constants/api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CharacterList from "../components/characters/CharacterList";

const url = API_URL;

/**
 * Maps through the characters and creates card components for each.
 */

export default function Home({ actors }) {
  console.log(actors);

  return (
    <Layout>
      <Head title="Home" />
      <Row className="justify-content-center">
        <Col lg={8}>
          <Container className="p-5">
            <Heading content="Home Page" />
            <CharacterList actors={actors} />
          </Container>
        </Col>
      </Row>
    </Layout>
  );
}

/**
 * Renders the component for each characters
 */

export async function getStaticProps() {
  let actors = [];

  try {
    const response = await fetch(url);
    console.log(response.data);

    if (response.ok) {
      const json = await response.json();
      console.log(json);
      actors = json;
    } else {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      actors: actors,
    },
  };
}
