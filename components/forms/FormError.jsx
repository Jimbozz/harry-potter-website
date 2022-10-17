import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";

/**
 * Creates an error alert component and passes all children components into it.
 */

export default function ValidationError({ children }) {
  return <Alert variant="danger">{children}</Alert>;
}

ValidationError.propTypes = {
  children: PropTypes.node.isRequired,
};
