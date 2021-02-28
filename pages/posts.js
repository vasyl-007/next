import Head from "next/head";
import MainLayout from "./components/MainLayout";

const Posts = () => {
  return (
    <MainLayout title="Posts page">
      <Head>
        <title>Posts page next</title>
      </Head>
      <h1>Posts page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
        delectus quos quasi voluptatibus, excepturi velit quam harum maxime
        officia culpa eos fugit magni ipsum soluta asperiores tempore id vero
        exercitationem? Explicabo rerum magnam, odio fugit id, provident
        architecto ab dignissimos sint, tempora dolores eos voluptatibus!
        Voluptatum saepe nobis esse eius sint fugit accusamus, dicta ut, eum
      </p>
    </MainLayout>
  );
};

// post
// post/:id

export default Posts;
