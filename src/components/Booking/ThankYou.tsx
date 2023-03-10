import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import serviceStore from "../../stores/serviceStore";
import checkoutStore from "../../stores/checkoutStore";

const ThankYou = () => {
  const navigate = useNavigate();
  const { setServiceChosen, setService } = serviceStore;
  const { setConfirmChosen, setDateChosen, setNextStepChosen } = checkoutStore;

  const handleHomeClicked = () => {
    setServiceChosen(false);
    setDateChosen(false);
    setNextStepChosen(false);
    setConfirmChosen(false);
    setService("");
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <div>
        <TaskAltIcon
          style={{ fontSize: "300px" }}
          fontSize="inherit"
          color="success"
        />
        <h1 style={{ marginLeft: "30px" }}>Tack för din bokning!</h1>
        <Button onClick={handleHomeClicked} style={{ marginLeft: "120px" }}>
          Gå tillbaka
        </Button>
      </div>
    </div>
  );
};

export default ThankYou;
