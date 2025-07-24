import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaArrowLeft, FaArrowRight, FaCheck, FaFacebook, FaFacebookF, FaHandMiddleFinger, FaInstagram, FaLinkedin, FaLinkedinIn, FaPlay, FaQuoteLeft, FaStar, FaTwitter, FaWallet } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaUsers, FaBicycle} from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
const location = useLocation();
const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT US", path: "/about" },
  { name: "SERVICES", path: "#", dropdown: true },
  { name: "TERMS AND PRIVACY", path: "#" },
  { name: "BLOG", path: "#" },
];


 const services = [
    {
      title: "WEB BASED APPS",
      desc: "Transforming ideas into intuitive SaaS apps with impactful digital solutions.",
      icon: "/saas1.png",
    },
    {
      title: "MOBILE APPS",
      desc: "High-performance mobile apps with Laravel, JS, Python, React Native, and more.",
      icon: "/saas.png",
    },
    {
      title: "UI/UX DESIGN",
      desc: "Top-tier UI/UX design, offering stylish, user-friendly experiences.",
      icon: "/ui.png",
    },
  ];

 const testimonials = [
  {
    name: "Ayomide Ayo",
    role: "Director, Crypto Buddy Inc",
    image: "/team3.png",
    message:
      "This service gave us the structure and a major system flow. Every process gotten simpler, clearer and so much more well-defined.",
  },
  {
    name: "ALAA DOE",
    role: "Businesswoman",
    image: "/team2.png",
    message:
      "This service gave us the structure and a major system flow. Every process gotten simpler, clearer and so much more well-defined.",
  },
  {
    name: "SARAH DOE",
    role: "Businesswoman",
    image: "/team1.png",
    message:
      "This service gave us the structure and a major system flow. Every process gotten simpler, clearer and so much more well-defined.",
  },
];

const team = [
  {
    name: "Osaka Shore",
    role: "Frontend Developer",
    img: "/team1.png",
  },
  {
    name: "Osaka Obas",
    role: "Backend Developer",
    img: "/team2.png",
  },
  {
    name: "Peter Aloko",
    role: "Project Manager",
    img: "/team2.png",
  },
  {
    name: "SARAH DOE",
    role: "Media Developer",
    img: "/team3.png",
  },
  {
    name: "SARAH DOE",
    role: "UI/UX Designer",
    img: "team2.png",
  },
];
  return (
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
    className="border bg-[#E9F2F9] text-blue-900 px-3 py-1 text-xs rounded hover:bg-[#0a1853] hover:text-white transition-all"
            >
              FREE CONSULTATION
            </Link>
          </div>
        )}
      </header>

      {/* ========= HERO SECTION ========= */}
   
   <section className="relative text-white  pt-20"
        style={{
    backgroundImage: "url('/hero-bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
  }}>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60 z-0" />

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto py-20 px-6 text-center">
    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
      PERSONALIZED <br />
      <span className="stroke-text">SAAS SOLUTIONS</span> <br />
      TO STREAMLINE YOUR BUSINESS OPERATIONS.
    </h1>

    <p className="text-gray-200 max-w-2xl mx-auto mb-8 text-sm md:text-base">
      We would convert your conventional business into Digital and automated business
      by using latest cutting edge tech stacks, an end-to-end web based apps development
      life cycle to meet business' needs.
    </p>

    <div className="flex gap-4 justify-center">
      <button className="bg-[#6a5cff] px-6 py-2 rounded-md text-sm font-semibold hover:bg-[#584ee9] transition">
        Get Started →
      </button>
      <button className="text-white text-sm flex items-center gap-2">
        <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
          <FaPlay className="text-xs" />
        </span>
        View our work
      </button>
    </div>
  </div>
</section>



      {/* ========= CLIENTS SECTION ========= */}
      <section className="bg-white text-center py-12 px-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Clients</h2>
        <p className="text-gray-500 text-sm mb-8">We have been working with some Fortune 500+ clients</p>
       <div className="overflow-hidden w-full">
  <motion.div
    className="flex gap-12 w-max"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      duration: 15,
      ease: "linear",
    }}
  >
    {/* Duplicate logos manually for seamless loop */}
    {/* First Set */}
    <img src="/Logo.png" alt="Logo 1" className="h-10" />
    <img src="/Logo1.png" alt="Logo 2" className="h-10" />
    <img src="/Logo2.png" alt="Logo 3" className="h-10" />
    <img src="/Logo3.png" alt="Logo 4" className="h-10" />
    <img src="/Logo4.png" alt="Logo 5" className="h-10" />
    <img src="/Logo.png" alt="Logo 6" className="h-10" />
    <img src="/Logo.png" alt="Logo 7" className="h-10" />

    {/* Second Set - to make loop seamless */}
     <img src="/Logo1.png" alt="Logo 1" className="h-10" />
    <img src="/Logo2.png" alt="Logo 2" className="h-10" />
    <img src="/Logo.png" alt="Logo 3" className="h-10" />
    <img src="/Logo3.png" alt="Logo 4" className="h-10" />
    <img src="/Logo4.png" alt="Logo 5" className="h-10" />
    <img src="/Logo2.png" alt="Logo 6" className="h-10" />
    <img src="/Logo.png" alt="Logo 7" className="h-10" />
  </motion.div>
