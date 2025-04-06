// import { Box } from "@mui/material";
// import { Route, Routes } from "react-router-dom";
// import MainRoutes from "./routes/MainRoutes";
// import Navbar from "./views/Navbar/Navbar";
// import Sidebarpanel from "./views/sidebar/SidebarPanel";
// import { useSelector } from "react-redux";

// function AppContent({toggleSidebar}) {
//   const {istoggelopen}=useSelector((state)=>state.menutoggle)

//   return (
   
//    <Routes>
//     <Route path="*"
//     element={
//       <Box sx={{display:"flex",flexDirection:"column", width:"100%",height:"97vh"}}>
//            <Box sx={{height:"9%",width:"100%"}}>
//            <Navbar />
//             </Box>
//         <Box sx={{display:"flex",flexDirection:"row",width:"100%",height:"91%"}}>
//         <Box sx={{height:"100%",width: istoggelopen? "14%":"50px",transition:"width 0.3s",display:"flex",flexDirection:"column"}}>
//                <Sidebarpanel />
//             </Box>
//             <Box sx={{height:"89vh", width: istoggelopen ? "86%" : "100%",
//       transition: "width 0.3s",}}>
                
//                 <MainRoutes/>
//             </Box>

//       </Box>
//       </Box>
//     }
//     />
//    </Routes>
//   );
// }
// export default AppContent;