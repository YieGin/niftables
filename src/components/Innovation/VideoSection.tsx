import { VideoPlayerProps } from "@/types";

const VideoSection = ({ src }: VideoPlayerProps) => (
  <div>
    <div className="video-overlay-Innovation-video-top" />
    <video
      autoPlay
      loop
      muted
      preload="none"
      playsInline
      className="w-full h-[75%] bottom-0 object-cover absolute z-[-1] opacity-20"
    >
      <source src={src} type="video/mp4" />
      <track kind="captions" label="English" default />
      Your browser does not support the video tag.
    </video>
    <div className="video-overlay-Innovation-video-bottom" />
  </div>
);

export default VideoSection;
