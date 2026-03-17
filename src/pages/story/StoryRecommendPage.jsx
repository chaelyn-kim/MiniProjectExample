import { useNavigate } from "react-router-dom";
import "../../styles/adventure/adventureCommon.css";
import "./StoryRecommendPage.css";


const STORIES = [
  { id: 1, title: "용감한 토끼의 모험", level: "⭐ 쉬움" },
  { id: 2, title: "숲 속의 비밀 친구", level: "⭐ 쉬움" },
  { id: 3, title: "마법의 별을 찾아서", level: "⭐⭐ 보통" }
];

export default function StoryRecommendPage() {
 const navigate = useNavigate();

  return (
    <div className="story-page">
      <div className="story-bg">
        <div className="sun" />
        <div className="cloud cloud1" />
        <div className="cloud cloud2" />
        <div className="cloud cloud3" />
        <div className="stars" />
        <div className="hill hill-front" />
        <div className="flower flower1" />
        <div className="flower flower2" />
        <div className="flower flower3" />
        <div className="flower flower4" />
      </div>

      <div className="story-content">
        <div className="story-header">
          <h1>📖 AI 추천 동화</h1>
          <p>테스트 결과를 바탕으로 반짝별에게 어울리는 이야기를 골라봤어!</p>
        </div>

        <div className="story-list">
          {STORIES.map((story) => (
            <div className="story-card" key={story.id}>
              <div className="story-book-cover">
                <div className="story-book-thumb">📚</div>
              </div>

              <h3 className="story-title">{story.title}</h3>
              <p className="story-level">난이도 · {story.level}</p>

              <button className="story-read-button" 
               onClick={() => navigate("/stories/read")}
              >읽기</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}