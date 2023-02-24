import {
  FormControl,
  FormHelperText,
  Input,
  Box,
  Typography,
} from "@mui/material";
import { observer } from "mobx-react";
import React, { ChangeEvent, useEffect } from "react";
import userStore from "../../stores/userStore";

export interface Props {
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const UserInputs = ({ handleInputChange }: Props) => {
  const { user, getUser, getAllUsers, users } = userStore;

  useEffect(() => {}, []);

  return (
    <Box style={{ position: "absolute" }} component="div">
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
          marginTop: "135px",
          marginLeft: "50px",
          marginBottom: "30px",
        }}
      >
        <Typography sx={{ mb: "15px" }}>{user?.userName}</Typography>
        <FormControl>
          <Input
            id="my-input"
            required
            onChange={handleInputChange}
            name="address"
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">Adress</FormHelperText>
        </FormControl>
        <FormControl>
          <Input
            id="my-input"
            required
            onChange={handleInputChange}
            name="zipCode"
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">PostKod</FormHelperText>
        </FormControl>
        <FormControl>
          <Input
            required
            id="my-input"
            onChange={handleInputChange}
            name="phoneNumber"
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">Telefonnummer</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};

export default observer(UserInputs);
