import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/HomeButton";
import Design from "../assets/svg/design";
import Develop from "../assets/svg/divelop";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  transform: translate(0%, 0%);
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = (props) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box
        initial={{ height: 0 }}
        animate={{ height: window.innerHeight, transition: { duration: 1 } }}
        exit={{ y: window.innerHeight, transition: { duration: 1 } }}
      >
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Design />
            Designer
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and
            simple.
          </Description>
          <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile Apps</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>Figma</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develop />
            Frontend Developer
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>Html, Css, Js, React, Redux, Sass, Bootstrap</p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Github, CodeSandbox</p>
          </Description>
        </Main>
        <BigTitle text="SKILLS" top="70%" right="50%" color="#53377A" />
      </Box>
    </ThemeProvider>
  );
};
export default MySkillsPage;
