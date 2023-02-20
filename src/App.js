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

//import other pages lazily to make building js file at first request to our web site faster
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

        {/* First load of this page might be slow due to loader, 
        because react router waits unitl response returns from API then renders the component
        to avoid rendering two times (one at initialization of page and another on response returns from API) */}
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
