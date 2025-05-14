import { Card, CardContent, CardMedia, Grid, IconButton, Typography,Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import youtubeService from "../services/youtubeService";
import { MoreVertical } from "react-feather";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setVideos } from "../store/slice/youtubeSlice";
import Skeleton from "react-loading-skeleton";

const VideoList=({data,isLoading,error,videos,variant})=>{
    const dispatch=useDispatch()
   
    const listToRender = data?.length > 0 ? data : videos;
        const navigate=useNavigate()
        useEffect(()=>{
             if(data&&data.length>0){
                dispatch(setVideos(data));
             }
        },[])

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading videos</div>;
    return(
        <Grid container sx={{height:"100%"}} spacing={2}>
           {listToRender&&listToRender.length>0&&listToRender?.map((video) => {
            const { id, snippet, statistics } = video;
            const videoId = typeof id === 'string' ? id : id.videoId;

            if(variant==="home"){
              return(
                  <Grid size={{xs:12 ,sm:6 ,md:4 ,lg:3 }}  key={videoId} onClick={()=>navigate(`/watch/:${videoId}`,{state:{listToRender}})}>
                   <Box
              component="img"
              src={snippet?.thumbnails?.high?.url}
              alt={snippet?.title}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                objectFit: 'cover',
                cursor: 'pointer',
              }}
              onClick={()=>navigate(`/watch/:${videoId}`)}
            />
                    <Box mt={1} display="flex" justifyContent="space-between" alignItems="start"  sx={{ width: '100%',  }}>
                    <Box sx={{flex: 1,cursor:"pointer",
                  minWidth: 0, // important to allow ellipsis/wrap
                  }} onClick={()=>navigate(`/watch/:${videoId}`)}>
                <Typography variant="subtitle2" fontWeight="bold"  sx={{
                    wordWrap: 'break-word',
                    overflow: 'hidden',
                    whiteSpace: 'normal',
                  }}>
                  {snippet?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary"  sx={{
                    wordWrap: 'break-word',
                    overflow: 'hidden',
                    whiteSpace: 'normal',
                  }}>
                  {snippet?.channelTitle}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{
                    wordWrap: 'break-word',
                    overflow: 'hidden',
                    whiteSpace: 'normal',
                  }}>
                  {Number(statistics?.viewCount).toLocaleString()} views
                </Typography>
              </Box>
              <IconButton size="small" aria-label="more options">
                <MoreVertical fontSize="small" />
              </IconButton>
                    </Box>
                    </Grid>
            );
            }


            if(variant==="watchVideo"){
              return(
                <Grid  key={videoId} onClick={() => navigate(`/watch/:${videoId}`)} sx={{ cursor: "pointer" }}>
                <Box display="flex" justifyContent={"space-between"} gap={2}>
                  <Box
                    component="img"
                    src={snippet?.thumbnails?.medium?.url}
                    alt={snippet?.title}
                    sx={{
                      width: 160,
                      height: 90,
                      borderRadius: 2,
                      objectFit: "cover",
                    }}
                  />
                  <Box flex="1" minWidth={0}>
                    <Typography variant="subtitle2" fontWeight="bold" noWrap>
                      {snippet?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {snippet?.channelTitle}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {Number(statistics?.viewCount).toLocaleString()} views
                    </Typography>
                  </Box>
                  <IconButton size="small" aria-label="more options">
                <MoreVertical fontSize="small" />
              </IconButton>
                </Box>
              </Grid>
            );
          }
              
            
})}
            </Grid>
    )
}
export default VideoList;