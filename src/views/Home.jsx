import { Button, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import ButtonList from '../components/ButtonList'
import {useDispatch, useSelector} from 'react-redux'
import config from '../config/envConfig'
import { useQuery } from '@tanstack/react-query'
import youtubeService from '../services/youtubeService'
import VideoList from './VideoList'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { setVideos } from '../store/slice/youtubeSlice'
function Home() {
    const {videos}=useSelector((state)=>state.youtube)
    const dispatch=useDispatch()
    const {data,isLoading,error}=useQuery({
            queryKey: ['popularVideos'],
        queryFn: youtubeService.getAllPopularVideos,
        onSuccess: (data) => {
          if (Array.isArray(data?.data?.items)) {
            dispatch(setVideos(data.data.items));
          } else {
            console.warn("🚫 Data is not in expected format", data);
          }
          },
        })
        useEffect(()=>{
            if(Array.isArray(data?.data?.items)){
                dispatch(setVideos(data?.data?.items))
            }
        },[data])


  return (
    <Grid container display={"flex"} flexDirection="column"   sx={{height:"100%", width:"100%",position:"relative",p:1}}>
        <Grid sx={{width:"100%",py:1,height:"10%"}}>
           <ButtonList/>
        </Grid>
        <PerfectScrollbar style={{height:"90%",width:"100%",overflowY:"auto",overflowX:"hidden"}}>
        <Grid sx={{width:"100%",height:"100%"}}>
            <VideoList data={data?.data?.items} isLoading={isLoading} error={error} videos={videos} variant="home"
            />
        </Grid>
        </PerfectScrollbar>
        </Grid>
  )
}

export default Home