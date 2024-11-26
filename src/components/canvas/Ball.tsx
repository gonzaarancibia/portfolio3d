import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';

import CanvasLoader from '../Loader';

// Define types for Ball component props
interface BallProps {
  imgUrl: string; // URL for the decal image
}

// Ball component with typing
const Ball: React.FC<BallProps> = (props) => {
  const [decal] = useTexture([props.imgUrl]); // Load the texture for the decal

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

// Define types for BallCanvas component props
interface BallCanvasProps {
  icon: string; // The icon URL for the ball's texture
}

// BallCanvas component with typing
const BallCanvas: React.FC<BallCanvasProps> = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />{' '}
        {/* Render the Ball component with the provided icon */}
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
