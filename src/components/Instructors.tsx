"use client"
import React from 'react'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from './ui/animated-tooltip';

const instructorsData = [
    {
        id: 1,
        name: "Dr. Elena Rodriguez",
        designation: "Machine Learning Expert",
        image: "https://images.unsplash.com/photo-1595525669954-55b2face5115?",
    },
    {
        id: 2,
        name: "Professor James Chen",
        designation: "Deep Learning Specialist",
        image: "https://images.unsplash.com/photo-1630317130416-911a6fd203ad?",
    },
    {
        id: 3,
        name: "Dr. Maya Patel",
        designation: "NLP Researcher",
        image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?",
    },
    {
        id: 4,
        name: "Michael Roberts",
        designation: "Data Visualization Analyst",
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?",
    },
    {
        id: 5,
        name: "Dr. Alex Turner",
        designation: "Computer Vision Engineer",
        image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?",
    },
    {
        id: 6,
        name: "Sarah Williamson",
        designation: "AI Strategy Consultant",
        image: "https://images.unsplash.com/photo-1598700373821-c65ca5d5e86d?",
    },
    {
        id: 7,
        name: "David Kim",
        designation: "Data Engineering Expert",
        image: "https://images.unsplash.com/photo-1709507779917-242b560288be?",
    },
];



const Instructors = () => {
    return (
        <div className='relative h-[40rem] overflow-hidden flex items-center justify-center'>
            <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-md mb-4 text-center px-4">
                    Meet Our Instructors
                </h2>

                <p className="text-white/90 text-lg max-w-2xl drop-shadow text-center px-4">
                    Learn from industry experts in AI, Data Science, and Web Development.
                    Our instructors bring real-world experience and hands-on guidance to help you build projects, master concepts, and accelerate your career in tech.
                </p>
                <div className="w-full flex items-center justify-center mb-10 flex-row mt-7">
                    <AnimatedTooltip items={instructorsData} />
                </div>
            </WavyBackground>
        </div>
    )
}

export default Instructors