import { Box, Typography } from "@mui/material";
import featuredStarIcon from "@/public/assets/featured-star-icon.svg";
import Image from "next/image";
import { Post } from "@/types/post-types";
import xLogo from "@/public/assets/X-logo.svg";
import youTubeLogo from "@/public/assets/youTube-logo.svg";
import facebookLogo from "@/public/assets/facebook-logo.svg";
import {
  AvatarBox,
  Caption,
  Content,
  FeaturedBox,
  ImageContainer,
  InfoBox,
  PlaceholderImage,
  ShareBox,
  Title,
} from "@/app/blog/style";

type PostContentProps = {
  post: Post;
  isPreview?: boolean;
};

const PostContent = ({ post, isPreview }: PostContentProps) => {
  return (
    <>
      {isPreview && (
        <FeaturedBox>
          <Image src={featuredStarIcon} alt="logo" />
          <Typography>Featured</Typography>
        </FeaturedBox>
      )}

      <Title sx={{ textAlign: isPreview ? "center" : "inherit" }}>
        {post.title}
      </Title>

      <Content
        sx={{
          width: `${isPreview ? "800px" : "555px"}`,
          textAlign: isPreview ? "center" : "inherit",
        }}
      >
        {isPreview
          ? post.content.substring(0, 200) +
            (post.content.length > 200 ? "..." : "")
          : post.content}
      </Content>

      <InfoBox>
        <Typography
          sx={{ textTransform: "uppercase", color: "rgba(0, 0, 0, 0.6)" }}
        >
          {post.publishedAt}
        </Typography>
        <AvatarBox>
          <Box
            sx={{
              height: "24px",
              width: "24px",
              background: "rgba(0, 0, 0, 0.2)",
              borderRadius: "50%",
            }}
          ></Box>
          <Typography>{post.userName}</Typography>
        </AvatarBox>
      </InfoBox>

      <ImageContainer
        sx={{
          width: isPreview ? "894px" : "553px",
        }}
      >
        {post.image ? (
          <>
            <Image
              src={post.image}
              alt="logo"
              layout="fill"
              objectFit="cover"
              style={{
                borderRadius: "24px",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                borderTop: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            />
            <Caption>Image Caption</Caption>
          </>
        ) : (
          <PlaceholderImage>
            <Typography sx={{ color: "rgba(0, 0, 0, 0.5)" }}>
              No Image Available
            </Typography>
          </PlaceholderImage>
        )}
      </ImageContainer>

      <ShareBox>
        <Typography>Share to</Typography>
        <Image src={facebookLogo} alt="facebook" />
        <Image src={xLogo} alt="x" />
        <Image src={youTubeLogo} alt="youtube" />
      </ShareBox>
    </>
  );
};

export default PostContent;
