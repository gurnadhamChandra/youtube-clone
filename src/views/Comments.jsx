import { Avatar, Box, ClickAwayListener, Divider, Stack, TextField } from "@mui/material"
import { Smile } from "react-feather";
import CustomButton from "../components/Custombutton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { addComment, resetComments } from "../store/slice/commentSlice";
import CommentItem from "./CommentItem";
import EmojiPicker from 'emoji-picker-react';
import CommentInput from "../components/CommnetInput";

const Comments= ({videoId}) => {
    const {comments}=useSelector((state)=>state.commentsRed)
    const dispatch = useDispatch();
  const [commentText, setCommentText] = useState("");
  const [showEmojiPicer,setShowEmojiPicker]=useState(false)
  const inputRef=useRef(null)

  useEffect(()=>{
  dispatch(resetComments())
  },[videoId])


  const handleCommentSubmit = (text) => {
    dispatch(addComment({ text }));
    // if (commentText.trim()) {
    //   setCommentText("");
    // }
  };

const handleEmojiClick=(emojiObject)=>{
  const emoji=emojiObject.emoji
  console.log("emoji",emoji)
  const inputText=inputRef.current.querySelector("textarea")
  if(inputText){
    const start=inputText.selectionStart
    const end=inputText.selectionEnd
    const newTextWithEmoji=commentText.slice(0,start)+emoji+commentText.slice(end)
    setCommentText(newTextWithEmoji)
    // Move cursor after emoji
    setTimeout(() => {
      inputText.setSelectionRange(start + emoji.length, start + emoji.length);
      inputText.focus();
    }, 0);
  }
}


  return (
   <Box sx={{width:"100%",height:"100%",position:"relative",maxWidth:"850px"}}>
     {/* <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    src="https://yt3.ggpht.com/yti/ANoDKi7W8YaD5qgS44RjvhJYZLtT6zVL8R_k2G3_4w=s88-c-k-c0x00ffffff-no-rj"
                    alt="User"
                  />
                  <Box display={"flex"} flexDirection={"column"} flexGrow={1} ref={inputRef}>
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
                      <ClickAwayListener onClickAway={() => setShowEmojiPicker(false)}>
                      <Box sx={{position:"relative"}}>
                        <Smile style={{ cursor: "pointer", color: "#555" }} 
                         onClick={() => setShowEmojiPicker((prev) => !prev)}/>
                          {showEmojiPicer && (
                  <Box sx={{ position: "absolute", zIndex: 10 }}>
                    <EmojiPicker
                      onEmojiClick={handleEmojiClick}
                      height={350}
                      width={300}
                    />
                  </Box>
                )}
                      </Box>
                      </ClickAwayListener>
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
      </Stack> */}

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