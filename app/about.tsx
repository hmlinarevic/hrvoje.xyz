"use client";
import { useEffect, useState } from "react";

export default function About() {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsShow(true), 50);

        return () => {
            console.log('unmounted...')
        }
    }, []);
    return (
        <section
            className={`font-sans opacity-100 transition-all duration-300 ease-linear ${isShow ? "opacity-100" : ""}`}
        >
            <p>This was cool, right?</p>
            <p className="mt-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid corporis
                qui rem sequi, laudantium eos earum adipisci ducimus eveniet sunt error
                maiores, cupiditate explicabo soluta, ipsa voluptate quia eligendi
                quisquam eum atque nostrum provident alias excepturi nihil. Aliquam,
                numquam asperiores.
            </p>
            <p className="mt-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam labore aut
                eligendi esse animi et, tempore necessitatibus vitae? Minus, iste.
            </p>
        </section>
    );
}
