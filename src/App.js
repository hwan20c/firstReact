import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/hello",
      element: <h1>hello</h1>,
    },
    {
      path: "/movie/:id",
      element: <Detail />,
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <RouterProvider router={router}>
        <Routes>
          <Route path="/hello" element={<h1>hello</h1>} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </RouterProvider>
    </Router>
  );
}

export default App;
