import { InnovationList } from "@/lib/constant";
import VideoSection from "./VideoSection";
import InnovationItem from "./InnovationItem";
import Footer from "../Footer";

const videoUrl = "https://yiegin.s3.eu-north-1.amazonaws.com/roadmap-video.mp4";

const Innovation = () => {
  return (
    <section className="relative">
      <VideoSection src={videoUrl} />
      <div className="grid w-full relative overflow-scroll xl:overflow-hidden hide-scrollbar mb-24">
        <div className="flex xl:flex-col z-10 relative xl:overflow-hidden hide-scrollbar md:gap-y-5 px-5 md:px-20 2xl:px-[219px] gap-5 md:gap-x-10">
          {InnovationList.map((item, index) => (
            <InnovationItem key={index} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Innovation;
