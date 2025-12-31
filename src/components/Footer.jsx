import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Platform Overview", href: "#platform" },
        { name: "Key Features", href: "#features" },
        { name: "Security & Reliability", href: "#security" },
        { name: "Integrations", href: "#integrations" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "For Leadership", href: "#leadership" },
        { name: "For Operations", href: "#operations" },
        { name: "For Sales", href: "#sales" },
        { name: "For Customer Support", href: "#support" },
      ],
    },
    {
      title: "Use Cases",
      links: [
        { name: "Connect Data", href: "#connect" },
        { name: "Correlate Insights", href: "#correlate" },
        { name: "Converse with AI", href: "#converse" },
        { name: "Review & Act", href: "#review" },
      ],
    },
    {
      title: "Industries",
      links: [
        { name: "BFSI", href: "#bfsi" },
        { name: "Healthcare", href: "#healthcare" },
        { name: "Manufacturing", href: "#manufacturing" },
        { name: "View All", href: "#industries" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Press", href: "#press" },
        { name: "Contact", href: "#contact" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50 border-t border-purple-100/50 pt-20 pb-10">
      {/* Multi-layer Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-200 to-purple-200 rounded-full blur-[100px] opacity-25"></div>
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-[90px] opacity-20"></div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#8C5FF5 1px, transparent 1px), linear-gradient(90deg, #8C5FF5 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Radial Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/20 to-white/40"></div>
      </div>

      <div className="relative container mx-auto px-6 pb-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand Section - Takes 4 columns */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <img src="/qubeai.png" alt="QubeAI Logo" className="h-10" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-sm">
              Transform enterprise intelligence with AI-powered insights.
              Connect, correlate, and converse with your data seamlessly.
            </p>

            {/* CTA */}
            <a
              href="#demo"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8C5FF5] to-[#7a4fd9] text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:shadow-2xl hover:shadow-purple-300/50 transition-all duration-300 shadow-lg shadow-purple-200 group relative overflow-hidden"
            >
              <span className="relative z-10">Book a Demo</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>

            {/* Social Links */}
            <div className="flex gap-3 mt-8">
              {[
                {
                  icon: Linkedin,
                  href: "#linkedin",
                  color: "hover:bg-blue-600",
                },
                { icon: Twitter, href: "#twitter", color: "hover:bg-sky-500" },
                { icon: Github, href: "#github", color: "hover:bg-gray-800" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`w-11 h-11 rounded-xl bg-white border border-gray-200 ${social.color} text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-sm`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Sections - Each takes 2 columns, total 8 columns for 4 sections */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {footerSections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-gray-900 font-bold text-xs mb-5 uppercase tracking-[0.1em] relative inline-block">
                  {section.title}
                  <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#8C5FF5] to-purple-400 rounded-full"></span>
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className="text-gray-600 text-sm hover:text-[#8C5FF5] transition-all duration-200 inline-flex items-center gap-1.5 group relative"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-[#8C5FF5] group-hover:w-full transition-all duration-300"></span>
                        </span>
                        <svg
                          className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Divider */}
        {/* <div className="relative h-px mb-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/30 to-transparent blur-sm"></div>
        </div> */}

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-6">
          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm">
            <a
              href="mailto:hello@qubeai.com"
              className="flex items-center gap-2 text-gray-500 hover:text-[#8C5FF5] transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-purple-100 flex items-center justify-center transition-colors">
                <Mail size={14} />
              </div>
              hello@qubeai.com
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-gray-500 hover:text-[#8C5FF5] transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-purple-100 flex items-center justify-center transition-colors">
                <Phone size={14} />
              </div>
              +1 (234) 567-890
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <a
              href="#privacy"
              className="hover:text-[#8C5FF5] transition-colors relative group"
            >
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#8C5FF5] group-hover:w-full transition-all duration-300"></span>
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="#terms"
              className="hover:text-[#8C5FF5] transition-colors relative group"
            >
              Terms of Service
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#8C5FF5] group-hover:w-full transition-all duration-300"></span>
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="#cookies"
              className="hover:text-[#8C5FF5] transition-colors relative group"
            >
              Cookie Policy
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#8C5FF5] group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-gray-200/50">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-gray-600 font-semibold">QubeAI Inc.</span> All
            rights reserved. Empowering enterprises with intelligent solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
