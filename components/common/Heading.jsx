import PropTypes from "prop-types";

/**
 * Creates a variable heading component
 * @param {string} size The size of the heading component. Eg: h1, h2, h3
 * @param {string} content The content/text which is wrapped within the tags.
 */

function Heading({ size = "1", content }) {
  const VariableHeading = `h${size}`;

  return <VariableHeading>{content}</VariableHeading>;
}

Heading.propTypes = {
  size: PropTypes.string,
  content: PropTypes.string.isRequired,
};

export default Heading;
