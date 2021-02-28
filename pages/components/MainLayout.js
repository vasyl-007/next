import { Children } from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <nav>
        <h1>NAVIGATION</h1>
      </nav>

      <main>{children}</main>
    </>
  );
};

export default MainLayout;
