import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { paths } from "../data/paths";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Adam Sokólski</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1>Adam Sokólski</h1>
        <h2>Websites made looking as close to the design as possible.</h2>
        {paths.map((path) => (
          <Link href={path.path}>
            <a>{path.name}</a>
          </Link>
        ))}
      </Container>
    </>
  );
}