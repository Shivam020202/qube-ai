import React from "react";
import { AuroraHero } from "../components/AuroraHero";
import { IntegrationStrip } from "../components/IntegrationStrip";
import { motion } from "framer-motion";
import {
  Layers,
  Clock,
  Brain,
  CheckCircle,
  Zap,
  Database,
  MessageSquare,
  Search,
  FileText,
  Shield,
  BarChart,
  Users,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function ProblemSection() {
  return (
    <section className="section bg-gray-50/50">
      <div className="container px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl mb-4 text-gray-900">
            The Data Dilemma
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Modern enterprises are drowning in data but starving for insights.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="glass-card p-8 rounded-2xl relative overflow-hidden group bg-white border border-gray-100"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full blur-[50px] -z-10 group-hover:bg-red-200 transition-all duration-500 opacity-50"></div>
            <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 text-red-500">
              <Layers size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Data Silos
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Information is trapped in disconnected systems, making it
              impossible to see the full picture. Teams waste hours searching
              for what they already know.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="glass-card p-8 rounded-2xl relative overflow-hidden group bg-white border border-gray-100"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-[50px] -z-10 group-hover:bg-orange-200 transition-all duration-500 opacity-50"></div>
            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-500">
              <Clock size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Decision Lag
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Manual correlation of data takes too long. By the time insights
              are generated, the opportunity has often passed.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="section bg-white" id="solution">
      <div className="container px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 leading-tight text-gray-900">
              Unified Intelligent <br />
              <span className="text-gradient">Workspace</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              QubeAI connects your entire knowledge base into a single,
              intelligent interface. It doesn't just store data; it understands
              the relationships between them.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Enterprise-grade AI",
                  desc: "Secure, private, and scalable models tailored to your business.",
                  icon: Brain,
                },
                {
                  title: "Verified Responses",
                  desc: "No hallucinations. Every answer is cited from your own data.",
                  icon: CheckCircle,
                },
                {
                  title: "Automation",
                  desc: "Turn insights into action with autonomous workflows.",
                  icon: Zap,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                >
                  <div className="mt-1 p-2 bg-purple-50 rounded-lg">
                    <item.icon className="text-[#8C5FF5]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square md:aspect-video rounded-3xl bg-gray-50 border border-gray-100 flex items-center justify-center p-8 overflow-hidden shadow-2xl shadow-purple-100">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8C5FF5]/5 to-transparent"></div>
              <div className="w-full h-full relative z-10 flex gap-4">
                <div className="w-1/3 h-full bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 mb-2"></div>
                  <div className="w-full h-2 rounded bg-gray-100"></div>
                  <div className="w-2/3 h-2 rounded bg-gray-100"></div>
                  <div className="mt-auto w-full h-32 rounded-lg bg-gray-50"></div>
                </div>
                <div className="w-2/3 h-full flex flex-col gap-4">
                  <div className="w-full h-1/2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-center">
                    <div className="text-3xl font-bold mb-2 text-[#8C5FF5]">
                      94%
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      Decision Efficiency Increased
                    </div>
                    <div className="w-full bg-gray-100 h-2 mt-4 rounded-full overflow-hidden">
                      <div className="bg-[#8C5FF5] w-[94%] h-full rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex gap-4 h-1/2">
                    <div className="w-1/2 h-full bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-lg p-4 text-white flex flex-col justify-between">
                      <div className="p-2 bg-white/20 w-fit rounded-lg">
                        <Zap size={16} />
                      </div>
                      <div className="text-xs font-semibold opacity-90">
                        Auto-Action Triggered
                      </div>
                    </div>
                    <div className="w-1/2 h-full bg-white rounded-2xl shadow-sm border border-gray-100 p-4 relative overflow-hidden">
                      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-100 rounded-full blur-[30px]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  const steps = [
    {
      id: 1,
      title: "Connect",
      icon: Database,
      desc: "Integrate all your data sources securely.",
    },
    {
      id: 2,
      title: "Correlate",
      icon: Search,
      desc: "AI identifies patterns and relationships.",
    },
    {
      id: 3,
      title: "Converse",
      icon: MessageSquare,
      desc: "Ask questions in natural language.",
    },
    {
      id: 4,
      title: "Review",
      icon: FileText,
      desc: "Verify citations and take action.",
    },
  ];

  return (
    <section className="section bg-gray-50/50" id="process">
      <div className="container px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl mb-4 text-gray-900">
            Use Case Journey
          </h2>
          <p className="text-gray-600">
            From raw data to actionable intelligence in four steps.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-[40px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-6 relative z-10 border border-purple-100 shadow-lg shadow-purple-50 group-hover:border-[#8C5FF5] transition-colors">
                  <step.icon
                    className="text-gray-400 group-hover:text-[#8C5FF5] transition-colors"
                    size={32}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 px-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesGrid() {
  const features = [
    {
      title: "Secure by Design",
      desc: "Enterprise-grade encryption and Role-Based Access Control (RBAC).",
      icon: Shield,
    },
    {
      title: "Real-time Analytics",
      desc: "Monitor API usage, token consumption, and user interactions.",
      icon: BarChart,
    },
    {
      title: "Team Collaboration",
      desc: "Shared workspaces and collaborative prompt engineering.",
      icon: Users,
    },
    {
      title: "Custom Models",
      desc: "Fine-tune models on your specific proprietary data.",
      icon: Brain,
    },
  ];

  return (
    <section className="section bg-white" id="features">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 text-gray-900">
            Powerful Capabilities
          </h2>
          <p className="text-gray-600">
            Everything you need to deploy AI at scale.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-purple-200 transition-colors group"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm text-[#8C5FF5] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <f.icon size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">
                {f.title}
              </h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformArchitecture() {
  return (
    <section className="section bg-white">
      <div className="container px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-purple-100 rounded-full">
              <span className="text-sm font-semibold text-[#8C5FF5]">
                Platform Architecture
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 leading-tight text-gray-900">
              Built for <span className="text-gradient">Enterprise Scale</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              QubeAI's intelligent architecture seamlessly integrates with your
              existing infrastructure, providing a unified layer that connects
              disparate data sources while maintaining enterprise-grade security
              and compliance.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Multi-Source Connectivity",
                  desc: "Connect to 100+ data sources including databases, cloud storage, APIs, and enterprise applications. Our platform automatically indexes and structures your data for instant retrieval.",
                },
                {
                  title: "Intelligent Data Layer",
                  desc: "Advanced AI models create semantic relationships between your data points, enabling contextual understanding and cross-functional insights that traditional systems miss.",
                },
                {
                  title: "Adaptive Learning",
                  desc: "The system continuously learns from user interactions and feedback, improving accuracy and relevance over time while adapting to your organization's unique vocabulary and processes.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="border-l-4 border-purple-500 pl-6 py-2"
                >
                  <h4 className="text-lg font-bold mb-2 text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square rounded-3xl bg-transparent p-4 flex items-center justify-center">
              {/* Glow effect behind illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-[80px]"></div>

              <img
                src="/images/platform_architecture.png"
                alt="QubeAI Platform Architecture"
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105 rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function RealWorldApplication() {
  return (
    <section className="section bg-white pt-20 pb-20">
      <div className="container px-6">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-semibold mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Live Use Cases
          </div>
          <h2 className="text-3xl md:text-5xl mb-4 text-gray-900">
            Intelligence in <span className="text-gradient">Action</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            See how enterprises transform their workflow with QubeAI.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Use Case 1: Sales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl bg-gray-50 border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-500"
          >
            <div className="aspect-[16/9] overflow-hidden bg-gray-100 relative">
              <img
                src="/images/sales_dashboard.png"
                alt="Sales Intelligence"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/50 shadow-sm">
                  <div className="text-xs text-gray-500 font-medium">
                    Pipeline Value
                  </div>
                  <div className="text-sm font-bold text-gray-900">$2.4M</div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                  <MessageSquare size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Sales Intelligence
                </h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Surface high-value opportunities by correlating historical
                closing data with current lead behavior, cutting research time
                by 75%.
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-900">
                  <Zap size={16} className="text-[#8C5FF5]" />
                  3x Conversions
                </div>
                <button className="text-[#8C5FF5] text-sm font-semibold flex items-center gap-1 group/btn hover:gap-2 transition-all">
                  View Case Study <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Use Case 2: Operations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative rounded-3xl bg-gray-50 border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-500"
          >
            <div className="aspect-[16/9] overflow-hidden bg-gray-100 relative">
              <img
                src="/images/ops_dashboard.png"
                alt="Operations Analytics"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/50 shadow-sm">
                  <div className="text-xs text-gray-500 font-medium">
                    Efficiency Gain
                  </div>
                  <div className="text-sm font-bold text-emerald-600">+23%</div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <BarChart size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Operations Command
                </h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Predict maintenance needs and optimize global supply chain
                logistics, saving an average of $1.2M annually in operational
                costs.
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-900">
                  <Shield size={16} className="text-blue-500" />
                  Predictive Alerts
                </div>
                <button className="text-blue-600 text-sm font-semibold flex items-center gap-1 group/btn hover:gap-2 transition-all">
                  View Case Study <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ROISection() {
  const stats = [
    {
      value: "10x",
      label: "Faster Data Access",
      desc: "Reduce time spent searching for information",
    },
    {
      value: "85%",
      label: "Decision Accuracy",
      desc: "Make data-backed decisions with confidence",
    },
    {
      value: "$2.5M",
      label: "Avg. Annual Savings",
      desc: "ROI realized within first 6 months",
    },
    {
      value: "40hrs",
      label: "Time Saved/Employee",
      desc: "Per month on manual data tasks",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl mb-4 text-gray-900">
            Measurable Impact from Day One
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our customers see immediate improvements in productivity, decision
            quality, and operational efficiency
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8C5FF5] to-indigo-600 mb-3">
                  {stat.value}
                </div>
                <div className="text-gray-900 font-bold text-lg mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600 text-sm">{stat.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Customer Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px]"></div>
          <div className="relative z-10">
            <div className="flex items-start gap-6">
              <div className="text-6xl text-white/20">"</div>
              <div className="flex-1">
                <p className="text-xl md:text-2xl leading-relaxed mb-6 font-medium">
                  QubeAI transformed how our team accesses and uses data. What
                  used to take days now happens in minutes. It's like having a
                  data scientist embedded in every department.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
                    SK
                  </div>
                  <div>
                    <div className="font-bold text-lg">Sarah Kim</div>
                    <div className="text-white/80 text-sm">
                      VP of Operations, TechCorp Global
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="pb-10 bg-gray-50">
      <div className="container px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="rounded-[2.5rem] p-12 text-center relative overflow-hidden bg-[#8C5FF5]"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-600/30 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to transform your workflow?
            </h2>
            <p className="text-indigo-100 text-xl mb-10 max-w-2xl mx-auto">
              Join the enterprises already using QubeAI to make smarter, faster
              decisions.
            </p>
            <button className="bg-white text-[#8C5FF5] font-bold text-lg px-8 py-4 rounded-xl shadow-2xl hover:bg-gray-50 transition-colors">
              Book a Demo Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <AuroraHero />
      <IntegrationStrip />
      <SolutionSection />
      <ProblemSection />
      <FeaturesGrid />
      <PlatformArchitecture />
      <RealWorldApplication />
      <JourneySection />
      <ROISection />
      <CallToAction />
    </>
  );
}
