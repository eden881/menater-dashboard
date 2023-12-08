import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routes
import ErrorPage from "./ErrorPage";
import Base from "./routes/Base";
import Dashboard from "./routes/Dashboard";
import NatarList from "./routes/NatarList";
import ArcGis from "./routes/ArcGis";

const router = createBrowserRouter(
  [
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
        {
          path: "arcgis",
          element: <ArcGis />,
        },
      ],
    },
  ],
  {
    basename: process.env.PUBLIC_URL,
  }
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
