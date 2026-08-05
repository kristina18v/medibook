"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const router = useRouter();

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: "",
      }));
    }

    setMessage("");
  }

  function validateForm() {
    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Внеси име.";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Внеси email.";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Невалиден email.";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Лозинката мора да има најмалку 6 карактери.";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Лозинките не се совпаѓаат.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const user = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    localStorage.setItem("medibookUser", JSON.stringify(user));

    setMessage("Регистрацијата е успешна!");

    setFormData(initialFormData);

    setTimeout(() => {
      router.push("/login");
    }, 1500);
  }

  return (
    <div className="auth-card">
      <div className="auth-heading">
        <p className="eyebrow">Create account</p>
        <h1>Register</h1>
        <p>Create an account to book appointments online.</p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <label className="field-group">
          <span>Full Name</span>

          <input
            type="text"
            name="name"
            placeholder="John Smith"
            value={formData.name}
            onChange={handleChange}
          />

          {errors.name && (
            <small className="error-message">{errors.name}</small>
          )}
        </label>

        <label className="field-group">
          <span>Email</span>

          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && (
            <small className="error-message">{errors.email}</small>
          )}
        </label>

        <label className="field-group">
          <span>Password</span>

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />

          {errors.password && (
            <small className="error-message">{errors.password}</small>
          )}
        </label>

        <label className="field-group">
          <span>Confirm Password</span>

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          {errors.confirmPassword && (
            <small className="error-message">
              {errors.confirmPassword}
            </small>
          )}
        </label>

        {message && <p className="form-message">{message}</p>}

        <button className="auth-button" type="submit">
          Register
        </button>
      </form>

      <p className="auth-switch">
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </div>
  );
}