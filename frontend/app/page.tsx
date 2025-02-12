"use client";

import { getSession } from "@/lib/session";
import { Box, styled } from "@mui/material";
import featuredStarIcon from "@/public/assets/featured-star-icon.svg";

export default function HomePage() {
  return (
    <StyledHomePage>
      <h1>Home</h1>
    </StyledHomePage>
  );
}

const StyledHomePage = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
