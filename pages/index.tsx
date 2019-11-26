import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { useState, useRef, useLayoutEffect } from "react";
import Fab from "@material-ui/core/Fab";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { SocialIcon } from "react-social-icons";
import {NavBar} from "../components/NavBar/NavBar";


const Index = () => (
  <>
    <NavBar />
    <Hero />
    <HowItWorks />
    <FeaturedVideos />
    <ReactionVideos />
    <InfoBar />
  </>
);

export default Index;

const InfoBar = () => (
  <InfoBarContainer>
    <SocialButtons />
    <ApplyButton>Apply as talent</ApplyButton>
  </InfoBarContainer>
);

const Hero = () => {
  const { positionElementRef, position: heroBottom } = usePosition();

  return (
    <>
      <HeroContainer>
        <InfoBar />
        <ContentContainer>
          <Title className="md:text-4xl text-3xl leading-tight font-bold text-center">
            Book personalized video shoutouts from your favorite celebrities
          </Title>
          <Button variant="contained" color="primary" size="large">
            Browse Celebrities
          </Button>
        </ContentContainer>
        <ScrollButtonContainer>
          <ScrollButton
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<ArrowDownwardIcon />}
            onClick={() =>
              window.scrollTo({ behavior: "smooth", top: heroBottom - 64 })
            }
          >
            Learn More
          </ScrollButton>
        </ScrollButtonContainer>
        <HeroBackground>
          <Overlay />
          {[1, 2, 3].map(num => (
            <HeroPersonImage personNumber={num} />
          ))}
        </HeroBackground>
      </HeroContainer>
      <span id="hero-bottom" ref={positionElementRef} />
    </>
  );
};

const SocialButtons = () => (
  <div className="flex flex-row">
    <SocialIcon
      url="https://www.facebook.com/fanmelt"
      bgColor="white"
      className = "h-35 w-35 mr-10"
    />
    <SocialIcon
      url="https://www.youtube.com/channel/UCinbHCC4oFD8uU8vMdR3olQ"
      bgColor="white"
      className = "h-35 w-35 mr-10"
    />
    <SocialIcon
      url="https://twitter.com/fan_melt"
      bgColor="white"
      className = "h-35 w-35 mr-10"
    />
    <SocialIcon
      url="https://www.instagram.com/fanmelt"
      bgColor="white"
      className = "h-35 w-35 mr-10"
    />
  </div>
);

const HowItWorks = () => (
  <HowItWorksContainer>
    <HowItWorksTitle>How It Works</HowItWorksTitle>
    <StepsContainer>
      <Steps>
        <Step>
          <StepImageContainer>
            <StepImage stepNum={1} />
          </StepImageContainer>
          <StepDescription>1. Pick a celebrity</StepDescription>
        </Step>
        <Step>
          <StepImageContainer>
            <StepImage stepNum={2} />
          </StepImageContainer>
          <StepDescription>2. Request a video shoutout</StepDescription>
        </Step>
        <Step>
          <StepImageContainer>
            <StepImage stepNum={3} />
          </StepImageContainer>
          <StepDescription>3. Receive your video</StepDescription>
        </Step>
      </Steps>
    </StepsContainer>
  </HowItWorksContainer>
);

const FeaturedVideos = () => (
  <FeaturedVideosContainer>
    <FeaturedVideosTitle>Featured Videos</FeaturedVideosTitle>
    <FeaturedVideosListContainer>
      <FeaturedVideosList>
        <FeaturedVideoContainer>
          <FeaturedVideo featuredVideoNum={1}>
            <PlayButton>
              <PlayArrowIcon />
            </PlayButton>
          </FeaturedVideo>
        </FeaturedVideoContainer>

        <FeaturedVideoContainer>
          <FeaturedVideo featuredVideoNum={2}>
            <PlayButton>
              <PlayArrowIcon />
            </PlayButton>
          </FeaturedVideo>
        </FeaturedVideoContainer>

        <FeaturedVideoContainer>
          <FeaturedVideo featuredVideoNum={3}>
            <PlayButton>
              <PlayArrowIcon />
            </PlayButton>
          </FeaturedVideo>
        </FeaturedVideoContainer>
      </FeaturedVideosList>
    </FeaturedVideosListContainer>
  </FeaturedVideosContainer>
);

