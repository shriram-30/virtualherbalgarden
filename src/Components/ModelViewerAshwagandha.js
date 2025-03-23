import React from "react";
import { useGLTF } from "@react-three/drei";

const ModelViewerAshwagandha = (props) => {
  
  const { scene } = useGLTF("http://localhost:3000/models/ashwagandha.glb"); // Ensure the correct path to the 3D model

  return <primitive object={scene} {...props} />;
};

export default ModelViewerAshwagandha;

useGLTF.preload('http://localhost:3000/models/ashwagandha.glb');