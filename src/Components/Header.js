import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import { Stack } from "@mui/material";
const pages = ["HOME", "MENU", "MAKE A RESERVATION", "CONTACT US"];
const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [selectedMenu, setSelectedMenu] = useState("MENU");
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ bgcolor: "#121618", height: { md: 100, xs: 60 } }}
      >
        <Container maxWidth="xl" sx={{ mt: 4 }}>
          <Toolbar disableGutters>
            <Box
              component={"img"}
              height={76}
              width={86}
              src="/assets/Logo.png"
              mt={0.5}
              display={{ xs: "none", md: "block" }}
            />
            <Box mt={3}>
              <Typography
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  width: 200,
                  display: { xs: "none", md: "block" },
                  fontWeight: 400,
                  fontSize: 35,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  p: 0,
                }}
              >
                <span style={{ color: "#0796EF" }}>DEEP</span> NET{" "}
              </Typography>
              <Typography
                display={{ xs: "none", md: "block" }}
                component="a"
                color="#857878"
                fontSize={35}
                letterSpacing={".3rem"}
              >
                SOFT
              </Typography>
            </Box>
            <Box
              sx={{
                mb: 6,
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => (
                <Button
                  variant="text"
                  disableElevation
                  key={page}
                  disableTouchRipple
                  onClick={() => setSelectedMenu(page)}
                  sx={{
                    my: 2,
                    color: selectedMenu === page ? "#0796EF" : "white",
                    display: "block",
                    fontSize: 21,
                    fontWeight: 400,
                    ":hover": { color: "#0796EF", bgcolor: "transparent" },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Stack
              display={{ xs: "flex", md: "none" }}
              alignItems={"center"}
              width={"100%"}
            >
              <Box
                component={"img"}
                height={44}
                width={50}
                src="/assets/Logo.png"
              />

              <Box
                sx={{
                  position: "absolute",
                  top: -25,
                  right: 10,
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon sx={{ color: "#857878" }} />
                </IconButton>
              </Box>
            </Stack>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ bgcolor: "#121618", color: "white" }}
                >
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
