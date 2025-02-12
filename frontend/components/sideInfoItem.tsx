import { Box, Typography } from "@mui/material";
import Image from "next/image";

type SideInfoItemProps = {
  icon: string;
  title: string;
  description: string;
};

const SideInfoItem = ({ icon, title, description }: SideInfoItemProps) => {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Image src={icon} alt="logo" width={24} height={24} />
        <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
          {title}
        </Typography>
      </Box>
      <Typography
        sx={{ paddingLeft: "32px", color: "#484848", lineHeight: "24px" }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default SideInfoItem;
