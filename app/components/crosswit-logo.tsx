// next
import Image from "next/image";
// assets
import brainPNG from "@public/brain-love.png";

export default function CrosswitLogo() {
    return (
        <div>
            <div className="flex select-none items-center font-righteous text-3xl text-rose">
                <span>CR</span>
                <Image
                    src={brainPNG}
                    className="ml-[2.5px] mr-[2.5px] h-[28px] w-[28px]"
                    alt="abstract brain symbol"
                    priority
                />
                <span>SSWIT</span>
            </div>
        </div>
    );
}