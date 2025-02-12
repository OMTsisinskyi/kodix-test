import {
  StyledLabel,
  StyledTextField,
  StyledTypographyError,
} from "@/app/auth/style";
import {
  Box,
  IconButton,
  InputAdornment,
  SxProps,
} from "@mui/material";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  error?: string[];
  showPasswordToggle?: boolean;
  sx?: SxProps;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  error,
  showPasswordToggle = false,
  sx,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <Box sx={{ position: "relative" }}>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextField
        id={name}
        name={name}
        type={showPasswordToggle && showPassword ? "text" : type}
        variant="outlined"
        placeholder={`Enter ${label.toLowerCase()}`}
        fullWidth
        value={value}
        onChange={onChange}
        slotProps={
          showPasswordToggle
            ? {
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }
            : {}
        }
      />
      {error && (
        <StyledTypographyError variant="body2" color="error" sx={{ ...sx }}>
          {error}
        </StyledTypographyError>
      )}
    </Box>
  );
};

export default InputField;
