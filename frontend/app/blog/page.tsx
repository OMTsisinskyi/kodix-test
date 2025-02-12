"use client";

import { getAllPosts, getPreviewPost } from "@/service/actions";
import { Box } from "@mui/material";
import { Container } from "./style";
import { useEffect, useState } from "react";
import { Post } from "@/types/post-types";
import PostCarousel from "@/components/postCarousel";
import PostContent from "@/components/postContent";

const BlogPage = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const post = await getPreviewPost();
        setPost(post);

        const allPosts = await getAllPosts();
        setAllPosts(allPosts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", marginTop: "20vh" }}>Loading...</Box>
    );
  };

  return (
    <Container>
      {post ? (
        <PostContent post={post} isPreview={true} />
      ) : (
        <Box>Can't get a preview post info</Box>
      )}

      <PostCarousel posts={allPosts} vertical={false} />
    </Container>
  );
};

export default BlogPage;
