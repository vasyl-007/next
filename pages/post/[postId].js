import Link from "next/link";
import { useRouter } from "next/router";
import MainLayout from "../components/MainLayout";

const Post = ({ post }) => {
  const router = useRouter();
  // console.log("router", router);
  console.log("post", post);

  return (
    <MainLayout title="chosen post">
      <h1>Dynamic Post: {router.query.postId}</h1>
      <hr />
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {/* <h2>{router.query.postId}</h2> */}
      <Link href={"/posts"}>Back to all Posts</Link>
    </MainLayout>
  );
};

Post.getInitialProps = async ({ query }) => {
  // console.log("ctx", ctx, "query", ctx.query);
  const res = await fetch(`http://localhost:4200/posts/${query.postId}`);
  const post = await res.json();

  return {
    post,
  };
};

export default Post;
