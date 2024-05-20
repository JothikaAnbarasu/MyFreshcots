import RecruitedCandidatesCard from "./RecruitedCandidatesCard";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation, Scrollbar } from "swiper/modules";
import { recruitedCandidatesCardData } from "../../../../../constants/user";
import { useRef } from "react";

const RecruitedCandidatesList = () => {
  const sliderRef = useRef<any>(null);

  return (
    <div className="mb-14 h-fit w-screen sm:mb-[9rem] lg:mb-40 ">
      <div className="mb-[2.75rem] flex items-center justify-center px-2 sm:mb-[4.5rem]">
        <h2 className="w-[16.5rem] text-center text-lg font-semibold tracking-wide text-grey-700 sm:w-[19rem] sm:text-[1.4rem] min-[1500px]:text-xl">
          Freshcots have recently been recruited
        </h2>
      </div>
      <div
        className={`relative h-fit w-full min-[320px]:pl-2 sm:mx-auto sm:w-[90%] md:w-[80%] min-[1400px]:w-[70%]
        ${
          recruitedCandidatesCardData.length === 2 &&
          " sm:w-[80%] md:w-[65%] min-[1400px]:w-[50%]"
        } `}
      >
        <Swiper
          ref={sliderRef}
          freeMode={true}
          onSwiper={(swiper) => (sliderRef.current = swiper)}
          scrollbar={{ draggable: true }}
          grabCursor
          watchOverflow={true}
          modules={[Scrollbar, FreeMode, Navigation]}
          breakpoints={{
            280: { slidesPerView: 1.09, spaceBetween: 4 },
            300: { slidesPerView: 1.2 },
            360: { slidesPerView: 1.34 },
            400: { slidesPerView: 1.5 },
            450: { slidesPerView: 1.6 },
            500: { slidesPerView: 1.75 },
            550: { slidesPerView: 2.14 },
            600: { slidesPerView: 2.24 },
            700: { slidesPerView: 2.44 },
            800: { slidesPerView: 2.5 },
            900: { slidesPerView: 2.7 },
            950: { slidesPerView: 2.8 },
            1024: { slidesPerView: 3 },
            2000: { slidesPerView: 4 },
          }}
        >
          {recruitedCandidatesCardData.map((datas, i) => {
            return (
              <SwiperSlide
                key={i}
                className=" mx-auto flex h-[23.4rem] w-full  items-center justify-center sm:h-[24.5rem]"
              >
                <RecruitedCandidatesCard {...datas} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        {recruitedCandidatesCardData.length > 3 && (
          <>
            <button
              className="absolute -bottom-3 left-[40%] z-10 hidden h-fit w-fit cursor-pointer sm:block md:left-[41%]"
              onClick={() => sliderRef.current?.slidePrev()}
            >
              <FiArrowLeftCircle className="text-[2rem] text-grey-550" />
            </button>
            <button
              className="absolute -bottom-3 right-[39%] z-10 hidden h-fit w-fit cursor-pointer sm:block md:right-[40.5%]"
              onClick={() => sliderRef.current?.slideNext()}
            >
              <FiArrowRightCircle className="text-[2rem] text-grey-550" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default RecruitedCandidatesList;
