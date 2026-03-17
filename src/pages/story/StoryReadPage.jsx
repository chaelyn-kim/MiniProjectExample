import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/adventure/adventureCommon.css";
import "./StoryReadPage.css";

const STORY_PAGES = [
  {
    id: 1,
    title: "용감한 토끼의 모험",
    sceneTitle: "숲으로 떠난 토끼",
    text: [
      "어느 날 아침, 작은 토끼는 반짝이는 숲으로 모험을 떠났어요.",
      "토끼는 조금 떨렸지만, 새로운 길을 발견할 생각에 가슴이 두근거렸어요.",
      "그때 멀리서 반짝반짝 빛나는 길 하나가 보였답니다.",
    ],
    words: {
      모험: "새로운 곳을 탐험하는 신나는 경험이야.",
      반짝이는: "빛이 나는 것처럼 반짝반짝 보이는 모습이야.",
      두근거렸어요: "기대되거나 떨려서 가슴이 콩콩 뛰는 느낌이야.",
    },
    question: {
      quiz: "토끼는 왜 숲으로 갔을까요?",
      options: ["숨으려고", "새로운 길을 찾으려고"],
      answer: 1,
      explanation: "토끼는 새로운 길을 발견하고 싶어서 숲으로 떠났어.",
    },
    choices: [
      { id: "forest", label: "반짝이는 길로 간다" },
      { id: "cave", label: "조용한 동굴 쪽을 본다" },
    ],
  },
  {
    id: 2,
    title: "용감한 토끼의 모험",
    sceneTitle: "갈림길에서의 선택",
    text: [
      "토끼는 갈림길 앞에 멈춰 섰어요.",
      "한쪽은 꽃향기가 나는 숲길이었고, 다른 한쪽은 조용하고 어두운 길이었어요.",
      "토끼는 숨을 크게 쉬고 천천히 주변을 살펴보았어요.",
    ],
    words: {
      갈림길: "길이 두 방향 이상으로 나뉘는 곳이야.",
      꽃향기: "꽃에서 나는 좋은 냄새야.",
      주변: "내 몸 가까이에 있는 곳들이야.",
    },
    question: {
      quiz: "갈림길의 두 길은 어떤 차이가 있었나요?",
      options: ["둘 다 밝은 길", "하나는 꽃향기 나는 길, 하나는 어두운 길"],
      answer: 1,
      explanation: "숲길은 꽃향기가 났고, 다른 길은 조용하고 어두웠어.",
    },
    choices: [
      { id: "flower-road", label: "꽃향기 나는 길을 선택한다" },
      { id: "dark-road", label: "어두운 길을 살펴본다" },
    ],
  },
];

