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
  font-size: 1.6rem;
  text-transform: capitalize;
`;

const Info = styled.div`
  font-size: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;
export default InfoItem;
