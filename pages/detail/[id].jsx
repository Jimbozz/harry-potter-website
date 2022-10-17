import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Heading from "../../components/common/Heading";
import Head from "../../components/layout/Head";
import Layout from "../../components/layout/Layout";
import { API_URL } from "../../constants/api";
import Image from "next/image";
import { useContext } from "react";
import FavoritesContext from "../../context/FavoritesContext";

/**
 * Creates a card component with characters data.
 */

export default function Character({ actor }) {
  console.log(actor);
  const { id, character, hogwartsHouse, image } = actor;

  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(id);
    } else {
      favoritesCtx.addFavorite({
        key: id,
        character: character,
        id: id,
        hogwartsHouse: hogwartsHouse,
        image: image,
      });
    }
  }

  return (
    <Layout>
      <Head title="Detail" />
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col lg={8}>
            <Heading content="Detail Page" />
            <div className="character-image">
              <Image
                src={image}
                quality={100}
                objectFit="cover"
                layout="fill"
                alt={character}
                priority
              />
            </div>
            <h5 className="mt-3">{character}</h5>
            <p>House: {hogwartsHouse}</p>
            <Button variant="light" onClick={toggleFavoriteStatusHandler}>
              {itemIsFavorite
                ? "- Remove from Favorites"
                : "+ Add to Favorites"}
            </Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

/**
 * Fetches the paths "id" for each character to use in URL
 */

export async function getStaticPaths() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const actors = data;

    const paths = actors.map(({ id }) => ({
      params: { id: id.toString() },
    }));

    console.log(paths);
    return {
      paths: paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}

/**
 * Renders the component using the parameters for each character.
 */

export async function getStaticProps({ params }) {
  const url = `${API_URL}/${params.id}`;

  let actor = null;

  try {
    const response = await fetch(url);
    const data = await response.json();

    actor = data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      actor: actor,
    },
  };
}
