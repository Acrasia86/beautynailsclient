import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { observer } from "mobx-react";
import React, { useState } from "react";
import serviceStore from "../../stores/serviceStore";

export interface Props {
  handleChange: (event: SelectChangeEvent) => void;
}

const ServiceDropDown = ({ handleChange }: Props) => {
  //const [service, setService] = useState("");
  const { servicesArray, service } = serviceStore;

  return (
    <div style={{ width: "500px" }}>
      <FormControl
        style={{
          width: "400px",
          marginLeft: "100px",
          marginTop: "50px",
          marginBottom: "30px",
        }}
      >
        <InputLabel id="demo-simple-select-label">Välj en tjänst</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="productId"
          value={service}
          label="Age"
          onChange={handleChange}
        >
          {servicesArray.map((service) => {
            return (
              <MenuItem
                key={service.id}
                id={`${service.id}`}
                value={service.id}
              >{`${service.productName} ${service.price} kr`}</MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default observer(ServiceDropDown);
