import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  console.log("router", router);

  return <h1>Dynamic Post</h1>;
};

export default Post;
