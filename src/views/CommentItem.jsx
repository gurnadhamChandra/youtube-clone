import { Avatar, Box, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Smile, ThumbsDown, ThumbsUp } from "react-feather";
import { useDispatch } from "react-redux";
import CustomButton from "../components/Custombutton";
import { addReply } from "../store/slice/commentSlice";

const CommentItem=({ comment }) => {
    const dispatch = useDispatch();
  const [replyText, setReplyText] = useState("");
  const [showReplyInput, setShowReplyInput] = useState(false);

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      dispatch(addReply({ commentId: comment.id, text: replyText }));
      setReplyText("");
      setShowReplyInput(false);
    }
  };

   return( <Box
    mt={2}
    sx={{
      width: "100%",
      maxWidth: "850px",
    }}
  >
    {/* Row layout for avatar and content */}
    <Box display="flex" gap={2} alignItems="flex-start" sx={{ width: "100%" }}>
      <Avatar alt="User" />

      {/* Comment content */}
      <Box display="flex" flexDirection="column" flexGrow={1}>
        {/* Name and date row */}
        <Box display="flex" gap={1} alignItems="center" flexWrap="wrap">
          <Typography
            fontWeight="bold"
            sx={{
              wordBreak: "break-word",
            }}
          >
            {comment?.user?.name || "Chandra"}
          </Typography>

          <Typography sx={{ color: "#888" }}>
            {new Date().toLocaleDateString()}
          </Typography>
        </Box>

        {/* Comment text */}
        <Box
          mt={1}
          flexDirection={"column"}
          display="flex"
          sx={{
            width: "100%",
            maxWidth: "850px",
            wordBreak: "break-word",
            whiteSpace: "pre-wrap",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              wordBreak: "break-word",
              whiteSpace: "pre-wrap",
            }}
          >
            {comment?.text}
          </Typography>
          <Box mt={1} display="flex" justifyContent={"flex-start"} gap={2}>
              <Stack direction="row" spacing={1} alignItems="center">
                <ThumbsUp size={16} color="#888" />
                <Typography variant="body2" color="text.secondary">
                  {comment?.likes} Likes
                </Typography>
                <ThumbsDown size={16} color="#888" />
                <Typography variant="body2" color="text.secondary">
                  {comment?.dislikes} Dislikes
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ cursor: "pointer" }}
                  onClick={() => setShowReplyInput(!showReplyInput)}
                >
                  Reply
                </Typography>
                </Stack>
            </Box>
            {showReplyInput && (
                <Box mt={2} ml={2} display="flex" gap={2} alignItems="center">
                    <Avatar alt="User" />
                    <Box display={"flex"} flexDirection={"column"} flexGrow={1}>
                    <TextField
                        fullWidth
                        placeholder="Add a reply..."
                        multiline
                        rows={2}
                        variant="standard"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                    />
                    <Stack direction="row" justifyContent={"space-between"} spacing={1} mt={1}>
                         <Box>
                       <Smile style={{ cursor: "pointer", color: "#555" }} />
                        </Box>
                        <Stack direction="row" spacing={1}>
                        <CustomButton
                        name="Cancel"
                        onClick={() => {setReplyText("")
                        setShowReplyInput(false)
                        }}
                        sx={{ backgroundColor: "#e0e0e0", color: "#000" }}
                        />
                        <CustomButton
                        onClick={handleReplySubmit}
                        name="Reply"
                        disabled={!replyText.trim()}
                        sx={{ backgroundColor: "#000", color: "#fff" }}
                        />
                        </Stack>
                    </Stack>
                    </Box>
                </Box>
                )}
                {comment.replies?.length > 0 && (
            <Box mt={1} >
              {comment.replies.map((reply) => (
                <CommentItem key={reply.id} comment={reply} />
                  
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  </Box>)
}
export default CommentItem