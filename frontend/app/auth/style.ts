import { Box, styled, TextField, Typography } from "@mui/material";

export const StyledAuthContainer = styled(Box)(() => ({
  width: "750px",
  height: "485px",
  border: "1px solid black",
  display: "flex",
  borderRadius: "20px",
}));

export const StyledAuthPage = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "40px",
  position: "absolute",
}));

export const StyledSideInfo = styled(Box)(() => ({
  color: "#ffffff",
  padding: "32px",
  width: "40%",
  backgroundColor: "black",
  borderTopRightRadius: "19px",
  borderBottomRightRadius: "19px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

export const StyledLabel = styled(Typography)(() => ({
  color: "#202020",
  marginBottom: "12px",
}));

export const StyledTextField = styled(TextField)(() => ({
  height: "48px",
  borderRadius: "4px",
  color: "#484848",
  "& .MuiOutlinedInput-root": {
    height: "48px",
    "&:hover fieldset": {
      borderColor: "#484848",
      opacity: "0.5",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#484848",
      opacity: "0.5",
    },
  },
}));

export const StyledFormContainer = styled(Box)(() => ({
  marginTop: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  position: "relative",
}));

export const StyledTypographyError = styled(Typography)(() => ({
  position: "absolute",
  bottom: -22,
  left: 0,
}));

export const StyledSignUpLink = styled(Typography)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.custom.darkGreen,
  cursor: "pointer",
  fontWeight: "600",
  "&:hover": { textDecoration: "underline" },
}));

export const StyledProText = styled(Typography)(({ theme }) => ({
  color: theme.palette.custom.lightGreen,
  border: `1px solid ${theme.palette.custom.lightGreen}`,
  borderRadius: "4px",
  padding: "3px 8px",
  fontSize: "12px",
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  color: "#484848",
  textAlign: "center",
  marginTop: "16px",
  marginBottom: "24px",
}));

export const StyledLearnMore = styled(Typography)(({ theme }) => ({
  color: theme.palette.custom.lightGreen,
  textAlign: "center",
  fontWeight: "500",
  textDecoration: "underline",
  fontSize: "16px",
}));
