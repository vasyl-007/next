import { useRouter } from "next/router";
import MainLayout from "../components/MainLayout";

const Post = () => {
  const router = useRouter();
  console.log("router", router);

  return (
    <MainLayout title="chosen post">
      <h1>Dynamic Post: {router.query.postId}</h1>
      {/* <h2>{router.query.postId}</h2> */}
    </MainLayout>
  );
};

export default Post;
