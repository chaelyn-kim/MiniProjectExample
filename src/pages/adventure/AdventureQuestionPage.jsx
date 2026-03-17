import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import readingQuestions from "../../data/readingQuestions";
import "../../styles/adventure/adventureCommon.css";
import "../../styles/adventure/AdventureQuestionPage.css";

export default function AdventureQuestionPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const questionIndex = Number(id) - 1;

  const question = useMemo(() => readingQuestions[questionIndex], [questionIndex]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!question) {
    return (
      <div className="adventure-page">
        <div className="adventure-card">
          <h1 className="adventure-title">문제를 찾을 수 없어요.</h1>
          <div className="adventure-button-row">
            <button
              className="adventure-button"
              onClick={() => navigate("/adventure/test-intro")}
            >
              테스트 처음으로
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleNext = () => {
    if (selectedIndex === null) {
      alert("정답을 골라줘!");
      return;
    }

    let currentScore = Number(localStorage.getItem("readingScore") || "0");

    if (selectedIndex === question.answer) {
      currentScore += 1;
      localStorage.setItem("readingScore", String(currentScore));
    }

    if (question.id < readingQuestions.length) {
      navigate(`/adventure/test/${question.id + 1}`);
    } else {
      navigate("/adventure/result");
    }
  };

  const handlePrev = () => {
    if (question.id === 1) {
      navigate("/adventure/test-intro");
    } else {
      navigate(`/adventure/test/${question.id - 1}`);
    }
  };

  return (
    <div className="adventure-page question-page">
      <div className="adventure-bg-cloud cloud-1" />
      <div className="adventure-bg-cloud cloud-2" />
      <div className="adventure-ground" />

      <div className="adventure-card">
        <div className="adventure-character">✨</div>

        <div className="adventure-step question-progress">
          {readingQuestions.map((item) => (
            <span
              key={item.id}
              className={`adventure-step-dot ${item.id <= question.id ? "active" : ""}`}
            />
          ))}
        </div>

        <p className="adventure-progress-text">
          문제 {question.id} / {readingQuestions.length}
        </p>

        <div className="story-box">
          <p className="story-label">짧은 이야기</p>
          <p className="story-text">{question.story}</p>
        </div>

        <h2 className="question-title">{question.question}</h2>

        <div className="option-list">
          {question.options.map((option, index) => (
            <button
              key={option}
              type="button"
              className={`option-button ${selectedIndex === index ? "selected" : ""}`}
              onClick={() => setSelectedIndex(index)}
            >
              <span className="option-number">{index + 1}</span>
              <span>{option}</span>
            </button>
          ))}
        </div>

        <div className="adventure-button-row">
          <button className="adventure-button secondary" onClick={handlePrev}>
            ← 이전
          </button>
          <button className="adventure-button" onClick={handleNext}>
            {question.id === readingQuestions.length ? "결과 보기 →" : "다음 문제 →"}
          </button>
        </div>
      </div>
    </div>
  );
}