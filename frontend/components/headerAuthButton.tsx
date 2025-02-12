"use client";

import { Button, styled, SxProps } from "@mui/material";

type AuthButtonProps = {
  children: React.ReactNode;
  href?: string;
  sx?: SxProps;
};

export default function HeaderAuthButton({
  children,
  href,
  sx,
}: AuthButtonProps) {
  return (
    <StyledAuthButton sx={{ ...sx }} href={href}>
      {children}
    </StyledAuthButton>
  );
}

const StyledAuthButton = styled(Button)(() => ({
  height: "42px",
  padding: "12px 32px",
  fontWeight: "500",
  backgroundColor: "#ffffff",
  color: "#000000",
  borderRadius: "24px",
  border: "1px solid rgba(0, 0, 0, 0.1)",
  textTransform: "capitalize",
}));