const ReactionVideos = () => (
  <ReactionVideosContainer>
    <ReactionVideosTitle>Reaction Videos</ReactionVideosTitle>
    <ReactionTagsContainer>
      <h3 className="text-xl mb-2"> Tag #fanmelt to get featured </h3>
      <SocialButtons />
    </ReactionTagsContainer>
    <ReactionVideosListContainer>
      <ReactionVideosList>
        <FeaturedVideoContainer>
          <ReactionVideo reactionVideoNum={1}>
            <ReactionPlayButton>
              <PlayArrowIcon />
            </ReactionPlayButton>
          </ReactionVideo>
        </FeaturedVideoContainer>

        <FeaturedVideoContainer>
          <ReactionVideo reactionVideoNum={2}>
            <ReactionPlayButton>
              <PlayArrowIcon />
            </ReactionPlayButton>
          </ReactionVideo>
        </FeaturedVideoContainer>

        <FeaturedVideoContainer>
          <ReactionVideo reactionVideoNum={3}>
            <ReactionPlayButton>
              <PlayArrowIcon />
            </ReactionPlayButton>
          </ReactionVideo>
        </FeaturedVideoContainer>

        <FeaturedVideoContainer>
          <ReactionVideo reactionVideoNum={4}>
            <ReactionPlayButton>
              <PlayArrowIcon />
            </ReactionPlayButton>
          </ReactionVideo>
        </FeaturedVideoContainer>

        <FeaturedVideoContainer>
          <ReactionVideo reactionVideoNum={5}>
            <ReactionPlayButton>
              <PlayArrowIcon />
            </ReactionPlayButton>
          </ReactionVideo>
        </FeaturedVideoContainer>

        <FeaturedVideoContainer>
          <ReactionVideo reactionVideoNum={6}>
            <ReactionPlayButton>
              <PlayArrowIcon />
            </ReactionPlayButton>
          </ReactionVideo>
        </FeaturedVideoContainer>
      </ReactionVideosList>
    </ReactionVideosListContainer>
  </ReactionVideosContainer>
);

const FlatAppBar = styled(AppBar)`
  box-shadow: none;
`;

const LogoContainer = styled.div.attrs({
    className:"flexGrow flex items-center justify-start"
  })`
`;

const Logo = styled.img.attrs({ src: "/logo-cropped.png" })`
  max-height: 50px;
  margin: 0;
`;

const HeroContainer = styled.div.attrs({
    className:"mt-50 relative"
  })`
  @media (min-width: 600px) {
    margin-top: 64px;
    height: calc(100vh - 64px);
  }
  height: calc(100vh - 50px);
  width: 100vw;
  display: grid;
  grid-template-rows: auto 1fr auto;
  color: white;
`;

const HeroBackground = styled.div.attrs({
    className:"w-full h-full absolute top-0 left-0 -z-1"
  })`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`;

const ContentContainer = styled.div.attrs({
    className:"flex flex-col items-center justify-center"
  })`
`;

const ScrollButtonContainer = styled.div.attrs({
    className:"flex items-center justify-center"
  })`
`;

const ScrollButton = styled(Button).attrs({
    className:"w-full bg-f8 hover:bg-f8 White"
  })`
`;

const HeroPersonImage = styled.div.attrs({
    className: "min-h-30 min-w-30"
  })`
  ${({ personNumber }) => `
        background-image: url(/hero-person-${personNumber}.jpg);
        background-position: center;
        background-size: cover;
    `}
`;

const Overlay = styled.div.attrs({
    className:"w-full h-full absolute top-0 left-0 bg-f9"
  })`
`;

const Title = styled.h1.attrs({
    className:"max-w-30-c m-1-c"
  })`
`;

