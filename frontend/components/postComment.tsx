import { Box, Typography } from "@mui/material";
import { Comment } from "@/types/post-types";

const Comments = ({ comment }: { comment: Comment }) => {
  return (
    <Box
      sx={{
        borderRadius: "8px",
        padding: "10px 5px",
        marginBottom: "12px",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        width: "540px",
        border: "1px solid rgba(0, 0, 0, 0.5)",
      }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
        {comment.name}
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: "8px", color: "#555" }}>
        {comment.email}
      </Typography>
      <Typography variant="body1" sx={{ color: "#333" }}>
        {comment.body}
      </Typography>
    </Box>
  );
};

export default Comments;
