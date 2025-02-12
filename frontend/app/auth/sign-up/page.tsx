"use client";

import React from "react";
import { Box, styled, Typography, useTheme } from "@mui/material";
import {
  StyledAuthContainer,
  StyledAuthPage,
  StyledSideInfo,
  StyledSignUpLink,
} from "../style";
import logo from "@/public/assets/kodix-logo.svg";
import Image from "next/image";
import Link from "next/link";
import SideInfoItem from "@/components/sideInfoItem";
import SignUpForm from "./signUpForm";
import AuthLayout from "../layout";

const sideBarItems = [
  {
    title: "Absolutely FREE",
    description: "No hidden charges, No credit card required",
    icon: "/assets/money.svg",
  },
  {
    title: "Fast & Easy",
    description: "Get access instantly, no downloads required",
    icon: "/assets/fast-easy.svg",
  },
  {
    title: "Your Own Data",
    description: "Enjoy the Free Trial with your company data",
    icon: "/assets/your-own-data.svg",
  },
  {
    title: "Unlimited Features",
    description: "Access all features of the world's #1 business software!",
    icon: "/assets/star.svg",
  },
];

const SignInPage = () => {
  const theme = useTheme();

  return (
    <AuthLayout>
      <StyledAuthPage>
        <Image src={logo} alt="logo" />
        <StyledAuthContainer sx={{ height: "586px" }}>
          <Box sx={{ width: "60%", padding: "32px" }}>
            <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
              Sign up
            </Typography>
            <SignUpForm />
            <Box sx={{ marginTop: "25px", display: "flex", gap: "4px" }}>
              <Typography>Already have an account?</Typography>
              <Link href="/auth/sign-in" legacyBehavior>
                <StyledSignUpLink>Sign In</StyledSignUpLink>
              </Link>
            </Box>
          </Box>
          <StyledSideInfo
            sx={{ justifyContent: "flex-start", alignItems: "flex-start" }}
          >
            <Typography
              sx={{ fontSize: "24px", fontWeight: "600", marginBottom: "24px" }}
            >
              Get Your FREE <br /> 30-Days Trial Now!
            </Typography>
            <StyledItemsContainer>
              {sideBarItems.map((item, index) => (
                <SideInfoItem
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </StyledItemsContainer>
            <StyledContactBox>
              <Typography>Call us at </Typography>
              <Typography sx={{ color: theme.palette.custom.lightGreen }}>
                800 1301 448
              </Typography>
            </StyledContactBox>
          </StyledSideInfo>
        </StyledAuthContainer>
      </StyledAuthPage>
    </AuthLayout>
  );
};

export default SignInPage;

const StyledItemsContainer = styled(Box)(() => ({
  display: "flex",
  gap: "16px",
  alignItems: "center",
  flexDirection: "column",
}));

const StyledContactBox = styled(Box)(() => ({
  display: "flex",
  gap: "8px",
  justifyContent: "flex-start",
  marginTop: "40px",
  "& > *": { fontWeight: 600 },
}));
