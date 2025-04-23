import { Box, Button, CircularProgress, Grid } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import ButtonList from '../components/ButtonList'
import {useDispatch, useSelector} from 'react-redux'
import config from '../config/envConfig'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import youtubeService from '../services/youtubeService'
import VideoList from './VideoList'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { setVideos } from '../store/slice/youtubeSlice'
function Home() {
    const {videos}=useSelector((state)=>state.youtube)
       const { searchResults}=useSelector(state=>state.searchRe)
    
    const scrollRef=useRef(null)
    const dispatch=useDispatch()
    // const {data,isLoading,error}=useQuery({
    //         queryKey: ['popularVideos'],
    //     queryFn: youtubeService.getAllPopularVideos,
    //      staleTime: 0, // ⬅️ ensures it always refetches on refresh
    //      cacheTime: 0, // ⬅️ optional: prevents stale cache
    //     refetchOnWindowFocus: true, // ⬅️ optional: triggers when window regains focus
    // onSuccess: (data) => {
    //   if (data?.data?.items.length>0) {
    //     console.log("sucesssdaraaaa",data?.data?.items)
    //     dispatch(setVideos(data?.data?.items));
    //   } else {
    //     console.warn('🚫 Data is not in expected format', data);
    //   }
    // },
    //     })

    const {data,fetchNextPage,isFetchingNextPage,hasNextPage,isLoading,error}=useInfiniteQuery({
      queryKey:["PopularVideos"],
      queryFn:({pageParam=""})=>youtubeService.getAllPopularVideos(pageParam),
      getNextPageParam:(LastPage)=>{
        return LastPage?.data?.nextPageToken || undefined;
      },
      staleTime: 0,
      cacheTime: 0,
      refetchOnWindowFocus: true,
      onSuccess: (data) => {
        const allItems = data.pages.flatMap(p => p.data.items);
        dispatch(setVideos(allItems));
      }
    })

useEffect(()=>{
const container=scrollRef?.current
if (!container) return;

const handleScroll=()=>{
  const {scrollTop,clientHeight,scrollHeight}=container
  if(scrollTop+clientHeight>=scrollHeight-50){
    if(hasNextPage && !isFetchingNextPage){
      fetchNextPage()
    }
  }
  
}
container.addEventListener("scroll",handleScroll)
  return () => {
    container.removeEventListener("scroll",handleScroll)
  }
},[isFetchingNextPage,hasNextPage,fetchNextPage])


  return (
   
    <Grid container display={"flex"} flexDirection="column"   sx={{height:"100%", width:"100%",position:"relative",p:1}}>
        <Grid sx={{width:"100%",py:1,height:"10%"}}>
           <ButtonList/>
        </Grid>
        <Box
           ref={scrollRef}
          sx={{
            height: "90%",
            width: "100%",
            overflowY: "auto",
            scrollBehavior: "smooth", //  smooth behavior for scrolling
            pr: 1, //  padding right to avoid cut-off
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#ccc",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "transparent",
            },
          }}
          >


        <Grid sx={{width:"100%",height:"100%"}}>
            <VideoList 
            // data={data?.pages[0].data?.items} 
            data={searchResults.length > 0 ? searchResults :data?.pages?.flatMap((page) => page.data.items)}
            isLoading={isLoading} error={error} videos={videos} variant="home"
            />
        </Grid>
        {isFetchingNextPage && (
      <Grid display="flex" justifyContent="center" textAlign="center" py={2}>
        <CircularProgress  />
      </Grid>
    )}
    </Box>
        </Grid>
  )
}

export default Home