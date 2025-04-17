import { Button, Grid } from '@mui/material'
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
        console.log("sucesssdaraaaa",data?.pages[0]?.data?.items)
        const allItems = data.pages.flatMap(p => p.data.items);
        console.log("allItems",data,allItems)
        dispatch(setVideos(allItems));
      }
    })
       console.log("daaaataaaaa",data)

useEffect(()=>{
const container=scrollRef?.current
console.log("container",container)
console.log("scrolled to bottom")
const handleScroll=()=>{
  if(!container || !hasNextPage || isFetchingNextPage) return;
  const {scrollTop,clientHeight,scrollHeight}=container
  if(scrollTop+clientHeight>=scrollHeight-1){
    fetchNextPage()
  }
  container.addEventListener("scroll",handleScroll)
  return () => {
    container.removeEventListener("scroll",handleScroll)
  }
}
},[isFetchingNextPage,hasNextPage,fetchNextPage])



      //  const handleScroll = (e) => {
      //   const bottom =
      //     e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
      //   if (bottom && hasNextPage && !isFetchingNextPage) {
      //     fetchNextPage();
      //   }
      // };
      console.log("isFetchingNextPage",isFetchingNextPage,hasNextPage)
  return (
   
    <Grid container display={"flex"} flexDirection="column"   sx={{height:"100%", width:"100%",position:"relative",p:1}}>
        <Grid sx={{width:"100%",py:1,height:"10%"}}>
           <ButtonList/>
        </Grid>
        <PerfectScrollbar style={{height:"90%",width:"100%",
        // overflowY:"auto",overflowX:"hidden"
      }} 
      containerRef={(ref) => (scrollRef.current = ref)} 
        // onScrollY={handleScroll}
        >
        <Grid sx={{width:"100%",height:"100%"}}>
            <VideoList 
            // data={data?.pages[0].data?.items} 
            data={data?.pages?.flatMap((page) => page.data.items)}
            isLoading={isLoading} error={error} videos={videos} variant="home"
            />
        </Grid>
        {isFetchingNextPage && (
      <Grid textAlign="center" py={2}>
        <span>Loading more videos...</span>
      </Grid>
    )}
        </PerfectScrollbar>
        </Grid>
  )
}

export default Home