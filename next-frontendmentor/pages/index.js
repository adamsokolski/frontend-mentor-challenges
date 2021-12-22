import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { paths } from "../data/paths";
import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #333;
    color: white;
    display: flex;
    justify-content: center;
    width: 100vw;
    box-sizing: border-box;
    font-family: "Libre Franklin", sans-serif;
  font-weight: 400;

  }
  * {
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  margin: 20px;
`;
const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.2em;
  text-align: center;
  opacity: 0.9;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Adam Sokólski</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Libre+Franklin:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Container>
        <Title>Adam Sokólski</Title>
        <SubTitle>
          Websites made looking as close to the design as possible.
        </SubTitle>
        {paths.map((path) => (
          <Link href={path.path} key={path.path}>
            <a>{path.name}</a>
          </Link>
        ))}
      </Container>
    </>
  );
}
