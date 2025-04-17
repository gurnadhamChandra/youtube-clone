import { Avatar, Box, ClickAwayListener, Stack, TextField } from "@mui/material";
import { Smile } from "react-feather";
import { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import CustomButton from "./Custombutton";

const CommentInput = ({
  avatarUrl = "",
  placeholder = "Add a comment...",
  onSubmit,
  onCancel,
  showCancel = true,
  submitLabel = "Comment",
  cancelLabel = "Cancel",
  autoFocus = false,
}) => {
  const [text, setText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const inputRef = useRef(null);

  const handleEmojiClick = (emojiObject) => {
    const emoji = emojiObject?.emoji;
    const inputText = inputRef.current.querySelector("textarea");
    if (inputText) {
      const start = inputText.selectionStart;
      const end = inputText.selectionEnd;
      const newTextWithEmoji =
        text.slice(0, start) + emoji + text.slice(end);
      setText(newTextWithEmoji);

      // Move cursor after emoji
      setTimeout(() => {
        inputText.setSelectionRange(start + emoji.length, start + emoji.length);
        inputText.focus();
      }, 0);
    }
  };

  const handleSubmit = () => {
    if (text.trim()) {
      onSubmit(text);
      setText("");
      setShowEmojiPicker(false);
    }
  };

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      const textarea = inputRef.current.querySelector("textarea");
      textarea?.focus();
    }
  }, [autoFocus]);

  return (
    <Box display="flex" gap={2} alignItems="center">
      <Avatar src={avatarUrl} alt="User" />
      <Box display="flex" flexDirection="column" flexGrow={1} ref={inputRef}>
        <TextField
          fullWidth
          multiline
          rows={2}
          variant="standard"
          placeholder={placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Stack direction="row" justifyContent="space-between" mt={1}>
          <ClickAwayListener onClickAway={() => setShowEmojiPicker(false)}>
            <Box sx={{ position: "relative" }}>
              <Smile
                style={{ cursor: "pointer", color: "#555" }}
                onClick={() => setShowEmojiPicker((prev) => !prev)}
              />
              {showEmojiPicker && (
                <Box sx={{ position: "absolute", zIndex: 10 }}>
                  <EmojiPicker onEmojiClick={handleEmojiClick} height={350} width={300} />
                </Box>
              )}
            </Box>
          </ClickAwayListener>
          <Stack direction="row" spacing={1}>
            {showCancel && (
              <CustomButton
                name={cancelLabel}
                onClick={() => {
                  setText("");
                  onCancel?.();
                }}
                sx={{ backgroundColor: "#e0e0e0", color: "#000" }}
              />
            )}
            <CustomButton
              name={submitLabel}
              onClick={handleSubmit}
              disabled={!text.trim()}
              sx={{ backgroundColor: "#000", color: "#fff" }}
            />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default CommentInput;
