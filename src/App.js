import "./App.css";
import { Suspense, lazy } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout/MainLayout";
import Users from "./Pages/Users/Users";
import Loading from "./Components/Loading/Loading";
const Overview = lazy(() => import("./Pages/Overview/Overview"));
const Ideas = lazy(() => import("./Pages/Ideas/Ideas"));
const Tickets = lazy(() => import("./Pages/Tickets/Tickets"));
const NotFound = lazy(() => import("./Pages/NotFound/NotFound"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />} errorElement={<NotFound />}>
        <Route path="/" element={<Overview />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/users" element={<Users />} />
      </Route>
    )
  );
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
