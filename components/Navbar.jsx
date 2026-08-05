"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("medibookTheme");
    document.body.classList.toggle("dark-theme", savedTheme === "dark");
  }, []);

  function handleThemeToggle() {
    const nextTheme = !document.body.classList.contains("dark-theme");

    document.body.classList.toggle("dark-theme", nextTheme);
    localStorage.setItem("medibookTheme", nextTheme ? "dark" : "light");
  }

  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        <span className="logo-mark">M</span>
        MediBook
      </Link>

      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/doctors">Doctors</Link>
        <Link href="/appointments">Appointments</Link>
        <Link href="/favorites">Favorites</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="auth-links">
        <button
          className="theme-toggle"
          type="button"
          onClick={handleThemeToggle}
          aria-label="Toggle dark theme"
        >
          Theme
        </button>
        <Link href="/login">Login</Link>
        <Link href="/register" className="nav-cta">Register</Link>
      </div>
    </nav>
  );
}
