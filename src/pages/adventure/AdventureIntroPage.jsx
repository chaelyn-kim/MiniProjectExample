import { useNavigate } from "react-router-dom";
import "../../styles/adventure/adventureCommon.css";
import "../../styles/adventure/AdventureIntroPage.css";

export default function AdventureIntroPage() {
  const navigate = useNavigate();

  return (
    <div className="adventure-page intro-page">
      <div className="adventure-bg-cloud cloud-1" />
      <div className="adventure-bg-cloud cloud-2" />
      <div className="adventure-bg-cloud cloud-3" />
      <div className="adventure-ground" />

      <div className="adventure-card">
        <div className="adventure-character">🦊</div>

        <div className="adventure-step">
          <span className="adventure-step-dot active" />
          <span className="adventure-step-dot" />
          <span className="adventure-step-dot" />
          <span className="adventure-step-dot" />
        </div>

        <h1 className="adventure-title">
          이야기 나라에 온 걸
          <br />
          환영해!
        </h1>

        <p className="adventure-subtitle">
          이곳에서는 너만의 모험이 시작될 거야.
          <br />
          먼저 모험을 떠날 준비를 해볼까?
        </p>

        <div className="adventure-speech">
          작은 여우 가이드가 너를 도와줄 거야.
          <br />
          이름도 정하고, 너에게 맞는 이야기도 찾아보자!
        </div>

        <div className="adventure-button-row">
          <button
            className="adventure-button"
            onClick={() => navigate("/adventure/nickname")}
          >
            모험 시작하기 →
          </button>
        </div>
      </div>
    </div>
  );
}