import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaChevronDown, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

 
export default function AboutPage() {
     const [menuOpen, setMenuOpen] = useState(false);
const location = useLocation();
const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT US", path: "#" },
  { name: "SERVICES", path: "#", dropdown: true },
  { name: "TERMS AND PRIVACY", path: "#" },
  { name: "BLOG", path: "#" },
];
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Top Nav */}
      <div className="font-sans">
      {/* ========= WRAPPED HEADER START ========= */}
      <header className="bg-white w-full">
        {/* Top Bar with Slant */}
        <div className="relative w-full h-[44px] sm:h-[52px]">
          <svg
            viewBox="0 0 1411 78"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-0 top-0 w-[70%] h-full"
          >
            <path d="M0 0H1411V78H46L0 0Z" fill="#001359" />
          </svg>
          <div className="absolute top-0 right-0 w-[70%] h-full flex items-center justify-center text-white text-xs sm:text-sm z-10 px-2">
            <div className="flex flex-wrap gap-2 sm:gap-4 items-center justify-center text-center">
              <span>info@masterideasontech.com</span>
              <span className="hidden sm:inline">|</span>
              <span>+02 350 5844901</span>
              <span className="hidden sm:inline">|</span>
              <span className="whitespace-nowrap">Johar Town Lahore $4000 Pakistan</span>
            </div>
          </div>
        </div>

        {/* Navbar & Logo */}
        <div className="flex items-center justify-between px-6 py-2 sm:py-3 relative z-20">
          {/* Logo */}
<div className="mb-2">
  <img src="/MT-logo.png" alt="IMT Logo" className="w-24 h-auto" />
