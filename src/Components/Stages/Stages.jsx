import { Link } from "react-router-dom";
import "./Stages.css";

function Stages() {
  const stages = [
    {
      id: 1,
      icon: "🌱",
      title: "المرحلة الابتدائية",
      description:
        "ابدأ رحلتك التعليمية وتعلم أساسيات المواد بطريقة سهلة وممتعة.",
      color: "green",
    },
    {
      id: 2,
      icon: "📚",
      title: "المرحلة الإعدادية",
      description:
        "طوّر مهاراتك وافهم دروسك واستعد للاختبارات بثقة.",
      color: "blue",
    },
    {
      id: 3,
      icon: "🎓",
      title: "المرحلة الثانوية",
      description:
        "استعد للثانوية والامتحانات النهائية وحقق أفضل النتائج.",
      color: "purple",
    },
  ];

  return (
    <main className="stages-page">

      {/* Header */}
      <section className="stages-header">
        <span>📖 رحلتك التعليمية</span>

        <h1>اختر مرحلتك الدراسية</h1>

        <p>
          اختر المرحلة الدراسية الخاصة بك للوصول إلى المواد
          والدروس والاختبارات المناسبة لك.
        </p>
      </section>

      {/* Stages */}
      <section className="stages-container">
        {stages.map((stage) => (
          <div
            className={`stage-card ${stage.color}`}
            key={stage.id}
          >
            <div className="stage-icon">
              {stage.icon}
            </div>

            <h2>{stage.title}</h2>

            <p>{stage.description}</p>

            <Link
              to={`/courses?stage=${stage.id}`}
              className="stage-button"
            >
              استكشف المواد
              <span>←</span>
            </Link>
          </div>
        ))}
      </section>

      {/* Bottom */}
      <section className="stages-info">
        <div className="info-icon">💡</div>

        <div>
          <h3>نصيحة للطالب</h3>
          <p className="d-block">
            اختر مرحلتك الدراسية وابدأ بتعلم المواد خطوة بخطوة.
            الاستمرار هو مفتاح التفوق!
          </p>
        </div>
      </section>

    </main>
  );
}

export default Stages;
