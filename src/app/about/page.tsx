"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

                    <div className="prose prose-lg dark:prose-invert mx-auto">
                        <p className="lead text-xl text-muted-foreground mb-6">
                            I am a passionate developer, maker, and explorer. My journey began with a curiosity for how things work,
                            which led me to the world of robotics and artificial intelligence.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4">My Background</h2>
                        <p className="mb-4">
                            With a strong foundation in Full Stack Development, I love building applications that solve real-world problems.
                            But my interests don&apos;t stop at the screen. I enjoy getting my hands dirty with electronics, soldering irons, and 3D printers.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4">Beyond Code</h2>
                        <p className="mb-4">
                            When I&apos;m not coding or building robots, you can find me:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Flying FPV drones through abandoned buildings or scenic landscapes.</li>
                            <li>Experimenting with new recipes in the kitchen, trying to perfect my pasta dough.</li>
                            <li>Traveling to new countries to experience different cultures and cuisines.</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
