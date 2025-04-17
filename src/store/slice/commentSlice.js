import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  comments: [],
};

// recursive function to add replies to comments
const addReplyRecursive=(comments,commentId,text)=>{
for(let comment of comments){
    if (!comment.replies) {
        comment.replies = [];
      }
    if(comment.id===commentId){
        comment.replies.push({
            id:uuidv4(),
            text,
            user: { name: "Chandra" },
            likes: 0,
            dislikes: 0,
            replies: [],
        })
        return true;
    }
    else if (comment.replies?.length > 0) {
        const found = addReplyRecursive(comment.replies, commentId, text);
        if (found) return true;
      }

}}

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    resetComments:(state,action)=>{
        state.comments=[]

    },
    addComment: (state, action) => {
      console.log("action", action.payload);
      state.comments.push({
        id: uuidv4(),
        text: action.payload.text,
        replies: [],
        user: { name: "Chandra" },
        likes: 0,
        dislikes: 0,
      });
    },
    addReply: (state, action) => {
      const { commentId, text } = action.payload;
      addReplyRecursive(state.comments, commentId, text);
    //   const comment = state.comments.find((c) => c.id === commentId);
    //   if (comment) {
    //     comment.replies.push({
    //       id: uuidv4(),
    //       text,
    //     });
    //   }
    },
  },
});

export const { addComment, addReply,resetComments } = commentsSlice.actions;
export default commentsSlice.reducer;
