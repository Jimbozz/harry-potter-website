import Heading from "../layout/Heading";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import Card from "react-bootstrap/Card";
import moment from "moment";
import { BASE_URL } from "../../constants/api";

export default function PageSpecific() {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let { id } = useParams();

  const url = BASE_URL + `wp/v2/pages/${id}`;

  useEffect(
    function () {
      async function getPage() {
        try {
          const response = await axios.get(url);
          console.log("response", response.data);
          setPage(response.data);
        } catch (error) {
          console.log(error);
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      getPage();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  if (loading)
    return (
      <Spinner className="loading-icon" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  if (error) return <div>Error loading page</div>;

  return (
    <Container className="universal">
      <Heading content="Page" />
      <hr />
      <Card variant="light" className="px-0">
        <Card.Body className="p-4">
          <Card.Title className="mb-3">{page.title.rendered}</Card.Title>
          <hr />
          <Card.Text
            dangerouslySetInnerHTML={{
              __html: page.excerpt.rendered,
            }}></Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex">
          <small>{moment(page.date).format("D MMMM YYYY")}</small>
          <small>Status: {page.status}</small>
        </Card.Footer>
      </Card>
    </Container>
  );
}
