import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
      <nav className="flex items-center justify-between md:px-5 py-4 shadow-md bg-white text-black">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl md:ml-[85px] ml-[25px]">
          <Image 
            src={"/SpacedLeetLogo_bh.svg"}
            alt="Logo"
            width={40}
            height={40}
            className="w-15"

          />
          <p className="md:block hidden">
            <span className="text-">Spaced</span>
            <span className="text-[#4973bf]">Leet</span>
          </p>
        </Link>
          <div className="flex items-center gap-6 font-light md:mr-[85px] mr-[25px]">
          <Link 
            href="/login" 
            className="text-sm hover:text-blue-500">
            Log in
          </Link>
          <Link
            href="/signup"
            className="text-sm px-6 py-3 border-[2px] border-[#4973bf] rounded-[15px] hover:bg-[#5a83db] hover:text-white transition">
            Sign up
          </Link>
        </div>
      </nav>
    );
  }
  