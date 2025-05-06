import React from "react";
import styled from "styled-components";
import backgroundVideo from "../assets/video/Ink - 21536.mp4";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: var(--dark);
  overflow: hidden;
`;

const Title = styled.h1`
  position: absolute;
  top: 2rem;
  left: 2rem;

  font-size: var(--fontlg);
  font-family: var(--fontL);
  color: var(--greyLight);
  letter-spacing: 0.02em;

  @media screen and (max-width: 48em) {
    font-size: var(--fontmd);
    left: 1rem;
  }

  @media screen and (max-width: 30em) {
    width: 90%;
    color: var(--white);
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-image: linear-gradient(45deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 1;

  span {
    font-size: var(--fontxxxl);
    text-transform: uppercase;
    font-weight: 600;
    padding: 2rem;

    @media screen and (max-width: 64em) {
      font-size: var(--fontxxl);
      padding: 0;
    }
    @media screen and (max-width: 48em) {
      font-size: var(--fontxl);
    }
  }

  @media screen and (max-width: 48em) {
    flex-direction: column;
    background-image: linear-gradient(90deg, var(--gradient));
    align-items: flex-start;
    filter: brightness(1.1);

    & > *:last-child {
      align-self: flex-end;
    }

    height: 80vh;
    padding: 0 1rem;
  }
`;

const VideoContainer = styled.div`
  width: 100vw;
  min-height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: bottom;
  }
`;

const CTAButton = styled.a`
  position: absolute;
  bottom: 3rem;
  left: 2rem;
  padding: 1rem 2.5rem;
  background: var(--blue);
  color: var(--white);
  border-radius: 40px;
  font-size: var(--fontmd);
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
  transition: background 0.2s;
  z-index: 2;
  &:hover {
    background: var(--darkBlue);
  }
  @media screen and (max-width: 48em) {
    left: 1rem;
    bottom: 1.5rem;
    font-size: var(--fontsm);
    padding: 0.8rem 1.5rem;
  }
`;

const HeroSection = () => {
  return (
    <Section>
      <VideoContainer>
        <video src={backgroundVideo} type="video/mp4" autoPlay muted loop />
      </VideoContainer>
      <Title>SMM для вашего бизнеса</Title>
      <TextContainer>
        <span>Больше клиентов.</span>
        <span>Больше продаж.</span>
      </TextContainer>
      <CTAButton href="https://t.me/axbuild">Получить консультацию</CTAButton>
    </Section>
  );
};

export default HeroSection;
