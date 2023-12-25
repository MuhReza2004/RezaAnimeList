"use client";

import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleVideoPlayer}
          className="text-me-accent bg-me-dark float-right"
        >
          <XCircle size={32} />
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("Video is broken, please try another.")}
        />
      </div>
    );
  };

  const OpenVideoPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="fixed bottom-5 right-5 w-32 bg-me-primary text-me-dark hover:bg-me-accent transition-all rounded"
      >
        TRAILER DSINI!
      </button>
    );
  };

  return isOpen ? <Player /> : <OpenVideoPlayer />;
};

export default VideoPlayer;
