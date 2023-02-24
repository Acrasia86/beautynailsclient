import { observer } from "mobx-react-lite";
import React from "react";
import { Service } from "../interfaces/Service";

interface Props {
  service: Service | null;
}

const OneService = ({ service }: Props) => {
  return (
    <div>
      <h1>{service?.productName}</h1>
    </div>
  );
};

export default observer(OneService);
