import { Post } from "@/types/post-types";
import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface PostPreviewProps {
  post: Post;
  horizontal?: boolean;
}

const PostPreview = ({ post, horizontal = false }: PostPreviewProps) => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/blog/${id}`);
  };

  return (
    <StyledContainer
      horizontal={horizontal}
      onClick={() => handleClick(post.id)}
    >
      <StyledImage
        src={post.image}
        alt={post.title}
        width={horizontal ? 225 : 246}
        height={136}
      />
      <StyledContent horizontal={horizontal}>
        <Typography
          sx={{
            textTransform: "uppercase",
            color: "rgba(0, 0, 0, 0.6)",
            margin: "10px 0",
          }}
        >
          {post.publishedAt}
        </Typography>
        <Typography
          sx={{
            fontSize: "17px",
            fontWeight: "600",
            display: "-webkit-box",
            overflow: "hidden",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {post.title}
        </Typography>
        <Typography
          sx={{
            color: "rgba(0, 0, 0, 0.6)",
            marginTop: "8px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {post.content}
        </Typography>
      </StyledContent>
    </StyledContainer>
  );
};

export default PostPreview;

const StyledContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "horizontal",
})<{ horizontal: boolean }>(({ horizontal }) => ({
  width: horizontal ? "460px" : "246px",
  height: "270px",
  display: "flex",
  flexDirection: horizontal ? "row" : "column",
  gap: horizontal ? "20px" : "0",
  cursor: "pointer",
}));

const StyledImage = styled(Image)({
  border: "1px solid rgba(0, 0, 0, 0.1)",
  borderRadius: "16px",
});

const StyledContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== "horizontal",
})<{ horizontal: boolean }>(({ horizontal }) => ({
  display: "flex",
  flexDirection: "column",
  width: horizontal ? "230px" : "100%",
}));
