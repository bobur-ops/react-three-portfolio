import { Sphere, useScroll } from "@react-three/drei";
import React, { useEffect } from "react";
import { useRef } from "react";
import * as Three from "three";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

export const Background = () => {
  const material = useRef();

  const color = useRef({
    color: "#b9bcff",
  });

  const data = useScroll();

  const tl = useRef();

  useFrame(() => {
    tl.current.progress(data.scroll.current);
    material.current.color = new Three.Color(color.current.color);
  });

  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(color.current, {
      color: "#212121",
    });
    tl.current.to(color.current, {
      color: "#7a7ca5",
    });
    tl.current.to(color.current, {
      color: "#9b96dd",
    });
  }, []);

  return (
    <group>
      <Sphere scale={[30, 30, 30]}>
        <meshBasicMaterial
          ref={material}
          side={Three.BackSide}
          toneMapped={false}
        />
      </Sphere>
    </group>
  );
};
