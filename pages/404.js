import Link from "next/link";

const ErrorPage = () => {
  return (
    <>
      <h1>Error 404</h1>
      <Link href="/">
        <button>Please go back to safety</button>
      </Link>
    </>
  );
};

export default ErrorPage;
