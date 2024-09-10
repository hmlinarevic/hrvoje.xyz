"use client";

// next
import Image from "next/image";
// react
import { useState } from "react";
// assets
import memyselfJPG from "../public/memyself.jpg";

export default function Home() {
    const [isScaled, setIsScaled] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isTestX, setIsTestX] = useState(false);

    // Toggle the scaled state on button click
    const handleClick = () => {
        // setIsScaled(!isScaled);
        setIsExpanded(!isExpanded)
        setIsTestX(!isTestX)
    }

    return (
        <div className="grid h-[90vh] w-screen place-content-center">
            {/* prettier-ignore */}
            <section
                className={`
                    border-10 relative grid w-[720px] grid-cols-5 grid-rows-4 gap-2 border
                     border-neutral-500 font-[family-name:var(--font-patua-one)] 
                     transition-all duration-500 ease-in-out transform ${isScaled ? 
                        "-translate-x-[90%] scale-[40%]" : ""} 
                `}
            >
                {/* borders */}
                <div className="absolute top-[100%] row-start-1 row-end-2 w-full border-b border-neutral-500" />
                <div className="absolute row-start-4 row-end-5 w-full border-t border-neutral-500" />
                <div className="absolute left-[100%] col-start-1 col-end-2 row-start-1 -row-end-1 h-full w-[1px] border-r border-neutral-500" />
                <div className="absolute col-start-5 col-end-6 row-start-1 -row-end-1 h-full w-[1px] border-r border-neutral-500" />

                {/* content */}
                <div className="col-start-2 col-end-3 bg-black">
                    <Image
                        src={memyselfJPG}
                        alt="my face"
                        className="relative top-[5px]"
                    />
                </div>
                <button
                    className="col-start-1 col-end-2 row-start-2 row-end-3 grid place-content-center bg-black hover:text-[#DFB2F4]"
                    onClick={handleClick}
                >
                    ABOUT
                </button>
                <div className={`bg-black p-10 transition-all duration-500 ease-in-out col-start-2 col-end-5 row-start-2 row-end-4 ${isExpanded ? "scale-x-[168%] scale-y-[204%]" : ""}`}> 
                    {isExpanded && <span onClick={handleClick} className="absolute top-[.5rem] right-[1rem]">X</span>}

                    <div style={{ opacity: isTestX ? "0" : "" }}>
                        <h1 className="text-3xl">
                            Hi! <br /> My name is{" "}
                            <span className="text-[#7CDF64]">Hrvoje</span> <br />
                            and I’m a Web developer.
                        </h1>
                    </div>
                </div>
                <button className="col-start-4 col-end-5 row-start-4 row-end-4 grid place-content-center bg-black hover:text-[#FAFF00]">
                    CONTACT
                </button>
                <button className="col-start-5 col-end-6 row-start-3 row-end-3 grid place-content-center bg-black hover:text-[#FF5E5B]">
                    PORTFOLIO
                </button>
                <span className="absolute bottom-[-20px] left-0 text-xs text-neutral-600">
                    hrvoje.xyz @ 2024
                </span>
            </section>
        </div>
    );
}
