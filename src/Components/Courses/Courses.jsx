import { Link, useSearchParams } from "react-router-dom";
import "./Courses.css";

function Courses() {
  const [searchParams] = useSearchParams();

  const stage = searchParams.get("stage");

  const stages = {
    1: "المرحلة الابتدائية",
    2: "المرحلة الإعدادية",
    3: "المرحلة الثانوية",
  };

  const stageName = stages[stage] || "جميع المراحل";

  const courses = [
    {
      id: 1,
      icon: "📐",
      title: "الرياضيات",
      description: "تعلم الرياضيات بطريقة سهلة وبخطوات واضحة.",
      lessons: 24,
      color: "blue",
    },
    {
      id: 2,
      icon: "🔬",
      title: "العلوم",
      description: "اكتشف عالم العلوم والتجارب بطريقة ممتعة.",
      lessons: 18,
      color: "green",
    },
    {
      id: 3,
      icon: "📖",
      title: "اللغة العربية",
      description: "طوّر مهاراتك في القراءة والكتابة والنحو.",
      lessons: 22,
      color: "orange",
    },
    {
      id: 4,
      icon: "🌍",
      title: "الدراسات الاجتماعية",
      description: "تعرف على التاريخ والجغرافيا بطريقة بسيطة.",
      lessons: 16,
      color: "purple",
    },
    {
      id: 5,
      icon: "🇬🇧",
      title: "اللغة الإنجليزية",
      description: "تعلم اللغة الإنجليزية وطوّر مهارات التواصل.",
      lessons: 20,
      color: "red",
    },
    {
      id: 6,
      icon: "💻",
      title: "الكمبيوتر",
      description: "تعلم أساسيات الحاسب والبرمجة والتكنولوجيا.",
      lessons: 15,
      color: "cyan",
    },
  ];

  return (
    <main className="courses-page">

      {/* Header */}
      <section className="courses-header">

        <span className="courses-badge">
          📚 المواد الدراسية
        </span>

        <h1>المواد التعليمية</h1>

        <p>
          اختر المادة التي تريد تعلمها وابدأ رحلتك التعليمية.
        </p>

        {stage && (
          <div className="selected-stage">
            أنت الآن تتصفح مواد {stageName}
          </div>
        )}

      </section>

      {/* Courses */}
      <section className="courses-container">

        {courses.map((course) => (
          <div
            className={`course-card ${course.color}`}
            key={course.id}
          >

            <div className="course-top">

              <div className="course-icon">
                {course.icon}
              </div>

              <span className="course-count">
                {course.lessons} درس
              </span>

            </div>

            <h2>{course.title}</h2>

            <p>{course.description}</p>

            <div className="course-footer">

              <span>
                🎓 متاح الآن
              </span>

              <Link
                to={`/lessons?course=${course.id}&stage=${stage || ""}`}
                className="course-button"
              >
                عرض الدروس
                <span>←</span>
              </Link>

            </div>

          </div>
        ))}

      </section>

    </main>
  );
}

export default Courses;
