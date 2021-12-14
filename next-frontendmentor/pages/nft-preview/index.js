import Card from "../../components/nft-preview/Card";
import { ThemeProvider } from "styled-components";
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

const theme = {
  primary1: "hsl(215, 51%, 70%)",
  primary2: "hsl(178, 100%, 50%)",
  primary2Hover: "hsla(178, 100%, 50%, 0.6)",
  mainBg: "hsl(217, 54%, 11%)",
  cardBg: "hsl(216, 50%, 16%)",
  line: "hsl(215, 32%, 27%)",
  white: "hsl(0, 0%, 100%)",
};

export default function Index() {
  const [price, setPrice] = useState(Math.random());
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Card
          image="/images/nft-preview/image-equilibrium.jpg"
          title="Equilibrium #3429"
          description="Our Equilibrium collection promotes balance and calm."
          price={price}
          timeLeft="3 days left"
          avatar="/images/nft-preview/image-avatar.png"
          creatorName="Jules Wyvern"
        />
      </Container>
    </ThemeProvider>
  );
}
