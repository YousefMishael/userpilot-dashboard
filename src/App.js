import "./App.css";
import { Suspense, lazy } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Overview from "./Pages/Overview/Overview";
import MainLayout from "./Layout/MainLayout/MainLayout";
import Loading from "./Components/Loading/Loading";
import { getUsers } from "./Pages/Users/Utils/Utils";
import User from "./Pages/User/User";

// const Overview = lazy(() => import("./Pages/Overview/Overview"));
const Ideas = lazy(() => import("./Pages/Ideas/Ideas"));
const Tickets = lazy(() => import("./Pages/Tickets/Tickets"));
const NotFound = lazy(() => import("./Pages/NotFound/NotFound"));
const Users = lazy(() => import("./Pages/Users/Users"));

async function getAllUsers() {
  return getUsers();
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />} errorElement={<NotFound />}>
        <Route path="/" element={<Overview />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/users" element={<Users />} loader={getAllUsers}>
          <Route path=":userId" element={<User />} />
        </Route>
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
