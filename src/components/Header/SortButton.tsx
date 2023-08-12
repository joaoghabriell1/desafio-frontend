import downArrow from "../../assets/icon-down-arrow.svg";
import { sortBy } from "../../store/filter-context";
import styled from "styled-components";

interface Props {
  content: string;
  filter: sortBy;
  value: sortBy;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface StyledProps {
  $isActive: boolean;
}

const SortButton = ({ content, value, filter, onClick }: Props) => {
  return (
    <Button onClick={onClick} value={value}>
      <p>{content}</p>
      <Arrow $isActive={filter === value} src={downArrow} alt="" />
    </Button>
  );
};

export default SortButton;

const Button = styled.button`
  background: none;
  border: 0;
  display: flex;
  font-family: inherit;
  color: inherit;
  align-items: center;
  gap: 1rem;
  font-size: 1.7rem;
`;

const Arrow = styled.img<StyledProps>`
  transition: all 0.25s;
  transform: ${(props) =>
    props.$isActive ? "rotate(0deg)" : "rotate(180deg)"};
`;
