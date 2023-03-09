import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export default function SearchbarComponent() {
  return (
    <Searchbar>
      <input type="text" placeholder="Find your favorite taquito" />
      <BsSearch
        style={{
          color: "#f6e1c3",
        }}
      />
    </Searchbar>
  );
}

const Searchbar = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f6e1c3;
  opacity: 0.7;
  border: 1px solid #7a3e65;
  border-radius: 50px;
  height: 2.5rem;
  width: 100%;
  position: relative;
  margin: 0 auto;
  padding: 0 1rem;
  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-size: 1rem;
    font-weight: 700;
    color: #a84448;
    opacity: 1;
  }
  input::placeholder {
    color: #a84448;
    font-weight: 700;
  }

  svg {
    position: absolute;
    right: 1rem;
    font-size: 1.5rem;
    color: #000;
  }
`;
