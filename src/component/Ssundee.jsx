import "../styles/Ssundee.css";
import { useState } from "react";

function Ssundee() {

  const [selectedVideo, setSelectedVideo] = useState("ddzrrKFu8Ok");

  return (
    <main className="ssundee-page">

      <h1 className="ssundee-title">
        SKYFACTORY MASTER
      </h1>


      {/* DESCRIPTION */}

      <div className="ssundee-description-box">

        <p className="ssundee-description">
          SSundee is a popular American gaming YouTuber best known for his
          entertaining Minecraft videos, creative challenges, mod showcases,
          and humorous commentary. He became especially popular during
          Minecraft's golden era through series such as SkyFactory with his
          friend Crainer. His energetic personality, unique ideas, and
          collaborations with other creators helped him build a large and
          loyal community.
        </p>

      </div>

      <div className="ssundee-photos">
        <div
          className="ssundee-photo-card"
          onClick={() => setSelectedVideo("ddzrrKFu8Ok")}
        >

          <img
            src="/images/skyfactory.jpg"
            alt="SkyFactory"
          />

          <div className="ssundee-photo-info">

            <h3>SkyFactory</h3>

            <p>
              The SkyFactory series is a popular Minecraft modpack
              that features a unique take on the game's mechanics
              and gameplay.
            </p>

          </div>

        </div>

        <div
          className="ssundee-photo-card"
          onClick={() => setSelectedVideo("vt3baC4zEOE")}
        >

          <img
            src="/images/luckyblocks.jpg"
            alt="Lucky Blocks"
          />

          <div className="ssundee-photo-info">

            <h3>Lucky Blocks</h3>

            <p>
              The Lucky Blocks mod adds a variety of new blocks
              to Minecraft, each with unique and unpredictable effects.
            </p>

          </div>

        </div>

      </div>

      <div className="ssundee-youtube-container">

        <iframe
          src={`https://www.youtube.com/embed/${selectedVideo}`}
          title="SSundee YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

      </div>

    </main>
  );
}

export default Ssundee;