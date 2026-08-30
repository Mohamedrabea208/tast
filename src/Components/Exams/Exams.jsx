import { useState } from "react";
import { Link } from "react-router-dom";
import "./Exams.css";

function Exams() {
  const questions = [
    {
      question: "ما هو ناتج 5 + 3 ؟",
      answers: ["6", "7", "8", "9"],
      correct: 2,
    },
    {
      question: "ما هو ناتج 10 - 4 ؟",
      answers: ["5", "6", "7", "8"],
      correct: 1,
    },
    {
      question: "ما هو ناتج 3 × 4 ؟",
      answers: ["7", "10", "12", "14"],
      correct: 2,
    },
    {
      question: "ما هو نصف العدد 20 ؟",
      answers: ["5", "10", "15", "20"],
      correct: 1,
    },
    {
      question: "ما هو العدد الأكبر؟",
      answers: ["12", "8", "15", "10"],
      correct: 2,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[currentQuestion];

  const chooseAnswer = (index) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);

    if (index === question.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setFinished(true);
    }
  };

  const restartExam = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  };

  const percentage = Math.round(
    (score / questions.length) * 100
  );

  const getResult = () => {
    if (percentage >= 90) return "ممتاز جدًا 🎉";
    if (percentage >= 75) return "ممتاز 👏";
    if (percentage >= 60) return "جيد جدًا 👍";
    if (percentage >= 50) return "جيد 🙂";
    return "يحتاج إلى مراجعة 📚";
  };

  if (finished) {
    return (
      <main className="exam-page">

        <div className="result-card">

          <div className="result-icon">
            {percentage >= 50 ? "🎉" : "📚"}
          </div>

          <h1>انتهى الاختبار</h1>

          <p className="result-text">
            أحسنت! لقد أكملت الاختبار بنجاح.
          </p>

          <div className="score-circle">
            <strong>{percentage}%</strong>
            <span>درجتك</span>
          </div>

          <h2>{getResult()}</h2>

          <p className="score-details">
            حصلت على {score} من {questions.length} إجابات صحيحة
          </p>

          <div className="result-buttons">

            <button
              onClick={restartExam}
              className="restart-button"
            >
              إعادة الاختبار
            </button>

            <Link
              to="/"
              className="home-button"
            >
              العودة للرئيسية
            </Link>

          </div>

        </div>

      </main>
    );
  }

  return (
    <main className="exam-page">

      <div className="exam-container">

        {/* Header */}

        <div className="exam-header">

          <div>
            <span>📝 اختبار قصير</span>

            <h1>
              اختبار الرياضيات
            </h1>
          </div>

          <div className="question-counter">
            السؤال {currentQuestion + 1} من {questions.length}
          </div>

        </div>

        {/* Progress */}

        <div className="exam-progress">

          <span
            style={{
              width: `${
                ((currentQuestion + 1) / questions.length) * 100
              }%`,
            }}
          />

        </div>

        {/* Question */}

        <div className="question-card">

          <div className="question-number">
            السؤال {currentQuestion + 1}
          </div>

          <h2>
            {question.question}
          </h2>

          <div className="answers">

            {question.answers.map((answer, index) => {

              let answerClass = "";

              if (selectedAnswer !== null) {
                if (index === question.correct) {
                  answerClass = "correct";
                } else if (index === selectedAnswer) {
                  answerClass = "wrong";
                }
              }

              return (
                <button
                  key={index}
                  className={`answer ${answerClass}`}
                  onClick={() => chooseAnswer(index)}
                >

                  <span className="answer-letter">
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span>
                    {answer}
                  </span>

                  {selectedAnswer !== null &&
                    index === question.correct && (
                      <b>✓</b>
                    )}

                  {selectedAnswer !== null &&
                    index === selectedAnswer &&
                    index !== question.correct && (
                      <b>✕</b>
                    )}

                </button>
              );
            })}

          </div>

          {selectedAnswer !== null && (
            <div
              className={
                selectedAnswer === question.correct
                  ? "answer-message success"
                  : "answer-message error"
              }
            >
              {selectedAnswer === question.correct
                ? "إجابة صحيحة! أحسنت 👏"
                : `الإجابة الصحيحة هي: ${
                    question.answers[question.correct]
                  }`}
            </div>
          )}

          <button
            className="next-button"
            onClick={nextQuestion}
            disabled={selectedAnswer === null}
          >
            {currentQuestion === questions.length - 1
              ? "إنهاء الاختبار"
              : "السؤال التالي →"}
          </button>

        </div>

      </div>

    </main>
  );
}

export default Exams;
