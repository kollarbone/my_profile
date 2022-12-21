import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: transparent;
  color: ${(props) => props.theme.text};
  padding: 0.3rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  cursor: pointer;
  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;

const PowerButton = () => {
  return (
    <Power>
      <NavLink to="/">
        <motion.h3
          initial={{
            y: -200,
            transition: { type: "spring", duration: 1.5, delay: 1 }
          }}
          animate={{
            y: 0,
            transition: { type: "spring", duration: 1.5, delay: 1 }
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Home
        </motion.h3>
      </NavLink>
    </Power>
  );
};

export default PowerButton;
