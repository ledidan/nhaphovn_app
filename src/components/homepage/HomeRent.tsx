import React from "react";
import Image from "next/image";
import Tabs from "@mui/material/Tabs";
import { Box, Tab, Typography, Container } from "@mui/material";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Card from "@mui/material/Card";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import CardContent from "@mui/material/CardContent";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

const AntTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "#1d199a",
  },
});

const AntTab = styled((props: any) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.85)",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#1d199a",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#1d199a",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ mt: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const HomeRent = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <section className="home_properties-rent relative overflow-hidden mb-8">
      <Container className="home_property_inner">
        <div className="text-blue-700 flex items-center justify-between">
          <Typography variant="inherit" fontSize={"25px"} fontWeight={700}>
            Tin cho thuê mới nhất
          </Typography>
          <Typography className="flex items-center text-end" variant="inherit">
            Xem thêm
          </Typography>
        </div>
        <div className="tab_home_properties ">
          <Box sx={{ borderColor: "divider" }}>
            <AntTabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="primary"
            >
              <AntTab label="Nổi bật" {...a11yProps(0)} />
              <AntTab label="Mới nhất" {...a11yProps(1)} />
            </AntTabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div className="swiper-property-cards">
              <Swiper
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                slidesPerView={1.5}
                scrollbar={{ draggable: true }}
                spaceBetween={15}
                className="mySwiper"
                breakpoints={{
                  480: {
                    slidesPerView: 1,
                  },
                  576: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
              >
                <SwiperSlide>
                  <Box className="rounded overflow-hidden relative cursor-pointer">
                    <Card sx={{ maxWidth: 315 }} variant="outlined">
                      <div className="card-image relative">
                        <Image
                          alt="green iguana"
                          height={300}
                          width={300}
                          src="/README.jpg"
                        />
                        <div className="text-white text-sm post-quantity-image absolute bottom-3 right-2 flex items-center">
                          <p>
                            <CollectionsOutlinedIcon
                              sx={{ stroke: "#7d7d7d", strokeWidth: 1 }}
                            />
                          </p>
                          <p className="ml-2">5</p>
                        </div>
                      </div>

                      <CardContent className="flex flex-col text-left w-full">
                        <Typography
                          gutterBottom
                          variant="subtitle2"
                          className="uppercase"
                          fontWeight={700}
                        >
                          Bán nhà MẶT PHỐ VĨNH HƯNG, Quận Hoàng Mai 60M*5T, MT
                          5M
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                          Nguyễn Thị Minh Khai, Phường Vĩnh Hưng, Hoàng Mai, Hà
                          Nội
                        </Typography>
                      </CardContent>
                      <CardContent className="flex text-xs mb-2 items-center justify-between ">
                        <p className="home-price font-bold">66 triệu/tháng</p>
                        <p className="home-m2 pl-3 font-bold ">558m2</p>
                      </CardContent>
                      <div className="text-xs pb-3 px-4 property-card__footer flex  items-center ">
                        <p>
                          <WatchLaterOutlinedIcon
                            fontSize="small"
                            color="error"
                            sx={{ stroke: "#ffffff", strokeWidth: 1 }}
                          />
                        </p>
                        <p className="flex items-center px-1 text-gray-500">
                          2 phút trước
                        </p>
                      </div>
                    </Card>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box className="rounded overflow-hidden relative cursor-pointer">
                    <Card sx={{ maxWidth: 315 }} variant="outlined">
                      <div className="card-image relative">
                        <Image
                          alt="green iguana"
                          height={300}
                          width={300}
                          src="/README.jpg"
                        />
                        <div className="text-white text-sm post-quantity-image absolute bottom-3 right-2 flex items-center">
                          <p>
                            <CollectionsOutlinedIcon
                              sx={{ stroke: "#7d7d7d", strokeWidth: 1 }}
                            />
                          </p>
                          <p className="ml-2">5</p>
                        </div>
                      </div>

                      <CardContent className="flex flex-col text-left w-full">
                        <Typography
                          gutterBottom
                          variant="subtitle2"
                          className="uppercase"
                          fontWeight={700}
                        >
                          Bán nhà MẶT PHỐ VĨNH HƯNG, Quận Hoàng Mai 60M*5T, MT
                          5M
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                          Nguyễn Thị Minh Khai, Phường Vĩnh Hưng, Hoàng Mai, Hà
                          Nội
                        </Typography>
                      </CardContent>
                      <CardContent className="flex text-xs mb-2 items-center justify-between ">
                        <p className="home-price font-bold">66 triệu/tháng</p>
                        <p className="home-m2 pl-3 font-bold ">558m2</p>
                      </CardContent>
                      <div className="text-xs pb-3 px-4 property-card__footer flex  items-center ">
                        <p>
                          <WatchLaterOutlinedIcon
                            fontSize="small"
                            color="error"
                            sx={{ stroke: "#ffffff", strokeWidth: 1 }}
                          />
                        </p>
                        <p className="flex items-center px-1 text-gray-500">
                          2 phút trước
                        </p>
                      </div>
                    </Card>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box className="rounded overflow-hidden relative cursor-pointer">
                    <Card sx={{ maxWidth: 315 }} variant="outlined">
                      <div className="card-image relative">
                        <Image
                          alt="green iguana"
                          height={300}
                          width={300}
                          src="/README.jpg"
                        />
                        <div className="text-white text-sm post-quantity-image absolute bottom-3 right-2 flex items-center">
                          <p>
                            <CollectionsOutlinedIcon
                              sx={{ stroke: "#7d7d7d", strokeWidth: 1 }}
                            />
                          </p>
                          <p className="ml-2">5</p>
                        </div>
                      </div>

                      <CardContent className="flex flex-col text-left w-full">
                        <Typography
                          gutterBottom
                          variant="subtitle2"
                          className="uppercase"
                          fontWeight={700}
                        >
                          Bán nhà MẶT PHỐ VĨNH HƯNG, Quận Hoàng Mai 60M*5T, MT
                          5M
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                          Nguyễn Thị Minh Khai, Phường Vĩnh Hưng, Hoàng Mai, Hà
                          Nội
                        </Typography>
                      </CardContent>
                      <CardContent className="flex text-xs mb-2 items-center justify-between ">
                        <p className="home-price font-bold">66 triệu/tháng</p>
                        <p className="home-m2 pl-3 font-bold ">558m2</p>
                      </CardContent>
                      <div className="text-xs pb-3 px-4 property-card__footer flex  items-center ">
                        <p>
                          <WatchLaterOutlinedIcon
                            fontSize="small"
                            color="error"
                            sx={{ stroke: "#ffffff", strokeWidth: 1 }}
                          />
                        </p>
                        <p className="flex items-center px-1 text-gray-500">
                          2 phút trước
                        </p>
                      </div>
                    </Card>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box className="rounded overflow-hidden relative cursor-pointer">
                    <Card sx={{ maxWidth: 315 }} variant="outlined">
                      <div className="card-image relative">
                        <Image
                          alt="green iguana"
                          height={300}
                          width={300}
                          src="/README.jpg"
                        />
                        <div className="text-white text-sm post-quantity-image absolute bottom-3 right-2 flex items-center">
                          <p>
                            <CollectionsOutlinedIcon
                              sx={{ stroke: "#7d7d7d", strokeWidth: 1 }}
                            />
                          </p>
                          <p className="ml-2">5</p>
                        </div>
                      </div>

                      <CardContent className="flex flex-col text-left w-full">
                        <Typography
                          gutterBottom
                          variant="subtitle2"
                          className="uppercase"
                          fontWeight={700}
                        >
                          Bán nhà MẶT PHỐ VĨNH HƯNG, Quận Hoàng Mai 60M*5T, MT
                          5M
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                          Nguyễn Thị Minh Khai, Phường Vĩnh Hưng, Hoàng Mai, Hà
                          Nội
                        </Typography>
                      </CardContent>
                      <CardContent className="flex text-xs mb-2 items-center justify-between ">
                        <p className="home-price font-bold">66 triệu/tháng</p>
                        <p className="home-m2 pl-3 font-bold ">558m2</p>
                      </CardContent>
                      <div className="text-xs pb-3 px-4 property-card__footer flex  items-center ">
                        <p>
                          <WatchLaterOutlinedIcon
                            fontSize="small"
                            color="error"
                            sx={{ stroke: "#ffffff", strokeWidth: 1 }}
                          />
                        </p>
                        <p className="flex items-center px-1 text-gray-500">
                          2 phút trước
                        </p>
                      </div>
                    </Card>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box className="rounded overflow-hidden relative cursor-pointer">
                    <Card sx={{ maxWidth: 315 }} variant="outlined">
                      <div className="card-image relative">
                        <Image
                          alt="green iguana"
                          height={300}
                          width={300}
                          src="/README.jpg"
                        />
                        <div className="text-white text-sm post-quantity-image absolute bottom-3 right-2 flex items-center">
                          <p>
                            <CollectionsOutlinedIcon
                              sx={{ stroke: "#7d7d7d", strokeWidth: 1 }}
                            />
                          </p>
                          <p className="ml-2">5</p>
                        </div>
                      </div>

                      <CardContent className="flex flex-col text-left w-full">
                        <Typography
                          gutterBottom
                          variant="subtitle2"
                          className="uppercase"
                          fontWeight={700}
                        >
                          Bán nhà MẶT PHỐ VĨNH HƯNG, Quận Hoàng Mai 60M*5T, MT
                          5M
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                          Nguyễn Thị Minh Khai, Phường Vĩnh Hưng, Hoàng Mai, Hà
                          Nội
                        </Typography>
                      </CardContent>
                      <CardContent className="flex text-xs mb-2 items-center justify-between ">
                        <p className="home-price font-bold">66 triệu/tháng</p>
                        <p className="home-m2 pl-3 font-bold ">558m2</p>
                      </CardContent>
                      <div className="text-xs pb-3 px-4 property-card__footer flex  items-center ">
                        <p>
                          <WatchLaterOutlinedIcon
                            fontSize="small"
                            color="error"
                            sx={{ stroke: "#ffffff", strokeWidth: 1 }}
                          />
                        </p>
                        <p className="flex items-center px-1 text-gray-500">
                          2 phút trước
                        </p>
                      </div>
                    </Card>
                  </Box>
                </SwiperSlide>
              </Swiper>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="swiper-property-cards">
              <Swiper
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                slidesPerView={1.5}
                scrollbar={{ draggable: true }}
                spaceBetween={15}
                className="mySwiper"
                breakpoints={{
                  480: {
                    slidesPerView: 1,
                  },
                  576: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
              >
                <SwiperSlide>
                  <Box className="rounded overflow-hidden relative cursor-pointer">
                    <Card sx={{ maxWidth: 315 }} variant="outlined">
                      <div className="card-image relative">
                        <Image
                          alt="green iguana"
                          height={300}
                          width={300}
                          src="/README.jpg"
                        />
                        <div className="text-white text-sm post-quantity-image absolute bottom-3 right-2 flex items-center">
                          <p>
                            <CollectionsOutlinedIcon
                              sx={{ stroke: "#7d7d7d", strokeWidth: 1 }}
                            />
                          </p>
                          <p className="ml-2">5</p>
                        </div>
                      </div>

                      <CardContent className="flex flex-col text-left w-full">
                        <Typography
                          gutterBottom
                          variant="subtitle2"
                          className="uppercase"
                          fontWeight={700}
                        >
                          Bán nhà MẶT PHỐ VĨNH HƯNG, Quận Hoàng Mai 60M*5T, MT
                          5M
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                          Nguyễn Thị Minh Khai, Phường Vĩnh Hưng, Hoàng Mai, Hà
                          Nội
                        </Typography>
                      </CardContent>
                      <CardContent className="flex text-xs mb-2 items-center justify-between ">
                        <p className="home-price font-bold">66 triệu/tháng</p>
                        <p className="home-m2 pl-3 font-bold ">558m2</p>
                      </CardContent>
                      <div className="text-xs pb-3 px-4 property-card__footer flex  items-center ">
                        <p>
                          <WatchLaterOutlinedIcon
                            fontSize="small"
                            color="error"
                            sx={{ stroke: "#ffffff", strokeWidth: 1 }}
                          />
                        </p>
                        <p className="flex items-center px-1 text-gray-500">
                          2 phút trước
                        </p>
                      </div>
                    </Card>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box className="rounded overflow-hidden relative cursor-pointer">
                    <Card sx={{ maxWidth: 315 }} variant="outlined">
                      <div className="card-image relative">
                        <Image
                          alt="green iguana"
                          height={300}
                          width={300}
                          src="/README.jpg"
                        />
                        <div className="text-white text-sm post-quantity-image absolute bottom-3 right-2 flex items-center">
                          <p>
                            <CollectionsOutlinedIcon
                              sx={{ stroke: "#7d7d7d", strokeWidth: 1 }}
                            />
                          </p>
                          <p className="ml-2">5</p>
                        </div>
                      </div>

                      <CardContent className="flex flex-col text-left w-full">
                        <Typography
                          gutterBottom
                          variant="subtitle2"
                          className="uppercase"
                          fontWeight={700}
                        >
                          Bán nhà MẶT PHỐ VĨNH HƯNG, Quận Hoàng Mai 60M*5T, MT
                          5M
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                          Nguyễn Thị Minh Khai, Phường Vĩnh Hưng, Hoàng Mai, Hà
                          Nội
                        </Typography>
                      </CardContent>
                      <CardContent className="flex text-xs mb-2 items-center justify-between ">
                        <p className="home-price font-bold">66 triệu/tháng</p>
                        <p className="home-m2 pl-3 font-bold ">558m2</p>
                      </CardContent>
                      <div className="text-xs pb-3 px-4 property-card__footer flex  items-center ">
                        <p>
                          <WatchLaterOutlinedIcon
                            fontSize="small"
                            color="error"
                            sx={{ stroke: "#ffffff", strokeWidth: 1 }}
                          />
                        </p>
                        <p className="flex items-center px-1 text-gray-500">
                          2 phút trước
                        </p>
                      </div>
                    </Card>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box className="rounded overflow-hidden relative cursor-pointer">
                    <Card sx={{ maxWidth: 315 }} variant="outlined">
                      <div className="card-image relative">
                        <Image
                          alt="green iguana"
                          height={300}
                          width={300}
                          src="/README.jpg"
                        />
                        <div className="text-white text-sm post-quantity-image absolute bottom-3 right-2 flex items-center">
                          <p>
                            <CollectionsOutlinedIcon
                              sx={{ stroke: "#7d7d7d", strokeWidth: 1 }}
                            />
                          </p>
                          <p className="ml-2">5</p>
                        </div>
                      </div>

                      <CardContent className="flex flex-col text-left w-full">
                        <Typography
                          gutterBottom
                          variant="subtitle2"
                          className="uppercase"
                          fontWeight={700}
                        >
                          Bán nhà MẶT PHỐ VĨNH HƯNG, Quận Hoàng Mai 60M*5T, MT
                          5M
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                          Nguyễn Thị Minh Khai, Phường Vĩnh Hưng, Hoàng Mai, Hà
                          Nội
                        </Typography>
                      </CardContent>
                      <CardContent className="flex text-xs mb-2 items-center justify-between ">
                        <p className="home-price font-bold">66 triệu/tháng</p>
                        <p className="home-m2 pl-3 font-bold ">558m2</p>
                      </CardContent>
                      <div className="text-xs pb-3 px-4 property-card__footer flex  items-center ">
                        <p>
                          <WatchLaterOutlinedIcon
                            fontSize="small"
                            color="error"
                            sx={{ stroke: "#ffffff", strokeWidth: 1 }}
                          />
                        </p>
                        <p className="flex items-center px-1 text-gray-500">
                          2 phút trước
                        </p>
                      </div>
                    </Card>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box className="rounded overflow-hidden relative cursor-pointer">
                    <Card sx={{ maxWidth: 315 }} variant="outlined">
                      <div className="card-image relative">
                        <Image
                          alt="green iguana"
                          height={300}
                          width={300}
                          src="/README.jpg"
                        />
                        <div className="text-white text-sm post-quantity-image absolute bottom-3 right-2 flex items-center">
                          <p>
                            <CollectionsOutlinedIcon
                              sx={{ stroke: "#7d7d7d", strokeWidth: 1 }}
                            />
                          </p>
                          <p className="ml-2">5</p>
                        </div>
                      </div>

                      <CardContent className="flex flex-col text-left w-full">
                        <Typography
                          gutterBottom
                          variant="subtitle2"
                          className="uppercase"
                          fontWeight={700}
                        >
                          Bán nhà MẶT PHỐ VĨNH HƯNG, Quận Hoàng Mai 60M*5T, MT
                          5M
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                          Nguyễn Thị Minh Khai, Phường Vĩnh Hưng, Hoàng Mai, Hà
                          Nội
                        </Typography>
                      </CardContent>
                      <CardContent className="flex text-xs mb-2 items-center justify-between ">
                        <p className="home-price font-bold">66 triệu/tháng</p>
                        <p className="home-m2 pl-3 font-bold ">558m2</p>
                      </CardContent>
                      <div className="text-xs pb-3 px-4 property-card__footer flex  items-center ">
                        <p>
                          <WatchLaterOutlinedIcon
                            fontSize="small"
                            color="error"
                            sx={{ stroke: "#ffffff", strokeWidth: 1 }}
                          />
                        </p>
                        <p className="flex items-center px-1 text-gray-500">
                          2 phút trước
                        </p>
                      </div>
                    </Card>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box className="rounded overflow-hidden relative cursor-pointer">
                    <Card sx={{ maxWidth: 315 }} variant="outlined">
                      <div className="card-image relative">
                        <Image
                          alt="green iguana"
                          height={300}
                          width={300}
                          src="/README.jpg"
                        />
                        <div className="text-white text-sm post-quantity-image absolute bottom-3 right-2 flex items-center">
                          <p>
                            <CollectionsOutlinedIcon
                              sx={{ stroke: "#7d7d7d", strokeWidth: 1 }}
                            />
                          </p>
                          <p className="ml-2">5</p>
                        </div>
                      </div>

                      <CardContent className="flex flex-col text-left w-full">
                        <Typography
                          gutterBottom
                          variant="subtitle2"
                          className="uppercase"
                          fontWeight={700}
                        >
                          Bán nhà MẶT PHỐ VĨNH HƯNG, Quận Hoàng Mai 60M*5T, MT
                          5M
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                          Nguyễn Thị Minh Khai, Phường Vĩnh Hưng, Hoàng Mai, Hà
                          Nội
                        </Typography>
                      </CardContent>
                      <CardContent className="flex text-xs mb-2 items-center justify-between ">
                        <p className="home-price font-bold">66 triệu/tháng</p>
                        <p className="home-m2 pl-3 font-bold ">558m2</p>
                      </CardContent>
                      <div className="text-xs pb-3 px-4 property-card__footer flex  items-center ">
                        <p>
                          <WatchLaterOutlinedIcon
                            fontSize="small"
                            color="error"
                            sx={{ stroke: "#ffffff", strokeWidth: 1 }}
                          />
                        </p>
                        <p className="flex items-center px-1 text-gray-500">
                          2 phút trước
                        </p>
                      </div>
                    </Card>
                  </Box>
                </SwiperSlide>
              </Swiper>
            </div>
          </TabPanel>
        </div>
      </Container>
    </section>
  );
};

export default HomeRent;
