import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./common.css";
import Header from "./Components/Header";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContexts";
import Home from "./Components/Home";

function App() {
  return (
     <ThemeProvider>
        <Header />
        <Home />
     </ThemeProvider>
      
  );
}

export default App;
