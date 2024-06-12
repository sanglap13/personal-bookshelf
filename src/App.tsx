import React, { lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppRoutes from "./routes/Routes";

const App = () => {
  return (
    <Router>
      <Routes>
        {AppRoutes.map((route, index) => {
          const { path, element } = route;
          return <Route key={index} path={path} element={element} />;
        })}
      </Routes>
    </Router>
  );
};

export default App;
