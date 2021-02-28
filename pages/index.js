import Head from "next/head";
import Link from "next/link";
import MainLayout from "./components/MainLayout";

const Index = () => {
  return (
    <MainLayout title="Home Page">
      <Head>
        <title>Next JS</title>
        {/* <meta name="keywords" content="next, js, javascript, react" />
        <meta
          name="description"
          content="this is tutorial course about next js"
        />
        <meta charSet="utf-8" /> */}
      </Head>
      <h1>Hello Next.js</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        incidunt cumque veniam voluptates dolores ducimus totam corrupti libero.
        Dolor, nobis animi quae autem similique voluptate sequi doloribus cumque
        laudantium aliquid exercitationem!
      </p>
      <p>
        <Link href="/about">About</Link>
      </p>
      <p>
        <Link href={"/posts"}>Posts</Link>
      </p>
    </MainLayout>
  );
};

export default Index;
