"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const initialFormData = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const router = useRouter();

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (error[name]) {
      setError((prevError) => ({
        ...prevError,
        [name]: "",
      }));
    }

    setMessage("");
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    setLoading(true);
    setError({});

    setTimeout(() => {
      setLoading(false);
      setMessage("Login successful!");

      router.push("/doctors");
    }, 1000);
  }

  return (
    <div className="auth-card">
      <div className="auth-heading">
        <p className="eyebrow">Welcome back</p>
        <h1>Login</h1>
        <p>Access your profile and continue managing your appointments.</p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <label className="field-group" htmlFor="email">
          <span>Email</span>

          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          {error.email && <small className="error-message">{error.email}</small>}
        </label>

        <label className="field-group" htmlFor="password">
          <span>Password</span>

          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />

          {error.password && (
            <small className="error-message">{error.password}</small>
          )}
        </label>

        <button className="auth-button" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        {message && <p className="form-message">{message}</p>}
      </form>

      <p className="auth-switch">
        Don&apos;t have an account? <Link href="/register">Register</Link>
      </p>
    </div>
  );
}
