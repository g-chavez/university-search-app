"use client";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Icon from "@mui/material/Icon";

export default function Banner() {
  const image = "/logo.webp";

  return (
    <Box>
      <Stack
        direction="row"
        spacing={4}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={`${image}`}
          alt={"University Search"}
          priority={true}
          width={100}
          height={100}
        />
        <h1>University Search</h1>
        <Icon sx={{ fontSize: 60 }}>search</Icon>
      </Stack>
    </Box>
  );
}
