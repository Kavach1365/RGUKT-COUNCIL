import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client"; // Correct import statement
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Clubs from "./components/Clubs/Clubs";
import Events from "./components/Events/Events";
import Calender from "./components/Calender/Calender";
// import Gallery from "./components/Gallery/Gallery";
import BugReport from "./components/BugReport/BugReport";
import Event from "./components/Event/Event";
import AddEvents from "./components/Events/AddEvents";
import GalleryMain from "./components/Gallery/GalleryMain";
import ClubProfile from "./components/ClubProfile/ClubProfile";
import AddClub from "./components/Clubs/AddClub";
import EditEvents from "./components/EditEvents/EditEvents";
import AddClubMember from "./components/AddClubMember/AddClubMember";
import NoticeBoard from "./components/NoticeBoard/NoticeBoard";
import Login from "./components/auth/Login/Login";
import Register from "./components/auth/Register/Register";
import ProtectedRouteSuperAdmin from "./protectedRoutes/ProtectedRouteSuperAdmin";
import EditClub from "./components/EditClub/EditClub";
import ProtectedRouteClubAdmin from "./protectedRoutes/ProtectedRouteClubAdmin";
import ProtectedRouteEventAdmin from "./protectedRoutes/ProtectedRouteEventAdmin";
import LandingPage from "./components/LandingPage/LandingPage";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/clubs",
        element: <Clubs />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/calender",
        element: <Calender />,
      },
      {
        path: "/gallery",
        element: <GalleryMain />,
      },
      {
        path: "/bug-report",
        element: <BugReport />,
      },
      {
        path: "/events/:id",
        element: <Event />,
      },
      {
        path: "/club-profile/:id",
        element: <ClubProfile />,
      },
      {
        path: "/club-profile/:id/edit",
        element: (
          <ProtectedRouteClubAdmin>
            <EditClub />
          </ProtectedRouteClubAdmin>
        ),
      },
      {
        path: "/add-events/:id",
        element: (
          <ProtectedRouteClubAdmin>
            {" "}
            <AddEvents />
          </ProtectedRouteClubAdmin>
        ),
      },
      {
        path: "/add-club",
        element: (
          <ProtectedRouteSuperAdmin>
            <AddClub />
          </ProtectedRouteSuperAdmin>
        ),
      },
      {
        path: "/edit-event/:id",
        element: (
          <ProtectedRouteEventAdmin>
            <EditEvents />
          </ProtectedRouteEventAdmin>
        ),
      },
      {
        path: "/add-club-member/:id",
        element: (
          <ProtectedRouteClubAdmin>
            <AddClubMember />
          </ProtectedRouteClubAdmin>
        ),
      },
      {
        path: "/notice-board",
        element: <NoticeBoard />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
);
