// src/pages/Auth.jsx
import { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const formVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
        }}
      />
      {/* Overlay with glassmorphism blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/10 backdrop-blur-lg z-0"></div>

      {/* Form container with glass effect */}
      <div className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl px-8 py-10 md:py-14 border border-blue-400/30 bg-white/30 backdrop-blur-[20px]">
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="login"
              variants={formVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
            >
              <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-900 drop-shadow-lg">
                Welcome Back
              </h2>
              <form className="space-y-6">
                <div className="flex items-center bg-white/70 border border-blue-300 rounded-lg px-3 py-3 focus-within:ring-4 focus-within:ring-blue-400 transition">
                  <FaEnvelope className="text-blue-600 mr-3 text-xl" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent text-blue-900 placeholder-blue-500 outline-none"
                    required
                  />
                </div>
                <div className="flex items-center bg-white/70 border border-blue-300 rounded-lg px-3 py-3 focus-within:ring-4 focus-within:ring-blue-400 transition">
                  <FaLock className="text-blue-600 mr-3 text-xl" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-transparent text-blue-900 placeholder-blue-500 outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white font-extrabold shadow-lg hover:scale-105 hover:from-blue-700 hover:to-blue-900 transition transform duration-300"
                >
                  Login
                </button>
                <p className="text-center text-blue-900 mt-4">
                  Don't have an account?{" "}
                  <button
                    onClick={() => setIsLogin(false)}
                    className="text-blue-700 hover:underline font-semibold"
                    type="button"
                  >
                    Sign Up
                  </button>
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              variants={formVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
            >
              <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-900 drop-shadow-lg">
                Create Account
              </h2>
              <form className="space-y-6">
                <div className="flex items-center bg-white/70 border border-blue-300 rounded-lg px-3 py-3 focus-within:ring-4 focus-within:ring-blue-400 transition">
                  <FaUser className="text-blue-600 mr-3 text-xl" />
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full bg-transparent text-blue-900 placeholder-blue-500 outline-none"
                    required
                  />
                </div>
                <div className="flex items-center bg-white/70 border border-blue-300 rounded-lg px-3 py-3 focus-within:ring-4 focus-within:ring-blue-400 transition">
                  <FaEnvelope className="text-blue-600 mr-3 text-xl" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent text-blue-900 placeholder-blue-500 outline-none"
                    required
                  />
                </div>
                <div className="flex items-center bg-white/70 border border-blue-300 rounded-lg px-3 py-3 focus-within:ring-4 focus-within:ring-blue-400 transition">
                  <FaLock className="text-blue-600 mr-3 text-xl" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-transparent text-blue-900 placeholder-blue-500 outline-none"
                    required
                  />
                </div>
                <div className="bg-white/70 border border-blue-300 rounded-lg px-3 py-3">
                  <label className="block mb-1 font-semibold text-blue-900">
                    Role
                  </label>
                  <select
                    className="w-full bg-transparent outline-none text-blue-900"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choose your role
                    </option>
                    <option value="donor">Donor</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="admin">Orphanage Admin</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white font-extrabold shadow-lg hover:scale-105 hover:from-blue-700 hover:to-blue-900 transition transform duration-300"
                >
                  Sign Up
                </button>
                <p className="text-center text-blue-900 mt-4">
                  Already have an account?{" "}
                  <button
                    onClick={() => setIsLogin(true)}
                    className="text-blue-700 hover:underline font-semibold"
                    type="button"
                  >
                    Login
                  </button>
                </p>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
