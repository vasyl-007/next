import Head from "next/head";
import Link from "next/link";

const MainLayout = ({ children, title = "Next App" }) => {
  return (
    <>
      <Head>
        <title>{title} | Next Course</title>
        <meta name="keywords" content="next, js, javascript, react" />
        <meta
          name="description"
          content="this is tutorial course about next js"
        />
        <meta charSet="utf-8" />
      </Head>
      <nav>
        {/* <h1>NAVIGATION</h1> */}
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </nav>

      <main>{children}</main>
      <style jsx>
        {`
          nav {
            position: fixed;
            height: 60px;
            left: 0;
            top: 0;
            right: 0;
            background: purple;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }

          nav a {
            color: #fff;
            text-decoration: none;
          }

          main {
            margin-top: 60px;
            padding: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default MainLayout;
