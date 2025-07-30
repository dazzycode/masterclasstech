import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaChevronDown, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ServicePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();
 const [activeTab, setActiveTab] = useState("mobile");

  const tabs = [
    { key: "mobile", label: "MOBILE APP DEVELOPMENT" },
    { key: "web", label: "WEBSITE DEVELOPMENT" },
    { key: "uiux", label: "UI/UX DESIGN" },
  ];

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "TERMS AND PRIVACY", path: "/privacy" },
    { name: "BLOG", path: "/blog" },
  ];

  return (
          <div className="font-sans">

      {/* Top Nav */}
    <header className="bg-white w-full">
     

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
                <span
                  className={`absolute left-0 -bottom-1 w-full h-[3px] bg-sky-400 skew-x-12 transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </Link>
            );
          })}

          {/* SERVICES DROPDOWN */}
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

          {/* SERVICES DROPDOWN FOR MOBILE */}
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
                <Link to="/services/web" onClick={() => setMenuOpen(false)} className="block">
                  Web Development
                </Link>
                <Link to="/services/mobile" onClick={() => setMenuOpen(false)} className="block">
                  Mobile App Development
                </Link>
                <Link to="/services/uiux" onClick={() => setMenuOpen(false)} className="block">
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
      {/* Hero Section */}
 <section className="relative">
        <img
          src="/bg2.png"
          alt="hero"
          className="w-full h-[200%] md:h-[100vh] object-cover"
        /></section>

      {/* Navigation Tabs */}
     
 
    <section className="w-full">
      {/* Tabs Navigation */}
      <div className="flex justify-center flex-wrap gap-4 py-4 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`text-sm font-medium px-3 py-1 transition border-b-2 ${
              activeTab === tab.key
                ? "text-blue-900 border-blue-900"
                : "text-gray-700 border-transparent hover:border-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
  <div className="flex flex-col md:flex-row items-stretch justify-center p-6 md:p-16 gap-0">
  {/* Text */}
  <div className="md:w-1/2 w-full bg-blue-900 text-white p-6 md:p-10 h-100 flex flex-col justify-center">
    {activeTab === "mobile" && (
      <>
        <h2 className="text-lg font-bold mb-4">MOBILE APP DEVELOPMENT</h2>
        <p className="text-sm mt-5 leading-relaxed">
We design and develop high-performance mobile apps that bring your ideas to life on both Android and iOS. Whether you're launching a startup or expanding your business, our team creates sleek, user-friendly, and scalable apps that deliver real value to your users—right from their pockets.        </p>
      </>
    )}
    {activeTab === "web" && (
      <>
        <h2 className="text-lg font-bold mb-4">WEBSITE DEVELOPMENT</h2>
        <p className="text-sm mt-5 leading-relaxed">
We design and develop high-performance mobile apps that bring your ideas to life on both Android and iOS. Whether you're launching a startup or expanding your business, our team creates sleek, user-friendly, and scalable apps that deliver real value to your users—right from their pockets.        </p>
      </>
    )}
    {activeTab === "uiux" && (
      <>
        <h2 className="text-lg font-bold mb-4">UI/UX DESIGN</h2>
        <p className="text-sm mt-5 leading-relaxed">
We design and develop high-performance mobile apps that bring your ideas to life on both Android and iOS. Whether you're launching a startup or expanding your business, our team creates sleek, user-friendly, and scalable apps that deliver real value to your users—right from their pockets.        </p>
      </>
    )}
  </div>

  {/* Image */}
  <div className="md:w-1/2 w-full h-100">
    {activeTab === "mobile" && (
      <img
        src="/phone2.png"
        alt="Mobile App"
        className="w-full h-full object-cover"
      />
    )}
    {activeTab === "web" && (
      <img
        src="/phone2.png"
        alt="Website"
        className="w-full h-full object-cover"
      />
    )}
    {activeTab === "uiux" && (
      <img
        src="/phone2.png"
        alt="UI/UX Design"
        className="w-full h-full object-cover"
      />
    )}
  </div>
</div>

    </section>
  
      {/* Case Studies */}
    <div className="px-6 md:px-16 py-12 bg-gray-50">
  <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center">CASE STUDIES</h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Card 1 */}
    <div className="bg-white border rounded-md shadow-sm p-4 flex flex-col hover:shadow-md transition">
      <img
        src="/case.png"
        alt="Fintech App"
        className="mb-4 w-full h-48 object-cover rounded"
      />
      <h4 className="text-base font-bold mb-2">Title</h4>
      <p className="text-sm text-gray-600">
        Built a secure mobile banking app with wallet integration and biometric login for a leading African fintech brand.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white border rounded-md shadow-sm p-4 flex flex-col hover:shadow-md transition">
      <img
        src="/case.png"
        alt="Ecommerce Platform"
        className="mb-4 w-full h-48 object-cover rounded"
      />
      <h4 className="text-base font-bold mb-2">Title</h4>
      <p className="text-sm text-gray-600">
        Designed a scalable e-commerce web app with real-time inventory, payment gateway, and user dashboard for vendors.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white border rounded-md shadow-sm p-4 flex flex-col hover:shadow-md transition">
      <img
        src="/case.png"
        alt="Healthcare Portal"
        className="mb-4 w-full h-48 object-cover rounded"
      />
      <h4 className="text-base font-bold mb-2">Title</h4>
      <p className="text-sm text-gray-600">
        Built a full-featured online health appointment platform connecting patients to doctors with secure video calls.
      </p>
    </div>
  </div>
</div>


      {/* Website Development Section */}

  <div className="flex flex-col md:flex-row items-stretch max-w-6xl mx-auto justify-center">
  {/* Image Section */}
  <div className="md:w-1/2 w-full">
    <img
      src="/phone2.png"
      alt="Create a website"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Text Section */}
  <div className="md:w-1/2 w-full bg-blue-900 text-white flex flex-col justify-center p-4">
    <div>
      <h2 className="text-lg font-bold mb-2">WEBSITE DEVELOPMENT</h2>
      <p className="text-sm leading-relaxed">
        We create fast, responsive, and visually stunning websites that not only look great but
        also perform flawlessly across all devices. Whether it’s a simple landing page or a
        complex business platform, we build websites that captivate visitors and convert them
        into loyal customers.
      </p>
    </div>
  </div>
</div>

{/* Case Studies */}
    <div className="px-6 md:px-16 py-12 bg-gray-50">
  <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center">CASE STUDIES</h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Card 1 */}
    <div className="bg-white border rounded-md shadow-sm p-4 flex flex-col hover:shadow-md transition">
      <img
        src="/case.png"
        alt="Fintech App"
        className="mb-4 w-full h-48 object-cover rounded"
      />
      <h4 className="text-base font-bold mb-2">Title</h4>
      <p className="text-sm text-gray-600">
        Built a secure mobile banking app with wallet integration and biometric login for a leading African fintech brand.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white border rounded-md shadow-sm p-4 flex flex-col hover:shadow-md transition">
      <img
        src="/case.png"
        alt="Ecommerce Platform"
        className="mb-4 w-full h-48 object-cover rounded"
      />
      <h4 className="text-base font-bold mb-2">Title</h4>
      <p className="text-sm text-gray-600">
        Designed a scalable e-commerce web app with real-time inventory, payment gateway, and user dashboard for vendors.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white border rounded-md shadow-sm p-4 flex flex-col hover:shadow-md transition">
      <img
        src="/case.png"
        alt="Healthcare Portal"
        className="mb-4 w-full h-48 object-cover rounded"
      />
      <h4 className="text-base font-bold mb-2">Title</h4>
      <p className="text-sm text-gray-600">
        Built a full-featured online health appointment platform connecting patients to doctors with secure video calls.
      </p>
    </div>
  </div>
</div>
  {/* UI Design Section */}

  <div className="flex flex-col md:flex-row items-stretch max-w-6xl mx-auto justify-center">
  

  {/* Text Section */}
  <div className="md:w-1/2 w-full bg-blue-900 text-white flex flex-col justify-center p-4">
    <div>
      <h2 className="text-lg font-bold mb-2">UI Design</h2>
      <p className="text-sm leading-relaxed">
        We create fast, responsive, and visually stunning websites that not only look great but
        also perform flawlessly across all devices. Whether it’s a simple landing page or a
        complex business platform, we build websites that captivate visitors and convert them
        into loyal customers.
      </p>
    </div>
  </div>
  {/* Image Section */}
  <div className="md:w-1/2 w-full">
    <img
      src="/phone2.png"
      alt="Create a website"
      className="w-full h-full object-cover"
    />
  </div>
</div>

{/* Case Studies */}
    <div className="px-6 md:px-16 py-12 bg-gray-50">
  <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center">CASE STUDIES</h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Card 1 */}
    <div className="bg-white border rounded-md shadow-sm p-4 flex flex-col hover:shadow-md transition">
      <img
        src="/case.png"
        alt="Fintech App"
        className="mb-4 w-full h-48 object-cover rounded"
      />
      <h4 className="text-base font-bold mb-2">Title</h4>
      <p className="text-sm text-gray-600">
        Built a secure mobile banking app with wallet integration and biometric login for a leading African fintech brand.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white border rounded-md shadow-sm p-4 flex flex-col hover:shadow-md transition">
      <img
        src="/case.png"
        alt="Ecommerce Platform"
        className="mb-4 w-full h-48 object-cover rounded"
      />
      <h4 className="text-base font-bold mb-2">Title</h4>
      <p className="text-sm text-gray-600">
        Designed a scalable e-commerce web app with real-time inventory, payment gateway, and user dashboard for vendors.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white border rounded-md shadow-sm p-4 flex flex-col hover:shadow-md transition">
      <img
        src="/case.png"
        alt="Healthcare Portal"
        className="mb-4 w-full h-48 object-cover rounded"
      />
      <h4 className="text-base font-bold mb-2">Title</h4>
      <p className="text-sm text-gray-600">
        Built a full-featured online health appointment platform connecting patients to doctors with secure video calls.
      </p>
    </div>
  </div>
</div>
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
