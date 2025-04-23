import { Box, Divider, Drawer, Typography } from "@mui/material"
import menuItems from "../../menu-items"
import { NavLink } from "react-router-dom";
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useSelector } from "react-redux";
const Sidebarpanel=()=>{
    const {istoggelopen}=useSelector((state)=>state.menutoggle)
    

    const sectionTitles = {
        mainSection: "",
        youSection: "You",
        subscriptionsSection: "Subscriptions",
        helpers:''
      };


    return(
       <Box sx={{width:"100%",height:"100%",
    //    backgroundColor:"#f0f0f0",border:"1px solid red"
       }}>
       <Drawer 
        variant="permanent"
       sx={{ 
        width: istoggelopen ? { xs: "68vw", sm: 200, md: 220 } : 60,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: istoggelopen ? { xs: "68vw", sm: 200, md: 220 } : 50,
          // minWidth: 50,
          //   maxWidth: 300,
          transition: "width 0.3s ease-in-out",
        //   overflowX: "hidden",
        overflow:"visible",
         
        //   backgroundColor: "#f0f0f0",
        position: "absolute",
        top: "62px", // ✅ height of your AppBar/Navbar
        height: "calc(100vh - 62px)", // ✅ sidebar takes height below navbar
          border: "none",}
       }}>
        <Box sx={{height:"100%", overflowY: "auto",
        px: istoggelopen ? 1 : 0,
            "&::-webkit-scrollbar": {
              width: "5px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#c0c0c0",
              borderRadius: "4px",
              visibility: "hidden",
            },
            "&:hover::-webkit-scrollbar-thumb": {
              visibility: "visible",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "transparent",
            }}}>
<Box sx={{paddingTop:2}}>
    {Object.entries(menuItems).map(([section, items],id) => (
    <Box key={section} sx={{marginBottom: 2}}>
        {istoggelopen && sectionTitles[section] && (
            <Typography
            variant="caption"
            sx={{ pl: 2, color: "#606060", fontWeight: "bold", mb: 1 }}
          >
            {sectionTitles[section]}
          </Typography>
        )}
        {items.map(({Name, Icon, path},index) => (
          <NavLink 
            to={path}
            key={index}
            style={{ textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: istoggelopen ? "flex-start" : "center",
                gap: istoggelopen ? "12px" : 0,
                padding: "8px 16px",
                borderRadius: "10px",
                margin: "4px 8px",
                color: "black",
            }}>
                 <Icon size={20} />
                 {istoggelopen && <Typography>{Name}</Typography>}
            </NavLink>
            // onClick={toggleSidebar}
        ))}
         {id !== Object.entries(menuItems).length - 1 && (
                <Divider sx={{ my: 1 }} />
              )}
        </Box>
    ))}
 </Box> 
 </Box>
       </Drawer>
        </Box>
    )
}
export default Sidebarpanel