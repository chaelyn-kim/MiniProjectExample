import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/adventure/AdventureBirthPage.css";
import "../../styles/adventure/adventureCommon.css";

export default function AdventureBirthPage() {
  const navigate = useNavigate();
  const [birthDate, setBirthDate] = useState(localStorage.getItem("birthDate") || "");

  const handleNext = () => {
    if (!birthDate) {
      alert("생년월일을 선택해줘!");
      return;
    }

    localStorage.setItem("birthDate", birthDate);
    navigate("/adventure/test-intro");
  };

  return (
    <div className="adventure-page birth-page">
      <div className="adventure-bg-cloud cloud-1" />
      <div className="adventure-bg-cloud cloud-3" />
      <div className="adventure-ground" />

      <div className="adventure-card">
        <div className="adventure-character">🐻</div>

        <div className="adventure-step">
          <span className="adventure-step-dot active" />
          <span className="adventure-step-dot active" />
          <span className="adventure-step-dot active" />
          <span className="adventure-step-dot" />
        </div>

        <h1 className="adventure-title">
          몇 살인지 알려줄래?
        </h1>

        <p className="adventure-subtitle">
          너에게 딱 맞는 이야기를 찾는 데 도움이 돼!
        </p>

        <div className="adventure-speech">
          생일을 알면
          <br />
          더 재미있고 쉬운 이야기부터 추천해줄 수 있어.
        </div>

        <div className="adventure-form">
          <label className="adventure-label">생년월일</label>
          <input
            className="adventure-input"
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>

        <div className="adventure-button-row">
          <button
            className="adventure-button secondary"
            onClick={() => navigate("/adventure/nickname")}
          >
            ← 이전
          </button>
          <button className="adventure-button" onClick={handleNext}>
            다음 →
          </button>
        </div>
      </div>
    </div>
  );
}