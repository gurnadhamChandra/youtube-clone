import { Box, IconButton } from "@mui/material"
import CustomButton from "./Custombutton"
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
const ButtonList=()=>{
    const scrollRef = useRef(null);

    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const buttons = [ "All",  "Gaming",  "Songs", "Live",  "Cricket",  "Soccer",   "News",   "Cooking",  "History",  "T-Series", "Motivation",
        "Music",  "Love Songs",  "Album", "Theater", "Drama",]


        const checkScroll = () => {
            const el = scrollRef.current;
            if (!el) return;
        
            const { scrollLeft, scrollWidth, clientWidth } = el;
        
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1);
          };
          useEffect(()=>{
            const el = scrollRef.current;
            if(el){
                checkScroll();
                el.addEventListener("scroll", checkScroll);
            }
            return()=>{
                if(el){
                    el.removeEventListener("scroll", checkScroll);
                }
            }
          },[])


        const scroll = (scrollOffset) => {
            scrollRef.current.scrollBy({
                // top: 0,
                left: scrollOffset,
                behavior: "smooth",
            });
        }
        return(
            <Box sx={{display:"flex",flexDirection:"row" ,position:"relative",alignItems:"center",width:"100%",height:"100%",gap:"15px"}}>
                {showLeftArrow&&<IconButton onClick={() => scroll(-200)}>
                <ChevronLeft />
               </IconButton>}
               <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE
          "&::-webkit-scrollbar": {
            display: "none", // Chrome
          },
          gap: 1,
          flex: 1,
          borderBottom: "none",
          pb:1  
        }}
      >
        {buttons.map((button, index) => (
          <CustomButton key={index} name={button} />
        ))}
      </Box>
               {showRightArrow&& <IconButton onClick={() => scroll(200)}>
                 <ChevronRight />
                </IconButton>}
            </Box>
        )
}
export default ButtonList