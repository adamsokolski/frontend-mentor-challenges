import Card from "./components/Card";
import avatar from "./images/image-avatar.png";
import thumbnail from "./images/image-equilibrium.jpg";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.main`
  background-color: ${(props) => props.theme.mainBg};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

function App() {
  const [price, setPrice] = useState(Math.random());
  return (
    <Container>
      <Card
        image={thumbnail}
        title="Equilibrium #3429"
        description="Our Equilibrium collection promotes balance and calm."
        price={price}
        timeLeft="3 days left"
        avatar={avatar}
        creatorName="Jules Wyvern"
      />
    </Container>
  );
}

export default App;
