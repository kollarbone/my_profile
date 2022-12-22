import "./styles.css";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { Routes, Route, useLocation } from "react-router-dom";
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import WorksPage from "./components/WorksPage";
import MySkillsPage from "./components/MySkillsPage";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorksPage />} />
            <Route path="/skills" element={<MySkillsPage />} />
            <Route path="*" element={<Main />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
