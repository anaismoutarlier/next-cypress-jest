"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const fields = [
  {
    name: "username",
    placeholder: "Username",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email address",
  },
  {
    name: "password",
    type: "password",
    placeholder: "New password",
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm your password",
  },
];
export default function Login() {
  const [formData, setFormData] = useState({});
  const submitDisabled = !fields.every(field => Boolean(formData[field.name]));
  const router = useRouter();

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    if (submitDisabled) return;

    if (formData.password !== formData.confirmPassword)
      return router.push("/login/failure");

    router.push("/login/success");
  };
  return (
    <main id="main" className={styles.main}>
      <h1>Login</h1>
      <form id="login" onSubmit={handleSubmit}>
        {fields.map(field => (
          <input key={field.name} {...field} onChange={handleChange} />
        ))}
        <button type="submit" disabled={submitDisabled}>
          Submit
        </button>
      </form>
    </main>
  );
}
