import { Box, CssBaseline } from "@mui/material";
import { Outlet, Route, Routes } from "react-router-dom";
// import MainRoutes from "./routes/MainRoutes";

import { useSelector } from "react-redux";
import Navbar from "../../views/Navbar/Navbar";
import Sidebarpanel from "../../views/sidebar/SidebarPanel";
const Mainlayout = () => {
  const {istoggelopen}=useSelector((state)=>state.menutoggle)

    return (
        <Box sx={{display:"flex",flexDirection:"column", width:"100%",height:"97vh"}}>
            <CssBaseline/>
           <Box sx={{height:"9%",width:"100%"}}>
           <Navbar />
            </Box>
        <Box sx={{display:"flex",flexDirection:"row",width:"100%",height:"91%"}}>
        <Box sx={{height:"100%",width: istoggelopen? "14%":"50px",transition:"width 0.3s",display:"flex",flexDirection:"column"}}>
               <Sidebarpanel />
            </Box>
            <Box sx={{height:"89vh", width: istoggelopen ? "86%" : "100%",
      transition: "width 0.3s",}}>
                <Outlet/>
                {/* <MainRoutes/> */}
            </Box>

      </Box>
      </Box>
    );
}
export default Mainlayout;