import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIconsLeft from "../subComponents/SocialIconsLeft";
import PowerButton from "../subComponents/HomeButton";
import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import Electro from "../assets/svg/electro";
import BigTitlte from "../subComponents/BigTitlte";

const Box = styled(motion.ul)`
  background-color: #53377a;
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
  transform: translate(0%, 0%);
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(1rem + 5vw);
  height: 40vh;
  display: flex;
  color: white;
`;
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 100px;
  height: 100px;
  z-index: 1;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5
    }
  }
};

const WorksPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;
    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      return (yinyang.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };
    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box
        initial={{ width: 0 }}
        animate={{ width: window.innerWidth, transition: { duration: 1 } }}
        exit={{ x: window.innerWidth, transition: { duration: 1 } }}
      >
        <LogoComponent theme="dark" />
        <SocialIconsLeft theme="dark" />
        <PowerButton />
        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <Rotate ref={yinyang}>
          <Electro width={100} height={100} fill={DarkTheme.text} />
        </Rotate>
        <BigTitlte text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};
export default WorksPage;
