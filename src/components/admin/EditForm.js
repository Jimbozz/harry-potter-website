import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxios from "../../hooks/useAxios";
import DeletePageButton from "./DeletePageButton";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormError from "../common/FormError";
import Spinner from "react-bootstrap/Spinner";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  status: yup.string().required("Select the published status"),
});

export default function EditForm() {
  const [page, setPage] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [fetchingPage, setFetchingPage] = useState(true);
  const [updatingPage, setUpdatingPage] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [updateError, setUpdateError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const http = useAxios();
  let { id } = useParams();
  const url = `wp/v2/pages/${id}`;

  useEffect(
    function () {
      async function getPage() {
        try {
          const response = await http.get(url);
          console.log("response", response.data);
          setPage(response.data);
        } catch (error) {
          console.log(error);
          setFetchError(error.toString());
        } finally {
          setFetchingPage(false);
        }
      }
      getPage();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  async function onSubmit(data) {
    setUpdatingPage(true);
    setUpdateError(null);
    setUpdated(false);

    console.log(data);

    try {
      const response = await http.put(url, data);
      console.log("response", response.data);
      setUpdated(true);
    } catch (error) {
      console.log("error", error);
      setUpdateError(error.toString());
    } finally {
      setUpdatingPage(false);
    }
  }

  if (fetchingPage)
    return (
      <Spinner className="loading-icon" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  if (fetchError) return <div>Error loading page</div>;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {updated && <Alert variant="success">The page was updated</Alert>}
      {updateError && <FormError>{updateError}</FormError>}
      <fieldset disabled={updatingPage}>
        <Form.Group className="mb-3" controlId="pageTitle">
          <Form.Label>Page Title</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Page Title"
            defaultValue={page.title.rendered}
            aria-describedby="pageTitlte"
            {...register("title")}
          />
          {errors.title && <FormError>{errors.title.message}</FormError>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Page status</Form.Label>
          <Form.Select size="lg" {...register("status")}>
            <option value={page.status}>{page.status}</option>
            <option value="publish">publish</option>
            <option value="draft">draft</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" variant="dark">
          Update
        </Button>
        <hr />
        <DeletePageButton id={page.id} />
      </fieldset>
    </Form>
  );
}
