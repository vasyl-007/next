import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import MainLayout from "./components/MainLayout";

const Posts = ({ posts }) => {
  // const [posts, setPosts] = useState();

  // useEffect(() => {
  //   async function load() {
  //     const response = await fetch("http://localhost:4200/posts");
  //     const json = await response.json();
  //     setPosts(json);
  //   }
  //   load();
  // }, []);

  return (
    <MainLayout title="Posts page">
      <Head>
        <title>Posts page next</title>
      </Head>
      <h1>Posts page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/[id]`} as={`/post/${post.id}`}>
              {post.title}
            </Link>
            {/* <Link href={`/post/${post.id}`}>{post.title}</Link> */}
          </li>
        ))}
      </ul>
      {/* <pre>{JSON.stringify([], null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      {/* <pre>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
        delectus quos quasi voluptatibus, excepturi velit quam harum maxime
        officia culpa eos fugit magni ipsum soluta asperiores tempore id vero
        exercitationem? Explicabo rerum magnam, odio fugit id, provident
        architecto ab dignissimos sint, tempora dolores eos voluptatibus!
        Voluptatum saepe nobis esse eius sint fugit accusamus, dicta ut, eum
      </pre> */}
    </MainLayout>
  );
};

Posts.getInitialProps = async () => {
  const res = await fetch("http://localhost:4200/posts");
  const allPosts = await res.json();

  return {
    posts: allPosts,
  };
};

// post
// post/:id

export default Posts;
