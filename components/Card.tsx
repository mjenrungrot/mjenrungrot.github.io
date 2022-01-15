import styled, { css } from "styled-components";
import { compose, layout, space } from "styled-system";
import Grid, { GridProps } from "@components/Grid";

export interface CardProps extends GridProps {
  selected?: boolean;
}

const Card = styled(Grid)<CardProps>`
  background-clor: white;
  padding: 30px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 1rem;
  transition: 0.3s ease-in-out 0s;
  justify-content: start;

  ${({ selected }) =>
    selected &&
    css`
      box-shadow: rgb(232 235 248 / 90%) 0 0 60px;
    `}

  :hover {
    box-shadow: rgb(232 235 248 / 90%) 0 0 60px;
  }

  ${compose(layout, space)}
`;

export default Card;
