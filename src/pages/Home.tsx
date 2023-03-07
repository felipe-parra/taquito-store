import React from "react";
import FlatList from "../components/ui/FlatList";
import TaquitoSquare from "../components/ui/TaquitoSquare";
import { TaquitoType } from "../types/taquito.type";

const taquitos: TaquitoType[] = [
  {
    id: 1,
    name: "Taquito 1",
    description: "Taquito 1 description",
    price: 1.99,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Taquito 2",
    description: "Taquito 2 description",
    price: 2.99,
    image: "https://picsum.photos/200/300",
  },
];

export default function HomePage() {
  return (
    <section>
      <article>
        <h1>Home Page</h1>
      </article>
      <article>
        <FlatList
          items={taquitos.map((item) => (
            <TaquitoSquare {...item} key={item.id} />
          ))}
        />
      </article>
    </section>
  );
}
