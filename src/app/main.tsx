import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/styles.css";
import MainPage from "../pages/MainPage/ui/MainPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <h1>404 Error Not Found</h1>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
