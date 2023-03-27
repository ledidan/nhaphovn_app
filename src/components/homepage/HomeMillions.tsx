import React from "react";
import { Container, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

const AntTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "#dc3545",
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
      color: "#dc3545",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#dc3545",
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
const HomeMillions = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Container className="relative overflow-hidden">
      <section className="home-millions flex items-center justify-between ">
        <Typography variant="h5" color={"#dc3545"}>
          Nhà phố triệu đô
        </Typography>
        <Typography
          className="flex items-center text-end"
          variant="inherit"
          color={"#dc3545"}
        >
          Xem thêm
        </Typography>
      </section>
      <div className="tab_millions_posts ">
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
          <div className="wiper-millions-cards  ">
            <Swiper
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              slidesPerView={1.2}
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
                <Box className="rounded-lg overflow-hidden shadow-2xl relative cursor-pointer">
                  <figure
                    className="max-w-md mx-auto "
                    style={{ height: "420px" }}
                  >
                    <Image
                      width={500}
                      height={500}
                      src="/README.jpg"
                      alt="Sunset in the mountains"
                    />
                    <div className="block px-4 py-4 absolute bottom-0 left-0 right-0 text-white tracking-tight">
                      <Typography
                        fontWeight={600}
                        variant="body1"
                        className="text-start card-head mb-2 uppercase truncate"
                      >
                        mặt phố lô góc lý thường kiệt, quận 1, 61m2 x 15m mặt
                        tiền đường nguyễn công ch
                      </Typography>
                      <div className="card-body flex items-center">
                        <p className="card-title text-sm mb-2 font-bold">
                          66 tỷ
                        </p>
                        <p className="card-title text-sm mb-2 py-2 pl-3 font-bold">
                          61m2
                        </p>
                      </div>
                      <p className="text-start text-sm truncate leading-normal">
                        Đường Lý thường Kiệt, Hoàn kiếm, Hà Nội
                      </p>
                    </div>
                  </figure>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box className="rounded-lg overflow-hidden shadow-3xl relative cursor-pointer">
                  <figure
                    className="max-w-md mx-auto"
                    style={{ height: "420px" }}
                  >
                    <Image
                      width={500}
                      height={500}
                      src="/README.jpg"
                      alt="Sunset in the mountains"
                    />
                    <div className="block px-4 py-4 absolute bottom-0 left-0 right-0 text-white  tracking-tight">
                      <Typography
                        fontWeight={600}
                        variant="body1"
                        className="text-start card-head mb-2 uppercase truncate"
                      >
                        mặt phố lô góc lý thường kiệt, quận 1, 61m2 x 15m mặt
                        tiền đường nguyễn công ch
                      </Typography>
                      <div className="card-body flex items-center">
                        <p className="card-title text-sm mb-2 font-bold">
                          66 tỷ
                        </p>
                        <p className="card-title text-sm mb-2 py-2 pl-3 font-bold">
                          61m2
                        </p>
                      </div>
                      <p className="text-start text-sm truncate">
                        Đường Lý thường Kiệt, Hoàn kiếm, Hà Nội
                      </p>
                    </div>
                  </figure>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box className="rounded-lg overflow-hidden shadow-3xl relative cursor-pointer">
                  <figure
                    className="max-w-md mx-auto"
                    style={{ height: "420px" }}
                  >
                    <Image
                      width={500}
                      height={500}
                      src="/README.jpg"
                      alt="Sunset in the mountains"
                    />
                    <div className="block px-4 py-4 absolute bottom-0 left-0 right-0 text-white">
                      <Typography
                        fontWeight={600}
                        variant="body1"
                        className="text-start card-head mb-2 uppercase truncate"
                      >
                        mặt phố lô góc lý thường kiệt, quận 1, 61m2 x 15m mặt
                        tiền đường nguyễn công ch
                      </Typography>
                      <div className="card-body flex items-center">
                        <p className="card-title text-sm mb-2 font-bold">
                          66 tỷ
                        </p>
                        <p className="card-title text-sm mb-2 py-2 pl-3 font-bold">
                          61m2
                        </p>
                      </div>
                      <p className="text-start text-sm truncate">
                        Đường Lý thường Kiệt, Hoàn kiếm, Hà Nội
                      </p>
                    </div>
                  </figure>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box className="rounded-lg overflow-hidden shadow-3xl relative cursor-pointer">
                  <figure
                    className="max-w-md mx-auto"
                    style={{ height: "420px" }}
                  >
                    <Image
                      width={500}
                      height={500}
                      src="/README.jpg"
                      alt="Sunset in the mountains"
                    />
                    <div className="block px-4 py-4 absolute bottom-0 left-0 right-0 text-white">
                      <Typography
                        fontWeight={600}
                        variant="body1"
                        className="text-start card-head mb-2 uppercase truncate"
                      >
                        mặt phố lô góc lý thường kiệt, quận 1, 61m2 x 15m mặt
                        tiền đường nguyễn công ch
                      </Typography>
                      <div className="card-body flex items-center">
                        <p className="card-title text-sm mb-2 font-bold">
                          66 tỷ
                        </p>
                        <p className="card-title text-sm mb-2 py-2 pl-3 font-bold">
                          61m2
                        </p>
                      </div>
                      <p className="text-start text-sm truncate">
                        Đường Lý thường Kiệt, Hoàn kiếm, Hà Nội
                      </p>
                    </div>
                  </figure>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box className="rounded-lg overflow-hidden shadow-3xl relative cursor-pointer">
                  <figure
                    className="max-w-md mx-auto"
                    style={{ height: "420px" }}
                  >
                    <Image
                      width={500}
                      height={500}
                      src="/README.jpg"
                      alt="Sunset in the mountains"
                    />
                    <div className="block px-4 py-4 absolute bottom-0 left-0 right-0 text-white">
                      <Typography
                        fontWeight={600}
                        variant="body1"
                        className="text-start card-head mb-2 uppercase truncate"
                      >
                        mặt phố lô góc lý thường kiệt, quận 1, 61m2 x 15m mặt
                        tiền đường nguyễn công ch
                      </Typography>
                      <div className="card-body flex items-center">
                        <p className="card-title text-sm mb-2 font-bold">
                          66 tỷ
                        </p>
                        <p className="card-title text-sm mb-2 py-2 pl-3 font-bold">
                          61m2
                        </p>
                      </div>
                      <p className="text-start text-sm truncate">
                        Đường Lý thường Kiệt, Hoàn kiếm, Hà Nội
                      </p>
                    </div>
                  </figure>
                </Box>
              </SwiperSlide>
            </Swiper>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="wiper-millions-cards  ">
            <Swiper
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              slidesPerView={1.2}
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
                <Box className="rounded-lg overflow-hidden shadow-2xl relative cursor-pointer">
                  <figure
                    className="max-w-md mx-auto "
                    style={{ height: "420px" }}
                  >
                    <Image
                      width={500}
                      height={500}
                      src="/README.jpg"
                      alt="Sunset in the mountains"
                    />
                    <div className="block px-4 py-4 absolute bottom-0 left-0 right-0 text-white tracking-tight">
                      <Typography
                        fontWeight={600}
                        variant="body1"
                        className="text-start card-head mb-2 uppercase truncate"
                      >
                        mặt phố lô góc lý thường kiệt, quận 1, 61m2 x 15m mặt
                        tiền đường nguyễn công ch
                      </Typography>
                      <div className="card-body flex items-center">
                        <p className="card-title text-sm mb-2 font-bold">
                          66 tỷ
                        </p>
                        <p className="card-title text-sm mb-2 py-2 pl-3 font-bold">
                          61m2
                        </p>
                      </div>
                      <p className="text-start text-sm truncate leading-normal">
                        Đường Lý thường Kiệt, Hoàn kiếm, Hà Nội
                      </p>
                    </div>
                  </figure>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box className="rounded-lg overflow-hidden shadow-3xl relative cursor-pointer">
                  <figure
                    className="max-w-md mx-auto"
                    style={{ height: "420px" }}
                  >
                    <Image
                      width={500}
                      height={500}
                      src="/README.jpg"
                      alt="Sunset in the mountains"
                    />
                    <div className="block px-4 py-4 absolute bottom-0 left-0 right-0 text-white  tracking-tight">
                      <Typography
                        fontWeight={600}
                        variant="body1"
                        className="text-start card-head mb-2 uppercase truncate"
                      >
                        mặt phố lô góc lý thường kiệt, quận 1, 61m2 x 15m mặt
                        tiền đường nguyễn công ch
                      </Typography>
                      <div className="card-body flex items-center">
                        <p className="card-title text-sm mb-2 font-bold">
                          66 tỷ
                        </p>
                        <p className="card-title text-sm mb-2 py-2 pl-3 font-bold">
                          61m2
                        </p>
                      </div>
                      <p className="text-start text-sm truncate">
                        Đường Lý thường Kiệt, Hoàn kiếm, Hà Nội
                      </p>
                    </div>
                  </figure>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box className="rounded-lg overflow-hidden shadow-3xl relative cursor-pointer">
                  <figure
                    className="max-w-md mx-auto"
                    style={{ height: "420px" }}
                  >
                    <Image
                      width={500}
                      height={500}
                      src="/README.jpg"
                      alt="Sunset in the mountains"
                    />
                    <div className="block px-4 py-4 absolute bottom-0 left-0 right-0 text-white">
                      <Typography
                        fontWeight={600}
                        variant="body1"
                        className="text-start card-head mb-2 uppercase truncate"
                      >
                        mặt phố lô góc lý thường kiệt, quận 1, 61m2 x 15m mặt
                        tiền đường nguyễn công ch
                      </Typography>
                      <div className="card-body flex items-center">
                        <p className="card-title text-sm mb-2 font-bold">
                          66 tỷ
                        </p>
                        <p className="card-title text-sm mb-2 py-2 pl-3 font-bold">
                          61m2
                        </p>
                      </div>
                      <p className="text-start text-sm truncate">
                        Đường Lý thường Kiệt, Hoàn kiếm, Hà Nội
                      </p>
                    </div>
                  </figure>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box className="rounded-lg overflow-hidden shadow-3xl relative cursor-pointer">
                  <figure
                    className="max-w-md mx-auto"
                    style={{ height: "420px" }}
                  >
                    <Image
                      width={500}
                      height={500}
                      src="/README.jpg"
                      alt="Sunset in the mountains"
                    />
                    <div className="block px-4 py-4 absolute bottom-0 left-0 right-0 text-white">
                      <Typography
                        fontWeight={600}
                        variant="body1"
                        className="text-start card-head mb-2 uppercase truncate"
                      >
                        mặt phố lô góc lý thường kiệt, quận 1, 61m2 x 15m mặt
                        tiền đường nguyễn công ch
                      </Typography>
                      <div className="card-body flex items-center">
                        <p className="card-title text-sm mb-2 font-bold">
                          66 tỷ
                        </p>
                        <p className="card-title text-sm mb-2 py-2 pl-3 font-bold">
                          61m2
                        </p>
                      </div>
                      <p className="text-start text-sm truncate">
                        Đường Lý thường Kiệt, Hoàn kiếm, Hà Nội
                      </p>
                    </div>
                  </figure>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box className="rounded-lg overflow-hidden shadow-3xl relative cursor-pointer">
                  <figure
                    className="max-w-md mx-auto"
                    style={{ height: "420px" }}
                  >
                    <Image
                      width={500}
                      height={500}
                      src="/README.jpg"
                      alt="Sunset in the mountains"
                    />
                    <div className="block px-4 py-4 absolute bottom-0 left-0 right-0 text-white">
                      <Typography
                        fontWeight={600}
                        variant="body1"
                        className="text-start card-head mb-2 uppercase truncate"
                      >
                        mặt phố lô góc lý thường kiệt, quận 1, 61m2 x 15m mặt
                        tiền đường nguyễn công ch
                      </Typography>
                      <div className="card-body flex items-center">
                        <p className="card-title text-sm mb-2 font-bold">
                          66 tỷ
                        </p>
                        <p className="card-title text-sm mb-2 py-2 pl-3 font-bold">
                          61m2
                        </p>
                      </div>
                      <p className="text-start text-sm truncate">
                        Đường Lý thường Kiệt, Hoàn kiếm, Hà Nội
                      </p>
                    </div>
                  </figure>
                </Box>
              </SwiperSlide>
            </Swiper>
          </div>
        </TabPanel>
      </div>
    </Container>
  );
};

export default HomeMillions;
