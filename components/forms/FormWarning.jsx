import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";

/**
 * Creates a warning alert component and passes all children components into it.
 */

export default function FormWarning({ children }) {
  return <Alert variant="warning">{children}</Alert>;
}

FormWarning.propTypes = {
  children: PropTypes.node.isRequired,
};