</div>

      </section>
      <section className="text-center py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          We Build Powerful, Scalable <span className="text-blue-900 font-bold">SaaS</span> Apps
        </h2>
      </section>

      {/* Phone Image */}
      <div className="flex justify-center mb-10">
        <img
          src="/phone.png"
          alt="Phone"
          className="w-[90%] md:w-[1000px] h-96  rounded-xl"
        />
      </div>

      {/* Services Carousel */}
    
<section className="mb-16 px-6 relative">
  <div className="max-w-6xl mx-auto relative">
    {/* Custom Arrows */}
    <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-white rounded-full shadow-md text-blue-700 hover:bg-blue-100 transition">
      <FaArrowLeft />
    </button>
    <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-white rounded-full shadow-md text-blue-700 hover:bg-blue-100 transition">
      <FaArrowRight />
    </button>

    {/* Swiper Component */}
    <Swiper
      modules={[Navigation]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      spaceBetween={20}
      slidesPerView={1}
      centeredSlides
      loop
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
      }}
      className="group"
    >
      {services.map((item, i) => (
        <SwiperSlide key={i}>
          {({ isActive }) => (
            <div className="relative rounded-xl overflow-hidden transition-all duration-500">
              <div
                className={`bg-white shadow-md rounded-xl px-6 py-8 text-center transition-all duration-500 ${
                  isActive ? "scale-105" : "scale-95"
                }`}
              >
                <img
                  src={item.icon}
                  alt="icon"
                  className="mx-auto mb-4 w-16 h-16 object-contain"
                />
                <h3 className="font-bold text-lg text-[#001359] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>

              {/* Active Overlay */}
              {isActive && (
                <div className="absolute inset-0 rounded-xl bg-black/40 z-10 animate-gradientFade pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-lg animate-pulse" />
                </div>
              )}
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

      {/* Stats */}
   <section className="bg-[#f3f7f9] py-12 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    {/* Left Column - Text */}
    <div className="max-w-2xl">
      <h3 className="text-xl md:text-3xl font-semibold mb-3 ">
        Helping <span className=" text-3xl font-semibold text-green-600">businesses and Organisations reach their goals.</span> 
      </h3>
      <p className="text-gray-500 text-sm">
        We reached here with our hard work and dedication
      </p>
    </div>

    {/* Right Column - Stats */}
   <div className="grid grid-cols-2 gap-8 text-green-700 text-sm">
  <div className="flex items-center gap-3">
    <FaUsers size={24} />
    <div>
      <p className="text-2xl font-bold">2,245,341</p>
      <span>Members</span>
    </div>
  </div>

  <div className="flex items-center gap-3">
    <FaBicycle size={24} />
    <div>
      <p className="text-2xl font-bold">46,328</p>
      <span>Clubs</span>
    </div>
  </div>

  <div className="flex items-center gap-3">
    <FaHandMiddleFinger size={24} />
    <div>
      <p className="text-2xl font-bold">828,867</p>
      <span>Event Bookings</span>
    </div>
  </div>

  <div className="flex items-center gap-3">
    <FaWallet size={24} />
    <div>
      <p className="text-2xl font-bold">1,926,436</p>
      <span>Payments</span>
    </div>
  </div>
</div>

  </div>
</section>


      {/* Testimonials Carousel */}
   
 

    <section className="py-16 px-6 text-center bg-white">
      <h4 className="text-sm text-blue-500 font-semibold mb-2 tracking-wide">
        TESTIMONIALS
      </h4>
      <h2 className="text-2xl font-bold mb-12">Our successful clients</h2>

     <Swiper
  modules={[Pagination, Autoplay]}
  pagination={{ clickable: true }}
  autoplay={{ delay: 4000, disableOnInteraction: false }}
  loop={true}
  spaceBetween={20}
  slidesPerView={1}
  breakpoints={{
    768: { slidesPerView: 3 },
  }}
  className="max-w-6xl mx-auto"
>
  {testimonials.map((person, i) => (
    <SwiperSlide key={i}>
      <div className="bg-white border border-gray-100 shadow-lg rounded-xl px-6 py-10 h-full flex flex-col justify-between text-center">
        <FaQuoteLeft className="text-3xl text-blue-400 mb-4 mx-auto" />
        <p className="text-gray-600 text-sm italic mb-4 max-w-xs mx-auto">
          "{person.message}"
        </p>
        <div className="flex justify-center text-yellow-400 mb-4">
          {[...Array(5)].map((_, idx) => (
            <FaStar key={idx} />
          ))}
        </div>
        <div className="flex items-center justify-center gap-3 mt-4">
          <img
            src={person.image}
            alt={person.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="text-left">
            <p className="font-bold text-sm">{person.name}</p>
            <p className="text-xs text-gray-500">{person.role}</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </section>
 
 
      {/* cardfloaat Section */}
  
  
    <section className="bg-[#f3f7fb] py-20 px-4">
      {/* Section heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold leading-snug">
          Scale Your Business with our Expert <br />
          Web Development Services
        </h2>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto flex justify-center">
        {/* Image and floating checklist card */}
        <div className="relative">
          <img
            src="/overlay.png" // your image path
            alt="Web Dev"
            className="w-[750px] max-w-full rounded-xl shadow-lg"
          />

          {/* Floating white card */}
<div className="absolute top-1/2 left-[80%] -translate-y-1/2 w-72 bg-white p-6 rounded-xl shadow-lg z-10">
  <ul className="space-y-3 text-sm text-gray-800">
    <li className="flex items-start gap-2">
      <FaCheck className="text-green-600 mt-1" />
      Share Your Idea
    </li>
    <li className="flex items-start gap-2">
      <FaCheck className="text-green-600 mt-1" />
      Design Phase
    </li>
    <li className="flex items-start gap-2">
      <FaCheck className="text-green-600 mt-1" />
      QA (Quality Assurance) Excellence
    </li>
    <li className="flex items-start gap-2">
      <FaCheck className="text-green-600 mt-1" />
      Scalability and Automation
    </li>
  </ul>
</div>

        </div>
       {/* Floating 3 cards positioned from bottom right f image */}
    <div className="absolute bottom-0 left-[30%] translate-y-1/2 z-20">
      <div className="flex flex-col md:flex-row ">
        <div className="bg-teal-700 text-white p-6 rounded-lg shadow-lg w-60">
          <h4 className="font-bold text-lg mb-2">OUR VALUE</h4>
          <p className="text-sm leading-relaxed">
            We believe in 100% transparency and collaboration to deliver measurable results.
          </p>
        </div>
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-72 border border-gray-200">
          <h4 className="font-bold text-lg mb-2">OUR VISION</h4>
          <p className="text-sm leading-relaxed">
            Leverage data and innovation for smarter decisions with top-tier solutions.
          </p>
        </div>
        <div className="bg-teal-700 text-white p-6 rounded-lg shadow-lg w-72">
          <h4 className="font-bold text-lg mb-2">OUR MISSION</h4>
          <p className="text-sm leading-relaxed">
            Drive impact by merging technology and strategy to unlock growth.
          </p>
        </div>
      </div>
    </div>
 </div>
    </section>
 

      {/* Team Section */}
   <section className="py-16 px-6 text-center bg-white">
  <h4 className="text-sm text-blue-500 font-semibold mb-2 tracking-wide">TEAM</h4>
  <h2 className="text-2xl font-bold mb-12">Our certified experts</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
    {team.map((person, i) => (
      <div
        key={i}
        className="bg-[#f8f9fb] rounded-lg shadow-md p-4 transform transition duration-300 hover:scale-105 hover:shadow-lg"
      >
        <img
          src={person.img}
          alt={person.name}
          className="w-full h-[150px] object-cover rounded-md mb-4"
        />
        <p className="font-semibold">{person.name}</p>
        <p className="text-sm text-gray-500 mb-4">{person.role}</p>

        <div className="flex justify-center gap-2">
          {[FaFacebookF, FaLinkedinIn, FaTwitter].map((Icon, idx) => (
            <div
              key={idx}
              className="w-7 h-7 flex items-center justify-center rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer"
            >
              <Icon size={12} />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

      {/* CTA Section */}
      <section className="text-center py-16 bg-[#f3f7f9] px-4">
        <h2 className="text-2xl font-semibold mb-6 text-[#001359]">
          Pellentesque suscipit <br /> fringilla libero eu.
        </h2>
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition text-sm">
          Get a Demo →
        </button>
      </section>

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
    </div>
 
  );
};

export default LandingPage;
