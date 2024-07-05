import { Container, Description, Gender, DetailsButton } from "./styles";

interface CardProps {
  title: string;
  description: string;
  gender: string;
}

export const Card = ({ title, gender, description }: CardProps) => {
  return (
    <Container>
      <h2>{title}</h2>

      <Description>{description}</Description>

      <Gender>Gênero: {gender}</Gender>

      <DetailsButton>Visualizar detalhes</DetailsButton>
    </Container>
  );
};
