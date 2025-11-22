"use client";

import { useGLTF, Float, MeshDistortMaterial, Center } from "@react-three/drei";
import React, { useState, useEffect } from "react";
import * as THREE from "three";

interface ModelViewerProps {
    modelPath: string;
    type?: "quantum" | "drone" | "pi" | "robot" | "default";
    scale?: number;
}

function QuantumComputer() {
    return (
        <group>
            {/* Main Cylinder (Top) */}
            <mesh position={[0, 1.5, 0]}>
                <cylinderGeometry args={[1, 1, 0.5, 32]} />
                <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.2} />
            </mesh>
            {/* Tiers */}
            <mesh position={[0, 1, 0]}>
                <cylinderGeometry args={[0.8, 0.8, 0.5, 32]} />
                <meshStandardMaterial color="#ffd700" metalness={1} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0.5, 0]}>
                <cylinderGeometry args={[0.6, 0.6, 0.5, 32]} />
                <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.4, 0.4, 0.5, 32]} />
                <meshStandardMaterial color="#ffd700" metalness={1} roughness={0.2} />
            </mesh>
            <mesh position={[0, -0.5, 0]}>
                <cylinderGeometry args={[0.2, 0.2, 0.5, 32]} />
                <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.2} />
            </mesh>
            {/* Wires/Tubes */}
            <mesh position={[0.5, 0.5, 0]} rotation={[0, 0, 0.1]}>
                <cylinderGeometry args={[0.05, 0.05, 2, 8]} />
                <meshStandardMaterial color="#c0c0c0" metalness={0.8} />
            </mesh>
            <mesh position={[-0.5, 0.5, 0]} rotation={[0, 0, -0.1]}>
                <cylinderGeometry args={[0.05, 0.05, 2, 8]} />
                <meshStandardMaterial color="#c0c0c0" metalness={0.8} />
            </mesh>
        </group>
    );
}

