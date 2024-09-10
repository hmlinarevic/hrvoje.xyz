import Image from "next/image";
import memyselfJPG from "../public/memyself.jpg";

export default function Home() {
    return (
        <div className="grid h-[90vh] w-screen place-content-center">
            <section className="grid w-[720px] grid-cols-5 grid-rows-4 gap-3 font-[family-name:var(--font-patua-one)]">
                <div className="col-start-2 col-end-3 bg-black">
                    <Image src={memyselfJPG} alt="my face" className="relative top-[4px]" />
                </div>

                <div className="col-start-1 col-end-2 row-start-2 row-end-3 grid place-content-center bg-black">
                    ABOUT
                </div>
                <div className="grid-place-content-center col-start-2 col-end-5 row-start-2 row-end-4 bg-black p-10">
                    <h1 className="text-3xl">
                        Hi! <br /> My name is <span className="text-[#7CDF64]">Hrvoje</span> <br />
                        and I’m a Web developer.
                    </h1>
                </div>
                <div className="col-start-4 col-end-5 row-start-4 row-end-4 grid place-content-center bg-black">
                    CONTACT
                </div>
                <div className="col-start-5 col-end-6 row-start-3 row-end-3 grid place-content-center bg-black">
                    PORTFOLIO
                </div>
            </section>
        </div>
    );
}
