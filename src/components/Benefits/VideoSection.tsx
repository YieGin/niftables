import { VideoPlayerProps } from "@/types";
import Image from "next/image";

const VideoSection = ({ src }: VideoPlayerProps) => (
  <div className="md:w-full lg:w-1/2 relative md:right-0 h-full lg:mr-10">
    <Image
      width={1000}
      height={1000}
      src="/images/DarkShape.webp"
      alt="Video Frame"
      className="absolute top-0 left-0 w-max h-full z-10"
    />
    <div className="video-overlay" />
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
