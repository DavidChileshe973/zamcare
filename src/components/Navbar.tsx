import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Show Login button ONLY on root (landing) page "/"
  const showLoginButton = location.pathname === "/";

  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">Zamcare</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link to="/children" className="hover:text-blue-600">
          Children
        </Link>
        <Link to="/volunteer" className="hover:text-blue-600">
          Volunteer
        </Link>
        <Link to="/stories" className="hover:text-blue-600">
          Stories
        </Link>
        <Link to="/donate" className="hover:text-blue-600">
          Donate
        </Link>
        {showLoginButton && (
          <Link
            to="/auth"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:text-blue-700"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
