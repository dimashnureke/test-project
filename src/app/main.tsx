import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/styles.css";
import MainPage from "../pages/MainPage/ui/MainPage.tsx";
import DetailedCard from "../pages/DetailedCard/ui/DetailedCard.tsx";
import Header from "../widgets/Header/ui/Header.tsx";
import "../shared/i18n/i18n.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <h1>404 Error Not Found</h1>,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/country/:cardId",
        element: <DetailedCard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback = {<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </StrictMode>
);
