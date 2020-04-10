import React from "react";
import { BackSide } from "three";

export default () => {
  return (
    <mesh>
      <sphereBufferGeometry args={[5, 10, 10]} attach="geometry" />
      <meshStandardMaterial
        color={0x008dd5}
        metalness={0.4}
        side={BackSide}
        attach="material"
      />
    </mesh>
  );
};
