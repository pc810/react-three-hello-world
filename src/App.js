import React from "react";
import "./styles.css";
import { Canvas } from "react-three-fiber";
import Lights from "./Components/Lights";
import Environment from "./Components/Environment";
import Cubes from "./Components/Cubes";
export default function App() {
  return (
    <>
      <Canvas>
        <Lights />
        <Cubes />
        <Environment />
      </Canvas>
    </>
  );
}
