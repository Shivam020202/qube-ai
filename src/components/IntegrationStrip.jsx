import React from "react";
import { motion } from "framer-motion";
import {
  SiSlack,
  SiJira,
  SiSalesforce,
  SiHubspot,
  SiGithub,
  SiNotion,
  SiGooglecloud,
} from "react-icons/si";

export const IntegrationStrip = () => {
  const tools = [
    { icon: SiSlack, name: "Slack" },
    { icon: SiJira, name: "Jira" },
    { icon: SiSalesforce, name: "Salesforce" },
    { icon: SiHubspot, name: "HubSpot" },
    { icon: SiGithub, name: "GitHub" },
    { icon: SiNotion, name: "Notion" },
    { icon: SiGooglecloud, name: "Google Cloud" },
  ];

  return (
    <div className="relative z-20 -mt-16   mx-auto">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="glass-card  bg-white/20 backdrop-blur-xl border border-purple-600 shadow-[0_20px_40px_rgba(0,0,0,0.05)] py-4 px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
      >
        <div className="text-sm font-semibold text-gray-400 whitespace-nowrap uppercase tracking-wider">
          Trusted Integrations
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 w-full">
          {tools.map((App, idx) => (
            <div
              key={idx}
              className="group relative flex items-center justify-center p-2"
            >
              <App.icon className="text-gray-400 text-2xl group-hover:text-[#8C5FF5] transition-colors duration-300 transform group-hover:scale-110" />
              <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-medium text-gray-500 bg-white border border-gray-100 px-2 py-1 rounded shadow-sm">
                {App.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
