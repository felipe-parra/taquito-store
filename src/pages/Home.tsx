import React from "react";
import styled from "styled-components";
import FlatList from "../components/ui/FlatList";
import RoundedCard from "../components/ui/RoundedCard";
import SearchbarComponent from "../components/ui/Searchbar";
import TaquitoSquare from "../components/ui/TaquitoSquare";
import { Button } from "../styles/Buttons";
import { TaquitoType } from "../types/taquito.type";

const taquitos: TaquitoType[] = [
  {
    id: 1,
    name: "Taquito 1",
    description: "Taquito 1 description",
    price: 1.99,
    image: "https://dummyimage.com/600x400/000/fff",
    category: "Beef",
  },
  {
    id: 2,
    name: "Taquito 2",
    description: "Taquito 2 description",
    price: 2.99,
    image: "https://dummyimage.com/600x400/000/fff",
    category: "Beef",
    promotion: true,
    promotionDiscount: 20,
  },
  {
    id: 3,
    name: "Taquito 3",
    description: "Taquito 3 description",
    price: 3.99,
    image: "https://dummyimage.com/600x400/000/fff",
    category: "Beef",
  },
  {
    id: 4,
    name: "Taquito 4",
    description: "Taquito 4 description",
    price: 4.99,
    image: "https://dummyimage.com/600x400/000/fff",
    category: "Chicken",
  },
  {
    id: 5,
    name: "Taquito 5",
    description: "Taquito 5 description",
    price: 5.99,
    image: "https://dummyimage.com/600x400/000/fff",
    category: "Chicken",
    promotion: true,
    promotionDiscount: 20,
  },
];

const CATEGORIES = [
  {
    id: 1,
    title: "Beef",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "Chicken",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    title: "Pork",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    title: "Vegan",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    title: "Veggies",
    image: "https://picsum.photos/200/300",
  },
];

export default function HomePage() {
  return (
    <section>
      <article
        style={{
          padding: "0 0.5rem",
        }}
      >
        <SearchbarComponent />
      </article>
      <article>
        <Title>Categories</Title>
        <FlatList
          items={CATEGORIES.map((item) => (
            <RoundedCard {...item} />
          ))}
        />
      </article>
      <article>
        <Title>Popular</Title>
        <FlatList
          items={taquitos.map((item) => (
            <TaquitoSquare {...item} />
          ))}
        />
      </article>
      <article>
        <Title>Promotions</Title>
        <FlatList
          items={taquitos.reverse().map((item) => (
            <TaquitoSquare {...item} />
          ))}
        />
      </article>
    </section>
  );
}

const Title = styled.h2`
  width: 100%;
  text-align: start;
  padding: 0 0.5rem;
  bottom: 0;
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 1rem;
  color: #7a3e65;
`;
