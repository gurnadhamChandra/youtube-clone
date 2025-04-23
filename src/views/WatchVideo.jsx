import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  AlignCenter,
  Download,
  MoreHorizontal,
  MoreVertical,
  Share,
  Share2,
  Smile,
  ThumbsDown,
  ThumbsUp,
} from "react-feather";
import CustomButton from "../components/Custombutton";
import Comments from "./Comments";
import ButtonList from "../components/ButtonList";
import VideoList from "./VideoList";
import { setVideos } from "../store/slice/youtubeSlice";
import { useEffect, useMemo, useRef } from "react";

const WatchVideo = () => {
  const { videos, selectedVideo } = useSelector((state) => state.youtube);
  const { videoId } = useParams();
  const vdId = videoId.split(":")[1];
  const location = useLocation();
  
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const data = location.state?.listToRender || [];
  

  useEffect(() => {
    if (location.state?.listToRender?.length > 0) {
      dispatch(setVideos(location.state.listToRender));
    }
  }, [videoId, location, dispatch]);

  const currentVideo = useMemo(() => {
    return data?.find((v) => {
      const id = typeof v.id === "string" ? v.id : v.id.videoId;
      return id === vdId;
    });
  }, [vdId, data]);

  const relatedVideos = useMemo(() => {
    return data?.filter((v) => {
      const id = typeof v.id === "string" ? v.id : v.id.videoId;
      return id !== vdId;
    });
  }, [vdId, data]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [videoId]);

  return (
    <Grid container display={"flex"} sx={{ height: "100%", pt: 1 }}>
      <PerfectScrollbar
        containerRef={(ref) => (scrollRef.current = ref)}
        style={{
          height: "100%",
          width: "100%",
          overflowY: "auto",
          // overflowX: "hidden",
        }}
      >
        <Grid
          container
          sx={{ 
            // padding: "15px 50px 10px 50px",
            px: { xs: 1, sm: 2, md: 4, lg: 6 },
             width: "100%", height: "100%" }}
          spacing={2}
        >
          <Grid size={{ xs: 12, md: 8 }} sx={{ width: "100%" }}>
            <Box
              sx={{
                position: "relative",
                // paddingBottom: "56.25%",
                // height: "100%",
                overflow: "hidden",
                borderRadius: "8px",
              }}
            >
              <iframe
                title="YouTube Video Player"
                src={`https://www.youtube.com/embed/${vdId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                // style={{
                //   position: "absolute",
                //   top: 0,
                //   left: 0,
                //   width: "100%",
                //   height: "100%",
                // }}
                width="100%"
                // height="450"
                height={window.innerWidth < 600 ? 250 : 450}
              ></iframe>
            </Box>
            {/* Video Title */}
            <Typography variant="h6" fontWeight={600} mt={2}>
              {currentVideo?.snippet?.title || "Video Title"}
            </Typography>

            {/* {channnel; info section} */}
            

            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "center" }}
              // alignItems="center"
              mt={2}
            >
              <Box display="flex" alignItems="center" gap={2}>
                <Avatar
                  // src="https://yt3.ggpht.com/yti/ANoDKi7W8YaD5qgS44RjvhJYZLtT6zVL8R_k2G3_4w=s88-c-k-c0x00ffffff-no-rj"
                  // alt="Channel"
                >{currentVideo?.snippet?.channelTitle.charAt(0).toUpperCase()} </Avatar>
                <Box>
                  <Typography fontWeight={600}>
                    {currentVideo?.snippet?.channelTitle || "Channel Name"}
                  </Typography>
                  <Typography fontSize={"0.8rem"}>1.2M subscribers</Typography>
                </Box>
                <CustomButton
                  name={"Subscribe"}
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                  }}
                />
              </Box>

              <Box display="flex" alignItems="center" gap={1} flexWrap={"wrap"}>
                <Box display="flex">
                  <CustomButton
                    name={
                      <Box display="flex" alignItems="center" gap={1}>
                        <ThumbsUp size={16} />
                        <span>{currentVideo?.statistics?.likeCount || 0}</span>
                      </Box>
                    }
                    sx={{
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      borderRight: "1px solid #ccc",
                    }}
                  />
                  <CustomButton
                    name={
                      <Box display="flex" alignItems="center" gap={1}>
                        <ThumbsDown size={16} />
                      </Box>
                    }
                    sx={{
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                  />
                </Box>

                <CustomButton
                  name={
                    <Box display="flex" alignItems="center" gap={1}>
                      <Share2 size={16} />
                      Share
                    </Box>
                  }
                />
                <CustomButton
                  name={
                    <Box display="flex" alignItems="center" gap={1}>
                      <Download size={16} />
                      Download
                    </Box>
                  }
                />
                <CustomButton
                  name={
                    <Box display="flex" alignItems="center" gap={1}>
                      <MoreHorizontal size={16} />
                    </Box>
                  }
                  sx={{
                    height: "35px",
                    width: "35px",
                    borderRadius: "50%",
                    backgroundColor: "#f1f1f1",
                  }}
                />
              </Box>
            </Box>

            {/* Video Description */}
            <Box
              bgcolor="#f1f1f1"
              borderRadius={2}
              p={2}
              mt={2}
              sx={{ whiteSpace: "pre-wrap" }}
            >
              <Typography fontSize="0.9rem" fontWeight={600}>
                {`${currentVideo?.statistics?.viewCount} ViewCount`}
              </Typography>
              <Typography fontSize="0.9rem">
                {currentVideo?.snippet?.description?.substring(0, 300)}...
              </Typography>
            </Box>

            {/* comments section */}
            <Box mt={3} sx={{ width: "100%" }}>
              <Stack
                direction="row"
                justifyContent="flex-start"
                spacing={2}
                alignItems="center"
              >
                <Typography variant="subtitle1" fontWeight={600}>
                  {`${currentVideo?.statistics?.commentCount} CommentCount`}
                </Typography>
                <CustomButton
                  name={<AlignCenter size={16} />}
                  sx={{ height: "35px", width: "35px", borderRadius: "50%" }}
                />

                <Typography fontSize="0.9rem" fontWeight={600}>
                  Sort by
                </Typography>
              </Stack>

              {/* You can add a Textfield to add component here */}
              <Box mt={2} sx={{ width: "100%", height: "100%" }}>
                <Comments videoId={videoId} />
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} sx={{}}>
            <Grid
              container
              display={"flex"}
              flexDirection="column"
              sx={{ height: "100%", width: "100%", position: "relative" }}
            >
              <Grid sx={{ width: "100%", p: 0 }}>
                <ButtonList />
              </Grid>
              <Grid sx={{ width: "100%", height: "90%", py: 1 }}>
                <VideoList
                  data={relatedVideos}
                  // isLoading={isLoading}
                  // error={error}
                  videos={videos}
                  variant="watchVideo"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </PerfectScrollbar>
    </Grid>
  );
};
export default WatchVideo;
