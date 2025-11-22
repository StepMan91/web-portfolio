"use client";

import { activities } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function ActivitiesPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold mb-4">My Activities</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A collection of my projects, adventures, and creations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={activity.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all"
                        >
                            <Link href={`/activities/${activity.slug}`}>
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={activity.imageUrl || "/placeholder.jpg"}
                                        alt={activity.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                                        <Calendar className="h-3 w-3" />
                                        <span>{activity.date}</span>
                                    </div>
                                    <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                        {activity.title}
                                    </h2>
                                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                                        {activity.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {activity.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
