import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/adventure/adventureCommon.css";
import "../../styles/adventure/AdventureNicknamePage.css";

export default function AdventureNicknamePage() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState(localStorage.getItem("nickname") || "");

  const handleNext = () => {
    if (!nickname.trim()) {
      alert("이름을 입력해줘!");
      return;
    }

    localStorage.setItem("nickname", nickname.trim());
    navigate("/adventure/birth");
  };

  return (
    <div className="adventure-page nickname-page">
      <div className="adventure-bg-cloud cloud-1" />
      <div className="adventure-bg-cloud cloud-2" />
      <div className="adventure-ground" />

      <div className="adventure-card">
        <div className="adventure-character">🐰</div>

        <div className="adventure-step">
          <span className="adventure-step-dot active" />
          <span className="adventure-step-dot active" />
          <span className="adventure-step-dot" />
          <span className="adventure-step-dot" />
        </div>

        <h1 className="adventure-title">
          이야기 속에서
          <br />
          뭐라고 불러줄까?
        </h1>

        <p className="adventure-subtitle">
          모험을 하는 동안 불릴 이름을 정해보자.
        </p>

        <div className="adventure-speech">
          예쁜 이름도 좋고,
          <br />
          귀여운 별명도 좋아!
        </div>

        <div className="adventure-form">
          <label className="adventure-label">닉네임</label>
          <input
            className="adventure-input"
            type="text"
            placeholder="예) 숲속탐험가"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            maxLength={12}
          />
          <p className="adventure-helper">
            교육 중 아이를 부를 이름을 입력해 주세요.
          </p>
        </div>

        <div className="adventure-button-row">
          <button
            className="adventure-button secondary"
            onClick={() => navigate("/adventure/intro")}
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