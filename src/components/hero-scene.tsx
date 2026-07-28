"use client";

import { AdaptiveDpr, Float, PerspectiveCamera, Sparkles } from "@react-three/drei";
import { Canvas, ThreeEvent, useFrame } from "@react-three/fiber";
import type { MotionValue } from "framer-motion";
import { Suspense, useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";

type HeroSceneProps = {
  progress: MotionValue<number>;
};

const treeCount = 240;

function seededNoise(index: number) {
  const value = Math.sin(index * 999.17) * 10000;
  return value - Math.floor(value);
}

function Terrain() {
  const geometry = useMemo(() => {
    const terrainGeometry = new THREE.PlaneGeometry(82, 82, 86, 86);
    const positions = terrainGeometry.attributes.position;

    for (let index = 0; index < positions.count; index += 1) {
      const x = positions.getX(index);
      const y = positions.getY(index);
      const elevation =
        Math.sin(x * 0.2) * 0.45 +
        Math.cos(y * 0.18) * 0.42 +
        Math.sin((x + y) * 0.12) * 0.36;
      positions.setZ(index, elevation);
    }

    terrainGeometry.computeVertexNormals();
    return terrainGeometry;
  }, []);

  return (
    <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.8, 0]}>
      <mesh geometry={geometry} receiveShadow>
        <meshStandardMaterial
          color="#123c28"
          roughness={0.82}
          metalness={0.08}
          emissive="#071811"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh position={[0, 0, 0.035]}>
        <planeGeometry args={[56, 34, 1, 1]} />
        <meshBasicMaterial
          color="#1f8a70"
          transparent
          opacity={0.08}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
      <gridHelper
        args={[54, 28, "#1F8A70", "#1F8A70"]}
        position={[0, 0.03, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

function Forest() {
  const canopyRef = useRef<THREE.InstancedMesh>(null);
  const trunksRef = useRef<THREE.InstancedMesh>(null);

  const trees = useMemo(
    () =>
      Array.from({ length: treeCount }, (_, index) => {
        const band = index % 4;
        const x = (seededNoise(index + 1) - 0.5) * 74;
        const z = (seededNoise(index + 2) - 0.5) * 62 + (band === 0 ? -8 : 0);
        const scale = 0.58 + seededNoise(index + 3) * 1.25;
        const hue = seededNoise(index + 4);

        return {
          position: [x, -1.25, z] as const,
          scale,
          color: hue > 0.55 ? "#1F8A70" : hue > 0.22 ? "#176247" : "#0A3B2E",
        };
      }),
    [],
  );

  useLayoutEffect(() => {
    const dummy = new THREE.Object3D();
    const color = new THREE.Color();

    trees.forEach((tree, index) => {
      dummy.position.set(tree.position[0], tree.position[1] + tree.scale * 0.7, tree.position[2]);
      dummy.rotation.y = seededNoise(index + 7) * Math.PI;
      dummy.scale.setScalar(tree.scale);
      dummy.updateMatrix();
      canopyRef.current?.setMatrixAt(index, dummy.matrix);
      canopyRef.current?.setColorAt(index, color.set(tree.color));

      dummy.position.set(tree.position[0], tree.position[1] - 0.15, tree.position[2]);
      dummy.rotation.y = 0;
      dummy.scale.set(0.14 * tree.scale, 0.92 * tree.scale, 0.14 * tree.scale);
      dummy.updateMatrix();
      trunksRef.current?.setMatrixAt(index, dummy.matrix);
    });

    if (canopyRef.current) {
      canopyRef.current.instanceMatrix.needsUpdate = true;
      if (canopyRef.current.instanceColor) {
        canopyRef.current.instanceColor.needsUpdate = true;
      }
    }

    if (trunksRef.current) {
      trunksRef.current.instanceMatrix.needsUpdate = true;
    }
  }, [trees]);

  return (
    <group>
      <instancedMesh ref={trunksRef} args={[undefined, undefined, treeCount]} castShadow receiveShadow>
        <cylinderGeometry args={[0.35, 0.5, 2.8, 6]} />
        <meshStandardMaterial color="#6C4A2F" roughness={0.9} />
      </instancedMesh>
      <instancedMesh ref={canopyRef} args={[undefined, undefined, treeCount]} castShadow receiveShadow>
        <coneGeometry args={[1.05, 3.8, 7]} />
        <meshStandardMaterial roughness={0.78} metalness={0.04} />
      </instancedMesh>
    </group>
  );
}

function Drone({ progress }: HeroSceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const propellerRef = useRef<THREE.Group>(null);
  const beamRef = useRef<THREE.Mesh>(null);
  const scanRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const elapsed = state.clock.elapsedTime;
    const scroll = progress.get();

    if (groupRef.current) {
      groupRef.current.position.x = THREE.MathUtils.lerp(3.7, -3.8, scroll) + Math.sin(elapsed * 0.55) * 0.45;
      groupRef.current.position.y = THREE.MathUtils.lerp(3.55, 4.75, scroll) + Math.sin(elapsed * 1.4) * 0.12;
      groupRef.current.position.z = THREE.MathUtils.lerp(5.2, -5.8, scroll);
      groupRef.current.rotation.z = Math.sin(elapsed * 0.8) * 0.055;
      groupRef.current.rotation.y = -0.2 + scroll * 0.32;
    }

    if (propellerRef.current) {
      propellerRef.current.children.forEach((child) => {
        child.rotation.y += 0.88;
      });
    }

    if (beamRef.current) {
      const material = beamRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.18 + Math.sin(elapsed * 2.2) * 0.04;
      beamRef.current.scale.x = 0.85 + Math.sin(elapsed * 1.5) * 0.08;
      beamRef.current.scale.z = 0.85 + Math.cos(elapsed * 1.5) * 0.08;
    }

    if (scanRef.current) {
      scanRef.current.position.z = THREE.MathUtils.lerp(14, -18, (elapsed * 0.12 + scroll * 0.9) % 1);
    }
  });

  const rotorPositions = [
    [-2.3, 0.05, -1.72],
    [2.3, 0.05, -1.72],
    [-2.3, 0.05, 1.72],
    [2.3, 0.05, 1.72],
  ];

  return (
    <group ref={groupRef} position={[3.7, 3.55, 5.2]}>
      <Float speed={1.2} rotationIntensity={0.18} floatIntensity={0.3}>
        <group scale={0.96}>
          <mesh castShadow scale={[1.45, 0.36, 0.82]}>
            <sphereGeometry args={[1, 32, 18]} />
            <meshStandardMaterial color="#F7F5EF" roughness={0.28} metalness={0.44} />
          </mesh>
          <mesh position={[0, 0.16, -0.18]} castShadow scale={[0.78, 0.16, 0.46]}>
            <sphereGeometry args={[1, 28, 14]} />
            <meshStandardMaterial color="#0A3B2E" roughness={0.18} metalness={0.7} />
          </mesh>
          <mesh position={[0, -0.32, -0.82]} castShadow>
            <sphereGeometry args={[0.32, 22, 14]} />
            <meshStandardMaterial color="#101916" roughness={0.22} metalness={0.65} />
          </mesh>
          <mesh position={[0, -0.35, -1.12]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.18, 0.18, 0.18, 24]} />
            <meshStandardMaterial
              color="#1F8A70"
              emissive="#1F8A70"
              emissiveIntensity={0.85}
              roughness={0.28}
              metalness={0.4}
            />
          </mesh>
          <mesh position={[0, -0.54, -0.03]}>
            <sphereGeometry args={[0.22, 18, 12]} />
            <meshStandardMaterial color="#1F8A70" emissive="#1F8A70" emissiveIntensity={0.55} />
          </mesh>

          {rotorPositions.map(([x, y, z]) => (
            <group key={`${x}-${z}`}>
              <mesh
                position={[x / 2, y - 0.02, z / 2]}
                rotation={[0, -Math.atan2(z, x), 0]}
                castShadow
              >
                <boxGeometry args={[Math.hypot(x, z), 0.09, 0.13]} />
                <meshStandardMaterial color="#d7d2c4" metalness={0.48} roughness={0.32} />
              </mesh>
              <mesh position={[x, y, z]} castShadow>
                <cylinderGeometry args={[0.34, 0.4, 0.28, 28]} />
                <meshStandardMaterial color="#14281f" metalness={0.52} roughness={0.34} />
              </mesh>
              <mesh position={[x, y + 0.03, z]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.82, 0.035, 10, 48]} />
                <meshStandardMaterial
                  color="#F7F5EF"
                  transparent
                  opacity={0.52}
                  roughness={0.42}
                  metalness={0.38}
                />
              </mesh>
              <mesh position={[x, y - 0.22, z]} castShadow>
                <cylinderGeometry args={[0.18, 0.22, 0.35, 18]} />
                <meshStandardMaterial color="#071811" metalness={0.55} roughness={0.35} />
              </mesh>
            </group>
          ))}

          {[-0.72, 0.72].map((x) => (
            <group key={`skid-${x}`} position={[x, -0.78, 0]}>
              <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.035, 0.035, 1.62, 10]} />
                <meshStandardMaterial color="#F7F5EF" roughness={0.4} metalness={0.45} />
              </mesh>
              <mesh position={[0, 0.24, -0.56]}>
                <cylinderGeometry args={[0.026, 0.026, 0.5, 8]} />
                <meshStandardMaterial color="#F7F5EF" roughness={0.42} metalness={0.4} />
              </mesh>
              <mesh position={[0, 0.24, 0.56]}>
                <cylinderGeometry args={[0.026, 0.026, 0.5, 8]} />
                <meshStandardMaterial color="#F7F5EF" roughness={0.42} metalness={0.4} />
              </mesh>
            </group>
          ))}

          <group ref={propellerRef}>
            {rotorPositions.map(([x, y, z]) => (
              <group key={`prop-${x}-${z}`} position={[x, y + 0.28, z]}>
                <mesh>
                  <boxGeometry args={[1.46, 0.026, 0.16]} />
                  <meshBasicMaterial color="#F7F5EF" transparent opacity={0.52} />
                </mesh>
                <mesh rotation={[0, Math.PI / 2, 0]}>
                  <boxGeometry args={[1.46, 0.026, 0.16]} />
                  <meshBasicMaterial color="#F7F5EF" transparent opacity={0.42} />
                </mesh>
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                  <circleGeometry args={[0.74, 36]} />
                  <meshBasicMaterial
                    color="#F7F5EF"
                    transparent
                    opacity={0.07}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                    side={THREE.DoubleSide}
                  />
                </mesh>
              </group>
            ))}
          </group>

          <mesh ref={beamRef} position={[0, -3.7, 0]} rotation={[Math.PI, 0, 0]}>
            <coneGeometry args={[3.2, 7.4, 4, 1, true]} />
            <meshBasicMaterial
              color="#1F8A70"
              transparent
              opacity={0.2}
              depthWrite={false}
              blending={THREE.AdditiveBlending}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>
      </Float>
      <mesh ref={scanRef} position={[0, -6.92, 8]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[28, 0.12]} />
        <meshBasicMaterial
          color="#F4C95D"
          transparent
          opacity={0.55}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

