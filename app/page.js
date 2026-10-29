import Link from "next/link";

// หน้าแรก: แสดงข้อมูลนักศึกษาและลิงก์ไปยังทุกหน้าในโปรเจกต์
export default function Home() {
  return (
    <div className="auth-box">
      <div className="auth-header">
        <span className="badge">DIT205 • Next.js + MySQL</span>
        <h1>Auth Demo</h1>
        <p className="subtitle">
          ระบบสมัครสมาชิก ยืนยันตัวตนด้วย JWT Cookie และป้องกันหน้าสมาชิกด้วย Proxy
        </p>
      </div>

      <div className="student-card">
        <div className="student-label">ผู้จัดทำ (Student Information)</div>
        <p className="student-name">สหภัทร ไพบูลย์ธนธร</p>
        <span className="student-id">รหัสนักศึกษา: 6804159</span>
      </div>

      <ul className="menu-list">
        <li>
          <Link href="/register" className="menu-link">
            <div>
              <span className="menu-link-title">Register — สมัครสมาชิก</span>
              <span className="menu-link-desc">สร้างบัญชีผู้ใช้ใหม่และเข้ารหัสรหัสผ่านด้วย bcrypt</span>
            </div>
            <span className="menu-arrow">→</span>
          </Link>
        </li>
        <li>
          <Link href="/login" className="menu-link">
            <div>
              <span className="menu-link-title">Login — เข้าสู่ระบบ</span>
              <span className="menu-link-desc">ตรวจสอบอีเมลและรหัสผ่านเพื่อรับ JWT Cookie</span>
            </div>
            <span className="menu-arrow">→</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="menu-link">
            <div>
              <span className="menu-link-title">Dashboard (Members Only)</span>
              <span className="menu-link-desc">หน้าเฉพาะสมาชิกที่เข้าสู่ระบบแล้วเท่านั้น</span>
            </div>
            <span className="menu-arrow">→</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
