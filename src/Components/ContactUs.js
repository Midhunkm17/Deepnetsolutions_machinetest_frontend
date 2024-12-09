import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const ContactUs = () => {
  return (
    <Stack
      bgcolor={"black"}
      direction={{ md: "row", xs: "column" }}
      p={5}
      justifyContent={"space-evenly"}
    >
      <Stack
        border={"1px solid #FFFFFF"}
        borderRadius={"15px"}
        px={{ md: 15, xs: 0 }}
        height={165}
        sx={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
        spacing={1}
        display={{ xs: "none", md: "flex" }}
        mt={5}
      >
        <Typography
          component={"h6"}
          fontSize={18}
          fontWeight={500}
          color="#0796EF"
        >
          CONNECT WITH US
        </Typography>
        <Stack direction={"row"}>
          <Box component={"img"} src="/assets/bytesize_telephone.png" />
          <Typography
            component={"h6"}
            color="#857878"
            fontSize={16}
            fontWeight={400}
            ml={1}
          >
            +91 9567843340
          </Typography>
        </Stack>
        <Stack direction={"row"}>
          <Box component={"img"} src="/assets/formkit_email.png" />
          <Typography
            component={"h6"}
            color="#857878"
            fontSize={16}
            fontWeight={400}
            ml={1}
          >
            info@deepnetsoft.com
          </Typography>
        </Stack>
      </Stack>
      <Box
        sx={{
          position: "relative",
          display: "inline-block",
        }}
      >
        <Box
          component={"img"}
          mt={5}
          width={86}
          height={76}
          src="/assets/Logo.png"
          sx={{
            position: "absolute",
            top: "-38px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
          }}
        />
        <Stack
          border={"1px solid #FFFFFF"}
          borderRadius={"15px"}
          px={{ md: 15, xs: 0 }}
          height={165}
          sx={{
            position: "relative",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
          mt={5}
        >
          <Typography
            mt={3}
            component={"h6"}
            fontSize={{ md: 35, xs: 30 }}
            fontWeight={400}
            color="white"
          >
            <span style={{ color: "#0796EF" }}>DEEP</span> NET{" "}
            <span style={{ color: "#857878" }}>SOFT</span>
          </Typography>
          <Box
            width={86}
            height={12}
            component={"img"}
            src="/assets/Group 455.png"
          />
        </Stack>
      </Box>
      <Stack
        border={"1px solid #FFFFFF"}
        borderRadius={"15px"}
        px={{ md: 15, xs: 0 }}
        height={165}
        sx={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
        spacing={1}
        display={{ xs: "flex", md: "none" }}
        mt={5}
      >
        <Typography
          component={"h6"}
          fontSize={18}
          fontWeight={500}
          color="#0796EF"
        >
          CONNECT WITH US
        </Typography>
        <Stack direction={"row"}>
          <Box component={"img"} src="/assets/bytesize_telephone.png" />
          <Typography
            component={"h6"}
            color="#857878"
            fontSize={16}
            fontWeight={400}
            ml={1}
          >
            +91 9567843340
          </Typography>
        </Stack>
        <Stack direction={"row"}>
          <Box component={"img"} src="/assets/formkit_email.png" />
          <Typography
            component={"h6"}
            color="#857878"
            fontSize={16}
            fontWeight={400}
            ml={1}
          >
            info@deepnetsoft.com
          </Typography>
        </Stack>
      </Stack>
      <Stack
        border={"1px solid #FFFFFF"}
        borderRadius={"15px"}
        px={{ md: 15, xs: 0 }}
        height={165}
        sx={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
        spacing={1}
        mt={5}
      >
        <Typography
          component={"h6"}
          fontSize={18}
          fontWeight={500}
          color="#0796EF"
        >
          FIND US
        </Typography>
        <Stack direction={"row"}>
          <Box
            mt={0.5}
            width={15}
            height={16}
            component={"img"}
            src="/assets/streamline_travel-map-location-pin-navigation-map-maps-pin-gps-location.png"
          />
          <Typography
            component={"h6"}
            fontSize={16}
            fontWeight={400}
            color="#857878"
            width={184}
          >
            First floor, Geo infopark, Infopark EXPY, Kakkanad
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ContactUs;
