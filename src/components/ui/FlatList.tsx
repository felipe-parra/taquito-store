import React from "react";
import styled from "styled-components";

export interface FlatListProps {
  items: React.ReactNode[];
}

export default function FlatList({ items }: FlatListProps) {
  return (
    <List>
      {items.map((item, index) => (
        <article key={index}>{item}</article>
      ))}
    </List>
  );
}

const List = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 0.5rem 0.5rem;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow: auto;
`;
