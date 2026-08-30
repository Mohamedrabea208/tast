import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">

          <span className="hero-badge">
            🎓 طريقك نحو التفوق
          </span>

          <h1>
            تعلّم بذكاء
            <br />
            <span>وحقق أحلامك</span>
          </h1>

          <p>
            منصة تعليمية تساعدك على فهم دروسك، تطوير مهاراتك،
            والاستعداد للاختبارات بطريقة سهلة وممتعة.
          </p>

          <div className="hero-buttons">
            <Link to="/stages" className="primary-btn">
              ابدأ التعلم الآن
            </Link>

            <Link to="/courses" className="secondary-btn">
              استكشف المواد
            </Link>
          </div>

        </div>

        <div className="hero-image">
          <div className="hero-card">
            <div className="student-icon">👨‍🎓</div>

            <h3>ابدأ رحلتك التعليمية</h3>

            <p>
              تعلّم، اختبر نفسك، وحقق أفضل النتائج
            </p>

            <div className="progress-box">
              <span>تقدمك الدراسي</span>
              <strong>85%</strong>
            </div>

            <div className="progress-bar">
              <span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">

        <div className="section-title">
          <span>لماذا نحو التفوق؟</span>
          <h2>كل ما تحتاجه لتنجح</h2>
          <p>
            أدوات تعليمية مصممة لمساعدتك على التعلم بشكل أفضل
          </p>
        </div>

        <div className="features-grid">

          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>دروس متكاملة</h3>
            <p>
              محتوى تعليمي منظم يساعدك على فهم المنهج بسهولة.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>اختبارات تفاعلية</h3>
            <p>
              اختبر معلوماتك وتعرّف على مستواك بعد كل درس.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>تابع تقدمك</h3>
            <p>
              تابع مستواك الدراسي واعرف نقاط قوتك وما تحتاج إلى تطويره.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>حقق هدفك</h3>
            <p>
              خطط لمستقبلك وواصل التعلم حتى تصل إلى التفوق.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div>
          <h2>جاهز تبدأ رحلتك نحو التفوق؟</h2>
          <p>
            انضم إلينا وابدأ التعلم بطريقة مختلفة.
          </p>
        </div>

        <Link to="/register" className="cta-button">
          إنشاء حساب مجانًا
        </Link>
      </section>

    </main>
  );
}

export default Home;
