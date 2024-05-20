import VedioProfileCard from "./VedioProfileCard";
import { candidateProfileVedioCardData } from "../../../../../constants/user";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const VideoProfile = () => {
  return (
    <div className="" id="about">
      <div className="mb-[1.125rem] text-base font-normal tracking-wide text-grey-700 sm:text-lg sm:font-medium ">
        Video Profile
      </div>
      <div className="vedios-wrapper sm:px-8 min-[1024px]:px-0">
        <Swiper
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            280: {
              slidesPerView: 1.03,
              spaceBetween: 1,
            },
            300: {
              slidesPerView: 1.2,
              spaceBetween: 3,
            },

            390: {
              slidesPerView: 1.3,
              spaceBetween: 4,
            },
            430: {
              slidesPerView: 1.5,
              spaceBetween: 4,
            },
            500: {
              slidesPerView: 1.6,
              spaceBetween: 4,
            },
            550: {
              slidesPerView: 1.7,
              spaceBetween: 4,
            },
            700: {
              slidesPerView: 2.18,
              spaceBetween: 4,
            },

            770: {
              slidesPerView: 2.2,
              spaceBetween: 4,
            },

            850: {
              slidesPerView: 2.6,
              spaceBetween: 4,
            },

            1000: {
              slidesPerView: 3,
              spaceBetween: 4,
            },

            1024: {
              slidesPerView: 2.3,
              spaceBetween: 4,
            },

            1060: {
              slidesPerView: 1.8,
              spaceBetween: 4,
            },

            1120: {
              slidesPerView: 2.1,
              spaceBetween: 4,
            },

            1200: {
              slidesPerView: 2.3,
              spaceBetween: 4,
            },

            1300: {
              slidesPerView: 2.4,
              spaceBetween: 4,
            },

            1400: {
              slidesPerView: 2.6,
              spaceBetween: 4,
            },

            1500: {
              slidesPerView: 2.4,
              spaceBetween: 4,
            },

            1600: {
              slidesPerView: 2.6,
              spaceBetween: 4,
            },

            1700: {
              slidesPerView: 3,
              spaceBetween: 4,
            },
          }}
        >
          {candidateProfileVedioCardData.map((datas, index) => (
            <SwiperSlide
              key={index}
              className="flex w-full cursor-grabbing items-center justify-start sm:pb-9"
            >
              <VedioProfileCard {...datas} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VideoProfile;
