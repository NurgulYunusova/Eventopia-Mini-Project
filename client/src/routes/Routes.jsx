import NotFoundPage from "../pages/NotFoundPage";
import Home from "../pages/Home";
import Product from "../pages/Product";


export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/products',
        element: <Product />
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
]