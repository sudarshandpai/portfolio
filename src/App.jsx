import "./App.scss";
import React, { useRef, useEffect } from "react";
import RoomToggleButton from "./components/Buttons/RoomToggleButton/RoomToggleButton";
import Experience from "./Experience/Experience";

import { useResponsiveStore } from "./stores/useResponsiveStore";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import Menu from "./components/Menu/Menu";
import Router from "./routes/Router";
import Overlay from "./components/Overlay/Overlay";
import Logo from "./components/Logo/Logo";

function App() {
  const { updateDimensions } = useResponsiveStore();

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <>
      <Menu />
      <Logo />
      <LoadingPage />
      <RoomToggleButton />
      <Overlay />
      <Router />
      <Experience />
    </>
  );
}

export default App;
