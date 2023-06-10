import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authActionTypes } from "../../store/auth/authReducer";
import { Button } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthorized = useSelector((state) => state.auth.isAuthorized);

  console.log(isAuthorized);

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (name) => {
    return (e) => {
      setFormState((prevState) => ({ ...prevState, [name]: e.target.value }));
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formState.email.includes("@") && formState.password.length > 6) {
      dispatch({
        type: authActionTypes.LOGIN,
        email: formState.email,
        password: formState.password,
      });
      navigate("/todos");
    }
  };

  return (
    <Container>
      <form onSubmit={submitHandler}>
        <AuthForm>
          <label htmlFor="email">Email</label>
          <input
            style={{
              width: "200px",
              height: "30px",
              borderRadius: "12px",
              border: "1px solid black",
              background: "grey",
            }}
            type="email"
            id="email"
            onChange={inputChangeHandler("email")}
            value={formState.email}
          />
        </AuthForm>
        <AuthForm>
          <label htmlFor="password">Password </label>
          <input
            style={{
              width: "200px",
              height: "30px",
              borderRadius: "12px",
              border: "1px solid black",
              background: "grey",
            }}
            type="password"
            id="password"
            onChange={inputChangeHandler("password")}
            value={formState.password}
          />
        </AuthForm>

        <Button onClick={submitHandler} variant="contained" color="success">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6rem auto;
  padding: 20px 0;
  border: 1px solid;
  width: 35%;
  height: 200px;
  border-radius: 15px;
  background: rgba(186, 157, 157, 0.5);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const AuthForm = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;
