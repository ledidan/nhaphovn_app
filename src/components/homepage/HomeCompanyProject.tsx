import React from "react";
import { Box, Typography, Container, Card, CardContent } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
const HomeCompanyProject = () => {
  return (
    <section className="mt-5 mb-4 relative overflow-hidden">
      <Container className="home-project-company ">
        <div className="text-blue-700 mb-3 home-project--wrapper flex items-center justify-between">
          <Typography variant="inherit" fontSize={"25px"} fontWeight={700}>
            Dự án mới nhất
          </Typography>
          <Typography className="flex items-center text-end" variant="inherit">
            Xem thêm {">>"}
          </Typography>
        </div>
        <div className="home-project--content">
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
                <Card sx={{ maxWidth: 320 }} variant="outlined">
                  <div className="card-image relative">
                    <Image
                      alt="green iguana"
                      height={300}
                      width={300}
                      src="/README.jpg"
                    />
                    <span className="absolute top-2 left-2 bg-gray-500 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                      Đang Cập Nhật
                    </span>
                  </div>

                  <CardContent className="flex flex-col text-left w-full">
                    <Typography
                      gutterBottom
                      variant="body1"
                      className="uppercase"
                      fontWeight={600}
                    >
                      khu đô thị số 4
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      Nguyễn Thị Minh Khai, Phường Vĩnh Hưng, Hoàng Mai, Hà Nội
                    </Typography>
                  </CardContent>
                  <CardContent className="text-gray-700 flex text-xs items-center ">
                    <p>
                      <LocalAtmIcon
                        sx={{ stroke: "#e8e8e8", strokeWidth: 1 }}
                      />
                    </p>
                    <p className="home-m2 pl-3 font-bold">
                      12.6 - 136.67 triệu/m2
                    </p>
                  </CardContent>
                </Card>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="rounded overflow-hidden relative cursor-pointer">
                <Card sx={{ maxWidth: 330 }} variant="outlined">
                  <div className="card-image relative">
                    <Image
                      alt="green iguana"
                      height={300}
                      width={300}
                      src="/README.jpg"
                    />
                    <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Đã Bàn Giao
                    </span>
                  </div>

                  <CardContent className="flex flex-col text-left w-full">
                    <Typography
                      gutterBottom
                      variant="body1"
                      className="uppercase"
                      fontWeight={600}
                    >
                      khu đô thị số 4
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      Nguyễn Thị Minh Khai, Phường Vĩnh Hưng, Hoàng Mai, Hà Nội
                    </Typography>
                  </CardContent>
                  <CardContent className="text-gray-700 flex text-xs items-center ">
                    <p>
                      <LocalAtmIcon
                        sx={{ stroke: "#e8e8e8", strokeWidth: 1 }}
                      />
                    </p>
                    <p className="home-m2 pl-3 font-bold">
                      12.6 - 136.67 triệu/m2
                    </p>
                  </CardContent>
                </Card>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="rounded overflow-hidden relative cursor-pointer">
                <Card sx={{ maxWidth: 330 }} variant="outlined">
                  <div className="card-image relative">
                    <Image
                      alt="green iguana"
                      height={300}
                      width={300}
                      src="/README.jpg"
                    />
                    <span className="absolute top-2 left-2 bg-green-700 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                      Đang Mở Bán
                    </span>
                  </div>

                  <CardContent className="flex flex-col text-left w-full">
                    <Typography
                      gutterBottom
                      variant="body1"
                      className="uppercase"
                      fontWeight={600}
                    >
                      khu đô thị số 4
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      Nguyễn Thị Minh Khai, Phường Vĩnh Hưng, Hoàng Mai, Hà Nội
                    </Typography>
                  </CardContent>
                  <CardContent className="text-gray-700 flex text-xs items-center ">
                    <p>
                      <LocalAtmIcon
                        sx={{ stroke: "#e8e8e8", strokeWidth: 1 }}
                      />
                    </p>
                    <p className="home-m2 pl-3 font-bold">
                      12.6 - 136.67 triệu/m2
                    </p>
                  </CardContent>
                </Card>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="rounded overflow-hidden relative cursor-pointer">
                <Card sx={{ maxWidth: 330 }} variant="outlined">
                  <div className="card-image relative">
                    <Image
                      alt="green iguana"
                      height={300}
                      width={300}
                      src="/README.jpg"
                    />
                  </div>

                  <CardContent className="flex flex-col text-left w-full">
                    <Typography
                      gutterBottom
                      variant="body1"
                      className="uppercase"
                      fontWeight={600}
                    >
                      khu đô thị số 4
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      Nguyễn Thị Minh Khai, Phường Vĩnh Hưng, Hoàng Mai, Hà Nội
                    </Typography>
                  </CardContent>
                  <CardContent className="text-gray-700 flex text-xs items-center ">
                    <p>
                      <LocalAtmIcon
                        sx={{ stroke: "#e8e8e8", strokeWidth: 1 }}
                      />
                    </p>
                    <p className="home-m2 pl-3 font-bold">
                      12.6 - 136.67 triệu/m2
                    </p>
                  </CardContent>
                </Card>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="rounded overflow-hidden relative cursor-pointer">
                <Card sx={{ maxWidth: 330 }} variant="outlined">
                  <div className="card-image relative">
                    <Image
                      alt="green iguana"
                      height={300}
                      width={300}
                      src="/README.jpg"
                    />
                  </div>

                  <CardContent className="flex flex-col text-left w-full">
                    <Typography
                      gutterBottom
                      variant="body1"
                      className="uppercase"
                      fontWeight={600}
                    >
                      khu đô thị số 4
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      Nguyễn Thị Minh Khai, Phường Vĩnh Hưng, Hoàng Mai, Hà Nội
                    </Typography>
                  </CardContent>
                  <CardContent className="text-gray-700 flex text-xs items-center ">
                    <p>
                      <LocalAtmIcon
                        sx={{ stroke: "#e8e8e8", strokeWidth: 1 }}
                      />
                    </p>
                    <p className="home-m2 pl-3 font-bold">
                      12.6 - 136.67 triệu/m2
                    </p>
                  </CardContent>
                </Card>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="rounded overflow-hidden relative cursor-pointer">
                <Card sx={{ maxWidth: 330 }} variant="outlined">
                  <div className="card-image relative">
                    <Image
                      alt="green iguana"
                      height={300}
                      width={300}
                      src="/README.jpg"
                    />
                  </div>

                  <CardContent className="flex flex-col text-left w-full">
                    <Typography
                      gutterBottom
                      variant="body1"
                      className="uppercase"
                      fontWeight={600}
                    >
                      khu đô thị số 4
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      Nguyễn Thị Minh Khai, Phường Vĩnh Hưng, Hoàng Mai, Hà Nội
                    </Typography>
                  </CardContent>
                  <CardContent className="text-gray-700 flex text-xs items-center ">
                    <p>
                      <LocalAtmIcon
                        sx={{ stroke: "#e8e8e8", strokeWidth: 1 }}
                      />
                    </p>
                    <p className="home-m2 pl-3 font-bold">
                      12.6 - 136.67 triệu/m2
                    </p>
                  </CardContent>
                </Card>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="rounded overflow-hidden relative cursor-pointer">
                <Card sx={{ maxWidth: 330 }} variant="outlined">
                  <div className="card-image relative">
                    <Image
                      alt="green iguana"
                      height={300}
                      width={300}
                      src="/README.jpg"
                    />
                  </div>

                  <CardContent className="flex flex-col text-left w-full">
                    <Typography
                      gutterBottom
                      variant="body1"
                      className="uppercase"
                      fontWeight={600}
                    >
                      khu đô thị số 4
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      Nguyễn Thị Minh Khai, Phường Vĩnh Hưng, Hoàng Mai, Hà Nội
                    </Typography>
                  </CardContent>
                  <CardContent className="text-gray-700 flex text-xs items-center ">
                    <p>
                      <LocalAtmIcon
                        sx={{ stroke: "#e8e8e8", strokeWidth: 1 }}
                      />
                    </p>
                    <p className="home-m2 pl-3 font-bold">
                      12.6 - 136.67 triệu/m2
                    </p>
                  </CardContent>
                </Card>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="rounded overflow-hidden relative cursor-pointer">
                <Card sx={{ maxWidth: 330 }} variant="outlined">
                  <div className="card-image relative">
                    <Image
                      alt="green iguana"
                      height={300}
                      width={300}
                      src="/README.jpg"
                    />
                  </div>

                  <CardContent className="flex flex-col text-left w-full">
                    <Typography
                      gutterBottom
                      variant="body1"
                      className="uppercase"
                      fontWeight={600}
                    >
                      khu đô thị số 4
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      Nguyễn Thị Minh Khai, Phường Vĩnh Hưng, Hoàng Mai, Hà Nội
                    </Typography>
                  </CardContent>
                  <CardContent className="text-gray-700 flex text-xs items-center ">
                    <p>
                      <LocalAtmIcon
                        sx={{ stroke: "#e8e8e8", strokeWidth: 1 }}
                      />
                    </p>
                    <p className="home-m2 pl-3 font-bold">
                      12.6 - 136.67 triệu/m2
                    </p>
                  </CardContent>
                </Card>
              </Box>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default HomeCompanyProject;
