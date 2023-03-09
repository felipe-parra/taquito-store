import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  image?: string;
  icon?: string;
  description?: string;
}

export default function RoundedCard({
  icon,
  title,
  image,
  description,
}: Props) {
  return (
    <div>
      <Circle>
        {image && <img src={image} alt={title} />}
        {icon && <i className={icon} />}
      </Circle>
      <Title>{title}</Title>
    </div>
  );
}

const Circle = styled.div`
  background: #fff;
  border: 1px solid #000;
  border-radius: 50%;
  height: 6rem;
  width: 6rem;
  position: relative;
  margin: 0 0.5rem 0 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const Title = styled.h2`
  width: 100%;
  text-align: center;
  bottom: 0;
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  color: #a84448;
`;
