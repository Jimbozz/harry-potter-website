import Row from "react-bootstrap/Row";
import CardItem from "./CardItem";

/**
 * Creates an array of card components with character data
 */

function CharacterList({ actors }) {
  return (
    <Row xs={1} sm={2} className="g-4">
      {actors.map(({ id, character, hogwartsHouse, image }) => (
        <CardItem
          key={id}
          character={character}
          id={id}
          hogwartsHouse={hogwartsHouse}
          image={image}
        />
      ))}
    </Row>
  );
}

export default CharacterList;
