import { ReactMediaRecorder } from "react-media-recorder-2";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { handleVedioRecorderVisibility } from "../../../../redux/slices/userSlice";
import { IoArrowBack } from "react-icons/io5";
import { BsRecordCircle } from "react-icons/bs";
import { BsStopCircle } from "react-icons/bs";
import cameraRetakeSvg from "../../../../assets/images/cameraRetake.svg";
import { useDisableDocumentScroll } from "../../../../util/customHooks";

const RecordView = () => {
  // const [duration, setDuration] = useState(null);
  // const [currentFrame, setCurrentFrame] = useState(0);
  // const [videoDur, setvideoTotalDuration] = useState(0);
  // const [curTime, setVideoCurrentTime] = useState(0);

  // const handleLoadedMetadata = (event: any) => {
  //   const { currentTime } = event.target;
  //   setDuration(currentTime);
  // };

  const { isVedioRecorderOpen } = useAppSelector((state) => state.user);

  useDisableDocumentScroll(isVedioRecorderOpen);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  const dispatch = useAppDispatch();

  const VideoPreview = ({ stream }: { stream: MediaStream | null }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    // const onTimeUpdate = () => {
    //   let ref = videoRef;
    //   if (ref && ref.current) {
    //     let videoTotalDuration: number = ref.current.duration;
    //     let videoDuration: number = ref.current.currentTime;
    //     const framesPerSecond = 30; // Assuming 30 frames per second
    //     let videoCurrentFrame: number = Math.floor(
    //       videoDuration * framesPerSecond,
    //     );
    //     setCurrentFrame(videoCurrentFrame);
    //     setvideoTotalDuration(videoTotalDuration);
    //     setVideoCurrentTime(videoDuration);
    //   }
    // };

    useEffect(() => {
      if (videoRef.current && stream) {
        videoRef.current.srcObject = stream;
      }
      return () => {
        if (videoRef.current) {
          videoRef.current.srcObject = null;
        }
      };
    }, [stream]);

    if (!stream) {
      return null;
    }

    return (
      <video
        ref={videoRef}
        autoPlay
        controls
        style={{ aspectRatio: "16/9" }}
        className="h-[20rem] w-[20.5rem] rounded-lg ss:h-[303px] ss:w-[539px] "
        // onLoadedMetadata={handleLoadedMetadata}
        // onTimeUpdate={onTimeUpdate}
      />
    );
  };

  return (
    <ReactMediaRecorder
      video
      render={({
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,
        previewStream,
      }) => (
        <div className=" fixed inset-0 z-[100] flex h-full w-[100vw] flex-col bg-pageBg tracking-wide">
          <div className="flex h-12 w-full items-center justify-start bg-white pl-[1.026rem] ">
            <IoArrowBack
              className="cursor-pointer text-base sm:text-2xl"
              onClick={() => {
                stopRecording();
                dispatch(handleVedioRecorderVisibility(false));
              }}
            />
          </div>
          <div className="lite-scrollbar  h-full  w-full  overflow-y-scroll">
            <div className=" flex h-full w-full flex-col  gap-y-4  px-2 py-4  sm:pt-10">
              <div className="flex h-max w-full basis-[80%] flex-col items-center justify-center sm:basis-[70%] lg:basis-[80%]">
                <div className="desc mb-[1.25rem] w-64 text-center text-xs text-grey-550 sm:mb-8 sm:w-80 sm:text-sm">
                  You can talk about your skills, education, strength,
                  achievement, interest etc..
                </div>
                {/* <p>
                  {curTime}/{videoDur}
                </p> */}

                <div className="timer mb-6 flex items-center sm:mb-8 ">
                  <span
                    className={` mr-3 h-4 w-4 rounded-full bg-red-200 ${
                      status === "recording"
                        ? "animate-blink"
                        : "bg-red-200/40"
                    } `}
                  />
                  <span className=" text-xl font-medium text-grey-700 sm:text-2xl">
                    0:00
                  </span>
                  <span className=" mx-[0.438rem] text-sm font-normal text-grey-550">
                    /
                  </span>
                  <span className=" text-sm font-normal text-grey-550">
                    0:99
                  </span>
                </div>

                <div className="vedio  h-fit w-fit  rounded-lg bg-grey-100">
                  {status === "recording" ? (
                    <VideoPreview stream={previewStream} />
                  ) : (
                    <video
                      src={mediaBlobUrl}
                      controls
                      className="h-[20rem] w-[20.5rem] rounded-lg ss:h-[303px] ss:w-[539px] min-[1300px]:h-[30rem] min-[1300px]:w-[60rem]"
                      style={{ aspectRatio: "16/9" }}
                      ref={videoRef2}
                    />
                  )}
                </div>
              </div>
              <div className="buttons  flex  w-full grow flex-col items-center  justify-start gap-y-2 px-4 pb-2  sm:flex-row-reverse sm:items-start sm:justify-center sm:gap-x-6">
                {status === "idle" && (
                  <button
                    className=" flex h-12 w-full items-center justify-center gap-x-[0.625rem] rounded-sm bg-red-200 text-base font-medium  text-white hover:bg-red-300 sm:w-fit sm:px-5"
                    onClick={() => {
                      startRecording();
                    }}
                  >
                    <BsRecordCircle className="text-lg font-medium " /> Start
                    Record
                  </button>
                )}
                {status === "acquiring_media" && (
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-grey-400/30 border-l-grey-300"></div>
                )}

                {status === "recording" && (
                  <button
                    onClick={() => {
                      stopRecording();
                    }}
                    className=" bg-grey-270 flex h-12 w-full items-center justify-center gap-x-[0.625rem] rounded-sm text-base font-medium  text-white hover:bg-grey-400 sm:w-fit sm:px-5"
                  >
                    <BsStopCircle className="text-lg font-medium" />
                    Stop Record
                  </button>
                )}

                {status == "stopped" && (
                  <>
                    <button className=" flex h-12 w-full items-center justify-center gap-x-[0.625rem]  rounded-sm bg-primary-500 text-base font-medium  text-white hover:bg-primary-600 sm:w-fit sm:px-5 ">
                      Submit for Review
                    </button>
                    <button
                      className=" flex h-12 w-full items-center justify-center gap-x-[0.625rem] rounded-sm border-2 border-primary-500 bg-white  text-base font-medium text-primary-500  hover:bg-softCyan-225 sm:w-fit sm:px-5"
                      onClick={() => {
                        startRecording();
                      }}
                    >
                      <img src={cameraRetakeSvg} alt="retake" /> Retake
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
};
export default RecordView;
