import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/spotlight";
import { Button } from "./ui/moving-border";
const HeroSection = () => {
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="white"
            />
            <div className="mt-20 p-4 relative z-10 w-full text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
                    Unlock Your Future with <span className="text-blue-600">CodeLab</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    Step into the world of
                    <span className="font-semibold">
                        AI, Machine Learning, and Data Science
                    </span>
                    . From building smarter apps with
                    <span className="font-semibold">Deep Learning </span> to mastering
                    <span className="font-semibold">Natural Language Processing </span>
                    and <span className="font-semibold">Computer Vision</span>—our
                    hands-on courses turn curiosity into real-world expertise. <br />
                    Learn from industry leaders, work on projects that matter, and become
                    the developer companies are searching for.
                </p>
                <div className="mt-10">
                    <Link href={"/courses"}>
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:bg-zinc-900 transition-all duration-300 ease-in-out cursor-pointer"
                        >
                            Explore Courses
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default HeroSection;
