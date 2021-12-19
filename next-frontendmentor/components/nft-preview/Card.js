import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: "Outfit", sans-serif;
  width: 350px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.cardBg};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 17px 0px 6px hsl(216, 51%, 10%);
`;
const Title = styled.h2`
  font-size: 1.55em;
  width: 100%;
  margin: 15px 0 10px 0;
  transition: 0.3s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.primary2};
    cursor: pointer;
  }
`;
const Description = styled.p`
  width: 100%;
  color: ${(props) => props.theme.primary1};
  font-weight: 200;
  margin: 5px 0 15px 0;
  font-size: 18px;
`;
const Price = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  color: ${(props) => props.theme.primary2};
  font-weight: 400;
`;
const Time = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  text-align: right;
  color: ${(props) => props.theme.primary1};
  font-weight: 400;
`;
const CreatorName = styled.span`
  margin-left: 5px;
  color: ${(props) => props.theme.white};
  text-align: left;
  transition: 0.3s ease-in-out;
  font-weight: 400;

  &:hover {
    color: ${(props) => props.theme.primary2};
    cursor: pointer;
  }
`;
const MainImage = styled(Image)`
  position: relative;
  width: 100%;
  border-radius: 12px;
  transition: 0.3s ease-in-out;
`;
const HoverImage = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border-radius: 12px;

  text-align: center;
  background-color: ${(props) => props.theme.primary2Hover};
`;
const ImageContainer = styled.div`
  position: relative;
  transition: 0.3s ease-in-out;
  height: 300px;
  &:hover {
    img {
      transition: 0.3s ease-in-out;
    }
    .view-icon {
      opacity: 1;
      transition: 0.3s ease-in-out;
    }
  }
`;
const Avatar = styled(Image)`
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.white};
  display: inline-block;
  width: 10%;
  margin-right: 15px;
`;
const Icon = styled(Image)`
  margin-right: 6px;
`;
const AuthorContainer = styled.div`
  width: 100%;
  font-weight: 300;
  display: flex;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.line};
  color: ${(props) => props.theme.primary1};
  padding-top: 15px;
  margin-top: 15px;
`;

export default function Card({
  image,
  title,
  description,
  price,
  timeLeft,
  avatar,
  creatorName,
}) {
  return (
    <Container>
      <ImageContainer>
        <MainImage src={image} alt={`NFT ${title}`} width="300" height="300" />
        <HoverImage className="view-icon">
          <Image
            src="/images/nft-preview/icon-view.svg"
            alt="view icon"
            width="48"
            height="48"
          />
        </HoverImage>
      </ImageContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>
        <Icon
          src="/images/nft-preview/icon-ethereum.svg"
          alt="ethereum logo"
          width="11"
          height="18"
        />
        {price.toString().substring(0, 5)} ETH
      </Price>
      <Time>
        <Icon
          src="/images/nft-preview/icon-clock.svg"
          alt="clock icon"
          width="17"
          height="17"
        />

        {timeLeft}
      </Time>
      <AuthorContainer>
        <Avatar
          src={avatar}
          alt={`avatar of ${creatorName}`}
          width="17"
          height="17"
        />
        Creation of <CreatorName>{creatorName}</CreatorName>
      </AuthorContainer>
    </Container>
  );
}
