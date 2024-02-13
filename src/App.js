import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

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
  return <RouterProvider router={router} />;
}

export default App;
