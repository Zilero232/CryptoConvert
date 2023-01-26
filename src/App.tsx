import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { fetchLanguages } from "./redux/languages/asyncActions";
import Spinner from "./components/Spinner";

import MainLayout from "./layouts/MainLayout";
import MiniLayout from "./layouts/MiniLayout";
import DefaultLayout from "./layouts/DefaultLayout";

import Home from "./pages/Home";
import { RootState, useAppDispatch } from "./redux/store";
const About = lazy(() => import("./pages/About"));
const Partners = lazy(() => import("./pages/ForPartners"));
const Payment = lazy(() => import("./pages/Payment"));
const Policy = lazy(() => import("./pages/Policy"));
const Rules = lazy(() => import("./pages/Rules"));
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));

const App = () => {
  const dispatch = useAppDispatch();
  const { loading } = useSelector((state: RootState) => state.language)

  useEffect(() => {
    dispatch(fetchLanguages());
  }, []);

  return (
    <>
      {
        loading ?
          <Spinner /> :
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="" element={<Home />} />
              <Route
                path="about"
                element={
                  <Suspense fallback={<Spinner />}>
                    {" "}
                    <About />{" "}
                  </Suspense>
                }
              />
              <Route
                path="partners"
                element={
                  <Suspense fallback={<Spinner />}>
                    <Partners />{" "}
                  </Suspense>
                }
              />
              <Route
                path="policy"
                element={
                  <Suspense fallback={<Spinner />}>
                    {" "}
                    <Policy />
                  </Suspense>
                }
              />
              <Route
                path="rules"
                element={
                  <Suspense fallback={<Spinner />}>
                    <Rules />
                  </Suspense>
                }
              />
            </Route>
            <Route path="/" element={<MiniLayout />}>
              <Route path="payment" element={<Payment />} />
              <Route path="login" element={<Login />} />
            </Route>
            <Route path="/" element={<DefaultLayout />}>
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
      }
    </>
  );
};

export default App;
