import { Box } from "@mui/material";
import { Post } from "@/types/post-types";
import { Scrollbar, A11y } from "swiper/modules";
import PostPreview from "./postPreview";
import "swiper/css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

interface PostCarouselProps {
  posts: Post[];
  vertical?: boolean;
}

const PostCarousel = ({ posts, vertical = false }: PostCarouselProps) => {
  const [slidesPerView, setSlidesPerView] = useState<number>(vertical ? 6 : 5);

  useEffect(() => {
    if (vertical) {
      setSlidesPerView(6);
      return;
    }

    const calculateSlidesPerView = () => {
      const screenWidth = window.innerWidth;
      const slideWidth = 280;
      const numberOfSlides = Math.floor(screenWidth / slideWidth);
      setSlidesPerView(numberOfSlides);
    };

    calculateSlidesPerView();
    window.addEventListener("resize", calculateSlidesPerView);

    return () => {
      window.removeEventListener("resize", calculateSlidesPerView);
    };
  }, [vertical]);

  return (
    <Box
      sx={{
        width: vertical ? "500px" : "100%",
        padding: vertical ? "20px 0 0 0 " : "20px",
        display: "flex",
        backgroundColor: vertical ? "none" : "#ffffff",
        marginTop: "44px",
        borderRadius: "24px",
        border: vertical ? "none" : "1px solid rgba(214, 214, 214, 1)",
        boxShadow: vertical
          ? "none"
          : "0px 8px 17px 0px rgba(194, 194, 194, 0.1)",
      }}
    >
      {posts.length > 0 ? (
        <Swiper
          modules={[A11y, Scrollbar]}
          spaceBetween={20}
          direction={vertical ? "vertical" : "horizontal"}
          slidesPerView={slidesPerView}
          pagination={false}
          scrollbar={{ draggable: true }}
          style={{
            height: vertical ? "75vh" : "290px",
            width: "100%",
          }}
        >
          {posts.map((post, index) => (
            <SwiperSlide key={index}>
              <PostPreview post={post} horizontal={vertical} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Box>An error occurred while trying to retrieve posts. </Box>
      )}
    </Box>
  );
};

export default PostCarousel;
