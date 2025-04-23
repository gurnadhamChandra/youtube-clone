import { Box, CssBaseline } from "@mui/material";
import { Outlet, Route, Routes } from "react-router-dom";
// import MainRoutes from "./routes/MainRoutes";

import { useSelector } from "react-redux";
import Navbar from "../../views/Navbar/Navbar";
import Sidebarpanel from "../../views/sidebar/SidebarPanel";
const Mainlayout = () => {
  const {istoggelopen}=useSelector((state)=>state.menutoggle)

    return (
        <Box sx={{display:"flex",flexDirection:"column", width:"100%",height:"97vh",overflow: "hidden",}}>
            <CssBaseline/>
           <Box sx={{height:"9%",width:"100%",minHeight: "60px", // Ensure min height even when zoomed out
          maxHeight: "70px",}}>
           <Navbar />
            </Box>
        <Box sx={{display:"flex",flexDirection:"row",width:"100%",height:"91%", overflow: "hidden", flexGrow: 1,}}>
        <Box sx={{height:"100%", width: istoggelopen ? { xs: "25%", sm: "18%", md: "14%" } : "60px",
          minWidth: "50px",
          maxWidth: "280px",transition:"width 0.3s",display:"flex",flexDirection:"column"}}>
               <Sidebarpanel />
            </Box>
            <Box sx={{height:"89vh",flexGrow:1,overflow:"auto", width: istoggelopen ? "86%" : "100%",
      transition: "width 0.3s",pl:2}}>
                <Outlet/>
                {/* <MainRoutes/> */}
            </Box>

      </Box>
      </Box>
    );
}
export default Mainlayout;