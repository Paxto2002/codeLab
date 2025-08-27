"use client";
import React, { useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

const courses = [
  { title: "Foundations of Machine Learning", href: "/courses/foundations-of-machine-learning" },
  { title: "Deep Learning with TensorFlow", href: "/courses/deep-learning-with-tensorflow" },
  { title: "Natural Language Processing Fundamentals", href: "/courses/natural-language-processing-fundamentals" },
  { title: "Advanced Data Visualization with Python", href: "/courses/advanced-data-visualization-with-python" },
  { title: "Computer Vision with OpenCV", href: "/courses/computer-vision-with-opencv" },
  { title: "AI Strategy for Business Leaders", href: "/courses/ai-strategy-for-business-leaders" },
  { title: "Data Engineering with Apache Spark", href: "/courses/data-engineering-with-apache-spark" },
];

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        {/* Home */}
        <MenuItem setActive={setActive} active={active} item="Home">
          <HoveredLink href="/">Home</HoveredLink>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Our Courses">
          {/* Link when clicked */}
          <Link
            href="/courses"
            className="block font-semibold hover:text-teal-400 transition-colors"
            onClick={() => setActive("Our Courses")}
          >
            Our Courses
          </Link>

          {/* Dropdown shown on hover */}
          <div className="absolute top-full left-0 mt-1 hidden group-hover:flex flex-col bg-gray-900 p-2 rounded shadow-lg">
            {courses.map((course) => (
              <HoveredLink key={course.href} href={course.href}>
                {course.title}
              </HoveredLink>
            ))}
          </div>
        </MenuItem>


        {/* Contact */}
        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <HoveredLink href="/contact">Contact Us</HoveredLink>
        </MenuItem>
      </Menu>
    </nav>
  );
};

export default Navbar;
