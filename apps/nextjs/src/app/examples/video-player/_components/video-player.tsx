"use client";

import { useRef } from "react";

import { useVideoPlayer } from "./use-video-player";
import { VideoPlayerButton } from "./video-player-button";

export interface VideoPlayerProps {
  src: string;
}

/**
 * This is the first example of using React Design Patterns I know.
 * I will try to document every important detail.
 *
 * TODO: Implement the following features:
 * - [ ] Open player in modal
 * - [ ] Track time component
 * - [ ] Close on `escape` key
 * - [ ] Fullscreen mode on `F` key
 * - [ ] Arrow key navigation
 * - [ ] Bug: handle video end event
 * - [ ] Proper `space` key handling. Make sure to handle the case when space key is already in focus.
 */
export function VideoPlayer({ src }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  // All video player logic is extracted to the corresponding hook to simplify component logic
  const { isPlaying, onToggle } = useVideoPlayer({ videoRef });

  return (
    <div className="grid h-screen place-items-center">
      <div className="relative">
        <video ref={videoRef}>
          <source src={src} />
        </video>
        <VideoPlayerButton isPlaying={isPlaying} onClick={onToggle} />
      </div>
    </div>
  );
}
