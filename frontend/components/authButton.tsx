"use client";
import { Button, SxProps } from "@mui/material";
import { PropsWithChildren } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface AuthButtonProps extends PropsWithChildren {
  sx?: SxProps;
}

const AuthButton = ({ children, sx }: AuthButtonProps) => {
  return (
    <Button
      type="submit"
      sx={{
        width: "100%",
        padding: "24px 16px",
        fontSize: "14px",
        fontWeight: "600",
        backgroundColor: "#04AA00",
        color: "#ffffff",
        textAlign: "start",
        display: "flex",
        justifyContent: "space-between",
        height: "48px",
        marginTop: "25px",
        textTransform: "capitalize",
        ...sx,
      }}
      endIcon={<ArrowForwardIcon sx={{ width: "26px", height: "26px" }} />}
    >
      {children}
    </Button>
  );
};

export default AuthButton;
