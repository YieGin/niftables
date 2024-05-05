import { VideoPlayerProps } from "@/types";

const VideoSection = ({ src }: VideoPlayerProps) => (
  <div className="xl:w-[67%] h-[485px] rounded-md relative">
    <video
      autoPlay
      loop
      muted
      preload="none"
      playsInline
      className="w-full h-full object-cover rounded-md"
    >
      <source src={src} type="video/mp4" />
      <track kind="captions" label="English" default />
      Your browser does not support the video tag.
    </video>
    <div className="absolute top-0 w-full h-full bg-gradient-to-t from-[#3D8BFF] to-[#AB23FF] mix-blend-soft-light z-10" />
  </div>
);

export default VideoSection;
