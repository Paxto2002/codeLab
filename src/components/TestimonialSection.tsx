"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonialCards = [
    {
        quote:
            "CodeLab completely transformed my career. The AI and Machine Learning track gave me practical projects I could showcase in interviews. Within 3 months, I landed my first role as a Data Analyst.",
        name: "Sarah Khan",
        title: "Data Analyst at TechNova",
    },
    {
        quote:
            "The best part about CodeLab is how practical it is. Every lesson comes with real-world coding exercises, and by the end of the course, I had built full-stack applications and deployed my own models.",
        name: "John Smith",
        title: "Full Stack Developer at InnovateX",
    },
    {
        quote:
            "As someone switching careers into Data Science, I was overwhelmed at first. CodeLab’s structured roadmap and supportive instructors made everything clear.",
        name: "Maria Lopez",
        title: "Junior Data Scientist at FinCore",
    },
    {
        quote:
            "I&apos;ve tried multiple platforms before, but CodeLab stands out for its hands-on approach. The instructors mentor you through challenges.",
        name: "Ahmed Raza",
        title: "AI Research Intern at VisionAI",
    },
    {
        quote:
            "What I love about CodeLab is the flexibility. I could learn at my own pace while still working full-time. The balance between theory and projects meant I never felt stuck in just academic learning.",
        name: "Emily Chen",
        title: "Software Engineer at CloudWorks",
    },
    {
        quote:
            "The Data Science projects at CodeLab were incredibly realistic. I learned to clean, analyze, and visualize data like a professional. It prepared me for real workplace tasks.",
        name: "David Miller",
        title: "Data Analyst at ByteWave",
    },
    {
        quote:
            "CodeLab&apos;s AI course helped me understand neural networks and machine learning algorithms in depth. The practical exercises made complex topics easy to grasp.",
        name: "Aisha Siddiqui",
        title: "AI Developer at NeuralTech",
    },
    {
        quote:
            "I loved the coding challenges and quizzes. They reinforced learning and kept me engaged throughout the course. CodeLab made sure I could apply knowledge, not just memorize it.",
        name: "Liam Johnson",
        title: "Software Engineer at DevWorks",
    },
    {
        quote:
            "The community at CodeLab is amazing. Peer discussions and collaborative projects helped me learn faster and build a network of like-minded learners.",
        name: "Fatima Noor",
        title: "Machine Learning Intern at DataSphere",
    },
    {
        quote:
            "From beginner to job-ready, CodeLab&apos;s structured curriculum guided me every step of the way. I gained confidence, completed portfolio projects, and landed my dream role.",
        name: "Ethan Brown",
        title: "Junior Data Scientist at CloudMatrix",
    },
];


const TestimonialSection = () => {
    return (
        <div
            className="
        relative w-full h-[40rem] flex flex-col items-center justify-center
        overflow-hidden dark:bg-black
        [background-size:20px_20px]
        [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]
        dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]
      "
        >
            <h2 className="text-3xl tracking-wide uppercase text-center my-3 font-bold">
                From Learning to Launching: Our
                <span className="text-teal-400 text-5xl"> Students&apos;</span> Journeys
            </h2>

            <div className="w-full flex justify-center">
                <InfiniteMovingCards items={testimonialCards} />
            </div>
        </div>
    );
};

export default TestimonialSection;
