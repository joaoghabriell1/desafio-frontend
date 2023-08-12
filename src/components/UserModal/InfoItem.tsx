import styled from "styled-components";

interface Props {
  label: string;
  info: string;
}

const InfoItem = ({ label, info }: Props) => {
  return (
    <>
      <Container>
        <Label>{label}:</Label>
        <Info>{info}</Info>
      </Container>
    </>
  );
};

const Label = styled.div`
  font-size: 1.5rem;
  text-transform: capitalize;
  @media (max-width: 375px) {
    font-size: 1.3rem;
  }
`;

const Info = styled.div`
  font-size: 1.4rem;
  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export default InfoItem;
