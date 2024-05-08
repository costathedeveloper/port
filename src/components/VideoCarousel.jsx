import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";

import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";

const VideoCarousel = () => {
  const videoRefs = useRef([]);
  const videoSpanRefs = useRef([]);
  const videoDivRefs = useRef([]);
  const coverRefs = useRef([]);

  const [videos, setVideos] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);

  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = videos;

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to(".video", {
      scrollTrigger: {
        trigger: ".video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideos((prev) => ({
          ...prev,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    let currentProgress = 0;
    let spans = videoSpanRefs.current;

    if (spans[videoId]) {
      let anim = gsap.to(spans[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);

          if (progress !== currentProgress) {
            currentProgress = progress;

            gsap.to(videoDivRefs.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });

            gsap.to(spans[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },

        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRefs.current[videoId], {
              width: "12px",
            });
            gsap.to(spans[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });

      if (videoId === 0) {
        anim.restart();
      }

      const animUpdate = () => {
        anim.progress(
          videoRefs.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration
        );
      };

      if (isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRefs.current[videoId].pause();
      } else {
        startPlay && videoRefs.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideos((prev) => ({ ...prev, isEnd: true, videoId: i + 1 }));
        break;

      case "video-last":
        setVideos((prev) => ({ ...prev, isLastVideo: true }));
        break;

      case "video-reset":
        setVideos((prev) => ({ ...prev, videoId: 0, isLastVideo: false }));
        break;

      case "pause":
        setVideos((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
        break;

      case "play":
        setVideos((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
        break;

      default:
        return;
    }
  };

  const handleLoadedMetaData = (i, e) => setLoadedData((prev) => [...prev, e]);

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((slide, i) => (
          <div key={slide.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container relative">
              {/* Cover Image */}
              <img
                src={slide.coverImage}
                alt="Cover"
                className={`absolute inset-0 w-full h-full object-cover rounded-3xl ${
                  startPlay && "opacity-0 pointer-events-none"
                }`}
                ref={(el) => (coverRefs.current[i] = el)}
              />

              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  className={`video ${slide.id === 2 && "translate-x-44"}`}
                  playsInline
                  preload="auto"
                  muted
                  ref={(el) => (videoRefs.current[i] = el)}
                  onEnded={() =>
                    i !== 4 ? handleProcess("video-end", i) : handleProcess("video-last")
                  }
                  onPlay={() => setVideos((prev) => ({ ...prev, isPlaying: true }))}
                  onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                >
                  <source src={slide.video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoRefs.current.map((_, i) => (
            <span
              key={i}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
              ref={(el) => (videoDivRefs.current[i] = el)}
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRefs.current[i] = el)}
              />
            </span>
          ))}
        </div>

        <button className="control-btn">
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            onClick={
              isLastVideo
                ? () => handleProcess("video-reset")
                : !isPlaying
                ? () => handleProcess("play")
                : () => handleProcess("pause")
            }
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
