import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import CustomFullVideoViewlayout from "../layouts/CustomFullVideoViewLayout";
import WatchVideo from "../views/WatchVideo";


const FullvideoViewRoute = {
    path: "/watch", // Matches /watch/:videoId
    element: <CustomFullVideoViewlayout />,
    children: [
      {
        path: ":videoId", // Matches /watch/abc123
        element: <WatchVideo />
      }
    ]
  };
  

    export default FullvideoViewRoute;