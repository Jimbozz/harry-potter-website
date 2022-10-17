import NextHead from "next/head";
import PropTypes from "prop-types";

/**
 * Creates a head component
 * @param {string} title The title added to the head tag.
 */

export default function Head({ title = "" }) {
  const titleToDisplay = `${title} ${title ? " | " : ""} James Badenhorst`;
  return (
    <NextHead>
      <title>{titleToDisplay}</title>
    </NextHead>
  );
}

Head.propTypes = {
  title: PropTypes.string,
};
