import { VideoPlayerProps } from "@/types";

const VideoSection = ({ src }: VideoPlayerProps) => (
  <div>
    <div className="absolute top-0 w-full h-full bg-gradient-to-t from-[#3D8BFF] opacity-40 to-[#AB23FF] mix-blend-soft-light" />
    <video
      autoPlay
      loop
      muted
      preload="none"
      playsInline
      className="w-full h-[85%] bottom-0 object-cover absolute z-[-1] opacity-20"
    >
      <source src={src} type="video/mp4" />
      <track kind="captions" label="English" default />
      Your browser does not support the video tag.
    </video>
    <div className="absolute top-0 w-full h-full bg-video-overlay-Innovation-video-bottom -rotate-180 opacity-10" />
    <div className="absolute bottom-0 w-full h-full bg-video-overlay-Innovation-video-bottom opacity-30" />
  </div>
);

export default VideoSection;
