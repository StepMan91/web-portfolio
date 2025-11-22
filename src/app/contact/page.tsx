"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function ContactPage() {
    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
    const [userAnswer, setUserAnswer] = useState("");
    const [honeypot, setHoneypot] = useState("");
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    useEffect(() => {
        setCaptcha({
            num1: Math.floor(Math.random() * 10),
            num2: Math.floor(Math.random() * 10),
        });
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (honeypot) {
            // Bot detected, silently fail
            return;
        }
        if (parseInt(userAnswer) !== captcha.num1 + captcha.num2) {
            setStatus("error");
            return;
        }
        // Success
        setStatus("success");
        alert("Message sent successfully! (Simulation)");
        // Reset form
        setUserAnswer("");
        setCaptcha({
            num1: Math.floor(Math.random() * 10),
            num2: Math.floor(Math.random() * 10),
        });
    };

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Interested in collaborating or just want to say hi? I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <Mail className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-medium">Email</h3>
                                    <p className="text-muted-foreground">contact@example.com</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Phone className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-medium">Phone</h3>
                                    <p className="text-muted-foreground">+33 6 12 34 56 78</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <MapPin className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-medium">Location</h3>
                                    <p className="text-muted-foreground">Paris, France</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-card p-8 rounded-2xl border border-border shadow-sm"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Honeypot Field - Hidden */}
                            <div className="hidden">
                                <label htmlFor="website">Website</label>
                                <input
                                    type="text"
                                    id="website"
                                    value={honeypot}
                                    onChange={(e) => setHoneypot(e.target.value)}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </div>

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="How can I help you?"
                                />
                            </div>

                            {/* Math CAPTCHA */}
                            <div>
                                <label htmlFor="captcha" className="block text-sm font-medium mb-2">
                                    Security Check: What is {captcha.num1} + {captcha.num2}?
                                </label>
                                <input
                                    type="number"
                                    id="captcha"
                                    required
                                    value={userAnswer}
                                    onChange={(e) => setUserAnswer(e.target.value)}
                                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Enter the sum"
                                />
                                {status === "error" && (
                                    <p className="text-red-500 text-sm mt-1">Incorrect answer. Please try again.</p>
                                )}
                                {status === "success" && (
                                    <p className="text-green-500 text-sm mt-1">Message sent!</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 px-4 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
