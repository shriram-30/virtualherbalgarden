import React from "react";
import { useGLTF } from "@react-three/drei";

const ModelViewerNeem = (props) => {
  
  const { scene } = useGLTF("http://localhost:3000/models/neemmodel.glb"); // Updated path for neem model

  return <primitive object={scene} {...props} />;
};

export default ModelViewerNeem;

useGLTF.preload("http://localhost:3000/models/neemmodel.glb"); // Preload neem model
