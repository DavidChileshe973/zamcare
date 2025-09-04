import React from "react";
import { motion } from "framer-motion";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Children = () => (
  <>
    <Navbar />
    <motion.main
      className="min-h-screen bg-white p-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center text-blue-700 mb-6 space-x-3">
        <UserGroupIcon className="h-8 w-8" />
        <h1 className="text-4xl font-bold">Children Profiles</h1>
      </div>
      <p className="mb-6 text-gray-700 max-w-3xl">
        Here is a list of children supported by ZamCare. You can view their
        backgrounds, needs, and progress.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((child) => (
          <div
            key={child}
            className="border rounded-lg p-5 shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">Child Name {child}</h2>
            <p className="mb-1 text-gray-600">Age: {8 + child}</p>
            <p className="mb-1 text-gray-600">
              Needs: School supplies, Clothes
            </p>
            <p className="text-sm text-gray-500">
              Making progress with your support!
            </p>
          </div>
        ))}
      </div>
    </motion.main>
    <Footer />
  </>
);

export default Children;
