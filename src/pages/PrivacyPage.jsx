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
const sections = [
    { id: "introduction", title: "1. Introduction", content: `Welcome to [Your Company Name] (“we”, “our”, or “us”). By using our websites, services, mobile applications, or any associated digital platform (collectively, the “Services”), you agree to be bound by the following Terms of Service and our Privacy Policy.` },
    { id: "eligibility", title: "2. Eligibility", content: `By using our Services, you affirm that you are at least 18 years old or the age of majority in your jurisdiction. If you are using our Services on behalf of an organization or entity, you represent and warrant that you have the authority to bind that entity to these Terms.` },
    { id: "use", title: "3. Use of Services", content: 'You agree to use the Services only for lawful purposes and in a way that does not infringe the rights of others or restrict or inhibit their use and enjoyment. You must not:'(
    
      <ul className="list-disc list-inside space-y-1">
        <li>Violate any applicable laws or regulations.</li>
        <li>Infringe upon the intellectual property rights of others.</li>
        <li>Transmit any viruses, malware, or other harmful software.</li>
                <li>Attempt to gain unauthorized access to any part of the Services or related systems.</li>

      </ul>
    )},
    { id: "account", title: "4. Account Registration", content: `Some Services may require you to create an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to provide accurate, complete, and up-to-date information during registration and to promptly update this information if it changes.` },
    { id: "ip", title: "5. Intellectual Property Rights", content: `All content, features, and functionality on our Services—including but not limited to text, graphics, logos, icons, images, audio, video, software, and code—are the property of [Your Company Name] or our licensors and are protected by intellectual property laws.
You may not copy, modify, distribute, sell, or lease any part of our Services or content without our prior written consent.` },
    { id: "content", title: "6. User Content", content: `If you submit, upload, or otherwise provide content through our Services ("User Content"), you grant us a worldwide, non-exclusive, royalty-free, transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform that content in connection with the operation of the Services.
You are solely responsible for your User Content and affirm that it does not violate any third-party rights or laws.` },
    { id: "payments", title: "7. Payments and Subscriptions", content: `If you purchase any of our paid Services or subscriptions, you agree to pay all fees associated with the Services. All payments are non-refundable unless stated otherwise.
We may change our pricing or billing methods at any time with reasonable prior notice. You are responsible for canceling any subscription before the next billing cycle if you do not wish to be charged.` },
    { id: "termination", title: "8. Termination", content: `We reserve the right to suspend or terminate your access to the Services at any time, without notice, if we believe you have violated these Terms, engaged in fraudulent or illegal activity, or created risk or possible legal exposure for us.
Upon termination, all rights granted to you under these Terms will immediately cease.` },
     { id: "thirdparty", title: "9. Third-Party Links", content: `Our Services may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the content, policies, or practices of these third parties. You access these websites at your own risk.` },
    { id: "disclaimer", title: "10.Disclaimers", content: `The Services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the Services will be uninterrupted, error-free, secure, or free of viruses or other harmful components.
To the fullest extent permitted by law, we disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.` },

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
      <span>Masterclasstech00@gmail.com</span>
      <span className="hidden sm:inline">|</span>
      <span>+2348132574791</span>
      <span className="hidden sm:inline">|</span>
      <span className="whitespace-nowrap hidden xs:inline sm:inline">No. 6 NSCDC Olorunda Akobo Ibadan.
</span>
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
   
  
  
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">

      {/* Main Terms Section */}
      <div className="lg:col-span-3 space-y-8">
        {sections.map((section) => (
          <section key={section.id} id={section.id}>
            <h2 className="text-xl font-bold mb-2">{section.title}</h2>
            <div className="text-gray-700 text-sm leading-relaxed">{section.content}</div>
          </section>
        ))}
      </div>

      {/* Sidebar Table of Contents */}
      <aside className="lg:col-span-1 bg-gray-50 border border-gray-200 p-6 rounded-md sticky top-6 h-fit">
        <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
        <ul className="space-y-2 text-sm text-blue-600">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="hover:underline">
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>

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
    </div></div>
  );
}