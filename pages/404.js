import Link from "next/link";
import MainLayout from "./components/MainLayout";
import classes from '../styles/error.module.scss';

const ErrorPage = () => {
  return (
    <MainLayout>
      <h1 className={classes.error}>Error 404</h1>
      <Link href={"/"}>
        <button>Please go back to safety</button>
      </Link>
    </MainLayout>
  );
};

export default ErrorPage;
