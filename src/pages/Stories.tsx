import React from "react";
import { motion } from "framer-motion";
import { HeartIcon } from "@heroicons/react/24/outline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Stories = () => (
  <>
    <Navbar />
    <motion.main
      className="min-h-screen bg-gray-50 p-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center text-green-700 mb-6 space-x-3">
        <HeartIcon className="h-8 w-8" />
        <h1 className="text-4xl font-bold">Success Stories</h1>
      </div>
      <p className="mb-6 text-gray-700 max-w-4xl">
        Read inspiring stories of children and communities positively impacted
        by ZamCare.
      </p>
      <div className="space-y-8 max-w-3xl mx-auto">
        {[1, 2].map((story) => (
          <article key={story} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Story Title {story}</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              pretium maximus nulla at congue.
            </p>
            <p className="mt-2 text-sm text-gray-500">— By Community Member</p>
          </article>
        ))}
      </div>
    </motion.main>
    <Footer />
  </>
);

export default Stories;
