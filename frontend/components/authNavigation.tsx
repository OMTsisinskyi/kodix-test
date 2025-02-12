import { Box, Typography, useTheme } from "@mui/material";
import HeaderAuthButton from "./headerAuthButton";
import { useAuth } from "@/context/AuthContext";

const AuthNavigation = () => {
  const { session, loading } = useAuth();
  const theme = useTheme();

  if (loading) {
    return <Box sx={{ width: "267px" }}></Box>;
  }

  return (
    <Box sx={{ display: "flex", gap: "9px" }}>
      {!session || !session.user ? (
        <>
          <HeaderAuthButton href={"/auth/sign-in"}>Log in</HeaderAuthButton>
          <HeaderAuthButton
            sx={{
              backgroundColor: theme.palette.custom.darkGreen,
              fontWeight: "600",
              color: "#ffffff",
            }}
            href={"/auth/sign-up"}
          >
            Sign Up
          </HeaderAuthButton>
        </>
      ) : (
        <Box sx={{ display: "flex", alignItems: "center", gap: "9px" }}>
          <Typography> Hi👋, {session.user.firstName}!</Typography>
          <HeaderAuthButton href={"/api/auth/sign-out"}>
            Sign Out
          </HeaderAuthButton>
        </Box>
      )}
    </Box>
  );
};

export default AuthNavigation;
