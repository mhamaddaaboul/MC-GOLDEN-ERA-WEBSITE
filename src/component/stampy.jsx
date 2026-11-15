import "./stampy.css";
import { useState } from "react";

function Stampy() {

  const [selectedVideo, setSelectedVideo] = useState("VIDEO_ID_1");

  return (

    <main className="stampy-page">

      {/* TITLE */}

      <h1 className="stampy-title">
        STAMPY'S LOVELY WORLD
      </h1>


      {/* DESCRIPTION */}

      <div className="stampy-description-box">

        <p className="stampy-description">

          Stampy is a legendary Minecraft YouTuber best known for
          his cheerful personality, entertaining Minecraft gameplay,
          and iconic character Stampy Cat. He became one of the most
          recognizable creators of Minecraft's Golden Era through
          his famous series Stampy's Lovely World, bringing adventures,
          creativity, and fun to millions of viewers.

        </p>

      </div>
      <section className="stampy-cards-section">

        <div
          className="stampy-card"
          onClick={() => setSelectedVideo("lWUkHA3yA90")}
        >

          <img
            src="/images/time.jpg"
            alt="Stampy's Lovely World"
          />

          <div className="stampy-card-info">

            <h2>Stampy's Lovely World</h2>

            <p>
              Stampy's iconic Minecraft series where he
              builds, explores, and goes on adventures
              with his friends.
            </p>

          </div>

        </div>

        <div
          className="stampy-card"
          onClick={() => setSelectedVideo("z2u6-0lBKHQ")}
        >

          <img
            src="/images/ibs.jpg"
            alt="Stampy Adventures"
          />

          <div className="stampy-card-info">

            <h2>Stampy's Adventures</h2>

            <p>
              Fun Minecraft adventures featuring Stampy
              and his friends as they explore new worlds
              and take on exciting challenges.
            </p>

          </div>

        </div>


      </section>

      <div className="stampy-youtube-container">

        <iframe
          src={`https://www.youtube.com/embed/${selectedVideo}`}
          title="Stampy YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

      </div>


    </main>

  );
}

export default Stampy;