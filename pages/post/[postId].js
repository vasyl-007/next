import { useRouter } from "next/router";
import { Fragment } from "react";

const Post = () => {
  const router = useRouter();
  console.log("router", router);

  return (
    <Fragment>
      <h1>Dynamic Post: {router.query.postId}</h1>
      {/* <h2>{router.query.postId}</h2> */}
    </Fragment>
  );
};

export default Post;
