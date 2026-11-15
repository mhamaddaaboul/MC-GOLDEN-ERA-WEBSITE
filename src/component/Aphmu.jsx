import "../styles/Aphmu.css";
import { useState } from "react";

function Aphmu() {

  const [selectedVideo, setSelectedVideo] = useState("Od0TYpe_JKo");

  return (

    <main className="aphmu-page">

      <h1 className="aphmu-title">
        Aphmau's MyStreet
      </h1>

      <div className="aphmu-description-box">

        <p className="aphmu-description">
          Aphmau is a popular American gaming YouTuber best known for her
          entertaining Minecraft roleplay videos, creative storytelling,
          fun challenges, and humorous characters. She became especially
          popular through series such as Minecraft Diaries and MyStreet.
          Her imaginative stories and energetic personality helped her
          build a large and loyal community.
        </p>

      </div>
      <section className="aphmu-cards-section">

        <div
          className="aphmu-card"
          onClick={() => setSelectedVideo("Od0TYpe_JKo")}
        >

          <img
            src="/images/mystreet.jpg"
            alt="MyStreet"
          />

          <div className="aphmu-card-info">

            <h2>MyStreet</h2>

            <p>
              A Minecraft roleplay series that follows
              Aphmau and her friends through friendship,
              comedy, and exciting adventures.
            </p>

          </div>

        </div>

        <div
          className="aphmu-card"
          onClick={() => setSelectedVideo("kKBcykiYvP4")}
        >

          <img
            src="/images/mca.jpg"
            alt="Minecraft Comes Alive"
          />

          <div className="aphmu-card-info">

            <h2>MC Comes Alive</h2>

            <p>
              A Minecraft series featuring village life,
              new characters, and fun adventures.
            </p>

          </div>

        </div>

      </section>

      <div className="aphmu-youtube-container">

        <iframe
          src={`https://www.youtube.com/embed/${selectedVideo}`}
          title="Aphmau YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

      </div>

    </main>
  );
}
export default Aphmu;