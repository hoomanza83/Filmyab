import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.scss";
// import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Home from "./components/Home/Home";
import RootLayout from "./components/Pages/RootLayout";
import ErrorPage from "./components/Pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" exact element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="/movie">
        <Route path=":imdbID" element={<MovieDetail />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
