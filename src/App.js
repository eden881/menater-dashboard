import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routes
import ErrorPage from "./ErrorPage";
import Base from "./routes/Base";
import Dashboard from "./routes/Dashboard";
import NatarList from "./routes/NatarList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "natars",
        element: <NatarList />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
