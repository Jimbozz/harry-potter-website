import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import CharacterList from "../components/characters/CharacterList";
import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Heading from "../components/common/Heading";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <Alert variant="warning">You have no favorites yet. Add some?</Alert>
    );
  } else {
    content = <CharacterList actors={favoritesCtx.favorites} />;
  }
  return (
    <Layout>
      <Head title="Favorites" />
      <Row className="justify-content-center">
        <Col lg={8}>
          <Container className="p-5">
            <Heading content="Favorites Page" />
            {content}
          </Container>
        </Col>
      </Row>
    </Layout>
  );
}

export default FavoritesPage;
