"use client";

import PostCarousel from "@/components/postCarousel";
import Comments from "@/components/postComment";
import PostContent from "@/components/postContent";
import { getPostById } from "@/service/actions";
import { Post } from "@/types/post-types";
import { Box, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { StyledCommentsScrollBar, Title } from "../style";
import relatedArticlesIcon from "@/public/assets/relatedArticles.svg";
import HeaderAuthButton from "@/components/headerAuthButton";
import Image from "next/image";

const PostPage = ({ initialPosts }: { initialPosts: Post[] }) => {
  const params = useParams();
  const postId = params?.postId;

  const [post, setPost] = useState<Post | null>(null);
  const [allPosts, setAllPosts] = useState<Post[]>(initialPosts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fullInfoPost = await getPostById(Number(postId));
        setPost(fullInfoPost);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", marginTop: "20vh" }}>Loading...</Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        padding: "0 15px",
      }}
    >
      <Box>
        {post ? (
          <>
            <PostContent post={post} isPreview={false} />
            <Title sx={{ textAlign: "start" }}>Comments</Title>
            <StyledCommentsScrollBar>
              {post.comments.map((comment) => (
                <Box key={comment.id}>
                  <Comments comment={comment} />
                </Box>
              ))}
            </StyledCommentsScrollBar>
          </>
        ) : (
          <Typography>Can't get post info</Typography>
        )}
      </Box>
      <Box sx={{ width: "470px", marginTop: "33px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
            <Image
              src={relatedArticlesIcon}
              alt="logo"
              style={{ marginRight: "8px" }}
            ></Image>
            Related Articles
          </Typography>
          <HeaderAuthButton>Read more</HeaderAuthButton>
        </Box>
        <PostCarousel posts={allPosts} vertical />
      </Box>
    </Box>
  );
};

export default PostPage;
