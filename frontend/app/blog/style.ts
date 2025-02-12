import { styled, Typography, Box } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "33px",
  padding: "0 35px",
}));

export const FeaturedBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

export const Title = styled(Typography)({
  margin: "20px 0 8px 0",
  fontSize: "32px",
  fontWeight: "600",
  width: "450px",
  textAlign: "center",
  lineHeight: "38.73px",
});

export const Content = styled(Typography)({
  fontSize: "14px",
  color: "rgba(0, 0, 0, 0.7)",
  width: "700px",
  maxHeight: "150px",
  overflowY: "auto",
  padding: "10px 10px",
  borderRadius: "10px",

  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "10px",
    border: "2px solid #fff",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#555",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
    borderRadius: "10px",
  },
});

export const InfoBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  margin: "20px 0px 20px 0px",
});

export const AvatarBox = styled(Box)({
  padding: "5px",
  border: "1px solid rgba(0, 0, 0, 0.1)",
  borderRadius: "100px",
  display: "flex",
  gap: "8px",
  alignItems: "center",
});

export const ImageContainer = styled(Box)({
  position: "relative",
  width: "894px",
  height: "339px",
});

export const Caption = styled(Typography)({
  position: "absolute",
  bottom: "21px",
  left: "16px",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  color: "white",
  padding: "6px 12px",
  borderRadius: "2px",
  fontSize: "14px",
});

export const PlaceholderImage = styled(Box)({
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "24px",
});

export const ShareBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginTop: "20px",
});

export const StyledCommentsScrollBar = styled(Box)({
  maxHeight: "300px",
  overflowY: "auto",
  borderRadius: "8px",
  marginTop: "16px",
  width: "553px",

  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "10px",
    border: "2px solid #fff",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#555",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
    borderRadius: "10px",
  },
});
