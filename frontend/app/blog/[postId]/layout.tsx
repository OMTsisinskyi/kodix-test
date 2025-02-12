import { getAllPosts } from "@/service/actions";
import PostPage from "@/app/blog/[postId]/page";

const PostLayout = async () => {
  const allPosts = await getAllPosts();

  return <PostPage initialPosts={allPosts} />;
};

export default PostLayout;
