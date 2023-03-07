import React from "react";

export interface FlatListProps {
  items: React.ReactNode[];
}

export default function FlatList({ items }: FlatListProps) {
  return (
    <section className="flex flex-row items-center justify-evenly">
      {items.map((item, index) => (
        <article key={index}>{item}</article>
      ))}
    </section>
  );
}
