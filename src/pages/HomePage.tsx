// src/pages/HomePage.tsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  UserGroupIcon,
  HeartIcon,
  ChartBarIcon,
  GlobeAltIcon,
  GiftIcon,
  HandRaisedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const featureIcons = {
  "Orphanage Support System": UserGroupIcon,
  "Community Empowerment": GlobeAltIcon,
  "User Engagement": HeartIcon,
  "Transparency and Accountability": ChartBarIcon,
};

const involvementIcons = {
  Donate: GiftIcon,
  Volunteer: HandRaisedIcon,
  "Join Community": UserIcon,
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 font-sans text-gray-900">
      {/* Header */}
      <header className="bg-blue-700 text-white p-5 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-wide drop-shadow-md">
            ZamCare
          </h1>
          <nav>
            <a
              href="#features"
              className="mr-6 text-lg font-medium transition hover:underline hover:text-blue-300"
            >
              Features
            </a>
            <a
              href="#get-involved"
              className="mr-6 text-lg font-medium transition hover:underline hover:text-blue-300"
            >
              Get Involved
            </a>
            <Link
              to="/auth"
              className="bg-white text-blue-700 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-blue-50 transition"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-24 text-center drop-shadow-lg">
        <motion.div
          className="container mx-auto max-w-3xl px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">
            Welcome to ZamCare
          </h2>
          <p className="text-xl mb-10 max-w-xl mx-auto">
            A meaningful project focused on supporting orphaned children and
            empowering communities.
          </p>
          <a
            href="#get-involved"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition"
          >
            Get Started
          </a>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20" id="features">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Orphanage Support System",
                points: [
                  "Child Profiles with background, needs, and progress",
                  "Donation System for money, sponsorship, or goods",
                  "Volunteer Opportunities",
                  "Success Stories",
                ],
              },
              {
                title: "Community Empowerment",
                points: [
                  "Educational Programs (vocational, entrepreneurship)",
                  "Health and Well-being resources",
                  "Job Opportunities",
                ],
              },
              {
                title: "User Engagement",
                points: [
                  "Social Networking",
                  "Events and Campaigns",
                  "Feedback and Testimonials",
                ],
              },
              {
                title: "Transparency and Accountability",
                points: [
                  "Financial Transparency with reports",
                  "Impact Tracking",
                ],
              },
            ].map(({ title, points }, idx) => {
              const Icon = featureIcons[title];
              return (
                <motion.div
                  key={title}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.5 }}
                >
                  <div className="flex items-center mb-4 space-x-3">
                    <Icon className="h-8 w-8 text-blue-600" />
                    <h3 className="text-2xl font-semibold text-blue-700">
                      {title}
                    </h3>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="bg-blue-100 py-20 text-center" id="get-involved">
        <motion.div
          className="container mx-auto max-w-4xl px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-blue-800">
            Get Involved
          </h2>
          <p className="mb-12 text-lg max-w-md mx-auto text-blue-700">
            Support orphaned children and empower communities today!
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            {["Donate", "Volunteer", "Join Community"].map((action) => {
              const Icon = involvementIcons[action];
              const colors = {
                Donate: "bg-blue-700 hover:bg-blue-800",
                Volunteer: "bg-yellow-500 hover:bg-yellow-600",
                "Join Community": "bg-pink-600 hover:bg-pink-700",
              };
              return (
                <Link
                  key={action}
                  to={`/${action.toLowerCase().replace(" ", "")}`}
                  className={`${colors[action]} text-white px-8 py-4 rounded-full font-semibold shadow-lg transition flex items-center gap-2`}
                >
                  <Icon className="h-6 w-6" />
                  {action}
                </Link>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ZamCare. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
