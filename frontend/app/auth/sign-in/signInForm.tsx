"use client";
import AuthButton from "@/components/authButton";
import { signIn } from "@/service/auth";
import {
  Typography,
  useTheme,
} from "@mui/material";
import React, { useActionState, useState } from "react";
import {
  StyledFormContainer,
  StyledTypographyError,
} from "../style";
import InputField from "@/components/inputField";

const SignInForm = () => {
  const theme = useTheme();
  const [state, action] = useActionState(signIn, undefined);
  const [formValues, setFormValues] = useState({
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

        <InputField
          label="Password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          type="password"
          error={state?.error?.password}
          showPasswordToggle={true}
        />

        <Typography sx={{ color: theme.palette.custom.darkGreen }}>
          Forgot password?
        </Typography>
      </StyledFormContainer>

      <AuthButton>Sign In</AuthButton>
    </form>
  );
};

export default SignInForm;
