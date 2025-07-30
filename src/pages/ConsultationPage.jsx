import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import {
    FaCheckCircle,
  FaChevronDown,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaStar,
  FaTwitter,
  FaUserFriends,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { FaPalette } from "react-icons/fa";

 
export default function ConsultationPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "#" },
    { name: "TERMS AND PRIVACY", path: "/privacy" },
    { name: "BLOG", path: "#" },
  ];
 const [selectedService, setSelectedService] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");


const services = [
  {
    id: "website",
    title: "Website Development",
    icon: (
      <div className="bg-blue-500 text-white p-2 rounded-md inline-flex">
        <FaLaptopCode size={20} />
      </div>
    ),
    features: ["Responsive Design", "SEO optimized", "Fast Loading"],
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    icon: (
      <div className="bg-pink-500 text-white p-2 rounded-md inline-flex">
        <MdPhoneIphone size={20} />
      </div>
    ),
    features: [
      "Native & Cross-platform",
      "App Store Ready",
      "Push Notifications",
      "Offline Support",
    ],
  },
  {
    id: "design",
    title: "UI/UX Design",
    icon: (
      <div className="bg-green-500 text-white p-2 rounded-md inline-flex">
        <FaPalette size={20} />
      </div>
    ),
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
    ],
  },
];

 
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white w-full">
       

        {/* Navbar */}
        <div className="flex items-center justify-between px-6 py-2 sm:py-3 relative z-20">
          <div className="mb-2">
            <img src="/MT-logo.png" alt="IMT Logo" className="w-24 h-auto" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#0a1853] text-2xl"
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
                  <span
                    className={`absolute left-0 -bottom-1 w-full h-[3px] bg-sky-400 skew-x-12 transition-all duration-300 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                to="/services"
                className={`relative flex items-center gap-1 ${
                  location.pathname.includes("/services") ? "font-semibold" : ""
                }`}
              >
                SERVICES <FaChevronDown className="text-xs mt-[1px]" />
                <span
                  className={`absolute left-0 -bottom-1 w-full h-[3px] bg-sky-400 skew-x-12 transition-all duration-300 ${
                    location.pathname.includes("/services")
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </Link>
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 z-50 border border-gray-100 py-2">
                <Link
                  to="/services/web"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                >
                  Web Development
                </Link>
                <Link
                  to="/services/mobile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                >
                  Mobile App Development
                </Link>
                <Link
                  to="/services/uiux"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                >
                  UI/UX Design
                </Link>
              </div>
            </div>

            <Link
              to="/consultation"
              className="border bg-[#E9F2F9] text-blue-900 px-3 py-1 text-xs rounded hover:bg-[#0a1853] hover:text-white transition-all"
            >
              FREE CONSULTATION
            </Link>
          </nav>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-3 text-sm font-medium text-[#0a1853]">
            {navLinks.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="block"
              >
                {item.name}
              </Link>
            ))}
            <div className="block">
              <div
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="flex items-center justify-between cursor-pointer"
              >
                <Link to="/services" className="inline-flex items-center gap-1 text-sm font-medium">
  <span>SERVICES</span>
  <FaChevronDown
    className={`text-xs transition-transform ${
      mobileDropdownOpen ? "rotate-180" : ""
    }`}
  />
</Link>
              </div>
              {mobileDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2 text-sm">
                  <Link
                    to="/services/web"
                    onClick={() => setMenuOpen(false)}
                    className="block"
                  >
                    Web Development
                  </Link>
                  <Link
                    to="/services/mobile"
                    onClick={() => setMenuOpen(false)}
                    className="block"
                  >
                    Mobile App Development
                  </Link>
                  <Link
                    to="/services/uiux"
                    onClick={() => setMenuOpen(false)}
                    className="block"
                  >
                    UI/UX Design
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/consultation"
              className="border bg-[#E9F2F9] text-blue-900 px-3 py-1 text-xs rounded hover:bg-[#0a1853] hover:text-white transition-all"
            >
              FREE CONSULTATION
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="">
       <div className="bg-[#001359] w-full py-16 px-4 sm:px-8 text-white text-center mb-12">
  <div className="max-w-5xl mx-auto">
    {/* Info Buttons */}
    <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
      {/* Projects Completed */}
      <button className="bg-[#FFFFFF1A] text-white inline-flex items-center gap-2 px-4 py-2 rounded-full shadow text-xs sm:text-sm">
        <FaCheckCircle className="text-blue-300 text-base" />
        <span className="font-semibold">100+ Projects Completed</span>
      </button>

      {/* Happy Clients */}
      <button className="bg-[#FFFFFF1A] text-white inline-flex items-center gap-2 px-4 py-2 rounded-full shadow text-xs sm:text-sm">
        <FaUserFriends className="text-blue-300 text-base" />
        <span className="font-semibold">50+ Happy Clients</span>
      </button>

      {/* 5-Star Reviews */}
      <button className="bg-[#FFFFFF1A] text-white inline-flex items-center gap-2 px-4 py-2 rounded-full shadow text-xs sm:text-sm">
        <FaStar className="text-[#FACC15] text-base" />
        <span className="font-semibold">5-Star Reviews</span>
      </button>
    </div>

    {/* Heading & Description */}
    <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
      Book a Free Consultation
    </h1>
    <p className="text-sm sm:text-base max-w-xl mx-auto mb-6 text-white">
      Let’s talk about your <strong>Website</strong>, <strong>Mobile App</strong>, or{" "}
      <strong>Design</strong> project. Schedule a Google Meet session at your convenience.
    </p>

    {/* Google Meet Button */}
    <div className="flex items-center justify-center gap-3 mt-6">
      <img src="/googlemeet.png" alt="Google Meet" className="w-8 h-8" />
      <span className="text-base sm:text-lg font-semibold text-white">Google Meet</span>
    </div>
  </div>
</div>

        {/* Services Grid */}
      <div className="min-h-screen bg-white p-6">
  <h2 className="text-2xl text-[#001359] font-bold text-center mb-2">
    What would you like to talk about?
  </h2>
  <p className="text-center mb-8 text-gray-600">
    Choose the service you’re interested in to get started with your project discussion
  </p>

  {/* Services */}
  <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 mb-10">
    {services.map((service) => (
      <div
        key={service.id}
        onClick={() => setSelectedService(service.id)}
        className={`cursor-pointer border rounded-xl p-6 w-full max-w-xs mx-auto shadow-sm transition ${
          selectedService === service.id ? "border-blue-500" : "border-gray-200"
        }`}
      >
        <div className="mb-4">{service.icon}</div>
        <h3 className="text-lg font-semibold mb-2 text-center">{service.title}</h3>
        <ul className="text-sm text-gray-600 list-disc list-inside mb-4 text-left">
          {service.features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button className="px-4 py-2 w-full border border-dashed border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">
          Click to Select
        </button>
      </div>
    ))}
  </div>
      {/* Time Slot */}
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm max-w-3xl mx-auto mb-10">
  <h3 className="text-xl font-semibold mb-4">Choose a Time Slot</h3>

  <div className="flex flex-col md:flex-row items-start gap-6">
    {/* Date Picker */}
    <div className="w-full md:w-1/2">
      <label className="block text-sm font-medium mb-1">Select Date</label>
      <input
        type="date"
        className="w-full border p-3 rounded-md"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>

    {/* Time Picker */}
    <div className="w-full md:w-1/2">
      <label className="block text-sm font-medium mb-1">Select Time</label>
      <input
        type="time"
        className="w-full border p-3 rounded-md"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
    </div>
  </div>

  {/* Action Buttons */}
  <div className="flex justify-end gap-4 mt-6">
    <button
      className="px-5 py-2 rounded-md border border-blue-800 text-blue-800 hover:bg-blue-800  hover:text-white transition"
    >
      Cancel
    </button>
    <button
      className="px-5 py-2 rounded-md bg-blue-800 text-white hover:bg-[#001040] transition"
    >
      Save
    </button>
  </div>
</div>


      {/* User Info */}
      <div className="max-w-3xl mx-auto bg-white rounded-xl p-6 border shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Your Information</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border rounded p-3 bg-blue-50 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded p-3 bg-blue-50 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Enter your company name"
            className="w-full border rounded p-3 bg-blue-50 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full border rounded p-3 bg-blue-50 focus:outline-none"
          />
          <textarea
            rows="4"
            placeholder="Project Summary"
            className="w-full border rounded p-3 bg-blue-50 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-900 text-white py-2 px-6 rounded-lg mt-2 
hover:bg-blue-800"
          >
            Book Consultation
          </button>
        </form>
      </div>
    </div>

      </div>

      {/* Footer */}
      <footer className="bg-gray-50 mt-12 py-10 text-sm text-gray-600">
        <div className="max-w-6xl mx-auto px-4 md:flex justify-between">
          <div className="mb-6 md:mb-0">
            <img src="/MT-logo.png" alt="IMT Logo" className="w-24 h-auto mb-2" />
            <p className="max-w-sm mb-3">
              At Interactive Tech Solutions, we are just getting started with
              solutions, where we explore ideas and implement with simplicity and
              scalability in mind.
            </p>
            <div className="flex gap-4">
              <Link
                to="/"
                className="p-2 rounded-full border bg-gray-300 text-black hover:bg-gray-100 transition"
              >
                <FaFacebook />
              </Link>
              <Link to="#" className="p-2 rounded-full border bg-gray-300 text-black hover:bg-gray-100 transition">
                <FaTwitter />
              </Link>
              <Link to="#" className="p-2 rounded-full border bg-gray-300 text-black hover:bg-gray-100 transition">
                <FaLinkedin />
              </Link>
              <Link to="#" className="p-2 rounded-full border bg-gray-300 text-black hover:bg-gray-100 transition">
                <FaInstagram />
              </Link>
            </div>
          </div>

           <div>
  <h2 className=" font-bold text-xl mb-4">Contact Us</h2>

  <p className="mb-3">
    <strong>Address:</strong><br />
No. 6 NSCDC Olorunda Akobo Ibadan.
  </p>

 

  <p className="mb-3">
    <strong>Whatsapp:</strong><br />
+2348132574791  </p>

  <p className="mb-3">
    <strong>Email:</strong><br />
Masterclasstech00@gmail.com  </p>

  <p>
    <strong>Mobile:</strong><br />
+2348132574791  </p>
</div>

        </div>
        <div className="text-center mt-8">© 2025 Masterclass Tech. All rights reserved.</div>
      </footer>
    </div>
  );
}
