import Box from "@mui/material/Box";
import SideNav from "../../components/SideNav";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import userStore from "../../stores/userStore";
import { useEffect, useState } from "react";
import checkoutStore from "../../stores/checkoutStore";
import serviceStore from "../../stores/serviceStore";
import store from "../../stores/store";
import { CheckoutService } from "../../interfaces/CheckoutService";
import { observer } from "mobx-react";
import TotalIncome from "./TotalIncome";
import NumberOfBookedCustomers from "./NumberOfBookedCustomers";
import Birthdays from "./Birthdays";
import BookedCustomers from "./BookedCustomers";

const Dashboard = () => {
  const { getAllUsers, users } = userStore;
  const { checkOutServices, checkoutService } = checkoutStore;
  const { servicesArray } = serviceStore;

  useEffect(() => {
    getAllUsers();
    checkOutServices();
  }, [users.length, checkoutService.length, servicesArray.length]);

  return (
    <>
      <div className="admin-container">
        <Box component="div" height={70} />
        <Box component="div" sx={{ display: "flex" }}>
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack spacing={2} direction="row">
                  <TotalIncome />
                  <Birthdays />
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <NumberOfBookedCustomers />
              </Grid>
            </Grid>
            <Box component="div" height={20} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ minheight: 60 + "vh", background: "#f7f2ef" }}>
                  <CardContent>
                    <BookedCustomers />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 60 + "vh", background: "#f7f2ef" }}>
                  <CardContent>
                    <div className="dashboad-info">
                      <span className="info-title">Personalen</span>
                    </div>
                    <Stack spacing={2} direction="row">
                      <div className="info-icon">
                        <Avatar alt="Users">J</Avatar>
                      </div>
                      <div className="dashboad-info">
                        <span>Hudv??rdsterapeut</span>
                        <br />
                        <span>Jacob@mail.com</span>
                      </div>
                    </Stack>
                    <Stack spacing={2} direction="row">
                      <div className="info-icon">
                        <Avatar alt="Users">A</Avatar>
                      </div>
                      <div className="dashboad-info">
                        <span>Hudv??rdsterapeut</span>
                        <br />
                        <span>Aleksandra@mail.com</span>
                      </div>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>{" "}
      </div>
    </>
  );
};

export default observer(Dashboard);
