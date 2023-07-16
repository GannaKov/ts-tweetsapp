import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";

import { Loader } from "./components/Loader";
const Home = lazy(() => import("./pages/Home/Home"));
const TweetsPage = lazy(() => import("./pages/TweetsPage/TweetsPage"));
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/tweets" element={<TweetsPage />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </Suspense>
  );
}
