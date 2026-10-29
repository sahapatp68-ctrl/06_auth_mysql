"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const [user, setUser] = useState(null);

  // โหลดข้อมูลผู้ใช้ที่ Login อยู่จาก API
  useEffect(() => {
    fetch("/api/me")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  // ให้เซิร์ฟเวอร์ลบ cookie แล้วไปหน้า login
  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    window.location.href = "/login"; // โหลดหน้าใหม่ ล้างหน้า Dashboard ที่ cache ไว้
  };

  if (!user) {
    return (
      <div className="auth-box loading-box">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="auth-box">
      <div className="auth-header">
        <span className="badge">Protected Area</span>
        <h1>Dashboard</h1>
        <p className="subtitle">Welcome, {user.fullname}</p>
      </div>

      <div className="profile-card">
        <div className="profile-row">
          <span className="profile-label">User ID</span>
          <span className="profile-value">#{user.id}</span>
        </div>
        <div className="profile-row">
          <span className="profile-label">Full Name</span>
          <span className="profile-value">{user.fullname}</span>
        </div>
        <div className="profile-row">
          <span className="profile-label">Email</span>
          <span className="profile-value">{user.email}</span>
        </div>
      </div>

      <button onClick={handleLogout} className="btn-logout">
        Logout
      </button>

      <p className="auth-footer">
        <Link href="/">← กลับไปหน้าแรก</Link>
      </p>
    </div>
  );
}
