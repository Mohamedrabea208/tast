import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    stage: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.stage
    ) {
      setError("من فضلك أكمل جميع البيانات");
      return;
    }

    if (formData.password.length < 6) {
      setError("كلمة المرور يجب أن تكون 6 أحرف على الأقل");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("كلمتا المرور غير متطابقتين");
      return;
    }

    const oldUsers =
      JSON.parse(localStorage.getItem("students")) || [];

    const userExists = oldUsers.some(
      (user) => user.email === formData.email
    );

    if (userExists) {
      setError("هذا البريد الإلكتروني مسجل بالفعل");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      password: formData.password,
      stage: formData.stage,
      completedLessons: [],
      examResults: [],
    };

    localStorage.setItem(
      "students",
      JSON.stringify([...oldUsers, newUser])
    );

    localStorage.setItem(
      "currentStudent",
      JSON.stringify(newUser)
    );

    navigate("/");
  };

  return (
    <main className="register-page">

      <div className="register-card">

        <div className="register-logo">
          🎓
        </div>

        <h1>إنشاء حساب</h1>

        <p className="register-subtitle">
          أنشئ حسابك وابدأ رحلة التفوق
        </p>

        {error && (
          <div className="register-error">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>اسم الطالب</label>

            <input
              type="text"
              name="name"
              placeholder="اكتب اسمك"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>البريد الإلكتروني</label>

            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>المرحلة الدراسية</label>

            <select
              name="stage"
              value={formData.stage}
              onChange={handleChange}
            >
              <option value="">
                اختر المرحلة الدراسية
              </option>

              <option value="primary">
                المرحلة الابتدائية
              </option>

              <option value="preparatory">
                المرحلة الإعدادية
              </option>

              <option value="secondary">
                المرحلة الثانوية
              </option>
            </select>
          </div>

          <div className="form-group">
            <label>كلمة المرور</label>

            <input
              type="password"
              name="password"
              placeholder="أدخل كلمة المرور"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>تأكيد كلمة المرور</label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="أعد كتابة كلمة المرور"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="register-submit"
          >
            إنشاء الحساب
          </button>

        </form>

        <div className="register-login">
          لديك حساب بالفعل؟

          <Link to="/login">
            تسجيل الدخول
          </Link>
        </div>

      </div>

    </main>
  );
}

export default Register;
