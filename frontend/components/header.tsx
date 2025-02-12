"use client";

import React from "react";
import { Button, Box, styled } from "@mui/material";
import AuthNavigation from "./authNavigation";
import logo from "@/public/assets/kodix-logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const checkActive = (path: string) => {
    return (pathname === path).toString();
  };

  return (
    <Box
      sx={{
        padding: "35px 45px 22px 60px ",
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box>
        <StyledHeaderLink href="/" color="inherit" active={checkActive("/")}>
          Home
        </StyledHeaderLink>
        <StyledHeaderLink
          href="/feature"
          color="inherit"
          active={checkActive("/feature")}
        >
          Feature
        </StyledHeaderLink>
        <StyledHeaderLink
          href="/blog"
          color="inherit"
          active={checkActive("/blog")}
        >
          Blog
        </StyledHeaderLink>
        <StyledHeaderLink
          href="/testimonials"
          color="inherit"
          active={checkActive("/testimonials")}
        >
          Testimonials
        </StyledHeaderLink>
      </Box>
      <Box>
        <Image src={logo} alt="logo"></Image>
      </Box>
      <Box>
        <AuthNavigation />
      </Box>
    </Box>
  );
};

export default Header;

const StyledHeaderLink = styled(Button)<{ active: string }>(({ active }) => ({
  padding: "8.5px 17px",
  fontWeight: "500",
  opacity: active == "true" ? "1" : "0.6",
  textTransform: "capitalize",
}));
