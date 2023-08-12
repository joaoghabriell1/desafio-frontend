import styled from "styled-components";

export const Li = styled.li`
  display: flex;
  padding: 1rem;
  font-size: 1.5rem;
  border: 1px solid gray;
  border-radius: 0.5rem;
  align-items: center;
  div {
    flex-basis: 100%;
  }
`;

export const Button = styled.button`
  color: inherit;
  border-radius: 5px;
  border: none;
  font-size: 1.2rem;
  min-width: max-content;
  padding: 0.8rem 1.5rem;
  font-weight: 500;
  background: hsla(213, 11%, 30%, 1);
  &:hover {
    opacity: 0.8;
  }
`;
