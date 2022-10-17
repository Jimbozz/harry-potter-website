import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";

export default function WarningError({ children }) {
  return <Alert variant="warning">{children}</Alert>;
}

WarningError.proptTypes = {
  children: PropTypes.node.isRequired,
};
