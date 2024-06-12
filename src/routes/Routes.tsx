import path from "path";
import React, { lazy } from "react";
import { TRoutes } from "../@types/Routes.types";
// import { BookShelfPage, SearchPage } from "../components/pages";

const SearchPage = lazy(() => import("../components/pages/search/Search"));
const BookShelfPage = lazy(
  () => import("../components/pages/bookShelf/BookShelf")
);
const NotFoundPage = lazy(
  () => import("../components/pages/notFound/NotFound")
);

const AppRoutes: TRoutes[] = [
  {
    path: "/",
    element: <SearchPage />,
  },
  {
    path: "/bookshelf",
    element: <BookShelfPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default AppRoutes;
