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
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
const WatchVideo = () => {
  const { videos, selectedVideo } = useSelector((state) => state.youtube);
  const { videoId } = useParams();
  const vdId = videoId.split(":")[1];
  

  const currentVideo = videos?.find((v) => v.id === vdId);
  const relatedVideos = videos?.filter((v) => v.id !== vdId);
  return (
    <Grid
      container
      display={"flex"}
      sx={{ height: "100%", pt: 1,  }}
    >
      <PerfectScrollbar
        style={{
          height: "100%",
          width: "100%",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <Grid container sx={{ padding: "15px 50px 10px 50px",width:"100%",height:"100%" }} spacing={2}>
          <Grid size={{ xs: 12, md: 8 }} sx={{width:"100%"}}>
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
                width="970"
                height="450"
              ></iframe>
            </Box>
            {/* Video Title */}
            <Typography variant="h6" fontWeight={600} mt={2}>
              {currentVideo?.snippet?.title || "Video Title"}
            </Typography>

            {/* {channnel; info +action} */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mt={2}
            >
              <Stack direction={"row"} spacing={2} alignItems="center">
                <Avatar
                  src="https://yt3.ggpht.com/yti/ANoDKi7W8YaD5qgS44RjvhJYZLtT6zVL8R_k2G3_4w=s88-c-k-c0x00ffffff-no-rj"
                  alt="Channel"
                />
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
              </Stack>
              <Stack direction={"row"} spacing={1} alignItems="center">
                <Stack direction={"row"}>
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
                </Stack>

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
              </Stack>
            </Stack>

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
              <Box mt={2} sx={{ width: "100%" ,height:"100%"}}>
                <Comments/>
               
              </Box>
             
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{ border: "1px solid blue" }}
          ></Grid>
        </Grid>
      </PerfectScrollbar>
    </Grid>
  );
};
export default WatchVideo;
