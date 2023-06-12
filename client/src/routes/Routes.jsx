import NotFoundPage from "../pages/NotFoundPage";
import Home from "../pages/Home";
import EventDetails from "../pages/EventDetails";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/eventDetails/:id",
    element: <EventDetails />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
