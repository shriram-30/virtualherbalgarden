import React from "react";
import { useGLTF } from "@react-three/drei";

const ModelViewerTulasi = (props) => {
  
  const { scene } = useGLTF("http://localhost:3000/models/tulasi.glb"); // Ensure the correct path to the 3D model

  return <primitive object={scene} {...props} />;
};

export default ModelViewerTulasi;

useGLTF.preload('http://localhost:3000/models/tulasi.glb');