import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import { Loader } from "./components/shared";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { path, element } = route;
            return <Route key={index} path={path} element={element} />;
          })}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
