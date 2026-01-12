import React from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "glass py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/qubeplatform.ai.png" alt="QubeAI Logo" className="h-10" />
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href="#home"
            className={`text-sm font-medium ${
              scrolled ? "text-gray-600" : "text-white"
            } hover:text-[#8C5FF5] transition-colors`}
          >
            Home
          </a>
          <a
            href="#product"
            className={`text-sm font-medium ${
              scrolled ? "text-gray-600" : "text-white"
            } hover:text-[#8C5FF5] transition-colors`}
          >
            Product
          </a>
          <a
            href="#solutions"
            className={`text-sm font-medium ${
              scrolled ? "text-gray-600" : "text-white"
            } hover:text-[#8C5FF5] transition-colors`}
          >
            Solutions
          </a>
          <a
            href="#use-cases"
            className={`text-sm font-medium ${
              scrolled ? "text-gray-600" : "text-white"
            } hover:text-[#8C5FF5] transition-colors`}
          >
            Use Cases
          </a>
          <a
            href="#industries"
            className={`text-sm font-medium ${
              scrolled ? "text-gray-600" : "text-white"
            } hover:text-[#8C5FF5] transition-colors`}
          >
            Industries
          </a>
          <a
            href="#see-how"
            className={`text-sm font-medium ${
              scrolled ? "text-gray-600" : "text-white"
            } hover:text-[#8C5FF5] transition-colors`}
          >
            See How
          </a>
          <a
            href="#about"
            className={`text-sm font-medium ${
              scrolled ? "text-gray-600" : "text-white"
            } hover:text-[#8C5FF5] transition-colors`}
          >
            About
          </a>
          <button className="btn-primary text-sm px-6 py-2.5 shadow-none hover:shadow-lg">
            Book a Demo
          </button>
        </div>

        <div
          className="lg:hidden text-gray-900 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-xl"
        >
          <a href="#home" className="text-gray-600 font-medium">
            Home
          </a>
          <a href="#product" className="text-gray-600 font-medium">
            Product
          </a>
          <a href="#solutions" className="text-gray-600 font-medium">
            Solutions
          </a>
          <a href="#use-cases" className="text-gray-600 font-medium">
            Use Cases
          </a>
          <a href="#industries" className="text-gray-600 font-medium">
            Industries
          </a>
          <a href="#see-how" className="text-gray-600 font-medium">
            See How
          </a>
          <a href="#about" className="text-gray-600 font-medium">
            About
          </a>
          <button className="btn-primary w-full">Book a Demo</button>
        </motion.div>
      )}
    </nav>
  );
}
