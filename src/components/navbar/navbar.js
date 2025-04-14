export default function Navbar() {
    return (
      <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white text-black">
        <a href="/" className="navbar-logo flex items-center gap-2 font-bold text-xl">
          <img 
            src="/SpacedLeetLogo_wh.svg"
            alt="Logo"
            className="w-13 h-13"
          />
          SpacedLeet
        </a>
          <div className="flex items-center gap-6 font-light">
          <a href="#join" className="text-sm hover:text-blue-500">
            Join now
          </a>
          <a
            href="#signup"
        className="text-sm px-4 py-2 border-[2px] border-[#4973bf] rounded-[7px] hover:bg-[#5a83db] hover:text-white transition"
          >
            Sign up
          </a>
        </div>
      </nav>
    );
  }
  