</div>

          {/* Hamburger Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#0a1853] text-2xl focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Desktop Nav */}
   <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#0a1853]">
  {navLinks.map((item, i) => {
  const isActive = location.pathname === item.path;

  return (
    <Link
      key={i}
      to={item.path}
      className="relative group transition-all duration-200"
    >
      <span className={`transition ${isActive ? "font-semibold" : ""}`}>
        {item.name}
      </span>

      {/* Slant line shown on active OR hover */}
      <span
        className={`absolute left-0 -bottom-1 w-full h-[3px] bg-sky-400 skew-x-12 transition-all duration-300
        ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
      />
    </Link>
  );
})}

  {/* SERVICES DROPDOWN */}
  <div className="relative group">
    <div className="relative cursor-pointer">
      <span
        className={`flex items-center gap-1 ${
          location.pathname.includes("/services") ? "font-semibold" : ""
        }`}
      >
        SERVICES <FaChevronDown className="text-xs mt-[1px]" />
      </span>

      {/* Slant underline for SERVICES */}
      <span
        className={`absolute left-0 -bottom-1 w-full h-[3px] bg-sky-400 skew-x-12 transition-all duration-300
        ${
          location.pathname.includes("/services")
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
        }`}
      />
    </div>

    {/* Dropdown Menu */}
    <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 z-50 border border-gray-100 py-2">
      <Link to="/services/web" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">
        Web Development
      </Link>
      <Link to="/services/mobile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">
        Mobile App Development
      </Link>
      <Link to="/services/uiux" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">
        UI/UX Design
      </Link>
    </div>
  </div>

  {/* CTA */}
  <Link
    to="#"
    className="border bg-[#E9F2F9] text-blue-900 px-3 py-1 text-xs rounded hover:bg-[#0a1853] hover:text-white transition-all"
  >
    FREE CONSULTATION
  </Link>
</nav>


        </div>

        {/* Mobile Nav Menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-3 text-sm font-medium text-[#0a1853]">
            <Link to="/" onClick={() => setMenuOpen(false)} className="block">HOME</Link>
            <Link to="#" className="block">ABOUT US</Link>
            <Link to="#" className="block">SERVICES ▾</Link>
            <Link to="#" className="block">TERMS AND PRIVACY</Link>
            <Link to="#" className="block">BLOG</Link>
            <Link
              to="#"
              className="block bg-[#E9F2F9] px-3 text-blue-900 py-1 text-xs rounded hover:bg-[#0a1853] hover:text-white"
            >
              FREE CONSULTATION
            </Link>
          </div>
        )}
      </header>

      {/* Main Section */}
      <main className="px-4 py-12 max-w-5xl mx-auto text-center">
  {/* Left: Logo */}
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8 mb-12 px-4">
  {/* Left: Logo */}
  <div className="md:w-1/3 w-full flex justify-center md:justify-start">
    <img
      src="/MT.png"
      alt="IMT Logo"
      className="w-32 h-32 object-contain"
    />
  </div>

  {/* Right: Text Content */}
  <div className="md:w-2/3 w-full text-left">
    <h1 className="text-2xl font-semibold mb-4">
      Welcome to Interactive Tech Solutions
    </h1>
    <p className="text-gray-600 mb-6">
      At Interactive Tech Solutions, we understand software development is not a transformation; it's an evolution. We combine experience, creativity, and expertise to create solutions that adapt to your unique challenges and goals. Our commitment is to craft high-performing solutions that are impactful and forward-thinking.
    </p>
    <p className="text-gray-600 mb-8">
      Thank you for considering Interactive Tech Solutions as we make this journey together.
    </p>
        <p className="text-gray-800 font-medium mb-2">Sincerely,</p>

    <p className="text-gray-800 font-medium mb-2">Peter Abiola</p>
    <p className="text-gray-500">Founder & CEO, Interactive Tech Solutions</p>
  </div>
</div>


        {/* Feature Cards */}
      {/* Feature Cards */}
<div className="space-y-6 max-w-6xl mx-auto px-4">
  {/* Top row - 3 cards */}
  <div className="grid md:grid-cols-3 gap-6">
    <div className="bg-blue-50 p-4 rounded shadow">
      <h3 className="font-semibold text-blue-900 mb-2">Our Expertise</h3>
      <p className="text-sm text-gray-700">
        We help navigate digital transformation with our multi-disciplinary experience in modern technologies.
      </p>
    </div>
    <div className="bg-green-50 p-4 rounded shadow">
      <h3 className="font-semibold text-green-900 mb-2">Core Values</h3>
      <p className="text-sm text-gray-700">
        Integrity, collaboration, and excellence drive our client solutions and team culture.
      </p>
    </div>
    <div className="bg-purple-50 p-4 rounded shadow">
      <h3 className="font-semibold text-purple-900 mb-2">Client-Centric Approach</h3>
      <p className="text-sm text-gray-700">
        We align our success with yours, ensuring client satisfaction is our top priority.
      </p>
    </div>
  </div>

  {/* Bottom row - 2 cards centered */}
  <div className="flex justify-center gap-6 flex-wrap">
    <div className="bg-pink-50 p-4 rounded shadow w-full sm:w-[300px]">
      <h3 className="font-semibold text-pink-900 mb-2">Pioneering Innovation</h3>
      <p className="text-sm text-gray-700">
        Our products are made to adapt, scale, and perform in rapidly changing environments.
      </p>
    </div>
    <div className="bg-sky-50 p-4 rounded shadow w-full sm:w-[300px]">
      <h3 className="font-semibold text-sky-900 mb-2">Your Digital Transformation Partner</h3>
      <p className="text-sm text-gray-700">
        We partner with you to turn digital goals into successful realities.
      </p>
    </div>
  </div>
</div>

      </main>

      {/* Footer */}
      <footer className="bg-gray-50 mt-12 py-10 text-sm text-gray-600">
        <div className="max-w-6xl mx-auto px-4 md:flex justify-between">
          <div className="mb-6 md:mb-0">
<div className="mb-2">
  <img src="/MT-logo.png" alt="IMT Logo" className="w-24 h-auto" />
</div>
            <p className="max-w-sm mb-3">At Interactive Tech Solutions, we are just getting started with solutions, where we explore ideas and implement with simplicity and scalability in mind.</p>
            <div className="flex gap-1">
           
  <div className="flex gap-4">
    <Link
      to="/"
      className="p-2 rounded-full border border-gray-300 bg-gray-300 text-black hover:bg-gray-100 transition"
    >
      <FaFacebook className="text-xl" />
    </Link>

    <Link
      to="#"
      className="p-2 rounded-full border border-gray-300 bg-gray-300 text-black hover:bg-gray-100 transition"
    >
      <FaTwitter className="text-xl" />
    </Link>

    <Link
      to="#"
      className="p-2 rounded-full border border-gray-300 bg-gray-300 text-black hover:bg-gray-100 transition"
    >
      <FaLinkedin className="text-xl" />
    </Link>

    <Link
      to="#"
      className="p-2 rounded-full border border-gray-300 bg-gray-300 text-black hover:bg-gray-100 transition"
    >
      <FaInstagram className="text-xl" />
    </Link>
  </div>


            </div>
          </div>

         <div>
  <h2 className=" font-bold text-xl mb-4">Contact Us</h2>

  <p className="mb-3">
    <strong>Address:</strong><br />
    Jaffer Town Lahore
  </p>

  <p className="mb-3">
    <strong>WhatsApp Number:</strong><br />
    54000
  </p>

  <p className="mb-3">
    <strong>Email:</strong><br />
    Pakistan
  </p>

  <p className="mb-3">
    <strong>Phone:</strong><br />
    interactivetech@gmail.com
  </p>

  <p>
    <strong>Mobile:</strong><br />
    +92 300 1234567
  </p>
</div>

        </div>
        <div className="text-center mt-8">© 2025 Inter
active Tech Solutions. All rights reserved.</div>
      </footer>
    </div></div>
  );
}