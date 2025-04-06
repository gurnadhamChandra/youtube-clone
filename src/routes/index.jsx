import { useRoutes } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import FullvideoViewRoute from "./FullvideoViewRoute";
export default function ThemeRoutes() {
  return useRoutes(
    [MainRoutes,FullvideoViewRoute]
  )

}