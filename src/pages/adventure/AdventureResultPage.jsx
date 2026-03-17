import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/adventure/adventureCommon.css";
import "../../styles/adventure/AdventureResultPage.css";

export default function AdventureResultPage() {
  const navigate = useNavigate();

  const handleGoStories = () => {
    navigate("/stories"); // 추천 동화 페이지
  };

  const nickname = localStorage.getItem("nickname") || "친구";
  const score = Number(localStorage.getItem("readingScore") || "0");

  const result = useMemo(() => {
    if (score <= 1) {
      return {
        level: "🌱 새싹 탐험가",
        description:
          "짧고 쉬운 문장부터 차근차근 읽어가면 좋아. 그림이 많고 짧은 이야기부터 시작해보자!",
      };
    }
    if (score <= 3) {
      return {
        level: "🌿 숲 탐험가",
        description:
          "짧은 이야기의 흐름을 잘 이해하고 있어! 조금 더 긴 문장과 간단한 줄거리가 있는 동화를 추천할게.",
      };
    }
    return {
      level: "🌳 이야기 마스터",
      description:
        "이야기의 내용을 아주 잘 이해하고 있어! 긴 문장과 다양한 사건이 나오는 모험 동화도 충분히 즐길 수 있어.",
    };
  }, [score]);

  const handleRestart = () => {
    localStorage.setItem("readingScore", "0");
    navigate("/adventure/test/1");
  };
  
  return (
    <div className="adventure-page result-page">
      <div className="adventure-bg-cloud cloud-1" />
      <div className="adventure-bg-cloud cloud-2" />
      <div className="adventure-bg-cloud cloud-3" />
      <div className="adventure-ground" />

      <div className="adventure-card">
        <div className="adventure-character">🏆</div>

        <h1 className="adventure-title">
          테스트 완료!
          <br />
          {nickname}의 독해 레벨은
        </h1>

        <div className="result-level-box">
          <p className="result-level">{result.level}</p>
          <p className="result-score">정답 {score} / 5</p>
        </div>

        <div className="adventure-speech result-description">
          {result.description}
        </div>

        <div className="adventure-button-row">
          <button className="adventure-button secondary" onClick={handleRestart}>
            다시 풀어보기
          </button>
          <button className="adventure-button" onClick={handleGoStories}>
            추천 동화 보러가기 →
          </button>
        </div>
      </div>
    </div>
  );
}