function Heatmap({ progress }: HeroSceneProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const scroll = progress.get();
    const elapsed = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.children.forEach((child, index) => {
        const material = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
        material.opacity = Math.max(0, scroll - 0.28) * (0.22 + index * 0.03);
        child.scale.setScalar(1 + Math.sin(elapsed * 0.9 + index) * 0.035);
      });
    }
  });

  return (
    <group ref={groupRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.72, 0]}>
      {[
        [-10, -6, 7, "#1F8A70"],
        [5, 4, 9, "#F4C95D"],
        [12, -12, 6, "#1F8A70"],
      ].map(([x, y, radius, color]) => (
        <mesh key={`${x}-${y}`} position={[Number(x), Number(y), 0.055]}>
          <circleGeometry args={[Number(radius), 36]} />
          <meshBasicMaterial
            color={String(color)}
            transparent
            opacity={0}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

function SceneRig({ progress }: HeroSceneProps) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    const scroll = progress.get();
    const camera = cameraRef.current;

    if (!camera) {
      return;
    }

    const targetX = THREE.MathUtils.lerp(-8, 6, scroll) + pointer.current.x * 1.6;
    const targetY = THREE.MathUtils.lerp(9, 7.2, scroll) + pointer.current.y * 0.8;
    const targetZ = THREE.MathUtils.lerp(22, 13, scroll);

    camera.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.045);
    camera.lookAt(0, 0.2, -1.8);
    state.camera.updateProjectionMatrix();
  });

  const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
    pointer.current.x = (event.pointer.x - 0.5) * 2;
    pointer.current.y = (event.pointer.y - 0.5) * 2;
  };

  return (
    <group onPointerMove={handlePointerMove}>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[-8, 9, 22]} fov={43} />
    </group>
  );
}

function World({ progress }: HeroSceneProps) {
  return (
    <>
      <color attach="background" args={["#071811"]} />
      <fog attach="fog" args={["#071811", 12, 64]} />
      <ambientLight intensity={0.42} />
      <directionalLight position={[8, 14, 10]} intensity={2.2} color="#F7F5EF" castShadow />
      <pointLight position={[-8, 8, -8]} intensity={2.5} color="#1F8A70" />
      <pointLight position={[12, 5, 3]} intensity={0.9} color="#F4C95D" />
      <SceneRig progress={progress} />
      <Terrain />
      <Forest />
      <Heatmap progress={progress} />
      <Drone progress={progress} />
      <Sparkles
        count={90}
        scale={[44, 12, 34]}
        position={[0, 5, 0]}
        size={1.25}
        speed={0.16}
        opacity={0.36}
        color="#F7F5EF"
      />
    </>
  );
}

export default function HeroScene({ progress }: HeroSceneProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.6]}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      }}
      className="defortrack-canvas"
    >
      <Suspense fallback={null}>
        <World progress={progress} />
        <AdaptiveDpr pixelated />
      </Suspense>
    </Canvas>
  );
}
