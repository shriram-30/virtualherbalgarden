import React from "react";
import { useGLTF } from "@react-three/drei";

const ModelViewerMarjoram = (props) => {
  
  const { scene } = useGLTF("http://localhost:3000/models/marjoram.glb"); // Updated path for neem model

  return <primitive object={scene} {...props} />;
};

export default ModelViewerMarjoram;

useGLTF.preload("http://localhost:3000/models/marjoram.glb"); // Preload neem model
