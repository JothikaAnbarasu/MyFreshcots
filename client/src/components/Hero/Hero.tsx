import SectionArc from "../../util/homeUtils/SectionArc";
import desktopHomeBanner from "../../assets/videos/DesktopFreshcots.mp4";
import mobileHomeBanner from "../../assets/videos/MobileFreshcots.mp4";
import { useEffect, useRef } from "react";

const Hero = () => {
  const desktopVidRef = useRef<HTMLVideoElement>(null);
  const mobileVidRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (desktopVidRef.current) {
      desktopVidRef.current.playbackRate = 2.099;
    }
    if (mobileVidRef.current) {
      mobileVidRef.current.playbackRate = 2.099;
    }
  }, []);

  return (
    <div className="section mt-3 flex h-max w-full flex-col items-center justify-center ss:mt-4 md:mt-0  ">
      <div className="flex w-full items-start justify-center sm:w-[96%] ">
        <video
          className="pointer-events-none -m-1 hidden w-[90%] [clip-path:inset(1px_1px)] focus:outline-none sm:block"
          muted
          autoPlay
          loop={false}
          playsInline
          ref={desktopVidRef}
        >
          <source src={desktopHomeBanner} type="video/mp4" />
        </video>
        <video
          className="pointer-events-none -m-1 block w-full  [clip-path:inset(1px_1px)] focus:outline-none sm:hidden "
          muted
          autoPlay
          loop={false}
          playsInline
          ref={mobileVidRef}
        >
          <source src={mobileHomeBanner} type="video/mp4" />
        </video>
      </div>
      <div className="-mt-12 sm:-mt-24">
        <SectionArc />
      </div>
    </div>
  );
};

export default Hero;
