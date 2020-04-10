import React, {
  useRef,
  useMemo,
  useState,
  useCallback,
  useEffect
} from "react";
import { random } from "lodash";
import { useFrame } from "react-three-fiber";

export default () => {
  const mesh = useRef();

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const isActiveRef = useRef(isClicked);
  const time = useRef(0);
  const position = useMemo(() => {
    return [random(-3, 3, true), random(-3, 3, true), random(-3, 3, true)];
  }, []);
  const timMod = useMemo(() => random(0.1, 4, true), []);
  /*Dynamic variables*/
  const color = !isHovered ? (isClicked ? 0xffffff : 0xe43f6f) : 0x373f51;

  /*Events*/

  const onHover = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered(value);
    },
    [setIsHovered]
  );

  const onClick = useCallback(
    e => {
      e.stopPropagation();
      setIsClicked(v => !v);
    },
    [setIsClicked]
  );

  useEffect(() => {
    isActiveRef.current = isClicked;
  }, [isClicked]);

  useFrame(() => {
    mesh.current.rotation.y += 0.004 * timMod;
    if (isActiveRef.current) {
      time.current += 0.03;
      mesh.current.position.y += Math.sin(time.current) * 0.002;
    }
  });
  return (
    <mesh
      ref={mesh}
      position={position}
      onPointerOver={e => onHover(e, true)}
      onPointerOut={e => onHover(e, false)}
      onClick={e => onClick(e)}
    >
      <boxBufferGeometry attach="geometry" args={[0.047, 0.5, 0.29]} />
      <meshStandardMaterial
        attach="material"
        color={color}
        roughness={0.6}
        metalness={0.1}
      />
    </mesh>
  );
};
