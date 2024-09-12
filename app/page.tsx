"use client";

// next
import Image from "next/image";
// react
import { useEffect, useState } from "react";
// assets
import memyselfJPG from "../public/memyself.jpg";
// components
import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";

export default function Home() {
    const [isTestX, setIsTestX] = useState(false);
    const [activeButton, setActiveButton] = useState("");
    const [content, setContent] = useState("");
    const [hideH1, setHideH1] = useState(false);
    const [isTestZ, setIsTestZ] = useState(false);

    const [isDisplayAssembled, setIsDisplayAssembled] = useState(false);

    const handleFaceClick = () => {
        setIsDisplayAssembled(false);
        setIsTestZ(false);
        setTimeout(() => {
            setIsTestX(false);
        }, 100);
        setTimeout(() => {
            setHideH1(false);
        }, 500);
    };

    const handleButtonClick = (type: string) => {
        if (isDisplayAssembled) {
            setContent(type);
        } else {
            setIsTestX(!isTestX);
            setActiveButton(type);
            setHideH1(true);
        }

        setIsDisplayAssembled(true);
    };

    const handleTransitionEnd = () => {
        if (isDisplayAssembled) {
            setIsTestZ(true);

            if (activeButton === "about") {
                setContent("about");
            }
        }
    };

    useEffect(() => {});

    return (
        <div className="grid h-[90vh] w-screen place-content-center">
            {/* prettier-ignore */}
            {/* <section
                className={`
                    border-10 relative grid w-[720px] grid-cols-5 grid-rows-4 gap-2 border
                     border-neutral-500 font-[family-name:var(--font-patua-one)] 
                     transition-all duration-500 ease-in-out transform`}
            > */}
            <section
                className={`border-10 relative grid w-[720px] transform grid-cols-5 grid-rows-[85px_85px_85px_85px] gap-2 border border-neutral-500 font-[family-name:var(--font-patua-one)] transition-all duration-500 ease-in-out`}
            >
                {/* borders */}
                <div className="absolute top-[100%] row-start-1 row-end-2 w-full border-b border-neutral-500" />
                <div className="absolute row-start-4 row-end-5 w-full border-t border-neutral-500" />
                <div className="absolute left-[100%] col-start-1 col-end-2 row-start-1 -row-end-1 h-full w-[1px] border-r border-neutral-500" />
                <div className="absolute col-start-5 col-end-6 row-start-1 -row-end-1 h-full w-[1px] border-r border-neutral-500" />

                {/* content */}
                <div
                    className={`col-start-2 col-end-3 transform cursor-pointer bg-black transition-transform duration-500 ease-in-out ${isTestX ? "translate-x-[-145px]" : ""}`}
                    onClick={handleFaceClick}
                >
                    <Image
                        src={memyselfJPG}
                        alt="my face"
                        className="block h-[99%] object-bottom"
                    />
                </div>
                <button
                    className="col-start-1 col-end-2 row-start-2 row-end-3 grid place-content-center bg-black hover:text-[#51E5FF]"
                    onClick={() => handleButtonClick("about")}
                >
                    ABOUT
                </button>

                <div
                    className="absolute col-start-2 h-full w-full bg-black p-10 overflow-y-scroll"
                    style={{ opacity: isTestZ ? 100 : 0, zIndex: isTestZ ? 100 : 0 }}
                >
                    {content === "about" ? <About /> : null}
                    {content === "contact" ? <Contact /> : null}
                    {content === "portfolio" ? <Portfolio /> : null}
                </div>
                <div
                    className={`relative z-10 col-start-2 col-end-5 row-start-2 row-end-4 bg-black p-10 transition-all duration-300 ease-in-out ${isTestX ? "w-[134%] scale-y-[2.045]" : "w-full scale-y-100"}`}
                    onTransitionEnd={() => setTimeout(() => handleTransitionEnd(), 200)}
                >
                    {hideH1 ? null : (
                        <div className="overflow-hidden">
                            <h1 className="text-3xl">
                                Hi! <br /> My name is{" "}
                                <span className="text-[#7CDF64]">Hrvoje</span> <br />
                                and I’m a Web developer.
                            </h1>
                        </div>
                    )}
                </div>

                <button
                    className={`col-start-4 col-end-5 row-start-4 row-end-4 grid transform place-content-center bg-black transition-transform duration-500 ease-in-out hover:text-[#FAFF00] ${isTestX ? "translate-x-[-436px]" : ""}`}
                    onClick={() => handleButtonClick("contact")}
                >
                    CONTACT
                </button>
                <button
                    className={`col-start-5 col-end-6 row-start-3 row-end-3 grid transform place-content-center bg-black transition-transform duration-500 ease-in-out hover:text-[#F21B3F] ${isTestX ? "translate-x-[-581px]" : ""}`}
                    onClick={() => handleButtonClick("portfolio")}
                >
                    PORTFOLIO
                </button>
                <span className="absolute bottom-[-20px] left-0 text-xs text-neutral-600">
                    hrvoje.xyz @ 2024
                </span>
            </section>
        </div>
    );
}
