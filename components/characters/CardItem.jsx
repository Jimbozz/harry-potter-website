import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import Link from "next/link";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import { useContext } from "react";
import FavoritesContext from "../../context/FavoritesContext";
import Button from "react-bootstrap/Button";

/**
 * Creates a card component for the characters
 * @param {number} id The id for the character
 * @param {string} image The image URL for the character
 * @param {string} name The name of the character
 * @param {string} hogwartsHouse The house that the character is in
 */

function CardItem({ id, image, character, hogwartsHouse }) {
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
    <Col key={id}>
      <Card className="h-100" id={id} border="light">
        <div className="card-image-top">
          <Image
            src={image}
            height={50}
            width={50}
            quality={100}
            objectFit="cover"
            layout="responsive"
            alt={character}
          />
        </div>
        <Card.Body>
          <Card.Title>{character}</Card.Title>
          <Card.Text>House: {hogwartsHouse}</Card.Text>

          <div className="d-grid gap-2">
            <Link className="card-link" href={`detail/${id}`}>
              <a className="btn btn-primary">View character</a>
            </Link>
            <Button
              variant="light"
              className="card-button"
              onClick={toggleFavoriteStatusHandler}>
              {itemIsFavorite
                ? "- Remove from Favorites"
                : "+ Add to Favorites"}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

CardItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  hogwartsHouse: PropTypes.string.isRequired,
};

export default CardItem;
