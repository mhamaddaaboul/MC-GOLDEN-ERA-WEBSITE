import "./Sam.css";
import { useState } from "react";

function Sam() {
  const [selectedVideo, setSelectedVideo] = useState("VIDEO_ID_1");

  return (
    <main className="sam-hero">

      <h1>SAM'S SCHOOL</h1>

      <div className="sam-description-box">
        <p className="sam-description">
          SamGladiator is a Minecraft content creator best known for his immersive roleplay series, 
          particularly the popular Yandere High School series. His videos combine Minecraft storytelling, comedy, mystery,
           adventure, and character-driven narratives to create entertaining stories within the game. Yandere High School follows Sam and his friends
            as they navigate life at Akademi High School while becoming involved in strange mysteries, relationships, conflicts, and dangerous adventures.
             His roleplay content later expanded into series such as Tokyo Soul and Yandere, helping make him a notable creator in the Minecraft roleplay community.
        </p>
      </div>

      <div className="sam-photos">

        <div
          className="sam-photo-card"
          onClick={() => setSelectedVideo("pzBt4KZrWCY")}
        >
          <img
            src="/images/YHS.jpg"
            alt="Sam Video 1"
          />

          <div className="sam-photo-info">
            <h3>Yandere High School</h3>

            <p>
              Sam begins his first day at Akademi High School, where he meets new friends and discovers a strange new world.
            </p>
          </div>
        </div>

        <div
          className="sam-photo-card"
          onClick={() => setSelectedVideo("sAvCUxCL8Xg")}
        >
          <img
            src="TS.jpg"
            alt="Sam Video 2"
          />

          <div className="sam-photo-info">
            <h3> Tokyo Soul </h3>

            <p>
              Sam starts a new life in Tokyo, 
              meeting new people and facing a 
              whole new set of adventures.
            </p>
          </div>
        </div>

      </div>

      <div className="sam-youtube-container">
        <iframe
          src={`https://www.youtube.com/embed/${selectedVideo}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

    </main>
  );
}

export default Sam;