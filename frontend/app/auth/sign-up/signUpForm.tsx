"use client";
import AuthButton from "@/components/authButton";
import { signUp } from "@/service/auth";
import { Box, useTheme } from "@mui/material";
import React, { useActionState, useState } from "react";
import { StyledFormContainer, StyledTypographyError } from "../style";
import InputField from "@/components/inputField";

const SignUpForm = () => {
  const theme = useTheme();
  const [state, action] = useActionState(signUp, undefined);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form action={action}>
      <StyledFormContainer>
        {state?.message && (
          <StyledTypographyError
            variant="body2"
            color="error"
            sx={{ top: -22 }}
          >
            {state.message}
          </StyledTypographyError>
        )}

        <InputField
          label="Email address"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          error={state?.error?.email}
        />
        <Box sx={{ display: "flex", gap: "24px" }}>
          <InputField
            label="First Name"
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
            error={state?.error?.firstName}
          />
          <InputField
            label="Last Name"
            name="lastName"
            value={formValues.lastName}
            onChange={handleChange}
            error={state?.error?.lastName}
          />
        </Box>

        <InputField
          label="Password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          type="password"
          error={state?.error?.password}
          showPasswordToggle={true}
          sx={{
            bottom: `${
              state?.error?.password?.length == 4 ? "-60px" : "-42px"
            }`,
          }}
        />
      </StyledFormContainer>

      <AuthButton sx={{ marginTop: "65px" }}>Sign Up</AuthButton>
    </form>
  );
};

export default SignUpForm;
