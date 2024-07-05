import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Title } from "../../components/Title";
import { ButtonContainer, CardContainer, Container } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Title />

      <ButtonContainer>
        <Button>Click me</Button>
      </ButtonContainer>

      <CardContainer>
        <Card
          title="React JS"
          description="Est proident eiusmod dolore mollit sint cupidatat laborum laboris veniam eiusmod. Commodo irure elit enim nostrud Lorem sunt non nulla. Aliquip et ut eu labore nisi esse commodo incididunt exercitation exercitation commodo nisi. Fugiat non deserunt velit esse Lorem ex nostrud ad fugiat qui consectetur consectetur consectetur. In ut aliqua deserunt pariatur occaecat nisi cillum. Dolore fugiat ipsum consequat pariatur reprehenderit mollit ut sunt nostrud. Mollit sunt eu irure tempor ea."
          gender="Ação"
        />
      </CardContainer>
    </Container>
  );
};
