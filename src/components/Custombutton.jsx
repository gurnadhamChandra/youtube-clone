import { Button } from "@mui/material"
import { Plus } from "react-feather"
const CustomButton=({name,sx={},onClick,disabled})=>{
return(
<Button variant="contained" onClick={onClick} disabled={disabled}
                sx={{
                  background: "rgba(0, 0, 0, 0.05)",
                  color: "black",
                //   textTransform: "none",
                px: 2, // horizontal padding for spacing
                py: 1, // vertical padding
                  borderRadius: "20px",
                  padding: "5px 10px",
                  fontSize: { xs: "12px", sm: "14px" },
                  whiteSpace: "nowrap", // prevents wrapping
                  width: "auto", // ensures it grows with content
                  minWidth: "fit-content", // ensures no clipping
                  maxWidth: "100%",...sx}}>
                    {name}
                  </Button>
)
}
export default CustomButton