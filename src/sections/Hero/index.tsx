import React, { useState, useEffect } from "react";
import styled from "styled-components";

import SectionWrapper from "components/SectionWrapper";
import MailingListSignup from "components/MailingListSignup";

import GradientBg from "static/img/hero/gradient.svg";
import IllustrationBg from "static/img/hero/illustration-background.png";
import IllustrationFg from "static/img/hero/illustration-foreground.png";
import IllustrationMiddle from "static/img/hero/illustration-middle-1.png";
import IllustrationMiddle3 from "static/img/hero/illustration-middle-3.png";

import Lottie from "react-lottie";
import animationData from "sections/Hero/lottie.json";
import animationDataMobile from "sections/Hero/data.json";

import TextLoop from "react-text-loop";
import Parallax from "react-rellax";
import { Text,Button } from "@hackthenorth/north";

import siteCopy from "copy";
import {HeroBg} from "../../static/img";
const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

const today = new Date();
const hour = today.getHours();
const backgroundPercentage = hour * (100 / 24);

const HeroWrapper = styled(SectionWrapper)`
  padding-top: 70px;
  min-height: 1200px;
  max-height: 1500px;
  max-width: 100%;
  overflow: hidden;
  background-color:#EFA4A1;
  //background-position: 0 ${backgroundPercentage}%;

  ${props => props.theme.mediaQueries.tablet`
    height: auto;
  `}

  ${props => props.theme.mediaQueries.tabletMobile`
    min-height: 100vh;
  `}

  & > .parallax {
    position: relative;

    ${props => props.theme.mediaQueries.tablet`
    left: -70px;
  `}
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;

  ${props => props.theme.mediaQueries.tablet`
    text-align: center;
    margin-top: 70px;
  `}
`;

interface ImageProps {
  left?: string;
  bottom?: string;
}

const Image = styled.img<ImageProps>`
  width: 1150px;
  overflow-x: hidden;
  position: absolute;
  left: ${props => (props.left ? props.left : "0")};
  bottom: ${props => (props.bottom ? props.bottom : "0")};
  pointer-events: none;
`;
const ImageContainer = styled.div`
  width:100vw;
  position:relative;
  top: 600px;

`;
const ImageFg = styled(Image)`
  width: 60vw;
  position:absolute;
  top:400px;
  margin:0 auto;
  left: 60%;
  transform: translateX(-50%);
  ${props => props.theme.mediaQueries.tablet`
    width: 150%;
    left: 0;
  `}

  ${props => props.theme.mediaQueries.tabletMobile`
    width: 110%;
  `}

  ${props => props.theme.mediaQueries.mobile`
    width: 130%;
    top: 350px;
  `}

  ${props => props.theme.mediaQueries.smallMobile`
    top: 275px;
  `}
`;

const ParallaxWrapper = styled.div`
  width: 1150px;
  margin-top: 340px;
  margin-left: auto;
  margin-right: auto;
`;


const DevFolioButton = styled(Button)`
  width: 310px;
  padding: 1em;
  display:block;
  border-radius: 4px;
  transition: opacity 250ms ease-in-out;
  position:relative;
  z-index:100;
  &:hover {
    opacity: 0.8;
  }
  ${props => props.theme.mediaQueries.tablet`
  margin:0 auto;
`}

${props => props.theme.mediaQueries.tabletMobile`
margin:0 auto;
`}

${props => props.theme.mediaQueries.mobile`
margin:0 auto;
`}

${props => props.theme.mediaQueries.smallMobile`
margin:0 auto;
`}
`;

const LottieWrapper = styled.div`
  width: 1475px;
  position: absolute;
  left: -206px;
  bottom: 0;
  pointer-events: none;
`;

const MobileWrapper = styled.div`
  width: 135%;
  pointer-events: none;
  margin-top: -23px;

  ${props => props.theme.mediaQueries.tabletMobile`
    width: 100vh;
    margin-left: -105px;
  `}
`;


const style = {
  willChange: "transform"
};

const Hero = () => {
  const { width } = useWindowDimensions();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData
  };
  const mobileOptions = {
    loop: true,
    autoplay: true,
    animationData: animationDataMobile
  };

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
    return;
  }, []);

  return (
    <HeroWrapper id="home">
      <Content>
        <Text variant="header" as="h1">
          {siteCopy.hero.firstLine}{" "}
          <TextLoop>
            {siteCopy.hero.keyWords.map(word => (
              <span key={word}>{word}</span>
            ))}
          </TextLoop>
        </Text>
        <Text variant="header" as="h1">
          {siteCopy.hero.secondLine}
        </Text>
        <Text variant="subheader" as="p">
          <span style={{ whiteSpace: "pre" }}>{siteCopy.hero.subtitle}</span>
        </Text>

      <div 
        className="apply-button" 
        data-hackathon-slug="hack-the-solution" 
        data-button-theme="dark"
        style={{height: "44px", width: "312px"}}
      ></div>
      
      <DevFolioButton
        className="cta"
        onClick={() => window.open(siteCopy.discordSection.cta.link)}
      >
        {"Join Our Discord Server"}
      </DevFolioButton>
      </Content>
      <ImageFg src={HeroBg} alt=""/>
      {/* {width <= 768 ? (
        <MobileWrapper className="parallax">
          <Lottie options={mobileOptions} />
          <ImageFg alt="" bottom={"auto"} src={IllustrationFg} />
        </MobileWrapper>
      ) : (
        <>
          <ParallaxWrapper className="parallax">
            <Parallax speed={0} style={style}>
              <Image alt="" left="100px" bottom="15px" src={IllustrationBg} />
            </Parallax>
            <Parallax style={style} speed={-1} data-rellax-max="50">
              <Image alt="" src={IllustrationMiddle3} />
            </Parallax>
            <Parallax style={style} speed={-2} data-rellax-max="100">
              <LottieWrapper>
                <Lottie options={defaultOptions} />
              </LottieWrapper>
            </Parallax>
            <Parallax style={style} speed={-2.5} data-rellax-max="198">
              <Image alt="" bottom="-50px" src={IllustrationMiddle} />
            </Parallax>
          </ParallaxWrapper>
          <Parallax
            style={style}
            className="parallax"
            speed={width < 1100 ? -4.5 : -5}
            data-rellax-max={width < 1100 ? 225 : 250}
          >
            <ImageFg alt="" bottom={"auto"} src={IllustrationFg} />
          </Parallax>
        </>
      )} */}
    </HeroWrapper>
  );
};

export default Hero;
