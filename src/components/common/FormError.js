import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";

export default function ValidationError({ children }) {
  return <Alert variant="danger">{children}</Alert>;
}

ValidationError.proptTypes = {
  children: PropTypes.node.isRequired,
};
