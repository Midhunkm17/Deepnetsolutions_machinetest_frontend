import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../services/baseUrl";
import { data } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const MenuItems = () => {
  const [menuData, setMenuData] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState("");
  const [filteredMenuItems, setFilteredMenuItems] = useState([]);

  //func for fetching menu
  const getMenu = async () => {
    await axios
      .get(`${BASE_URL}/api/menu/get-menu`)
      .then((res) => {
        console.log(res.data);
        setMenuData(res?.data?.data);
      })
      .catch((err) => {
        toast.error(err.response.data.message || "Error creating menu!");
      });
  };

  //menu selection
  const handleMenuSelection = (menuName) => {
    setSelectedMenu(menuName);
    const menuSelected = menuData.find((menu) => menu.name === menuName);
    setFilteredMenuItems(menuSelected?.items || []);
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <Stack
        sx={{
          backgroundImage: "url(/assets/Rectangle%20107.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: 79,
          width: "100%",
        }}
      >
        <Stack
          mt={2}
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={{ md: 2, xs: 1 }}
        >
          {menuData?.map((item, index) => (
            <Button
              key={index}
              onClick={() => handleMenuSelection(item?.name)}
              sx={{
                width: "auto",
                height: { md: 49, xs: 31 },
                border: "1px solid #0796EF",
                bgcolor: selectedMenu === item.name ? "#0796EF" : "black",
                color: "white",
                fontSize: 17,
                borderRadius: 0,
                overflow: "auto",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {item.name}
            </Button>
          ))}
        </Stack>
      </Stack>
      <Stack
        sx={{
          backgroundImage: "url(/assets/Rectangle%20116.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-beetween"}
          width={"100%"}
          py={{ md: 10, xs: 6 }}
        >
          <Box
            sx={{ display: { xs: "none", md: "flex" } }}
            component={"img"}
            src="/assets/Frame (1).png"
          />
          <Stack
            border={"1px solid #FFFFFF"}
            m={{ md: 5, xs: 3 }}
            position={"relative"}
            width={{ md: "100%", xs: 390 }}
          >
            <Box
              sx={{
                position: "absolute",
                top: { md: "-25%", xs: "0%" },
                left: { md: "-3.5%", xs: "1%" },
                zIndex: 1,
              }}
              component={"img"}
              height={{ md: 251, xs: 100 }}
              width={{ md: 190, xs: 76 }}
              src="/assets/image 39 (1) 1.png"
            />

            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={2}
              px={{ md: 0, xs: 5 }}
              mt={5}
            >
              <Divider sx={{ bgcolor: "gray", height: 3, width: 70, mt: 5 }} />
              <Typography
                component={"h5"}
                fontSize={{ md: 50, xs: 25 }}
                fontWeight={"bold"}
                color="white"
                sx={{
                  textShadow: "4px 3px 0px #800020",
                  display: "inline-block",
                }}
                textAlign={"center"}
              >
                {selectedMenu ? selectedMenu : "Select a Menu!"}
              </Typography>{" "}
              <Divider sx={{ bgcolor: "gray", height: 3, width: 70, mt: 5 }} />
              <Divider />
            </Stack>
            <Stack
              display={{ md: "flex", xs: "block" }}
              flexDirection={"row"}
              flexWrap={"wrap"}
              ml={{ md: 22, xs: 2.5 }}
              mt={4}
              gap={{ md: 3, xs: 2 }}
              width={"100%"}
              spacing={{ md: 0, xs: 2 }}
            >
              {filteredMenuItems?.length > 0 ? (
                filteredMenuItems.map((item, index) => (
                  <Box>
                    <Typography
                      component={"h5"}
                      fontSize={{ md: 28, xs: 16 }}
                      fontWeight={400}
                      color="white"
                    >
                      {item.itemName}
                      ..................................................$
                      {item.itemPrice.toFixed(2)}
                    </Typography>
                    <Typography
                      width={{ md: 605, xs: "auto" }}
                      component={"p"}
                      color="#FFFFFFBF"
                      fontSize={{ md: 18, xs: 13 }}
                    >
                      {item.itemDescription}
                    </Typography>
                  </Box>
                ))
              ) : selectedMenu !== "" ? (
                <Typography
                  component={"h6"}
                  color="white"
                  fontSize={{ md: 18, xs: 14 }}
                  textAlign="center"
                  width="100%"
                >
                  No items available for this menu.
                </Typography>
              ) : (
                <Typography
                  component={"h6"}
                  color="white"
                  fontSize={{ md: 40, xs: 20 }}
                  mt={5}
                  textAlign="center"
                  width={{ md: "auto", xs: 350 }}
                >
                  <marquee>
                    What’s on your mind?{" "}
                    <span style={{ color: "#0796EF" }}>
                      Drinks, snacks, or something else?
                    </span>{" "}
                    Pick your vibe!
                  </marquee>
                </Typography>
              )}
              <Stack p={4}>
                <Box
                  sx={{
                    position: "absolute",
                    top: { md: "68%", xs: "81%" },
                    left: { md: "87.5%", xs: "82%" },
                    zIndex: 0,
                  }}
                  component={"img"}
                  height={{ md: 207, xs: 81 }}
                  width={{ md: 192, xs: 74 }}
                  src="/assets/cocktail1 1.png"
                />
              </Stack>
            </Stack>
          </Stack>
          <Box
            sx={{ display: { xs: "none", md: "flex" } }}
            component={"img"}
            src="/assets/Frame.png"
          />
        </Stack>
      </Stack>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          padding: "10px",
          fontSize: "17px",
          fontFamily: "sans-serif",
        }}
      />
    </>
  );
};

export default MenuItems;
