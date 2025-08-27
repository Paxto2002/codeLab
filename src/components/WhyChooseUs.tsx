"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const codeLabContent = [
    {
        title: "Expert Instructors",
        description:
            "At CodeLab, learning is powered by the guidance of world-class instructors who have spent years solving real challenges in AI, Data Science, and Web Development. These aren’t just academics—they are practitioners who have led projects, shipped products, and contributed to cutting-edge innovations. With every lecture and workshop, they share not only knowledge but also the insights, shortcuts, and mindset that professionals actually use in the field. You will learn directly from people who live and breathe technology, ensuring your education stays relevant, practical, and inspiring."
    },
    {
        title: "Practical Learning",
        description:
            "We don’t just teach theory—we put knowledge into action. Every course is structured around real-world projects, coding labs, and case studies that mirror the exact challenges faced by tech professionals today. Whether it’s building a responsive website, training a machine learning model, or analyzing a complex dataset, you will be applying concepts the same way you would in a professional setting. By completing these projects, you’ll walk away with not just certificates but also an impressive portfolio of tangible work that demonstrates your expertise and makes you stand out to employers."
    },
    {
        title: "Flexible & Accessible",
        description:
            "Your learning journey should adapt to your lifestyle—not the other way around. That’s why all our programs are designed to be flexible, accessible, and convenient. With 24/7 online access, you can study from anywhere in the world, at a pace that matches your schedule—whether you’re a full-time student, working professional, or self-taught enthusiast. Every lecture, resource, and exercise is available on multiple devices, giving you complete freedom to pause, rewind, or revisit whenever needed. You’ll never feel rushed, yet you’ll always feel supported."
    },
    {
        title: "Career Growth",
        description:
            "Our mission is not just to teach skills—it’s to transform careers. That’s why every aspect of our curriculum is carefully designed to position you for professional success. You’ll gain recognized certifications, build an eye-catching portfolio, and develop the confidence to step into interviews or freelance projects with authority. Beyond technical mastery, we provide guidance on career strategy, networking, and industry trends, so you know exactly how to leverage your skills in the marketplace. With CodeLab, you aren’t just learning—you’re building the foundation for lifelong growth and opportunity."
    },
    {
        title: "Cutting-Edge Curriculum",
        description:
            "Technology evolves rapidly, and we believe your learning should too. Our curriculum is continuously updated to reflect the latest trends, tools, and best practices in AI, Data Science, and Web Development. From foundational principles to advanced techniques like deep learning, cloud integration, and scalable web apps, we cover the skills that matter today—and the ones you’ll need tomorrow. This ensures you graduate not with outdated knowledge, but with future-ready expertise that gives you a competitive edge in the job market."
    },
    {
        title: "Community & Collaboration",
        description:
            "Learning is more powerful when it’s shared. At CodeLab, you become part of a vibrant community of learners, mentors, and professionals who support and challenge each other. Through discussion forums, group projects, and live sessions, you’ll connect with people who share your passion for technology and innovation. These connections often lead to long-term friendships, collaborations, and even career opportunities. You’re not just enrolling in a course—you’re joining a network of ambitious individuals working toward the same goal: excellence."
    },
    {
        title: "Affordable Quality",
        description:
            "We believe world-class education should be accessible to everyone, not just a privileged few. That’s why our programs are priced fairly, offering unmatched value compared to traditional universities or bootcamps. With flexible payment options and lifetime access to learning materials, you’re making a one-time investment that pays dividends throughout your career. High-quality instruction, hands-on projects, and career-focused resources—without the burden of crushing costs. At CodeLab, affordability never means compromise; it means opportunity."
    }
];


const WhyChooseUs = () => {
    return (
        <div>
            <StickyScroll content={codeLabContent} />
        </div>
    )
}

export default WhyChooseUs
