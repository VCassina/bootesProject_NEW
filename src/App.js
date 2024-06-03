import React from "react";
import Routes from "./Routes";
import "./App.css";
import useResolution from './helpers/useResolution';

function App() {
  const resolution = useResolution();
  console.log(resolution);
  return (
    <Routes />
  );
}

export default App;