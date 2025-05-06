import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model3 from "../components/Scene3";
import { AdaptiveDpr, AdaptiveEvents, Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useContext } from "react";
import { ColorContext } from "./../context/ColorContext";
import { useEffect } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;

  background-color: var(--white);
  overflow: hidden;
`;
const Section = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;

  background-color: "#9BB5CE";
`;
const Phone = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  cursor: grab;
`;

const Colors = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 35%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 64em) {
    left: 10%;
  }
`;

const Color = styled.li`
  list-style: none;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;

  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0.5rem 0;

  border: 1px solid var(--dark);
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: var(--fontxl);
  padding: 0.3rem;
`;

const SubTitle = styled.h2`
  font-size: var(--fontmd);
  font-family: var(--fontR);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0.4rem 1rem;
  border-radius: 50px;

  border: none;
  outline: none;

  background-color: var(--blue);
  color: var(--white);
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
const BtnLink = styled.a`
  color: var(--blue);
  text-decoration: none;
  margin-left: 1.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const IndicatorText = styled.div`
  font-size: var(--fontsm);
  position: absolute;
  top: 1rem;
`;

const PricingCard = styled.div`
  background: #f7f8fa;
  border-radius: 24px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  padding: 2rem 2.5rem;
  margin: 1rem;
  min-width: 260px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 32px rgba(0,0,0,0.13);
  }
`;

const PricingTitle = styled.h3`
  font-size: var(--fontlg);
  margin-bottom: 0.5rem;
`;

const PricingList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
`;

const PricingItem = styled.li`
  font-size: var(--fontxs);
  color: var(--dark);
  margin-bottom: 0.3rem;
`;

const Price = styled.div`
  font-size: var(--fontxl);
  font-weight: 700;
  color: var(--blue);
  margin-bottom: 1rem;
`;

const PricingCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

const PricingSection = () => {
  return (
    <Container>
      <Section style={{backgroundColor: '#fff'}}>
        <Title style={{fontSize: '2.5rem', margin: '2rem 0 0.5rem 0', color: 'var(--dark)', textAlign: 'center'}}>Тарифы на SMM-услуги</Title>
        <PricingCardsContainer>
          <PricingCard>
            <PricingTitle>Старт</PricingTitle>
            <PricingList>
              <PricingItem>Ведение 1 соцсети</PricingItem>
              <PricingItem>8 постов/месяц</PricingItem>
              <PricingItem>Базовая аналитика</PricingItem>
            </PricingList>
            <Price>от 15 000 сом/мес</Price>
            <Btn as="a" href="https://t.me/axbuild">Оставить заявку</Btn>
          </PricingCard>
          <PricingCard>
            <PricingTitle>Продвижение</PricingTitle>
            <PricingList>
              <PricingItem>Ведение 2 соцсетей</PricingItem>
              <PricingItem>12 постов/месяц</PricingItem>
              <PricingItem>Таргетированная реклама</PricingItem>
              <PricingItem>Подробная аналитика</PricingItem>
            </PricingList>
            <Price>от 25 000 сом/мес</Price>
            <Btn as="a" href="https://t.me/axbuild">Оставить заявку</Btn>
          </PricingCard>
          <PricingCard>
            <PricingTitle>Эксперт</PricingTitle>
            <PricingList>
              <PricingItem>Ведение 3+ соцсетей</PricingItem>
              <PricingItem>20+ постов/месяц</PricingItem>
              <PricingItem>Креативы, сторис, конкурсы</PricingItem>
              <PricingItem>Персональный менеджер</PricingItem>
            </PricingList>
            <Price>от 40 000 сом/мес</Price>
            <Btn as="a" href="https://t.me/axbuild">Оставить заявку</Btn>
          </PricingCard>
        </PricingCardsContainer>
      </Section>
    </Container>
  );
};

export default PricingSection;
