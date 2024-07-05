import styled from "styled-components";
import { StyledButton } from "../Button/styles";

export const Container = styled.div`
  padding: 2rem;
  border-radius: 10px;
  border: solid 2px white;

  > h2 {
    margin-bottom: 1rem;
  }
`;

export const Description = styled.p`
  width: 100%;
  text-align: justify;
`;

export const Gender = styled.p`
  margin-top: 1rem;
  font-size: 16px;
  font-weight: 600;
`;

export const DetailsButton = styled(StyledButton)`
  padding: 0.5rem 1rem;
`;
