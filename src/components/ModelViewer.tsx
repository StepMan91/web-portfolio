"use client";

import { useGLTF, Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

interface ModelViewerProps {
    modelPath: string;
    scale?: number;
}

export default function ModelViewer({ modelPath, scale = 1 }: ModelViewerProps) {
    const meshRef = useRef<THREE.Group>(null);

    if (modelPath === "procedural") {
        return (
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <mesh>
                    <icosahedronGeometry args={[1, 1]} />
                    <MeshDistortMaterial
                        color="#4f46e5"
                        attach="material"
                        distort={0.5}
                        speed={2}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </mesh>
            </Float>
        );
    }

    // We load the model if it's not procedural
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { scene } = useGLTF(modelPath);

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <primitive
                object={scene}
                scale={scale}
                ref={meshRef}
            />
        </Float>
    );
}
