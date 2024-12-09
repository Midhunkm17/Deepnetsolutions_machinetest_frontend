import { Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Stack
      bgcolor={"#121618"}
      direction={{ md: "row", xs: "column" }}
      justifyContent={{ md: "space-between", xs: "" }}
      alignItems={"center"}
      px={{ md: 23, xs: 0 }}
      py={{ md: 0, xs: 1 }}
      height={45}
    >
      <Typography
        component={"h6"}
        color="#857878"
        fontSize={{ md: 14, xs: 10 }}
        fontWeight={"bold"}
      >
        © 2024 Deepnetsoft Solutions. All rights reserved.
      </Typography>
      <Stack direction={"row"} spacing={2}>
        <Typography
          component={"h6"}
          color="#857878"
          fontSize={{ md: 14, xs: 10 }}
          fontWeight={"bold"}
        >
          Terms & Conditions
        </Typography>
        <Typography
          component={"h6"}
          color="#857878"
          fontSize={{ md: 14, xs: 10 }}
          fontWeight={"bold"}
        >
          Privacy Policy
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
