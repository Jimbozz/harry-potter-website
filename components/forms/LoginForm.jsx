import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL, TOKEN_PATH } from "../../constants/api";
import AuthContext from "../../context/AuthContext";
import FormError from "./FormError";
import FormWarning from "./FormWarning";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

/**
 * Login form component and validates username and password
 */

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const router = useRouter();
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
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(response);

      if (response.ok) {
        const json = await response.json();
        console.log("response", json);
        setAuth(json);
        router.push("/admin");
      } else {
        setLoginError(
          "An error occurred. Please make sure your username and password are valid."
        );
      }
    } catch (error) {
      console.log("Error: ", error.message);
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
            placeholder="Enter username"
            aria-describedby="userName"
            {...register("username")}
          />
          {errors.username && (
            <FormWarning>{errors.username.message}</FormWarning>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="userPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            aria-describedby="userPassword"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <FormWarning>{errors.password.message}</FormWarning>
          )}
        </Form.Group>
        <Button variant="dark" type="submit">
          {submitting ? "Logging in..." : "Login"}
        </Button>
      </fieldset>
    </Form>
  );
}
