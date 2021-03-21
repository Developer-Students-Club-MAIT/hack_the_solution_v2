import React from "react";
import styled from "styled-components";
import copy from "copy";
import { Carousel, Text } from "@hackthenorth/north";

import SectionWrapper from "components/SectionWrapper";

//const leaders = copy.leaders.leaders

const LeadersWrapper = styled(SectionWrapper)`

  color: ${props => props.theme.globalConstants.color.textLight};
  padding: 50px auto;

  ${props => props.theme.mediaQueries.tabletMobile`
    width: 100%;
    padding: 0;
  `}
`;

const Wrapper = styled.div`
  
  margin: auto;

  & > .heading {
    grid-area: heading;
    align-self: end;
    margin: 0;
    margin-bottom: 20px;

    ${props => props.theme.mediaQueries.tabletMobile`
      margin-bottom: 10px;
    `}
  }
  & > .desc {
    grid-area: desc;
    align-self: start;
  }
  & > .illustration {
    grid-area: illustration;
    justify-self: end;
    align-self: center;
    max-width: 100%;
    max-height: 100%;
  }

  ${props => props.theme.mediaQueries.tablet`
    grid-template-areas:
      "illustration"
      "heading"
      "desc"
      "carousel";
    grid-template-columns: 100%;
    grid-template-rows: 300px auto auto auto;
    grid-column-gap: 0;

    & > .illustration {
      max-height: 250px;
      justify-self: center;
    }
  `}

  ${props => props.theme.mediaQueries.tabletMobile`
    & > .illustration, & > .desc, & > .heading {
      padding: 0 ${props.theme.globalConstants.padding.sectionsTablet}px;
    }
  `}
`;

const Image = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;

const LeaderBubbleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 75px;
  text-align: left;
`;
const LeaderBubbleContent = styled.div`
    margin-left:1rem;
`;

const JudgesWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:80vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 150px;
    grid-gap: 20px;
  `;
const CarouselWrapper = styled.div`
  grid-area: carousel;
  position: relative;
  margin: 50px 0% 0 0%;

  mask-image: linear-gradient(
    to right,
    transparent,
    black,
    black,
    black,
    black,
    black,
    transparent
  );

  & > .carousel {
    max-width: 100%;
    width: 100%;
    height: 200px;

    ${props => props.theme.mediaQueries.tabletMobile`
    mask-image: none;
  `}
  }

  ${props => props.theme.mediaQueries.tablet`
    mask-image: linear-gradient(
      to right,
      transparent,
      black,
      black,
      black,
      black,
    black,
    black,
      transparent
    );
  `}

  ${props => props.theme.mediaQueries.tabletMobile`
    mask-image: none;
  `}
`;

const getImages = (leaders: typeof copy.leaders.leaders) =>
  leaders.map((leader, i) => (
    <LeaderBubbleWrapper key={`${leader.name}${i}`}>
      <Image src={leader.img} alt={leader.name} />
      <LeaderBubbleContent>
      <Text as="p" variant="leaderName">
        {leader.name}
      </Text>
      <Text as="p" variant="leaderTitle">
        {leader.title}
      </Text>
      </LeaderBubbleContent>
    </LeaderBubbleWrapper>
  ));

const Leaders = () => (
  <LeadersWrapper id="leaders">
    <Wrapper>
      <Text className="heading" as="h3" variant="sectionHeading">
        {copy.leaders.title}
      </Text>
      <JudgesWrapper>
        {getImages(copy.leaders.leaders)}
      </JudgesWrapper>
    </Wrapper>
    <Wrapper>
      <Text className="heading" as="h3" variant="sectionHeading">
        {copy.mentors.title}
      </Text>
      <JudgesWrapper>
        {getImages(copy.mentors.leaders)}

      </JudgesWrapper>
    </Wrapper>
  </LeadersWrapper>
);

export default Leaders;
