import React from "react";
import { TaquitoType } from "../../types/taquito.type";

export default function TaquitoSquare({
  id,
  name,
  description,
  price,
  image,
}: TaquitoType) {
  return (
    <div>
      <h5>{name}</h5>
    </div>
  );
}
