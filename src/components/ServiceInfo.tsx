import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import { Service } from "../interfaces/Service";

interface Props {
  servicesArra: Service;
}

const ServiceInfo = ({ servicesArra }: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Produktinformation
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {servicesArra.productDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default observer(ServiceInfo);
