import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import VillaIcon from "@mui/icons-material/Villa";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PostAddIcon from "@mui/icons-material/PostAdd";
import Link from "next/link";
import MobileNavMenu from "components/homepage/MobileNavMenu";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import SearchFormMenu from "components/homepage/SearchFormMenu";
import { Slide, useScrollTrigger } from "@mui/material";

// Menu Items
const pages = [
  {
    name: "Cần bán",
    urlLink: "/can-ban",
    mobileImg: <SellOutlinedIcon />,
  },
  {
    name: "Cho thuê",
    urlLink: "/cho-thue",
    mobileImg: <SellOutlinedIcon />,
  },
  {
    name: "Dự án",
    urlLink: "/du-an",
    mobileImg: <SellOutlinedIcon />,
  },
  {
    name: "Đối tác",
    urlLink: "/doi-tac",
    mobileImg: <SellOutlinedIcon />,
  },
  {
    name: "Nhà môi giới",
    urlLink: "/nha-moi-gioi",
    mobileImg: <SellOutlinedIcon />,
  },
  {
    name: "Bộ sưu tập",
    urlLink: "/bo-suu-tap",
    mobileImg: <SellOutlinedIcon />,
  },
  {
    name: "Ký gửi",
    urlLink: "/ky-gui",
    mobileImg: <SellOutlinedIcon />,
  },
  {
    name: "Cần mua",
    urlLink: "/can-mua",
    mobileImg: <SellOutlinedIcon />,
  },
  {
    name: "Tin chính chủ",
    urlLink: "/tin-chinh-chu",
    mobileImg: <SellOutlinedIcon />,
  },
];
const settings = [
  {
    title: "Quản lý tin đăng",
    startIcon: <DashboardCustomizeOutlinedIcon />,
    settingUrl: "/tai-khoan",
  },
  {
    title: "Thông tin tài khoản",
    startIcon: <ManageAccountsOutlinedIcon />,
    settingUrl: "/tai-khoan/sua-tai-khoan",
  },
  {
    title: "Thoát",
    startIcon: <LogoutOutlinedIcon />,
    settingUrl: "/logout",
  },
];
// End Menu Items

// Props of ScrollTrigger

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<HTMLElement | null>();
  const [anchorElUser, setAnchorElUser] = React.useState<HTMLElement | null>();
  const [isOpenDialog, setOpenDialog] = React.useState(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenDialogSearch = () => {
    setOpenDialog(true);
  };
  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters className="my-1">
            <VillaIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 600,
                letterSpacing: ".1rem",
                color: "black",
              }}
            >
              NHÀPHỐVN
            </Typography>

            <VillaIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
              }}
            >
              NHÀPHỐVN
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page, index) => (
                <Typography
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{ color: "black", ml: 2, fontWeight: 600 }}
                >
                  <Link href={`${page.urlLink}`}>{page.name} </Link>
                </Typography>
              ))}
            </Box>

            <Box
              sx={{
                flexGrow: 0,
                display: { lg: "flex", md: "none", xs: "none" },
              }}
            >
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0, size: "small" }}
                >
                  <Avatar sx={{ width: 30, height: 30 }} />
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
              <Button
                variant="outlined"
                className="ml-5"
                startIcon={<AddIcon />}
              >
                Đăng tin miễn phí
              </Button>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, index) => (
                  <MenuItem key={index} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link href={`${setting.settingUrl}`}>
                        {setting.startIcon}
                        {setting.title}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 0, display: { lg: "none", md: "flex " } }}>
              <IconButton
                size="small"
                aria-label="account of current user"
                href="/tai-khoan/dang-tin"
              >
                <PostAddIcon color="primary" />
              </IconButton>
              <IconButton
                size="small"
                aria-label="account of current user"
                href="/tai-khoan"
              >
                <AccountCircleOutlinedIcon color="primary" />
              </IconButton>
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
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
                sx={{
                  display: { md: "block" },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link href={`${page.urlLink}`}>{page.name}</Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ display: { lg: "none", md: "flex" } }}>
        <div className="relative mt-4 w-96">
          <div className="absolute flex items-center ml-2 h-full">
            <svg
              className="w-8 h-4 fill-current text-primary-gray-dark  "
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z" />
            </svg>
          </div>
          <input
            type="text"
            onClick={handleOpenDialogSearch}
            placeholder="Nhập từ khoá..."
            className="cursor-pointer  px-10 py-3 w-full rounded-full bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          />
        </div>
      </Box>

      <SearchFormMenu
        isOpenDialog={isOpenDialog}
        setOpenDialog={setOpenDialog}
      />
      <MobileNavMenu pages={pages} />
    </>
  );
}
