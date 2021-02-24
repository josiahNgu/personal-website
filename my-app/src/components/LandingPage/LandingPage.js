import React, { Suspense, useRef, useEffect } from "react";
import "./LandingPage.scss";
import { Html } from "@react-three/drei/";
import { Section } from "../section";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useLoader, useFrame } from "react-three-fiber";
// drei is useful plugins to render shapes so you don't have to create it yourself
import state from "../state";
const Model = ({ modelPath }) => {
  const gltf = useLoader(GLTFLoader, modelPath);
  return <primitive object={gltf.scene} dispose={null} position={[0, 0, 0]} />;
};
const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[0, 10, 0]} intensity={1.5} />
      <spotLight intensity={1} position={[1000, 0, 0]} />
    </>
  );
};
const HTMLContent = ({ domContent, children, modelPath, positionY }) => {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.003));

  return (
    // offset is the force of how much it move when you scroll
    <Section factor={1} offset={1}>
      <group position={[0, positionY, 0]}>
        <mesh ref={ref} position={[-40, 100, -250]}>
          <Model modelPath={modelPath} />
        </mesh>
        <Html portal={domContent} fullscreen>
          {children}
        </Html>
      </group>
    </Section>
  );
};

const LandingPage = () => {
  const domContent = useRef();
  // const scrollArea = useRef();
  // const onScroll = (e) => (state.top.current = e.target.scrollTop);
  // useEffect(() => void onScroll({ target: scrollArea.current }), []);
  return (
    <div className="landing-page">
      <Canvas
        colorManangent
        // x,y,z
        camera={{ position: [0, 0, 120], fov: 110 }}
      >
        <Lights />
        <Suspense fallback={null}>
          <HTMLContent
            domContent={domContent}
            modelPath="scene.gltf"
            positionY={250}
          >
            <div class="container">
              <h1 className="title">Josiah Ngu</h1>
              <h1 className="subheading">Full Stack Software Developer</h1>
            </div>
          </HTMLContent>
        </Suspense>
      </Canvas>
      {/* <div class="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ position: "sticky", top: 0 }}></div>
        <div style={{ height: `${state.sections * 100}vh` }}></div>
      </div> */}
    </div>
  );
};
export default LandingPage;
