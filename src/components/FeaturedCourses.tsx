"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import courseData from "@/data/ai_data_science.json";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/moving-border";

interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    image: string;
}

const FeaturedCourses = () => {
    const featuredCourses = courseData.filter(
        (course: Course) => course.isFeatured
    );

    return (
        <div className="py-12  bg-gray-900">
            <div className="px-5 w-[90%] flex flex-col items-center justify-center mx-auto">
                <h2 className="text-teal-400 font-bold tracking-wide uppercase text-2xl text-center">
                    Featured Courses
                </h2>
                <p className="text-white text-5xl font-extrabold mt-3 text-center">
                    Learn With The Best
                </p>
            </div>

            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mx-auto w-[90%]">
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center pb-5">
                            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm p-3">
                                <div className="relative w-full aspect-[4/3] bg-black">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="px-6 pt-5 flex flex-col items-center">
                                    <p className="text-white font-semibold text-center">{course.title}</p>
                                    <p className="text-teal-400 text-sm mt-1 text-center">
                                        {course.instructor}
                                    </p>
                                    <div className="mt-20 text-center">
                                        <Link
                                            href="/courses"
                                            className="px-6 py-2 rounded-full font-medium text-sm tracking-wide
               bg-white text-black dark:bg-slate-900 dark:text-white
               border border-gray-200 dark:border-slate-700
               shadow-md hover:shadow-lg hover:scale-105
               transition-all duration-300 ease-in-out hover:bg-zinc-900 "
                                        >
                                            Learn More
                                        </Link>

                                    </div>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-20 text-center">
                <Link href="/courses">View All Courses</Link>
            </div>
        </div>
    );
};

export default FeaturedCourses;
