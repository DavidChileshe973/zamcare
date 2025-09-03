import React from "react";
import { motion } from "framer-motion";
import { HandRaisedIcon } from "@heroicons/react/24/outline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Volunteer = () => (
  <>
    <Navbar />
    <motion.main
      className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center text-green-700 mb-6 space-x-3">
        <HandRaisedIcon className="h-8 w-8" />
        <h1 className="text-4xl font-bold">Volunteer with ZamCare</h1>
      </div>
      <p className="mb-8 max-w-lg text-center text-gray-700">
        Join our volunteer team and help make a difference in the lives of
        children and communities.
      </p>
      <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 rounded border border-gray-300 focus:outline-green-500"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 rounded border border-gray-300 focus:outline-green-500"
          required
        />
        <textarea
          placeholder="Tell us why you want to volunteer"
          className="w-full p-3 rounded border border-gray-300 focus:outline-green-500"
          rows={4}
          required
        />
        <button className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-800 transition font-semibold">
          Sign Up to Volunteer
        </button>
      </form>
    </motion.main>
    <Footer />
  </>
);

export default Volunteer;
