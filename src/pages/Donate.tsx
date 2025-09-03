import React from "react";
import { motion } from "framer-motion";
import { GiftIcon } from "@heroicons/react/24/outline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Donate = () => (
  <>
    <Navbar />
    {/* animated hero/section */}
    <main className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-bl from-blue-50 via-white to-blue-100 px-4 py-10">
      <motion.section
        className="w-full max-w-2xl mx-auto flex flex-col items-center bg-white rounded-2xl shadow-xl py-12 px-8 mt-8"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
      >
        <div className="flex items-center mb-5">
          <GiftIcon className="h-10 w-10 text-blue-600 mr-3 drop-shadow" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 tracking-tight">
            Make a Donation
          </h1>
        </div>
        <p className="mb-10 text-gray-600 leading-relaxed text-center">
          Give hope to orphaned children. Your kind support helps fund
          education, food, healthcare, and brighter futures.
        </p>
        {/* animated donation form */}
        <motion.form
          className="w-full bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-inner p-6 "
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <label className="block mb-2 font-semibold text-blue-800">
            Donation Amount (USD)
          </label>
          <input
            type="number"
            min="1"
            className="block w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none transition mb-6 text-blue-900"
            placeholder="Enter amount"
          />
          <button className="w-full py-3 bg-blue-700 rounded-lg text-white text-lg font-bold shadow hover:bg-blue-800 transition">
            Donate Now
          </button>
        </motion.form>
      </motion.section>
    </main>
    <Footer />
  </>
);

export default Donate;
