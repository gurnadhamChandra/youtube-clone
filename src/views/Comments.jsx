import { Avatar, Box, ClickAwayListener, Divider, Stack, TextField } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { addComment, resetComments } from "../store/slice/commentSlice";
import CommentItem from "./CommentItem";
import CommentInput from "../components/CommnetInput";

const Comments= ({videoId}) => {
    const {comments}=useSelector((state)=>state.commentsRed)
    const dispatch = useDispatch();
 

  useEffect(()=>{
  dispatch(resetComments())
  },[videoId])


  const handleCommentSubmit = (text) => {
    dispatch(addComment({ text }));
    // if (commentText.trim()) {
    //   setCommentText("");
    // }
  };




  return (
   <Box sx={{width:"100%",height:"100%",position:"relative",maxWidth:"850px"}}>
   

<CommentInput
        avatarUrl="https://yt3.ggpht.com/yti/ANoDKi7W8YaD5qgS44RjvhJYZLtT6zVL8R_k2G3_4w=s88-c-k-c0x00ffffff-no-rj"
        placeholder="Add a public comment..."
        onSubmit={handleCommentSubmit}
        onCancel={() => {}}
        submitLabel="Comment"
        cancelLabel="Cancel"
      />
    {/* <Divider sx={{ borderBottomWidth: 2,pt:1 }} /> */}
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