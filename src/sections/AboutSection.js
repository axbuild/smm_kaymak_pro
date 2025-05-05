import gsap from "gsap";
import React from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  background-color: var(--white);
  overflow: hidden;
`;
const TextContainer = styled.p`
  width: 100%;
  height: 50vh;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--dark);

  span {
    font-size: calc(var(--fontBig) / 2);
    width: 90%;
    font-weight: 600;
    // text-transform: capitalize;
  }

  @media screen and (max-width: 70em) {
    span {
      font-size: calc(var(--fontxxxl) / 2);
    }
  }
  @media screen and (max-width: 64em) {
    span {
      font-size: calc(var(--fontxxl) / 2);
    }
  }
  @media screen and (max-width: 48em) {
    span {
      font-size: calc(var(--fontlg) / 2);
    }
  }
`;
const TextContainer2 = styled.p`
  width: 100%;
  height: 50vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  color: var(--dark);

  span {
    font-size: calc(var(--fontxxxl) / 2);
    width: 80%;
    font-weight: 600;
    // text-transform: capitalize;
    align-self: flex-end;
    text-align: right;
  }

  @media screen and (max-width: 70em) {
    span {
      font-size: calc(var(--fontxxl) / 2);
    }
  }
  @media screen and (max-width: 64em) {
    span {
      font-size: calc(var(--fontxl) / 2);
    }
  }
  @media screen and (max-width: 48em) {
    span {
      font-size: calc(var(--fontlg) / 2);
    }
  }
`;

const SmallText = styled.span`
  font-size: var(--fontxs);
  color: var(--greyLight);
  font-weight: 400;
  margin-top: 1.5rem;
  display: block;
  max-width: 90%;
  text-align: right;
`;

const AboutSection = () => {
  const container = useRef(null);
  const textOne = useRef(null);
  const textTwo = useRef(null);

  useLayoutEffect(() => {
    let t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=500 top",
          end: "bottom top",
          scrub: 1,
        },
      })
      .fromTo(textOne.current, { x: 0 }, { x: "10%" }, "key1")
      .fromTo(textTwo.current, { x: 0 }, { x: "-10%" }, "key1");

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <Section ref={container}>
      <TextContainer ref={textOne}>
        <span>Эксперты SMM для бизнеса</span>
        <span>Рост клиентов и продаж через соцсети</span>
      </TextContainer>

      <TextContainer2 ref={textTwo}>
        <span>Стратегия. Контент. Реклама.</span>
        <SmallText>
          Помогаем малому и среднему бизнесу: строим стратегию, создаём вовлекающий контент, настраиваем рекламу и анализируем результат. Ваш рост — наша цель.
        </SmallText>
      </TextContainer2>
    </Section>
  );
};

export default AboutSection;
