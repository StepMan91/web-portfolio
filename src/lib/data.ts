import { Activity } from "@/types";

export const activities: Activity[] = [
    {
        slug: "autonomous-robot-arm",
        title: "Autonomous Robot Arm",
        description: "A 6-DOF robot arm capable of sorting objects using computer vision.",
        date: "2023-10-15",
        tags: ["Robotics", "AI", "Python", "OpenCV"],
        imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
        content: `
      ## Project Overview
      This project involves the design and construction of a 6-degree-of-freedom (6-DOF) robot arm. The arm is powered by stepper motors and controlled via an Arduino Mega.
      
      ## Tech Stack
      - **Hardware**: Arduino Mega, NEMA 17 Stepper Motors, 3D Printed Parts
      - **Software**: Python, OpenCV for object detection, Inverse Kinematics algorithms
      
      ## Challenges
      One of the main challenges was calibrating the inverse kinematics to ensure precise movement...
    `
    },
    {
        slug: "fpv-drone-racing",
        title: "FPV Drone Racing",
        description: "Building and racing high-speed FPV drones.",
        date: "2023-08-20",
        tags: ["Drones", "Electronics", "FPV"],
        imageUrl: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&w=800",
        content: `
      ## My Racing Drone Build
      I built a custom 5-inch freestyle drone using a carbon fiber frame and high-KV brushless motors.
      
      ## Specs
      - **Frame**: Apex 5"
      - **FC**: T-Motor F7
      - **ESC**: 55A 4-in-1
      - **Motors**: 2306 2400KV
    `
    },
    {
        slug: "culinary-adventures-italy",
        title: "Culinary Adventures in Italy",
        description: "Exploring the authentic flavors of Tuscany and Rome.",
        date: "2023-06-10",
        tags: ["Cooking", "Travel", "Food"],
        imageUrl: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?auto=format&fit=crop&q=80&w=800",
        content: `
      ## The Taste of Tuscany
      During my trip to Italy, I learned how to make authentic pasta from scratch...
    `
    },
    {
        slug: "smart-home-automation",
        title: "Smart Home Automation",
        description: "Integrating IoT devices for a fully automated home environment.",
        date: "2023-11-05",
        tags: ["Electronics", "IoT", "Home Assistant"],
        imageUrl: "https://images.unsplash.com/photo-1558002038-109177381792?auto=format&fit=crop&q=80&w=800",
        content: `
      ## Home Assistant Setup
      I used a Raspberry Pi 4 to run Home Assistant and connected all my Zigbee devices...
    `
    }
];
