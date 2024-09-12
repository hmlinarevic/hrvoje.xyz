import Image from "next/image";
import portfolioC1 from "../public/portfolio-c1.png";
import portfolioC2 from "../public/portfolio-c2.png";
import CrosswitLogo from "./components/crosswit-logo";

export default function Portfolio() {
    return (
        <section className="font-sans">
            <CrosswitLogo />
            <a className="text-[#5E2BFF]" href="https://crosswit.io" target="_blank">
                https://crosswit.io
            </a>

            <div className="mt-3 flex">
                <div className="mr-4 w-fit rounded-xl border border-neutral-600 p-4">
                    <Image
                        src={portfolioC1}
                        className="w-32"
                        alt="crosswit gameplay screenshot"
                    />
                </div>

                <div className="w-fit rounded-xl border border-neutral-600 p-4">
                    <Image
                        src={portfolioC2}
                        className="w-32"
                        alt="crosswit gameplay screenshot"
                    />
                </div>
            </div>

            <p className="mt-3">
                The game combines memory training and word search puzzles to enhance
                short-term memory.
            </p>
            <p className="mt-3">
                Its design focuses on memorization and recall: first, players are tasked
                with remembering a list of words, and then they must find those words
                within the puzzle.
            </p>
        </section>
    );
}
