import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import NotFound from "../layout/NotFound";
import Landing from "../pages/Landing";
import AboutUs from "../pages/AboutUs"
import Contactus from "../pages/ContactUs"
import Members from "../pages/Members"
import Admin from "../pages/Admin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
      <Route index element={<Landing />} />
      {/* <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<Contactus />} /> */}
      <Route path="/members" element={<Members />} />
      <Route path="/admin" element={<Admin/>} />
    </Route>
  )
);

const Root = () => {
  return <RouterProvider router={router} />;
};

export default Root;
