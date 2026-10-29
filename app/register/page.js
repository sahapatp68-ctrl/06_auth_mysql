"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // ส่งข้อมูลฟอร์มไปยัง API หากสำเร็จไปหน้า login
  const handleRegister = async (event) => {
    event.preventDefault();
    setMessage("");
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullname, email, password }),
    });
    const data = await response.json();

    if (response.ok) {
      router.push("/login");
    } else {
      setMessage(data.message); // เช่น "Email already registered"
    }
  };

  return (
    <div className="auth-box">
      <div className="auth-header">
        <span className="badge">Create Account</span>
        <h1>Register</h1>
        <p className="subtitle">กรอกข้อมูลด้านล่างเพื่อสร้างบัญชีสมาชิกใหม่</p>
      </div>

      <form onSubmit={handleRegister}>
        <div className="field-group">
          <label htmlFor="fullname">ชื่อ-นามสกุล (Full name)</label>
          <input
            id="fullname"
            value={fullname}
            onChange={(event) => setFullname(event.target.value)}
            placeholder="Full name"
            required
          />
        </div>

        <div className="field-group">
          <label htmlFor="email">อีเมล (Email)</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            required
          />
        </div>

        <div className="field-group">
          <label htmlFor="password">รหัสผ่าน (อย่างน้อย 6 ตัวอักษร)</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            minLength={6}
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>

      {message && <p className="error">{message}</p>}

      <p className="auth-footer">
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </div>
  );
}
