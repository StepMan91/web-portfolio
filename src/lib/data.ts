import { Activity } from "@/types";

export const activities: Activity[] = [
  {
    slug: "autonomous-robot-arm",
    title: "Autonomous Robot Arm",
    description: "A 6-DOF robot arm capable of sorting objects using computer vision.",
    date: "2024-10-15",
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
    date: "2024-08-20",
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
    date: "2025-01-05",
    tags: ["Electronics", "IoT", "Home Assistant"],
    imageUrl: "https://images.unsplash.com/photo-1558002038-109177381792?auto=format&fit=crop&q=80&w=800",
    content: `
      ## Home Assistant Setup
      I used a Raspberry Pi 4 to run Home Assistant and connected all my Zigbee devices...
    `
  },
  {
    slug: "motorbike-passion",
    title: "Motorbike Passion",
    description: "Riding my Honda CB1000R Gold since 2002.",
    date: "2025-02-15",
    tags: ["Motorbike", "Honda", "Travel"],
    imageUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800",
    content: `
      ## The Ride
      I have been riding motorbikes since 2002. My current pride and joy is a Honda CB1000R Gold edition.
      
      ## Adventures
      I enjoy long road trips and the feeling of freedom that comes with riding.
    `
  },
  {
    slug: "laser-engraving",
    title: "Laser Engraving",
    description: "Creating detailed designs on wood and other materials using a CO2 laser.",
    date: "2024-11-10",
    tags: ["Maker", "Laser", "Art"],
    imageUrl: "https://images.unsplash.com/photo-1625153669736-231ce40ef3e1?auto=format&fit=crop&q=80&w=800",
    content: `
      ## Precision Art
      Using a CO2 laser machine, I create intricate engravings and cuts on wood, acrylic, and leather.
      
      ## Projects
      From custom gifts to detailed signage, the possibilities are endless.
    `
  },
  {
    slug: "steel-welding",
    title: "Steel Welding",
    description: "Welding steel structures for garden and family projects.",
    date: "2024-05-20",
    tags: ["Welding", "DIY", "Metalwork"],
    imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    content: `
      ## Garden Structures
      I design and weld custom steel structures for my garden, creating durable and functional pieces for my kids to enjoy.
      
      ## Techniques
      I primarily use MIG/MAG welding for its versatility and strength.
    `
  },
  {
    slug: "online-gaming",
    title: "Online Gaming",
    description: "Competitive gaming in Fortnite, LoL, Starcraft, Warhammer 40k, and Valorant.",
    date: "2025-03-01",
    tags: ["Gaming", "Esports", "Strategy"],
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    content: `
      ## The Arena
      I am an avid gamer, enjoying a variety of competitive online games.
      
      ## Favorite Games
      - **Fortnite**: Fast-paced building and shooting action.
      - **League of Legends (LoL)**: Strategic team-based battles.
      - **Starcraft**: Real-time strategy at its finest.
      - **Warhammer 40k**: Deep lore and tactical gameplay.
      - **Valorant**: Tactical shooter requiring precision and teamwork.
    `
  }
];
