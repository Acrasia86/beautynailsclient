import { Button } from "@mui/material";
import React from "react";
import LoginForm from "../features/users/LoginForm";
import modalStore from "../stores/modalStore";

const LoginToBook = () => {
  const { openModal } = modalStore;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        paddingBottom: "100px",
      }}
    >
      <div>
        <h1>Du måste vara inloggad för att boka en tid</h1>
        <Button
          style={{ marginTop: "20px" }}
          onClick={() => openModal(<LoginForm />)}
          variant="contained"
          color="success"
        >
          Logga in
        </Button>
      </div>
    </div>
  );
};

export default LoginToBook;
