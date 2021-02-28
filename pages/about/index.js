import React from "react";
import Router from "next/router";
import MainLayout from "../components/MainLayout";

export default function About() {
  const linkClickHandler = () => {
    Router.push("/");
  };

  return (
    <MainLayout>
      <h1>About page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
        delectus quos quasi voluptatibus, excepturi velit quam harum maxime aut?
        Quam officia labore maxime, reprehenderit iusto beatae quos?
      </p>
      <button onClick={linkClickHandler}>Go back to home</button>
      <button onClick={() => Router.push("/posts")}>Go to posts</button>
    </MainLayout>
  );
}
