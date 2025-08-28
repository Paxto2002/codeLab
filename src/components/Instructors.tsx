"use client"
import React from 'react'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from './ui/animated-tooltip';

const instructorsData = [
    {
        id: 1,
        name: "Dr. Elena Rodriguez",
        designation: "Machine Learning Expert",
        image: "/I_1.jpg",
    },
    {
        id: 2,
        name: "Professor James Chen",
        designation: "Deep Learning Specialist",
        image: "/I_2.jpg",
    },
    {
        id: 3,
        name: "Dr. Maya Patel",
        designation: "NLP Researcher",
        image: "/I_3.jpg",
    },
    {
        id: 4,
        name: "Michael Roberts",
        designation: "Data Visualization Analyst",
        image: "/I_4.jpg",
    },
    {
        id: 5,
        name: "Dr. Alex Turner",
        designation: "Computer Vision Engineer",
        image: "/I_5.jpg",
    },
    {
        id: 6,
        name: "Sarah Williamson",
        designation: "AI Strategy Consultant",
        image: "/I_6.jpg",
    },
    {
        id: 7,
        name: "David Kim",
        designation: "Data Engineering Expert",
        image: "/I_7.jpg",
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