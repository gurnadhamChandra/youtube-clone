import { Button, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import ButtonList from '../components/ButtonList'
import {useSelector} from 'react-redux'
import config from '../config/envConfig'
import { useQuery } from '@tanstack/react-query'
import youtubeService from '../services/youtubeService'
import VideoList from './VideoList'
import PerfectScrollbar from 'react-perfect-scrollbar'
function Home() {
    const {videos}=useSelector((state)=>state.youtube)
    

  return (
    <Grid container display={"flex"} flexDirection="column"   sx={{height:"100%", width:"100%",position:"relative",p:1}}>
        <Grid sx={{width:"100%",py:1,height:"10%"}}>
           <ButtonList/>
        </Grid>
        <PerfectScrollbar style={{height:"90%",width:"100%",overflowY:"auto",overflowX:"hidden"}}>
        <Grid sx={{width:"100%",height:"100%"}}>
            <VideoList 
            />
        </Grid>
        </PerfectScrollbar>
        </Grid>
  )
}

export default Home