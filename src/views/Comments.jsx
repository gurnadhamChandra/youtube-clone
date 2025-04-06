import { Avatar, Box, Divider, Stack, TextField } from "@mui/material"
import { Smile } from "react-feather";
import CustomButton from "../components/Custombutton";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addComment } from "../store/slice/commentSlice";
import CommentItem from "./CommentItem";

const Comments= () => {
    const {comments}=useSelector((state)=>state.commentsRed)
    const dispatch = useDispatch();
  const [commentText, setCommentText] = useState("");


  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      dispatch(addComment({ text: commentText }));
      setCommentText("");
    }
  };
  return (
   <Box sx={{width:"100%",height:"100%",position:"relative",maxWidth:"850px"}}>
     <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    src="https://yt3.ggpht.com/yti/ANoDKi7W8YaD5qgS44RjvhJYZLtT6zVL8R_k2G3_4w=s88-c-k-c0x00ffffff-no-rj"
                    alt="User"
                  />
                  <Box display={"flex"} flexDirection={"column"} flexGrow={1}>
                    <TextField
                      fullWidth
                      placeholder="Add a public comment..."
                      multiline
                      rows={2}
                      variant="standard"
                      sx={{mt:-1}}
                      value={commentText}
                     onChange={(e) => setCommentText(e.target.value)}
                    />
                    <Stack
                      direction="row"
                      justifyContent={"space-between"}
                      mt={1}
                    >
                      <Box>
                        <Smile style={{ cursor: "pointer", color: "#555" }} />
                      </Box>
                      <Stack direction="row" spacing={1}>
                        <CustomButton
                          name="Cancel"
                          onClick={() => setCommentText("")}
                          sx={{
                            backgroundColor: "#e0e0e0",
                            color: "#000",
                          }}
                        />
                        <CustomButton
                          name="Comment"
                          onClick={handleCommentSubmit}
                            disabled={!commentText.trim()}
                          sx={{
                            backgroundColor: "#000",
                            color: "#fff",
                          }}
                        />
                      </Stack>
                    </Stack>
                  </Box>
      </Stack>
    <Divider sx={{ borderBottomWidth: 2,pt:1 }} />
     <Box mt={2} sx={{width:"100%",position:"relative",wordWrap: "break-word",
      overflowWrap: "break-word", // ensures it breaks long words
     whiteSpace: "normal",
     maxWidth: "850px"
      }}>
       
      {comments.map((comment) => (
         <CommentItem 
         key={comment.id} comment={comment} 
         />
      ))}
                </Box>
   </Box>
  );
}
export default Comments;