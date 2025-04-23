import axios from "axios";
import commonHttpApi from "../api/commonhttpapi";
import config from "../config/envConfig";
const getAllPopularVideos =  (pageToken = "") => {
  return commonHttpApi.get("/videos", {
    params: {
      part: "snippet,contentDetails,statistics",
      chart: "mostPopular",
      regionCode: "IN",
      maxResults: 30,
      pageToken: pageToken,
      key: config.youtubeApiKey

      
    },
  });
  
}
// http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query
const getSearchSuggestion=(query)=>{
 return axios.get(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`)
}

const getSearchResults=(query)=>{
    return commonHttpApi.get("/search",{
        params:{
            part:"snippet",
            maxResults:30,
            q:query,
            type:"video",
            key:config.youtubeApiKey
        }
    })
}
const youtubeService={
    getAllPopularVideos,
    getSearchSuggestion,
    getSearchResults
}
export default youtubeService;


