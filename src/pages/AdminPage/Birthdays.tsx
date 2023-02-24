import { Card, CardContent, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import SavingsIcon from "@mui/icons-material/Savings";
import userStore from "../../stores/userStore";

const Birthdays = () => {
  const { birthday, birthdays } = userStore;

  useEffect(() => {
    birthday();
  }, [birthdays.length]);

  return (
    <Card sx={{ minWidth: 49 + "%", height: 150 }} className="income2">
      <CardContent>
        <div>
          <SavingsIcon />
        </div>
        <div>
          <Typography gutterBottom variant="h5" component="div">
            {birthdays.map((bday, i) => (
              <div key={i}>{bday.userName}</div>
            ))}
          </Typography>
        </div>
        <Typography
          gutterBottom
          variant="body2"
          component="div"
          sx={{ color: "#555a54" }}
        >
          Kunder som fyller år
        </Typography>
      </CardContent>
    </Card>
  );
};

export default observer(Birthdays);
