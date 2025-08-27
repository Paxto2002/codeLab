"use client"
import React from "react";
import Link from "next/link";
import { CardDescription } from "./ui/card-hover-effect";
import { HoverEffect } from "./ui/card-hover-effect";
interface Webinars {
    title: string;
    description: string;
    slug: string;
    isFeatured: boolean;
}
const featuredWebinars = [
    {
        title: "AI in Everyday Life: From Chatbots to Smart Assistants",
        description:
            "Discover how artificial intelligence is transforming daily experiences, from personal assistants like Siri and Alexa to customer service bots and healthcare applications.",
        slug: "ai-in-everyday-life",
        isFeatured: true,
    },
    {
        title: "Breaking Into Data Science: A Beginner’s Roadmap",
        description:
            "Learn the essential skills and tools needed to kickstart your journey in data science, including Python, SQL, and the mindset of a data-driven professional.",
        slug: "breaking-into-data-science",
        isFeatured: true,
    },
    {
        title: "Future of Web Development: Trends in 2025 and Beyond",
        description:
            "Stay ahead of the curve by exploring the latest frameworks, performance optimization techniques, and trends shaping the web development landscape.",
        slug: "future-of-web-development",
        isFeatured: true,
    },
    {
        title: "Deep Learning Demystified: Neural Networks Explained",
        description:
            "Gain a clear understanding of how deep learning models like CNNs and RNNs work, with real-world use cases in computer vision and natural language processing.",
        slug: "deep-learning-demystified",
        isFeatured: true,
    },
    {
        title: "Career Growth in Tech: Building a Standout Portfolio",
        description:
            "Get actionable strategies on showcasing your projects, acing interviews, and positioning yourself for success in competitive tech industries.",
        slug: "career-growth-in-tech",
        isFeatured: true,
    },
];

const UpcomingWebinars = () => {
    return (
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="px-5 flex flex-col items-center justify-center mx-auto">
                    <h2 className="text-teal-400 font-bold tracking-wide uppercase text-2xl text-center">
                        Featured Webinars
                    </h2>
                    <p className="text-white text-3xl font-bold mt-3 text-center">
                        Your Next
                        <span className="text-teal-400 text-4xl font-extrabold "> Breakthrough</span> Starts
                        Here
                    </p>
                </div>
                <div className="mt-10">
                    <HoverEffect
                        items={featuredWebinars.map((webinar) => ({
                            title: webinar.title,
                            description: webinar.description,
                            link: `/webinars/${webinar.slug}`, // unique URL
                        }))}
                    />
                </div>
                <div className="text-center mt-10">
                    <Link href={"/"}>View All Webinars</Link>
                </div>
            </div>
        </div>
    );
};

export default UpcomingWebinars;