function Drone() {
    return (
        <group>
            {/* Body */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[0.5, 0.2, 1]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            {/* Arms */}
            <mesh position={[0.5, 0, 0.5]} rotation={[0, Math.PI / 4, 0]}>
                <boxGeometry args={[1, 0.05, 0.1]} />
                <meshStandardMaterial color="#555" />
            </mesh>
            <mesh position={[-0.5, 0, 0.5]} rotation={[0, -Math.PI / 4, 0]}>
                <boxGeometry args={[1, 0.05, 0.1]} />
                <meshStandardMaterial color="#555" />
            </mesh>
            <mesh position={[0.5, 0, -0.5]} rotation={[0, -Math.PI / 4, 0]}>
                <boxGeometry args={[1, 0.05, 0.1]} />
                <meshStandardMaterial color="#555" />
            </mesh>
            <mesh position={[-0.5, 0, -0.5]} rotation={[0, Math.PI / 4, 0]}>
                <boxGeometry args={[1, 0.05, 0.1]} />
                <meshStandardMaterial color="#555" />
            </mesh>
            {/* Rotors */}
            {[
                [0.8, 0.1, 0.8],
                [-0.8, 0.1, 0.8],
                [0.8, 0.1, -0.8],
                [-0.8, 0.1, -0.8],
            ].map((pos, i) => (
                <group key={i} position={pos as [number, number, number]}>
                    <mesh>
                        <cylinderGeometry args={[0.4, 0.4, 0.02, 32]} />
                        <meshStandardMaterial color="#111" transparent opacity={0.8} />
                    </mesh>
                    <mesh position={[0, -0.05, 0]}>
                        <cylinderGeometry args={[0.05, 0.05, 0.1, 8]} />
                        <meshStandardMaterial color="#555" />
                    </mesh>
                </group>
            ))}
        </group>
    );
}

function RaspberryPi() {
    return (
        <group rotation={[Math.PI / 4, Math.PI / 4, 0]}>
            {/* PCB */}
            <mesh>
                <boxGeometry args={[1.5, 0.05, 1]} />
                <meshStandardMaterial color="#00aa00" roughness={0.5} />
            </mesh>
            {/* USB Ports */}
            <mesh position={[0.7, 0.1, -0.2]}>
                <boxGeometry args={[0.2, 0.2, 0.3]} />
                <meshStandardMaterial color="#c0c0c0" metalness={0.8} />
            </mesh>
            <mesh position={[0.7, 0.1, 0.2]}>
                <boxGeometry args={[0.2, 0.2, 0.3]} />
                <meshStandardMaterial color="#c0c0c0" metalness={0.8} />
            </mesh>
            {/* Ethernet */}
            <mesh position={[0.7, 0.1, -0.6]}>
                <boxGeometry args={[0.25, 0.2, 0.25]} />
                <meshStandardMaterial color="#c0c0c0" metalness={0.8} />
            </mesh>
            {/* GPIO Pins */}
            <mesh position={[-0.4, 0.1, -0.4]}>
                <boxGeometry args={[0.8, 0.1, 0.1]} />
                <meshStandardMaterial color="#111" />
            </mesh>
            {/* CPU */}
            <mesh position={[0, 0.05, 0]}>
                <boxGeometry args={[0.3, 0.02, 0.3]} />
                <meshStandardMaterial color="#111" />
            </mesh>
        </group>
    );
}

function Robot() {
    return (
        <group>
            {/* Head */}
            <mesh position={[0, 1.4, 0]}>
                <sphereGeometry args={[0.25, 32, 32]} />
                <meshStandardMaterial color="#e0e0e0" metalness={0.5} />
            </mesh>
            {/* Torso */}
            <mesh position={[0, 0.8, 0]}>
                <boxGeometry args={[0.6, 0.8, 0.3]} />
                <meshStandardMaterial color="#333" metalness={0.6} />
            </mesh>
            {/* Arms */}
            <mesh position={[0.45, 0.8, 0]}>
                <cylinderGeometry args={[0.1, 0.1, 0.8, 16]} />
                <meshStandardMaterial color="#e0e0e0" metalness={0.5} />
            </mesh>
            <mesh position={[-0.45, 0.8, 0]}>
                <cylinderGeometry args={[0.1, 0.1, 0.8, 16]} />
                <meshStandardMaterial color="#e0e0e0" metalness={0.5} />
            </mesh>
            {/* Legs */}
            <mesh position={[0.2, 0, 0]}>
                <cylinderGeometry args={[0.12, 0.12, 0.9, 16]} />
                <meshStandardMaterial color="#333" metalness={0.6} />
            </mesh>
            <mesh position={[-0.2, 0, 0]}>
                <cylinderGeometry args={[0.12, 0.12, 0.9, 16]} />
                <meshStandardMaterial color="#333" metalness={0.6} />
            </mesh>
        </group>
    );
}

function DefaultSphere() {
    return (
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
    );
}

function LoadedModel({ path, scale }: { path: string; scale: number }) {
    const { scene } = useGLTF(path);
    return <primitive object={scene} scale={scale} />;
}

// Class-based Error Boundary to catch render errors (like missing GLTF)
class ErrorBoundary extends React.Component<{ children: React.ReactNode; onError: () => void }, { hasError: boolean }> {
    constructor(props: { children: React.ReactNode; onError: () => void }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: any) {
        console.error("Model load error:", error);
        this.props.onError();
    }

    render() {
        if (this.state.hasError) {
            return null;
        }
        return this.props.children;
    }
}

export default function ModelViewer({ modelPath, type = "default", scale = 1 }: ModelViewerProps) {
    const [error, setError] = useState(false);

    // Reset error if path changes
    useEffect(() => {
        setError(false);
    }, [modelPath]);

    const renderProcedural = () => {
        switch (type) {
            case "quantum":
                return <QuantumComputer />;
            case "drone":
                return <Drone />;
            case "pi":
                return <RaspberryPi />;
            case "robot":
                return <Robot />;
            default:
                return <DefaultSphere />;
        }
    };

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Center>
                {error || modelPath === "procedural" ? (
                    renderProcedural()
                ) : (
                    <ErrorBoundary onError={() => setError(true)}>
                        <LoadedModel path={modelPath} scale={scale} />
                    </ErrorBoundary>
                )}
            </Center>
        </Float>
    );
}
