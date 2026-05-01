import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, Octahedron, MeshDistortMaterial } from '@react-three/drei';

const AnimatedShape = ({ theme }) => {
  const meshRef = useRef();
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  const wireframeColor = theme === 'dark' ? '#0a84ff' : '#007aff';
  const solidColor = theme === 'dark' ? '#5e5ce6' : '#5856d6';

  return (
    <group ref={meshRef}>
      <TorusKnot args={[10, 3, 100, 16]} position={[-15, 0, -20]}>
        <meshBasicMaterial color={wireframeColor} wireframe opacity={0.15} transparent />
      </TorusKnot>
      <Octahedron args={[8, 0]} position={[15, 5, -25]}>
        <MeshDistortMaterial color={solidColor} envMapIntensity={1} clearcoat={1} clearcoatRoughness={0.1} metalness={0.8} roughness={0.2} distort={0.4} speed={2} />
      </Octahedron>
    </group>
  );
};

const Background3D = ({ theme }) => {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={theme === 'dark' ? 0.2 : 0.8} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <AnimatedShape theme={theme} />
      </Canvas>
    </div>
  );
};

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <Background3D theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
