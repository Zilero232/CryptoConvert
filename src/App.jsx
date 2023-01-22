import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import MiniLayout from "./layouts/MiniLayout";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Partners = lazy(() => import("./pages/ForPartners"));
const Payment = lazy(() => import("./pages/Payment"));
const Policy = lazy(() => import("./pages/Policy"));
const Rules = lazy(() => import("./pages/Rules"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="about"
          element={
            <Suspense fallback={<div>Загрузка...</div>}>
              {" "}
              <About />{" "}
            </Suspense>
          }
        />
        <Route
          path="partners"
          element={
            <Suspense fallback={<div>Загрузка...</div>}>
              <Partners />{" "}
            </Suspense>
          }
        />
        <Route
          path="policy"
          element={
            <Suspense fallback={<div>Загрузка...</div>}>
              {" "}
              <Policy />
            </Suspense>
          }
        />
        <Route
          path="rules"
          element={
            <Suspense fallback={<div>Загрузка...</div>}>
              <Rules />
            </Suspense>
          }
        />
      </Route>
      <Route path="/" element={<MiniLayout />}>
        <Route path="payment" element={<Payment />} />
      </Route>
    </Routes>
  );
};

export default App;
