import styled from "styled-components";

interface Props {
  onClick: () => void;
}

const BackDrop = ({ onClick }: Props) => {
  return <BackDropContainer onClick={onClick}></BackDropContainer>;
};

export default BackDrop;

const BackDropContainer = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #ffffff87, #00000047);
  z-index: 1;
`;
