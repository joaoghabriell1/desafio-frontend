import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border: 1px solid lightgray;
  width: min(375px, 100%);
  border-radius: 5px;
  margin-block: 1rem;
  padding: 1rem;
`;

export const SearchBarInput = styled.input`
  color: inherit;
  width: 100%;
  font-family: inherit;
  border: 0;
  background: none;
  border-radius: 5px;
  outline: none;
`;

export const SearchIcon = styled.img`
  max-width: 1.5rem;
`;
