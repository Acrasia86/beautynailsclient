import { observer } from "mobx-react-lite";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";
import checkoutStore from "../../stores/checkoutStore";
import { useEffect } from "react";
import moment from "moment";

const BookedCustomers = () => {
  const { checkoutService, checkOutServices } = checkoutStore;

  useEffect(() => {
    checkOutServices();
    console.log(checkoutService);
  }, [checkoutService.length]);

  return (
    <List sx={{ width: "100%", maxWidth: 700, bgcolor: "background.paper" }}>
      <h3 style={{ marginLeft: "20px" }}>Bokade kunder</h3>
      {checkoutService.map((x) => (
        <ListItem key={x.id}>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={x.user.userName} />
          <ListItemText
            style={{ position: "absolute", left: "350px" }}
            primary={x.product.productName}
            secondary={moment(x.bookedDate).format("DD-MM-YYYY HH:mm")}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default observer(BookedCustomers);
