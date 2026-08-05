"use client";

import Link from "next/link";

export default function Navbar() {
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
        <Link href="/login">Login</Link>
        <Link href="/register" className="nav-cta">Register</Link>
      </div>
    </nav>
  );
}
