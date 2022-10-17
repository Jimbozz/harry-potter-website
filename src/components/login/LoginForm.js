import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { BASE_URL, TOKEN_PATH } from "../../constants/api";
import AuthContext from "../../context/AuthContext";
import FormError from "../common/FormError";
import WarningError from "../common/FormWarning";

const url = BASE_URL + TOKEN_PATH;
const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    console.log(data);

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);

      setAuth(response.data);
      navigate("/admin");
    } catch (error) {
      console.log(error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {loginError && <FormError>{loginError}</FormError>}
      <fieldset disabled={submitting}>
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Enter username"
            aria-describedby="userName"
            {...register("username")}
          />
          {errors.username && (
            <WarningError>{errors.username.message}</WarningError>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            size="lg"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <WarningError>{errors.password.message}</WarningError>
          )}
        </Form.Group>
        <Button variant="dark" type="submit">
          {submitting ? "Logging in..." : "Login"}
        </Button>
      </fieldset>
    </Form>
  );
}
