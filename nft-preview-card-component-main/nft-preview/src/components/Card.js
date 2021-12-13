import styled from "styled-components";
import breakpoint from "../styles/breakpoints";
import ethereum from "../images/icon-ethereum.svg";
import clock from "../images/icon-clock.svg";
import view from "../images/icon-view.svg";

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
const MainImage = styled.img`
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
  height: 310px;
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
const Avatar = styled.img`
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.white};
  display: inline-block;
  width: 10%;
  margin-right: 15px;
`;
const Icon = styled.img`
  margin-right: 6px;
`;
const AuthorContainer = styled.div`
  font-weight: 300;
  display: flex;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.line};
  color: ${(props) => props.theme.primary1};
  padding-top: 15px;
  margin-top: 15px;
`;

const Component = styled.div`
  @media ${breakpoint.device.mobile} {
    display: none;
  }
  @media ${breakpoint.device.desktop} {
    display: flex;
  }
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
        <MainImage src={image} alt={`NFT ${title}`} />
        <HoverImage className="view-icon">
          <img src={view} alt="view icon" />
        </HoverImage>
      </ImageContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>
        <Icon src={ethereum} alt="ethereum logo" />
        {price.toString().substring(0, 5)} ETH
      </Price>
      <Time>
        <Icon src={clock} alt="clock icon" />

        {timeLeft}
      </Time>
      <AuthorContainer>
        <Avatar src={avatar} alt={`avatar of ${creatorName}`} />
        Creation of <CreatorName>{creatorName}</CreatorName>
      </AuthorContainer>
    </Container>
  );
}
