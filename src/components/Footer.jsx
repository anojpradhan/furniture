import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const contact = {
    address: "Lagankhel Patan Hospital Road, Lalitpur Bagmati Pradesh (NP) Nepal",
    phones: ["+977 01-5423864", "+977 01-5440747", "+977 01-5448418"],
    email: "info@sbfurniturenepal.com",
    workingHours: [
      { days: "Sun - Fri", time: "10:00AM - 7:00 PM" },
      { days: "Sat", time: "11:00AM - 5:00PM" },
    ],
  };

  const links = [
    { name: "About Us", path: "/about" },
    { name: "My Orders", path: "/orders" },
    { name: "Shipping and Delivery", path: "/shipping-delivery" },
    { name: "Warranty", path: "/warranty" },
    { name: "Contact Us", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "Price Disclaimer", path: "/price-disclaimer" },
    { name: "Register Your Mattress", path: "/register-mattress" },
    { name: "EMI", path: "/emi" },
    { name: "Terms & Conditions for Cashback offer", path: "/cashback-terms" },
  ];

  return (
    <footer className="bg-black text-white px-10 py-12">
      <div className="flex flex-row justify-between gap-10">
        {/* Contact Info */}
        <div className="flex flex-col w-md">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="flex items-center gap-2">

              <MapPin size={18} /> <span className="font-medium text-xl">Address</span>
              </div>
            </div>
            <p className="ml-6 text-md">{contact.address}</p>
            <div className="w-full border-1 mt-2 border-gray-200"></div>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="flex items-center gap-2">

              <Phone size={18} /> <span className="font-medium text-xl">Phone</span>
              </div>
            </div>
            <ul className=" flex ml-6 text-md space-y-1">
              {contact.phones.map((num, i, array) => {
                const isLastElement = i === array.length - 1;
                return (
                <li key={i}>{num}{!isLastElement&&" ,"}</li>
              )})}
            </ul>
                        <div className="w-full border-1 mt-2 border-gray-200"></div>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="flex items-center gap-2">

              <Mail size={18} /> <span className="font-medium text-xl">Email</span>
              </div>
            </div>
            <p className="ml-6 text-md">{contact.email}</p>
                        <div className="w-full border-1 mt-2 border-gray-200"></div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="flex items-center gap-2">

              <Clock size={18} /> <span className="font-medium text-xl">Working Days/Hours</span>
              </div>
            </div>
            <ul className="ml-6 text-md space-y-1">
              {contact.workingHours.map((slot, i) => (
                <li key={i}>{slot.days} : {slot.time}</li>
              ))}
            </ul>
                        <div className="w-full border-1 mt-2 border-gray-200"></div>
          </div>
        </div>

        {/* More About Us */}
        <div className="flex-1 2-md">
          <h2 className="text-2xl font-semibold mb-4">More About us</h2>
          <ul className="space-y-2 text-md">
            {links.map((link, i) => (
              <li key={i}>
                <div className="group relative inline-block">
                <Link to={link.path} className="cursor-pointer">
                  {link.name}
                </Link>
                <div className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="flex-1 min-w-[250px]">
          <h2 className="text-2xl font-semibold mb-4">Be the first to know</h2>
          <p className="mb-2 text-md font-medium">NEWSLETTER SIGNUP:</p>
          <div className="flex">
            <input
              type="email"
              placeholder="your email..."
              className="p-2 h-11 w-full text-black bg-white rounded-l outline-none"
            />
            <button className="bg-blue-500 h-11 text-white p-2 rounded-r hover:bg-blue-600 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
