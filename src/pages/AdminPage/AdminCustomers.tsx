import Box from "@mui/material/Box";
import { observer } from "mobx-react";
import SideNav from "../../components/SideNav";
import AllUsers from "./AllUsers";

const AdminCustomers = () => {
  return (
    <Box component="div" sx={{ display: "flex" }}>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <AllUsers />
      </Box>
    </Box>
  );
};

export default observer(AdminCustomers);
