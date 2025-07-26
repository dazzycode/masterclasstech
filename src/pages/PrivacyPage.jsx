import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaChevronDown, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

 
export default function PrivacyPage() {
      const [menuOpen, setMenuOpen] = useState(false);
       const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
       const location = useLocation();
const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT US", path: "/about" },
  { name: "TERMS AND PRIVACY", path: "/privacy" },
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
    className="absolute right-0 top-0 w-full sm:w-[70%] h-full"
  >
    <path d="M0 0H1411V78H46L0 0Z" fill="#001359" />
  </svg>

  <div className="absolute top-0 right-0 w-full sm:w-[70%] h-full flex items-center justify-center text-white text-[10px] sm:text-xs md:text-sm z-10 px-2">
    <div className="flex flex-wrap gap-1 sm:gap-4 items-center justify-center text-center leading-tight">
      <span>info@masterideasontech.com</span>
      <span className="hidden sm:inline">|</span>
      <span>+02 350 5844901</span>
      <span className="hidden sm:inline">|</span>
      <span className="whitespace-nowrap hidden xs:inline sm:inline">Johar Town Lahore $4000 Pakistan</span>
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

      {/* Main Section */}
   
    <div className="bg-white text-gray-800 font-sans">
      {/* Header Section */}
      <div className="bg-[#0B1C49] text-white py-12 px-4 text-center">
        <h1 className="text-3xl font-bold mb-2">TERMS AND PRIVACY</h1>
        <p className="max-w-xl mx-auto">
          Please review our Terms and Privacy Policy to understand how we protect your data
          and outline your rights while using our services.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8">
        {/* Left: Terms Content */}
        <div className="flex-1 space-y-2 text-sm leading-6">
          {[
            {
              title: "1. Introduction",
              content: `Welcome to [Your Company Name] ("we", "our", or "us"). By using our website, services, mobile applications, or any associated digital platform (collectively, the "Services"), you agree to be bound by the following Terms of Service ("Terms") and our Privacy Policy ("Policy"). These documents outline the rules and responsibilities that govern your use of our Services and describe how we collect, use, and safeguard your personal information.
Please read these Terms and this Policy carefully. If you do not agree with any part of these documents, you must not access or use our Services.`
            },
            {
              title: "2. Eligibility",
              content: `By using our Services, you affirm that you are at least 18 years old or the age of majority in your jurisdiction. If you are using our Services on behalf of an organization or entity, you represent and warrant that you have the authority to bind that entity to these Terms.`
            },
            {
              title: "3. Use of Services",
              content: `You agree to use our Services only for lawful purposes...`
            },
            {
              title: "4. Account Registration",
              content: `Some Services may require you to create an account...`
            },
            {
              title: "5. Intellectual Property Rights",
              content: `All content, features, and functionality... are protected by intellectual property laws...`
            },
            {
              title: "6. User Content",
              content: `If you submit content through our Services, you grant us a worldwide license...`
            },
            {
              title: "7. Payments and Subscriptions",
              content: `If your access to Services requires payment, you agree to pay all associated fees...`
            },
            {
              title: "8. Termination",
              content: `We reserve the right to suspend or terminate your access at any time...`
            },
            {
              title: "9. Third-Party Links",
              content: `Our Services may contain links to third-party sites...`
            },
            {
              title: "10. Disclaimers",
              content: `Services are provided "as is" without warranties...`
            },
            {
              title: "11. Limitation of Liability",
              content: `To the fullest extent permitted by law... our liability is limited...`
            },
            {
              title: "12. Indemnification",
              content: `You agree to defend and indemnify [Your Company Name]...`
            },
            {
              title: "13. Privacy Policy",
              content: `We collect and use personal data as outlined below.`
            },
            {
              title: "13.1. Information We Collect",
              content: `We may collect personal data like name, email, etc.`
            },
            {
              title: "13.2. How We Use Your Information",
              content: `To provide, improve, and secure our services...`
            },
            {
              title: "13.3. Data Sharing",
              content: `We may share data with service providers under confidentiality...`
            },
            {
              title: "13.4. Data Retention",
              content: `We retain your data only as long as necessary...`
            },
            {
              title: "13.5. Cookies and Tracking",
              content: `We may use cookies to enhance user experience.`
            },
            {
              title: "13.6. Children’s Privacy",
              content: `Our Services are not intended for users under 13.`
            },
            {
              title: "13.7. International Users",
              content: `Your data may be processed outside your home country...`
            },
            {
              title: "14. Changes to Terms and Privacy Policy",
              content: `We may update our Terms and Policy. Please review regularly.`
            },
          ].map((section, index) => (
            <div key={index} id={`section-${index}`}>
              <h2 className="font-semibold text-base ">{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>

        {/* Right: Table of Contents */}
        <aside className="lg:w-64 lg:sticky lg:top-24 text-sm border-l pl-6 hidden lg:block">
          <h3 className="font-semibold mb-4">Table of Contents</h3>
          <ul className="space-y-2">
            {[
              "Introduction",
              "Eligibility",
              "Use of Services",
              "Account Registration",
              "Intellectual Property Rights",
              "User Content",
              "Payments and Subscriptions",
              "Termination",
              "Third-Party Links",
              "Disclaimers",
              "Limitation of Liability",
              "Indemnification",
              "Privacy Policy",
              "Information We Collect",
              "How We Use Your Information",
              "Data Sharing",
              "Data Retention",
              "Cookies and Tracking",
              "Children’s Privacy",
              "International Users",
              "Changes to Terms and Privacy Policy"
            ].map((item, i) => (
              <li key={i}>
                <a href={`#section-${i}`} className="text-blue-600 hover:underline">
        
          {item}
                </a>
              </li>
            ))}
          </ul>
        </aside>
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