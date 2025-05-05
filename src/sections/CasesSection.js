/* eslint-disable react-hooks/exhaustive-deps */
import gsap from "gsap";
import React from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import v1 from "../assets/video/Scuba Diving - 699.mp4";
import v2 from "../assets/video/Skate - 49791.mp4";

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  background-color: var(--white);
  overflow: hidden;
`;

const V1 = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: bottom;
  z-index: 2;
`;

const V2 = styled.video`
  position: absolute;
  top: 0;
  right: 40%;
  width: 60%;
  height: 1auto;

  z-index: 1;

  @media screen and (max-width: 30em) {
    width: 100%;
    right: 0;
    top: 10%;
  }
`;

const TitleContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;

  & > *:nth-child(2) {
    margin-left: 6rem;
  }
  & > *:nth-child(3) {
    margin-left: 12rem;
  }

  @media screen and (max-width: 48em) {
    top: 60%;
    right: 2rem;
  }
  @media screen and (max-width: 40em) {
    right: 5rem;
  }
  @media screen and (max-width: 30em) {
    top: 70%;
    right: 40%;
  }
`;

const Title = styled.h1`
  font-size: var(--fontBig);
  z-index: 5;
  text-transform: none;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontxxl);
  }
`;

const CaseText = styled.div`
  font-size: var(--fontmd);
  color: var(--white);
  background: rgba(0,0,0,0.35);
  border-radius: 16px;
  padding: 1rem 2rem;
  margin: 0.5rem 0;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  max-width: 90%;
  text-align: right;
  @media screen and (max-width: 48em) {
    font-size: var(--fontsm);
    padding: 0.7rem 1rem;
  }
`;

const CasesSection = () => {
  const sectionRef = useRef(null);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const titleRef = useRef(null);

  let elements = gsap.utils.selector(titleRef);

  useLayoutEffect(() => {
    const Elem = sectionRef.current;
    const video1Elem = videoRef1.current;
    const video2Elem = videoRef2.current;

    // pin the section
    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `bottom+=500 bottom`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: "top top",
          end: `bottom+=500 bottom`,
          scrub: 1,
        },
      })
      .to(video1Elem, { scale: 0.3 }, "key1")
      .to(video2Elem, { scale: 0.6 }, "key1");

    elements("h1").forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: `bottom bottom`,
            scrub: 1,
            // markers: true,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        }
      )
    );

    return () => {
      if (t2) t2.kill();
    };
  }, []);

  return (
    <Section ref={sectionRef}>
      <V1 ref={videoRef1} src={v1} type="video/mp4" autoPlay muted loop />
      <V2 ref={videoRef2} src={v2} type="video/mp4" autoPlay muted loop />
      <TitleContainer ref={titleRef}>
        <Title>Наши кейсы</Title>
        <CaseText>+120% заявок для интернет-магазина одежды</CaseText>
        <CaseText>Рост подписчиков на 3000+ за месяц для локального кафе</CaseText>
        <CaseText>Вирусный ролик — 1,2 млн просмотров для бренда косметики</CaseText>
      </TitleContainer>
    </Section>
  );
};

export default CasesSection;
