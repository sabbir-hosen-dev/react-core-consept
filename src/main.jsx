import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Error from "./Components/Error";

import Users from "./Components/Users";
import UserDetels from "./Components/UserDetels";
import Form from "./Components/Form";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
   
    children: [
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/user/:id",
        element: <UserDetels />,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      },
      {
        path:"/form",
        element : <Form />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
