import React from "react";
import { BsCart, BsHeart } from "react-icons/bs";
import styled from "styled-components";
import { TaquitoType } from "../../types/taquito.type";

export default function TaquitoSquare({
  id,
  name,
  description,
  price,
  image,
  category,
  quantity,
  promotion,
  promotionDiscount,
}: TaquitoType) {
  return (
    <Square>
      <span
        style={{
          position: "absolute",
          top: "0.5rem",
          left: "0.5rem",
          color: "#a84448",
        }}
      >
        <BsHeart />
      </span>
      {promotion && <PromotionBadge>{promotionDiscount}% Dcto</PromotionBadge>}
      <img src={image} alt={name} />
      <Name>{name}</Name>
      <Description> {description}</Description>
      <Price>${price} USD</Price>
      <OldPrice>De {Number(price + price * 0.2).toFixed(2)}</OldPrice>
      <Button>
        <span>
          <BsCart />
        </span>
        <span>Comprar</span>
      </Button>
    </Square>
  );
}

const Square = styled.div`
  background: #fff;
  border: 1px solid #a84448;
  border-radius: 0.5rem;
  height: 100%;
  width: 220px;
  margin: 0 0.5rem 0 0;
  max-width: 430px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0.5rem;
  box-shadow: 2px 3px 3px 1px black;
  img {
    width: 100%;
    height: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 0.5rem;
  }
`;

const Name = styled.h5`
  width: 100%;
  text-align: start;
  bottom: 0;
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  color: #a84448;
`;

const Description = styled.p`
  width: 100%;
  text-align: start;
  bottom: 0;
  font-size: 0.8rem;
  font-weight: 700;
  margin: 0;
  color: #f6e1c3;
`;

const Price = styled.p`
  width: 100%;
  text-align: center;
  bottom: 0;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0.5rem 0;
  color: #a84448;
`;

const OldPrice = styled.p`
  width: 100%;
  text-align: center;
  bottom: 0;
  text-decoration: line-through;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #f6e1c3;
`;

const Button = styled.button`
  width: 100%;
  // text-align: center;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  background: #a84448;
  color: white;
  border-radius: 0.5rem;
  padding: 0.3rem 0.5rem;
`;

const PromotionBadge = styled.div`
  position: absolute;
  border: 1px solid #a84448;
  top: 0.2rem;
  right: 0.2rem;
  background: #f6e1c3;
  color: #a84448;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.5rem;
  font-weight: 700;
`;
