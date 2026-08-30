import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("من فضلك أدخل البريد الإلكتروني وكلمة المرور");
      return;
    }

    const students =
      JSON.parse(localStorage.getItem("students")) || [];

    const student = students.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (!student) {
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
      return;
    }

    localStorage.setItem(
      "currentStudent",
      JSON.stringify(student)
    );

    navigate("/");
  };

  return (
    <main className="login-page">

      <div className="login-card">

        <div className="login-logo">
          🎓
        </div>

        <h1>تسجيل الدخول</h1>

        <p className="login-subtitle">
          أهلاً بك من جديد في منصة نحو التفوق
        </p>

        {error && (
          <div className="login-error">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="login-group">
            <label>البريد الإلكتروني</label>

            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="login-group">
            <label>كلمة المرور</label>

            <input
              type="password"
              placeholder="أدخل كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="login-submit"
          >
            تسجيل الدخول
          </button>

        </form>

        <div className="login-register">
          ليس لديك حساب؟

          <Link to="/register">
            إنشاء حساب جديد
          </Link>
        </div>

      </div>

    </main>
  );
}

export default Login;
