import styled from "styled-components";

export const HeaderTag = styled.header`
  display: flex;
  padding-inline: 1rem;
  padding-right: 9rem;
  gap: 1px;
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 1rem;
  justify-content: space-between;
  @media (max-width: 768px) {
    div:nth-child(2) {
      padding-left: 2.5rem;
    }
  }
  div {
    padding-block: 1rem;
    flex-basis: 100%;
  }
`;
