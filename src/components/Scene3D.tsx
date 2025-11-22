"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Stage } from "@react-three/drei";
import ModelViewer from "./ModelViewer";
import { motion } from "framer-motion";
import { Suspense } from "react";

const models = [
    { id: 1, path: "/3D_models/model (1).glb", name: "Robotics", scale: 0.8 },
    { id: 2, path: "/3D_models/model (2).glb", name: "Drone Tech", scale: 0.8 },
    { id: 3, path: "/3D_models/model (3).glb", name: "Components", scale: 0.8 },
    { id: 4, path: "procedural", name: "Future Tech", scale: 1.2 },
];

export default function Scene3D() {
    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Interactive 3D Showcase</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Explore the dimensions of my work. Interact with the models below.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-[400px] md:h-[300px]">
                    {models.map((model, index) => (
                        <motion.div
                            key={model.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative h-full w-full bg-secondary/20 rounded-2xl overflow-hidden border border-border/50"
                        >
                            <div className="absolute top-4 left-4 z-10">
                                <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium border border-border">
                                    {model.name}
                                </span>
                            </div>

                            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
                                <Suspense fallback={null}>
                                    <Stage environment="city" intensity={0.6} adjustCamera={false}>
                                        <ModelViewer modelPath={model.path} scale={model.scale} />
                                    </Stage>
                                    <OrbitControls autoRotate autoRotateSpeed={4} enableZoom={false} />
                                </Suspense>
                            </Canvas>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
