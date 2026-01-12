import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  BarChart3,
  Globe,
} from "lucide-react";

// Slide Data
const slides = [
  {
    id: 1,
    title: "The Intelligent Enterprise OS",
    subtitle: "Future of Work",
    description:
      "Connect your entire knowledge base into a single, intelligent interface. QubeAI understands relationships between data points, not just keywords.",
    image: "/images/platform_architecture.png",
    accentColor: "bg-purple-500",
    icon: Zap,
    stat: "94% Efficiency",
  },
  {
    id: 2,
    title: "Predictive Sales Intelligence",
    subtitle: "Revenue Growth",
    description:
      "Surface high-value opportunities by correlating historical closing data with current lead behavior. Close more deals in less time.",
    image: "/images/sales_dashboard.png",
    accentColor: "bg-blue-500",
    icon: TrendingUp,
    stat: "3x Conversions",
  },
  {
    id: 3,
    title: "Autonomous Ops Command",
    subtitle: "Operational Excellence",
    description:
      "Predict maintenance needs and optimize global supply chain logistics with real-time AI agents watching 24/7.",
    image: "/images/ops_dashboard.png",
    accentColor: "bg-emerald-500",
    icon: ShieldCheck,
    stat: "$2.4M Saved",
  },
];

export function SliderHero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const slideVariants = {
    initial: { scale: 1.1, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 1, opacity: 0 },
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Content text animations
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <section className="relative w-full  min-h-[700px] overflow-hidden bg-gray-900 text-white">
      {/* BACKGROUND IMAGE SLIDER */}
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={current}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Main Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />

          {/* Heavy Dark Overlay for Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/30" />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* CONTENT CONTAINER */}
      <div className="container relative z-10 h-full px-6 mx-auto flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full py-10">
          {/* LEFT CONTENT: HEADLINE & CTA */}
          <div className="lg:col-span-8 max-w-4xl pt-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 },
                  },
                  exit: { opacity: 0 },
                }}
              >
                {/* Badge */}
                <motion.div
                  variants={contentVariants}
                  className="flex items-center gap-3 mb-6"
                >
                  <div
                    className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-2`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${slides[current].accentColor}`}
                    ></span>
                    {slides[current].subtitle}
                  </div>
                </motion.div>

                {/* Hero Title */}
                <motion.h1
                  variants={contentVariants}
                  className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-white drop-shadow-2xl"
                >
                  {slides[current].title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  variants={contentVariants}
                  className="text-lg md:text-2xl text-gray-200 max-w-2xl leading-relaxed mb-10 drop-shadow-lg font-light opacity-90"
                >
                  {slides[current].description}
                </motion.p>

                {/* Buttons */}
                <motion.div
                  variants={contentVariants}
                  className="flex flex-wrap gap-5"
                >
                  <button className="bg-[#8C5FF5] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 shadow-xl shadow-purple-500/20 hover:bg-[#7a4ee0] hover:scale-105 transition-all duration-300 active:scale-95 group">
                    Get Started Free
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                  <button className="px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 active:scale-95 text-white">
                    <Play size={20} fill="currentColor" />
                    Watch Demo
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT CONTENT: FLOATING GLASS CARD (Optional Metric) */}
          <div className="lg:col-span-4 hidden lg:flex items-end justify-end pb-20">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full max-w-xs p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl ${slides[current].accentColor} bg-opacity-20 text-white`}
                  >
                    {React.createElement(slides[current].icon, { size: 24 })}
                  </div>
                  <div className="text-emerald-400 font-bold flex items-center gap-1 text-sm bg-emerald-400/10 px-2 py-1 rounded">
                    <TrendingUp size={14} /> +24%
                  </div>
                </div>
                <div>
                  <div className="text-white/60 text-sm font-medium mb-1">
                    Key Impact
                  </div>
                  <div className="text-3xl font-bold text-white tracking-tight">
                    {slides[current].stat}
                  </div>
                </div>

                {/* Tiny Chart Visualization */}
                <div className="mt-4 flex items-end gap-1 h-12">
                  {[40, 60, 45, 70, 50, 80, 100].map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-t-sm opacity-50 ${slides[
                        current
                      ].accentColor.replace("bg-", "bg-")}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* FOOTER NAV / PROGRESS BAR */}
      <div className="absolute bottom-0 left-0 w-full z-20 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {slides.map((slide, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > current ? 1 : -1);
                  setCurrent(idx);
                }}
                className={`text-left p-6 group transition-all duration-300 ${
                  current === idx ? "bg-white/5" : "hover:bg-white/5"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-sm font-bold ${
                      current === idx
                        ? "text-white"
                        : "text-white/40 group-hover:text-white/70"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  {current === idx && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="w-2 h-2 rounded-full bg-white"
                    />
                  )}
                </div>
                <div
                  className={`text-sm font-medium transition-colors ${
                    current === idx
                      ? "text-white"
                      : "text-white/40 group-hover:text-white/70"
                  }`}
                >
                  {slide.title}
                </div>
                {/* Progress Line */}
                <div className="w-full h-[2px] bg-white/10 mt-4 rounded-full overflow-hidden">
                  {current === idx && (
                    <motion.div
                      className="h-full bg-[#8C5FF5]"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6, ease: "linear" }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
