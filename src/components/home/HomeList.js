import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { BASE_URL } from "../../constants/api";

export default function HomeList() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = BASE_URL + "wp/v2/pages";
  useEffect(() => {
    async function getPages() {
      try {
        const response = await axios.get(url);
        console.log("response", response.data);
        setPages(response.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    getPages();
  }, []);

  if (loading)
    return (
      <Spinner className="loading-icon" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  if (error) return <div>Error loading pages. Please try again later.</div>;

  return (
    <Row className="g-4">
      {pages.map((page) => {
        return (
          <Link to={`page/${page.id}`} key={page.id}>
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
          </Link>
        );
      })}
    </Row>
  );
}