const usePosition = () => {
  const positionElementRef = useRef();
  const [position, setPosition] = useState(0);

  function updatePosition() {
    if (positionElementRef.current) {
      const element: any = positionElementRef.current;
      const { top } = element.getBoundingClientRect();
      setPosition(window.pageYOffset + top);
    }
  }

  useLayoutEffect(() => {
    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return { positionElementRef, position };
};

const InfoBarContainer = styled.div.attrs({ className: "px-4 py-6 w-full bg-black flex items-center justify-between" })`
`;

const ApplyButton = styled(Button).attrs({
    className:"border-solid border-white border-1"
  })`
  color: white;
`;

const HowItWorksContainer = styled.div.attrs({ className: "p-10 White bg-f8 min-h-50-v" })`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const StepsContainer = styled.div.attrs({
    className:"w-full flex items-center justify-center"
  })`
`;

const Steps = styled.ol.attrs({
  className:"w-full max-w-1024"
})`
  display: grid;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

const StepImage = styled.div.attrs({ className: "shadow-2xl bg-white h-30-v w-30-v rounded-full bg-cover bg-center border-white border-solid border-2 my-0 mx-auto" })`
  background-image: url(/homepage-step-${props => props.stepNum}.jpg);
`;

const StepImageContainer = styled.div.attrs({className:"w-full"})`
`;

const Step = styled.li.attrs({ className: "text-xl rounded-full text-center" })`
  display: grid;
  grid-template-rows: 1fr auto;
  @media (max-width: 1024px) {
    margin-bottom: 60px;
    :last-child {
      margin-bottom: 0;
    }
  }
`;

const StepDescription = styled.p.attrs({ className: "mt-6" })`
  min-height: 20px;
  font-weight: medium;
`;

const HowItWorksTitle = styled.h2.attrs({
  className: "text-3xl text-center font-bold mb-10"
})``;

const FeaturedVideosTitle = styled.h1.attrs({
  className: "text-3xl text-center font-bold mb-10"
})``;

const FeaturedVideosContainer = styled.div.attrs({ className: "p-10 bg-f13 min-h-75-v" })`
  color: white;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const FeaturedVideosListContainer = styled.div.attrs({
    className:"h-full w-full flex items-center justify-center"
  })`
`;

const FeaturedVideosList = styled.ul.attrs({
  className:"max-w-1024 h-full w-full"
})`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const FeaturedVideo = styled.div.attrs({ className: "shadow-lg rounded bg-white max-w-300 h-full w-full bg-cover bg-center relative hover:cursor-pointer" })`
  background-image: url(/featured-video-${props => props.featuredVideoNum}.jpg);
`;

const FeaturedVideoContainer = styled.li.attrs({
    className:"flex flex-row items-center justify-center h-full w-full min-h-300 mb-20"
  })`
`;

const PlayButton = styled(Fab).attrs({
  color: "primary",
  variant: "contained"
})`
  position: absolute;
  height: 50px;
  width: 50px;
  bottom: 10px;
  right: 10px;
  border-radius: 100%;
`;

const ReactionVideosContainer = styled.div.attrs({ className: "p-10 bg-f12 min-h-75-v text-center" })`
  color: white;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const ReactionVideosTitle = styled.h1.attrs({
  className: "text-3xl text-center font-bold"
})``;

const ReactionVideosListContainer = styled.div.attrs({ className:"h-full w-full flex items-center justify-center" })`
`;

const ReactionTagsContainer = styled.div.attrs({ className: "mb-10 w-full flex flxe-col items-center justify-center" })`
`;

const ReactionVideosList = styled.ul.attrs({
  className:"max-w-1024 h-full w-full"
})`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 20px;
    max-width: 950px;
  }
  @media (max-width: 1024px) and (min-width: 700px) {
    display: grid;
    max-width: 640px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 20px;
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ReactionVideo = styled.div.attrs({ className: "shadow-lg rounded bg-white max-w-300 h-full w-full min-h-300 bg-cover bg-center relative hover:cursor-pointer" })`
  background-image: url(/reaction-video-${props => props.reactionVideoNum}.jpg);
`;

const ReactionPlayButton = styled(PlayButton).attrs({
    className:"bg-f10 hover:bg-f11"
  })`
`;
