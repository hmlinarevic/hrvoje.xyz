"use client";
import { useEffect, useState } from "react";

export default function About() {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsShow(true), 50);
    }, []);
    return (
        <section
            className={`font-sans opacity-0 transition-all duration-300 ease-linear ${isShow ? "opacity-100" : ""}`}
        >
            <p>This was cool, right?</p>
            <p className="mt-3">
                Before, I never considered working in tech. I was managing the family
                ranch, running the business, and riding horses. But after becoming friends
                with two programmers and seeing them work on a computer, I immediately
                knew my life was about to take a dramatic turn. Fast forward to today, and
                I couldn’t be happier than when I’m writing code.
            </p>
            <p className="mt-3">
                You’ll find me super passionate about the web and how we interact with it.
                I specialize in JavaScript and its ecosystems, working with frameworks
                like React and Next.js.
            </p>
        </section>
    );
}
