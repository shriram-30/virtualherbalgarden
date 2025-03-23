import React from "react";
import { useGLTF } from "@react-three/drei";

const ModelViewer = () => {
  const { scene } = useGLTF('http://localhost:3000/models/model.glb'); // Replace with the correct path
  return <primitive object={scene} position={[0, 0, 0]} scale={1} />;
};

export default ModelViewer;


useGLTF.preload('http://localhost:3000/models/model.glb');