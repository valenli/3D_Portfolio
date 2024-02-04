import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";

import Island from "../models/Island";
import HomeInfo from "../components/HomeInfo";
import { useTranslation } from "react-i18next";
import AnimeSky from "../models/AnimeSky";
import Woman from "../models/Woman";

const Home = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [currentAnimation, setCurrentAnimation] = useState('Armature.447|[n_40] mouth_03')

  const adjustWomanForScreenSize = () => {
    let screenScale = [5, 5, 5];
    let screenPosition = [0, -6, -6];
    let rotation = [0.2, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [4, 4, 4];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [WomanScale, WomanPosition, WomanRotation] = adjustWomanForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, -10, -5]} intensity={0} />
          <ambientLight intensity={1} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          {/* <Sky isRotating={isRotating} /> */}
          {/* <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          /> */}
          <AnimeSky isRotating={isRotating} />
          <Woman
            position={WomanPosition}
            scale={WomanScale}
            rotation={WomanRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            currentAnimation={currentAnimation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
