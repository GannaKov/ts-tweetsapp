import React from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Link, Header } from "./SharedLayout.styled";
import { Loader } from "../Loader";

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tweets">Tweets</Link>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default SharedLayout;
