import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #ff9100;
  color: white;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 1rem 2rem;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    filter: brightness(0.8);
  }

  &:active {
    filter: brightness(1);
  }
`;
