import { Link, useSearchParams } from "react-router-dom";
import "./Lessons.css";

function Lessons() {
  const [searchParams] = useSearchParams();

  const courseId = searchParams.get("course");
  const stageId = searchParams.get("stage");

  const courses = {
    1: {
      name: "الرياضيات",
      icon: "📐",
      color: "blue",
    },

    2: {
      name: "العلوم",
      icon: "🔬",
      color: "green",
    },

    3: {
      name: "اللغة العربية",
      icon: "📖",
      color: "orange",
    },

    4: {
      name: "الدراسات الاجتماعية",
      icon: "🌍",
      color: "purple",
    },

    5: {
      name: "اللغة الإنجليزية",
      icon: "🇬🇧",
      color: "red",
    },

    6: {
      name: "الكمبيوتر",
      icon: "💻",
      color: "cyan",
    },
  };

  const course = courses[courseId] || courses[1];

  const lessons = [
    {
      id: 1,
      title: "مقدمة وتمهيد",
      description: "تعرف على أساسيات المادة والمفاهيم المهمة.",
      duration: "15 دقيقة",
      type: "مبتدئ",
    },

    {
      id: 2,
      title: "المفاهيم الأساسية",
      description: "شرح أهم المفاهيم التي تحتاجها لفهم المادة.",
      duration: "20 دقيقة",
      type: "مبتدئ",
    },

    {
      id: 3,
      title: "التطبيقات والأمثلة",
      description: "تعلم من خلال مجموعة من الأمثلة والتطبيقات.",
      duration: "25 دقيقة",
      type: "متوسط",
    },

    {
      id: 4,
      title: "التدريب وحل الأسئلة",
      description: "تدرب على الأسئلة المختلفة واختبر فهمك.",
      duration: "30 دقيقة",
      type: "متوسط",
    },

    {
      id: 5,
      title: "مراجعة شاملة",
      description: "راجع أهم النقاط والمعلومات التي تعلمتها.",
      duration: "20 دقيقة",
      type: "مراجعة",
    },

    {
      id: 6,
      title: "اختبار الدرس",
      description: "اختبر نفسك وتأكد من مدى استيعابك للدرس.",
      duration: "15 دقيقة",
      type: "اختبار",
    },
  ];

  return (
    <main className="lessons-page">

      {/* Header */}

      <section className="lessons-header">

        <div className={`lessons-icon ${course.color}`}>
          {course.icon}
        </div>

        <div className="lessons-heading">

          <span>📚 الدروس التعليمية</span>

          <h1>{course.name}</h1>

          <p>
            اختر أحد الدروس وابدأ التعلم الآن.
          </p>

        </div>

      </section>

      {/* Progress */}

      <section className="lessons-progress">

        <div className="progress-info">

          <div>
            <strong>تقدمك في المادة</strong>
            <span>0 من {lessons.length} دروس</span>
          </div>

          <b>0%</b>

        </div>

        <div className="lessons-progress-bar">
          <span></span>
        </div>

      </section>

      {/* Lessons */}

      <section className="lessons-list">

        <div className="lessons-title">

          <h2>قائمة الدروس</h2>

          <span>
            {lessons.length} دروس
          </span>

        </div>

        {lessons.map((lesson, index) => (

          <div className="lesson-card" key={lesson.id}>

            <div className="lesson-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="lesson-content">

              <div className="lesson-top">

                <h3>{lesson.title}</h3>

                <span className={`lesson-type ${lesson.type === "اختبار" ? "exam" : ""}`}>
                  {lesson.type}
                </span>

              </div>

              <p>
                {lesson.description}
              </p>

              <div className="lesson-meta">

                <span>⏱ {lesson.duration}</span>

                <span>🎓 درس تعليمي</span>

              </div>

            </div>

            <Link
              to={`/lesson/${lesson.id}?course=${courseId}&stage=${stageId || ""}`}
              className="lesson-button"
            >
              ابدأ الدرس
              <span>←</span>
            </Link>

          </div>

        ))}

      </section>

    </main>
  );
}

export default Lessons;
