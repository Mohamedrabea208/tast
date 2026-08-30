import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navber.css";

function Navber() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🎓</span>

          <div className="logo-text">
            <h2>نحو التفوق</h2>
            <span>منصة تعليمية</span>
          </div>
        </Link>

        {/* Mobile Menu */}
        <button
          className="menu-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Links */}
        <nav className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>
            الرئيسية
          </Link>

          <Link to="/stages" onClick={() => setIsOpen(false)}>
            المراحل الدراسية
          </Link>

          <Link to="/courses" onClick={() => setIsOpen(false)}>
            المواد
          </Link>

          <Link to="/lessons" onClick={() => setIsOpen(false)}>
            الدروس
          </Link>

          <Link to="/exams" onClick={() => setIsOpen(false)}>
            الاختبارات
          </Link>
        </nav>

        {/* Buttons */}
        <div className="navbar-buttons">
          <Link to="/login" className="login-button">
            تسجيل الدخول
          </Link>

          <Link to="/register" className="register-button">
            إنشاء حساب
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Navber;