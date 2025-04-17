import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-row items-center justify-between md:px-5 py-4 bg-white text-black">
            <div className="flex items-center md:ml-[85px] ml-[25px] text-[12px]">
                <Image 
                    src={"/SpacedLeetLogo_bh.svg"}
                    alt="Logo"
                    width={25}
                    height={25}
                    className="w-[25px]"
                />
                <div className="flex items-center gap-2 ml-[10px] text-[12px]">
                    <p className="font-semibold">
                        <span>Spaced</span>
                        <span className="text-[#4973bf]">Leet</span>
                    </p>
                    <p className="text-[12px] text-[#878787]">
                        <span className="mr-[3px]">&#169;</span>
                        <span>2025</span>
                    </p>
                </div>
            </div>

            <div className="flex mr-[25px] md:mr-[85px] gap-6 text-[12px]">
                <Link href="/" className="hover:text-[#4973bf] hover:underline">About</Link >
                <Link href="/" className="hover:text-[#4973bf] hover:underline">Accessibility</Link >        
                <Link href="/signup" className="hover:text-[#4973bf] hover:underline">Join Us</Link >
                <Link href="/" className="hover:text-[#4973bf] hover:underline">Privacy Policy</Link >
                <Link href="/" className="hover:text-[#4973bf] hover:underline">User Agreement</Link >
            </div>
        </footer>
    );
}
