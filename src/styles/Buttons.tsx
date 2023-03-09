import styled from "styled-components";

export const Button = styled.button`
  background: #fff;
  border: 1px solid #000;
  border-radius: 3px;
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #000;
    color: #fff;
  }
`;
