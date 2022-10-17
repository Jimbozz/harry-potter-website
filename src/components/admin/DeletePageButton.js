import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Button from "react-bootstrap/Button";

export default function DeletePageButton({ id }) {
  const [error, setError] = useState(null);
  const http = useAxios();
  const navigate = useNavigate();
  const url = `/wp/v2/pages/${id}`;

  async function manageDelete() {
    const confirmDelete = window.confirm("Do you want to delete this page?");

    if (confirmDelete) {
      try {
        await http.delete(url);
        navigate("/admin");
      } catch (error) {
        setError(error);
      }
    }
  }

  return (
    <Button variant="dark" type="submit" onClick={manageDelete}>
      {error ? "Error" : "Delete"}
    </Button>
  );
}

DeletePageButton.propTypes = {
  id: PropTypes.number.isRequired,
};
