import React, { useRef } from "react";
import Cube from "./cube";
import { useFrame } from "react-three-fiber";
import { map } from "lodash";
export default () => {
  const cubegroup = useRef();
  useFrame(() => {
    cubegroup.current.rotation.y += 0.001;
  });
  const cubes = map(new Array(50), (el, i) => <Cube key={i} />);
  return <group ref={cubegroup}>{cubes}</group>;
};
