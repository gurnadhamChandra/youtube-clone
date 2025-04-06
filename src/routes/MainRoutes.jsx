import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import Mainlayout from "../layouts/Mainlayout";
const HomeSec=lazy(()=>import("../views/Home"));
const Shorts=lazy(()=>import("../views/Shorts"));

const MainRoutes =  {
    path: "/", // Root path
  element: <Mainlayout />, // Layout wrapper for all child pages
  children: [
    {
      index: true, // Default route when you go to `/`
      element: <HomeSec />
    },
    {
      path: "home", // Accessible at `/home`
      element: <HomeSec />
    },
    {
      path: "shorts", // Accessible at `/shorts`
      element: <Shorts />
    }
  ]

    }

    export default MainRoutes;