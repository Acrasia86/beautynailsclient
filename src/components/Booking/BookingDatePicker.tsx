import { TextField } from "@mui/material";
import { observer } from "mobx-react";
import React, { ChangeEvent } from "react";
import serviceStore from "../../stores/serviceStore";

export interface Props {
  handleDateChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const BookingDatePicker = ({ handleDateChange }: Props) => {
  const { serviceChosen } = serviceStore;

  return (
    <div style={{ position: "absolute", bottom: "-300px" }}>
      <TextField
        style={{ width: "400px", marginLeft: "100px" }}
        id="datetime-local"
        label="Välj tid"
        type="datetime-local"
        name="bookedDate"
        disabled={!serviceChosen}
        defaultValue={new Date()}
        onChange={handleDateChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
};

export default observer(BookingDatePicker);
