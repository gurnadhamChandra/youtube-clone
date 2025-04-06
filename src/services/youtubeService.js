import commonHttpApi from "../api/commonhttpapi";
import config from "../config/envConfig";
const getAllPopularVideos =  () => {
  return commonHttpApi.get("/videos", {
    params: {
      part: "snippet,contentDetails,statistics",
      chart: "mostPopular",
      regionCode: "IN",
      maxResults: 140,
      key: config.youtubeApiKey

      
    },
  });
  
}
const youtubeService={
    getAllPopularVideos,
}
export default youtubeService;

// GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
