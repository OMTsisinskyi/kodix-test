"use client";

import React from "react";
import SignInForm from "./signInForm";
import { Box, Typography } from "@mui/material";
import {
  StyledAuthContainer,
  StyledAuthPage,
  StyledLearnMore,
  StyledProText,
  StyledSideInfo,
  StyledSignUpLink,
  StyledText,
} from "../style";
import logo from "@/public/assets/kodix-logo.svg";
import Image from "next/image";
import Link from "next/link";

const SignInPage = () => {
  return (
      <StyledAuthPage>
        <Image src={logo} alt="logo" />
        <StyledAuthContainer>
          <Box sx={{ width: "60%", padding: "32px" }}>
            <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
              Sign in
            </Typography>
            <SignInForm />
            <Box sx={{ marginTop: "28px", display: "flex", gap: "4px" }}>
              <Typography>Don't have an account?</Typography>
              <Link href="/auth/sign-up" legacyBehavior>
                <StyledSignUpLink>Sign Up</StyledSignUpLink>
              </Link>
            </Box>
          </Box>
          <StyledSideInfo>
            <Box sx={{ display: "flex", gap: "11px", alignItems: "center" }}>
              <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
                Kodix
              </Typography>
              <StyledProText>PRO</StyledProText>
            </Box>
            <StyledText>
              Unlimited traffic, strategic <br /> support, and AI-driven upsells
            </StyledText>
            <StyledLearnMore>Learn More</StyledLearnMore>
          </StyledSideInfo>
        </StyledAuthContainer>
      </StyledAuthPage>
  );
};

export default SignInPage;
