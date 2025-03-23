import React from "react";
import { useParams, Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";
import ModelViewer from "./ModelViewer";
import ModelViewerTulasi from "./ModelViewerTulasi";
import ModelViewerNeem from "./ModelViewerNeem";
import ModelViewerAshwagandha from "./ModelViewerAshwagandha";
import ModelViewerMarjoram from "./ModelViewerMarjoram";

function ModelPage({ plantModels }) {
  let { modelName } = useParams();
  const modelData = plantModels[modelName];

  if (!modelData) {
    return (
      <div style={{ color: "white", padding: "20px", textAlign: "center" }}>
        <h2>❌ Model Not Found</h2>
        <Link to="/" style={{ color: "lightgreen" }}>🔙 Go Back</Link>
      </div>
    );
  }

  return (
    <div style={{ width: "100vw", height: "100vh", background: "black", color: "white", display: "flex" }}>
      {/* 3D Model Section */}
      <div style={{ flex: 1, position: "relative", textAlign: "center" }}>
        <h3 style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          fontSize: "20px"
        }}>
          3D Model of {modelData.name} - Click to Zoom and Rotate It
        </h3>

        <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
          <ambientLight intensity={5} />
          <directionalLight position={[10, 10, 10]} intensity={2} castShadow />
          <pointLight position={[5, 5, 5]} intensity={3} />
          <pointLight position={[-5, -5, -5]} intensity={3} />
          <pointLight position={[0, 5, -5]} intensity={3} />
          <OrbitControls enableZoom={true} enableRotate={true} />

          {/* Load the correct model */}
          {modelName === "tulasi" ? (
            <ModelViewerTulasi scale={0.5} />
          ) : modelName === "neem" ? (
            <ModelViewerNeem scale={0.5} />
          ) : modelName === "ashwagandha" ? (
            <ModelViewerAshwagandha scale={0.5} />
          ) : modelName === "marjoram" ? (
            <ModelViewerMarjoram scale={0.5} />
          ) : (
            <ModelViewer scale={0.5} />
          )}
        </Canvas>
      </div>

      {/* Model Description Section */}
      <div style={{ flex: 1, padding: "20px" }}>
        <p>{modelData.description}</p>
        <br />
        <Link to="/" style={{ color: "lightgreen" }}>🔙 Go Back</Link>
      </div>

      {/* Loader */}
      <Loader />
    </div>
  );
}

export default ModelPage;
