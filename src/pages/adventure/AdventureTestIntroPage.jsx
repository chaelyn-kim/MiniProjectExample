import { useNavigate } from "react-router-dom";
import "../../styles/adventure/adventureCommon.css";
import "../../styles/adventure/AdventureTestIntroPage.css";

export default function AdventureTestIntroPage() {
  const navigate = useNavigate();
  const nickname = localStorage.getItem("nickname") || "친구";

  const handleStart = () => {
    localStorage.setItem("readingScore", "0");
    navigate("/adventure/test/1");
  };

  return (
    <div className="adventure-page test-intro-page">
      <div className="adventure-bg-cloud cloud-2" />
      <div className="adventure-bg-cloud cloud-3" />
      <div className="adventure-ground" />

      <div className="adventure-card">
        <div className="adventure-character">📚</div>

        <div className="adventure-step">
          <span className="adventure-step-dot active" />
          <span className="adventure-step-dot active" />
          <span className="adventure-step-dot active" />
          <span className="adventure-step-dot active" />
        </div>

        <h1 className="adventure-title">
          이제 {nickname}의
          <br />
          독해 모험을 시작해볼까?
        </h1>

        <p className="adventure-subtitle">
          짧은 이야기 5개를 읽고 질문에 답해보자.
        </p>

        <div className="adventure-speech">
          어렵지 않아!
          <br />
          차근차근 읽고 정답을 골라주면
          <br />
          너에게 맞는 이야기 레벨을 추천해줄게.
        </div>

        <p className="adventure-progress-text">총 5문제</p>

        <div className="adventure-button-row">
          <button
            className="adventure-button secondary"
            onClick={() => navigate("/adventure/birth")}
          >
            ← 이전
          </button>
          <button className="adventure-button" onClick={handleStart}>
            테스트 시작 →
          </button>
        </div>
      </div>
    </div>
  );
}