export default function StoryReadPage() {
  const navigate = useNavigate();
  const [pageIndex, setPageIndex] = useState(0);
  const [selectedWord, setSelectedWord] = useState("");
  const [selectedChoice, setSelectedChoice] = useState("");
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [showHelper, setShowHelper] = useState(false);

  const currentPage = STORY_PAGES[pageIndex];

  const progress = useMemo(() => {
    return Math.round(((pageIndex + 1) / STORY_PAGES.length) * 100);
  }, [pageIndex]);

  const helperMessage = useMemo(() => {
    if (selectedWord && currentPage.words[selectedWord]) {
      return `"${selectedWord}"는 "${currentPage.words[selectedWord]}"라는 뜻이야!`;
    }

    if (selectedChoice) {
      return `좋아! "${selectedChoice}" 선택은 이야기의 흐름을 스스로 생각해보게 도와줘.`;
    }

    return "모르는 단어를 눌러보거나, 아래 선택지를 골라서 이야기 속으로 들어가 보자!";
  }, [selectedWord, selectedChoice, currentPage]);

  const clickableWords = Object.keys(currentPage.words);

  const renderSentence = (sentence, lineIndex) => {
    const parts = sentence.split(/(모험|반짝이는|두근거렸어요|갈림길|꽃향기|주변)/g);

    return (
      <p className="story-read-text-line" key={`${lineIndex}-${sentence}`}>
        {parts.map((part, idx) => {
          if (clickableWords.includes(part)) {
            return (
              <button
                type="button"
                key={`${part}-${idx}`}
                className={`story-word-chip ${selectedWord === part ? "active" : ""}`}
                onClick={() => {
                  setSelectedWord(part);
                  setShowHelper(true);
                }}
              >
                {part}
              </button>
            );
          }
          return <span key={`${part}-${idx}`}>{part}</span>;
        })}
      </p>
    );
  };

  const handleQuizSelect = (index) => {
    setSelectedQuiz(index);
    setShowQuizResult(true);
  };

  const handleNextPage = () => {
    setSelectedWord("");
    setSelectedChoice("");
    setSelectedQuiz(null);
    setShowQuizResult(false);
    setShowHelper(false);

    if (pageIndex < STORY_PAGES.length - 1) {
      setPageIndex((prev) => prev + 1);
      return;
    }

    navigate("/stories");
  };

  const handlePrevPage = () => {
    if (pageIndex === 0) {
      navigate("/stories");
      return;
    }

    setSelectedWord("");
    setSelectedChoice("");
    setSelectedQuiz(null);
    setShowQuizResult(false);
    setShowHelper(false);
    setPageIndex((prev) => prev - 1);
  };

  return (
    <div className="story-read-page">
      <div className="story-read-bg">
        <div className="story-read-sun" />
        <div className="story-read-cloud cloud1" />
        <div className="story-read-cloud cloud2" />
        <div className="story-read-cloud cloud3" />
        <div className="story-read-stars" />
        <div className="story-read-hill hill-back" />
        <div className="story-read-hill hill-front" />
        <div className="story-read-flower flower1" />
        <div className="story-read-flower flower2" />
        <div className="story-read-flower flower3" />
        <div className="story-read-flower flower4" />
      </div>

      <div className="story-read-shell">
        <div className="story-read-book">
          <div className="story-read-topbar">
            <button className="story-read-nav ghost" onClick={() => navigate("/stories")}>
              ← 추천 목록
            </button>

            <div className="story-read-progress-wrap">
              <span className="story-read-progress-label">
                {pageIndex + 1} / {STORY_PAGES.length}
              </span>
              <div className="story-read-progress">
                <div
                  className="story-read-progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="story-read-header">
            <p className="story-read-badge">📖 AI 인터랙티브 동화</p>
            <h1>{currentPage.title}</h1>
            <h2>{currentPage.sceneTitle}</h2>
          </div>

          <div className="story-read-content">
            <div className="story-read-illustration">
              <div className="story-read-illustration-inner">
                <span className="story-read-emoji">🐰</span>
                <p>이 자리에 동화 삽화</p>
              </div>
            </div>

            <div className="story-read-main">
              <div className="story-read-text-card">
                <div className="story-read-card-title">이야기 읽기</div>
                <div className="story-read-text">
                  {currentPage.text.map((sentence, index) =>
                    renderSentence(sentence, index)
                  )}
                </div>
              </div>

              <div className="story-read-helper-card">
                <div className="story-read-helper-head">
                  <span>🦊 AI 숲속 친구</span>
                  <button
                    type="button"
                    className="story-read-helper-toggle"
                    onClick={() => setShowHelper((prev) => !prev)}
                  >
                    {showHelper ? "숨기기" : "도움 보기"}
                  </button>
                </div>

                {showHelper && (
                  <div className="story-read-helper-bubble">{helperMessage}</div>
                )}
              </div>

              <div className="story-read-choice-card">
                <div className="story-read-card-title">어떻게 할까?</div>
                <div className="story-read-choice-list">
                  {currentPage.choices.map((choice) => (
                    <button
                      key={choice.id}
                      type="button"
                      className={`story-read-choice-btn ${
                        selectedChoice === choice.label ? "selected" : ""
                      }`}
                      onClick={() => {
                        setSelectedChoice(choice.label);
                        setShowHelper(true);
                      }}
                    >
                      {choice.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="story-read-quiz-card">
                <div className="story-read-card-title">한 장면 이해하기</div>
                <p className="story-read-quiz-question">{currentPage.question.quiz}</p>

                <div className="story-read-quiz-options">
                  {currentPage.question.options.map((option, index) => {
                    const isSelected = selectedQuiz === index;
                    const isCorrect = currentPage.question.answer === index;

                    let extraClass = "";
                    if (showQuizResult && isSelected && isCorrect) extraClass = "correct";
                    if (showQuizResult && isSelected && !isCorrect) extraClass = "wrong";

                    return (
                      <button
                        key={option}
                        type="button"
                        className={`story-read-quiz-btn ${extraClass}`}
                        onClick={() => handleQuizSelect(index)}
                        disabled={showQuizResult}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                {showQuizResult && (
                  <div className="story-read-quiz-result">
                    <strong>
                      {selectedQuiz === currentPage.question.answer
                        ? "정답이야! 정말 잘했어 ✨"
                        : "조금 아쉬워! 다시 문장을 읽어보자 🌷"}
                    </strong>
                    <p>{currentPage.question.explanation}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="story-read-footer">
            <button className="story-read-nav secondary" onClick={handlePrevPage}>
              이전
            </button>
            <button className="story-read-nav primary" onClick={handleNextPage}>
              {pageIndex === STORY_PAGES.length - 1 ? "추천 목록으로" : "다음 장면 →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}