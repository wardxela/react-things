import type { RefObject } from "react";
import { useState } from "react";

export interface UseVideoPlayerParams {
  videoRef: RefObject<HTMLVideoElement>;
}

export function useVideoPlayer({ videoRef }: UseVideoPlayerParams) {
  const [isPlaying, setIsPlaying] = useState(false);

  const onToggle = () => {
    if (!videoRef.current) return;
    if (!isPlaying) {
      void videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return { isPlaying, onToggle };
}
