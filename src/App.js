import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import HomePage from "./pages/Home";
// import Product from "./pages/Product";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import Product from "./pages/Product";
import ErrorPage from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";
import { Children } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "products", element: <Product /> },
      { path: "products/:productId", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
