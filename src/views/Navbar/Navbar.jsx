import {
    AppBar,
    Grid,
    IconButton,
    InputBase,
    Typography,
    Box,
    Button,
    useTheme,
    useMediaQuery,
  } from "@mui/material";
  import Youtube from "../../assets/youtube.png";
  import { Bell, Menu, Mic, Plus, Search } from "react-feather";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../store/slice/menuSlice";
  
  const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const navigate=useNavigate()
    const {istoggelopen}=useSelector((state)=>state.menutoggle)
    const dispatch=useDispatch()

    const toggleSidebar = () => {
        dispatch(toggleMenu())
    }
  
    return (
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          height: "100%",
          boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
          borderBottom: "1px solid #E0E0E0",
          zIndex: 1,
          margin: 0,
          padding: { xs: "5px 10px", sm: "8px 16px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          alignItems={"center"}
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          {/* Logo Section */}
          <Grid  size={{xs:6, sm:3}}>
            <Box display="flex" alignItems="center">
              <Menu style={{ color: "black", width: 24, height: 24 ,cursor:"pointer"}} onClick={()=>toggleSidebar()}/>
              <Box ml={2} display="flex" alignItems="center" sx={{cursor:"pointer"}} onClick={()=>navigate("/home")}>
                <img src={Youtube} alt="noimage" width="29" />
                {!isMobile && (
                  <Typography sx={{ color: "black", ml: 1 }} >YouTube</Typography>
                )}
              </Box>
            </Box>
          </Grid>
  
          {/* Search Section */}
          <Grid
            size={{xs:12,sm:6,md:6,lg:4}}
            sx={{ mt: { xs: 1, sm: 0 } }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                // flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #ccc",
                  borderRadius: "25px",
                  paddingLeft: "10px",
                  width: { xs: "100%", sm: "90%" },
                }}
              >
                <InputBase
                  size="small"
                  placeholder="Search"
                  sx={{ flex: 1, padding: "6px", fontSize: "16px" }}
                />
                <IconButton
                  sx={{
                    borderRadius: "0 25px 25px 0",
                    background: "#f8f8f8",
                    padding: "10px",
                  }}
                >
                  <Search sx={{ color: "black" }} />
                </IconButton>
              </Box>
  
              <Box sx={{ ml: 1 }}>
                <IconButton
                  sx={{ background: "#f1f1f1", borderRadius: "50%" }}
                >
                  <Mic />
                </IconButton>
              </Box>
            </Box>
          </Grid>
  
          {/* Right Section */}
          <Grid
            size={{xs:12,sm:3,md:4,lg:3}}
            sx={{ mt: { xs: 1, sm: 0 } }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "flex-end" },
                width: "100%",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                startIcon={<Plus size={20} />}
                sx={{
                  background: "rgba(0, 0, 0, 0.05)",
                  color: "black",
                  textTransform: "none",
                  borderRadius: "20px",
                  padding: "5px 10px",
                  fontSize: { xs: "12px", sm: "14px" },
                }}
              >
                Create
              </Button>
  
              <IconButton>
                <Bell size={20} />
              </IconButton>
  
              <Box
                sx={{
                  width: "35px",
                  height: "35px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(0, 0, 0, 0.05)",
                  borderRadius: "50%",
                }}
              >
                <Typography
                  sx={{
                    color: "black",
                    fontSize: { xs: "12px", sm: "14px" },
                    fontWeight: "bold",
                  }}
                >
                  AB
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </AppBar>
    );
  };
  
  export default Navbar;
  