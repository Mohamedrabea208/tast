import { Link, useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";
import "./LessonDetails.css";

function LessonDetails() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const courseId = searchParams.get("course");
  const stageId = searchParams.get("stage");

  const [completed, setCompleted] = useState(false);

  const lessons = {
    1: {
      title: "مقدمة وتمهيد",
      description: "تعرف في هذا الدرس على أساسيات المادة والمفاهيم المهمة.",
      duration: "15 دقيقة",
      type: "مبتدئ",
    },

    2: {
      title: "المفاهيم الأساسية",
      description: "شرح أهم المفاهيم الأساسية بطريقة سهلة وبسيطة.",
      duration: "20 دقيقة",
      type: "مبتدئ",
    },

    3: {
      title: "التطبيقات والأمثلة",
      description: "تطبيق ما تعلمناه من خلال مجموعة من الأمثلة العملية.",
      duration: "25 دقيقة",
      type: "متوسط",
    },

    4: {
      title: "التدريب وحل الأسئلة",
      description: "تدرب على مجموعة من الأسئلة وتأكد من فهمك للدرس.",
      duration: "30 دقيقة",
      type: "متوسط",
    },

    5: {
      title: "مراجعة شاملة",
      description: "مراجعة أهم النقاط والمعلومات التي تعلمتها.",
      duration: "20 دقيقة",
      type: "مراجعة",
    },

    6: {
      title: "اختبار الدرس",
      description: "اختبر نفسك وتأكد من مدى استيعابك للدرس.",
      duration: "15 دقيقة",
      type: "اختبار",
    },
  };

  const lesson = lessons[id] || lessons[1];
  const lessonNumber = Number(id) || 1;

  const nextLesson =
    lessonNumber < 6 ? lessonNumber + 1 : null;

  return (
    <main className="lesson-details">

      {/* Breadcrumb */}

      <div className="lesson-breadcrumb">
        <Link to="/">الرئيسية</Link>

        <span>←</span>

        <Link to={`/courses?stage=${stageId || ""}`}>
          المواد
        </Link>

        <span>←</span>

        <Link
          to={`/lessons?course=${courseId || ""}&stage=${stageId || ""}`}
        >
          الدروس
        </Link>

        <span>←</span>

        <strong>{lesson.title}</strong>
      </div>

      <div className="lesson-layout">

        {/* المحتوى الأساسي */}

        <div className="lesson-content">

          {/* الفيديو */}

          <div className="lesson-video">

            <div className="video-placeholder">

              <button className="play-button">
                ▶
              </button>

              <h2>الفيديو التعليمي</h2>

              <p>
                شاهد الفيديو وركز مع الشرح
              </p>

            </div>

          </div>

          {/* عنوان الدرس */}

          <div className="lesson-title-box">

            <div className="lesson-labels">
              <span>الدرس {lessonNumber}</span>
              <span>{lesson.type}</span>
            </div>

            <h1>{lesson.title}</h1>

            <p>{lesson.description}</p>

          </div>

          {/* شرح الدرس */}

          <section className="lesson-section">

            <h2>📖 شرح الدرس</h2>

            <p>
              مرحبًا بك في هذا الدرس. في هذا الجزء سنتعرف
              على المعلومات الأساسية بطريقة سهلة ومنظمة.
            </p>

            <p>
              حاول التركيز على الأفكار الرئيسية وفهم الأمثلة
              جيدًا قبل الانتقال إلى الجزء التالي.
            </p>

          </section>

          {/* أهم النقاط */}

          <section className="lesson-section important">

            <h2>💡 أهم النقاط</h2>

            <ul>
              <li>فهم المفاهيم الأساسية للدرس.</li>
              <li>التركيز على الأمثلة والتطبيقات.</li>
              <li>مراجعة المعلومات بعد انتهاء الدرس.</li>
              <li>حل الأسئلة للتأكد من فهمك.</li>
            </ul>

          </section>

          {/* إكمال الدرس */}

          <section
            className={`complete-box ${
              completed ? "completed" : ""
            }`}
          >

            <div>
              <h3>
                {completed
                  ? "🎉 أحسنت! أكملت الدرس"
                  : "هل انتهيت من الدرس؟"}
              </h3>

              <p>
                {completed
                  ? "يمكنك الآن الانتقال إلى الدرس التالي."
                  : "اضغط على الزر لتسجيل الدرس كمكتمل."}
              </p>
            </div>

            <button
              className="complete-button"
              onClick={() => setCompleted(!completed)}
            >
              {completed
                ? "تم الإكمال ✓"
                : "إكمال الدرس"}
            </button>

          </section>

          {/* التنقل */}

          <div className="lesson-navigation">

            <Link
              to={`/lessons?course=${courseId || ""}&stage=${stageId || ""}`}
              className="back-button"
            >
              ← قائمة الدروس
            </Link>

            {nextLesson && completed && (
              <Link
                to={`/lesson/${nextLesson}?course=${courseId || ""}&stage=${stageId || ""}`}
                className="next-button"
              >
                الدرس التالي →
              </Link>
            )}

          </div>

        </div>

        {/* القائمة الجانبية */}

        <aside className="lesson-sidebar">

          <h3>📚 محتوى المادة</h3>

          <div className="sidebar-progress">

            <div>
              <span>التقدم</span>
              <strong>
                {completed ? "17%" : "0%"}
              </strong>
            </div>

            <div className="progress-bar">
              <span
                style={{
                  width: completed ? "17%" : "0%",
                }}
              />
            </div>

          </div>

          <div className="sidebar-lessons">

            {[1, 2, 3, 4, 5, 6].map((number) => (

              <Link
                key={number}
                to={`/lesson/${number}?course=${courseId || ""}&stage=${stageId || ""}`}
                className={`sidebar-lesson ${
                  number === lessonNumber ? "active" : ""
                }`}
              >

                <span className="lesson-number">
                  {String(number).padStart(2, "0")}
                </span>

                <div>
                  <strong>
                    {lessons[number].title}
                  </strong>

                  <small>
                    {lessons[number].duration}
                  </small>
                </div>

              </Link>

            ))}

          </div>

        </aside>

      </div>

    </main>
  );
}

export default LessonDetails;
