import React from "react";
import "./BgMusic.css";

export const BgMusic = () => {
  const audioRef = React.useRef(null);

  const [isPlaying, setIsPlaying] = React.useState(false);
  const toggleMusic = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  // React.useEffect(() => {
  //   audioRef.current.play().catch(() => {

  //   });
  // }, []);   kdybych se rozhodla hudbu spustit hned

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src="/bg-music.mp3" type="audio/mpeg" />
        Váš prohlížeč nepodporuje přehrávání audia.
      </audio>
      <button className="play_btn user_btn" onClick={toggleMusic}>
        {isPlaying ? "🔇" : "🔊"}
      </button>
    </div>
  );
};
