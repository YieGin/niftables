import { VideoPlayerProps } from "@/types";

const VideoSection = ({ src }: VideoPlayerProps) => (
  <div className="xl:w-[67%] h-[485px] rounded-md relative">
    <div className="video-overlay-synergy" />
    <video
      autoPlay
      loop
      muted
      preload="none"
      playsInline
      className="w-full h-full object-cover"
    >
      <source src={src} type="video/mp4" />
      <track kind="captions" label="English" default />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default VideoSection;
