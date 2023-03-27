import React from "react";
import { Container, Rating, Typography } from "@mui/material";
import StarBorder from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

const HomeCollection = () => {
  const [value, setValue] = React.useState<number | null>(2);
  return (
    <Container className="relative overflow-hidden">
      <section className="text-blue-700 home-millions flex items-center justify-between ">
        <Typography variant="h5">Bộ sưu tập nổi bật</Typography>
        <Typography className="flex items-center text-end" variant="inherit">
          Xem thêm
        </Typography>
      </section>
      <div className="tab_millions_posts ">
        <div className="wiper-millions-cards mt-4">
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
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  <div className="block justify-start px-4 py-4 absolute bottom-0 left-0 right-0 text-white tracking-tight">
                    <Typography
                      fontWeight={600}
                      variant="body1"
                      className="text-start card-head mb-2 uppercase truncate"
                    >
                      Jesica
                    </Typography>
                    <div className="card-body text-left">
                      <p className="uppercase text-start text-sm truncate leading-normal my-1">
                        Nguyễn Thị Nghĩa
                      </p>
                      <p className="leading-normal">
                        <Rating
                          name="text-feedback"
                          value={value}
                          emptyIcon={
                            <StarBorder
                              fontSize="inherit"
                              style={{ color: "white" }}
                            />
                          }
                          size="small"
                          readOnly
                        />
                      </p>
                    </div>
                    <div className="icon-contact absolute bottom-6 right-1">
                      <div className="mb-1 flex items-center justify-start ">
                        <p className="w-6 h-6 rounded-full bg-green-700 leading-tight">
                          <CallIcon sx={{ fontSize: "17px" }} />
                        </p>
                        <p className="mx-2 w-6 h-6 rounded-full bg-green-700 leading-tight">
                          <EmailIcon sx={{ fontSize: "17px" }} />
                        </p>
                      </div>
                    </div>
                  </div>
                </figure>
              </Box>
            </SwiperSlide>
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
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  <div className="block justify-start px-4 py-4 absolute bottom-0 left-0 right-0 text-white tracking-tight">
                    <Typography
                      fontWeight={600}
                      variant="body1"
                      className="text-start card-head mb-2 uppercase truncate"
                    >
                      Jesica
                    </Typography>
                    <div className="card-body text-left">
                      <p className="uppercase text-start text-sm truncate leading-normal my-1">
                        Nguyễn Thị Nghĩa
                      </p>
                      <p className="leading-normal">
                        <Rating
                          name="text-feedback"
                          value={value}
                          emptyIcon={
                            <StarBorder
                              fontSize="inherit"
                              style={{ color: "white" }}
                            />
                          }
                          size="small"
                          readOnly
                        />
                      </p>
                    </div>
                    <div className="icon-contact absolute bottom-6 right-1">
                      <div className="mb-1 flex items-center justify-start ">
                        <p className="w-6 h-6 rounded-full bg-green-700 leading-tight">
                          <CallIcon sx={{ fontSize: "17px" }} />
                        </p>
                        <p className="mx-2 w-6 h-6 rounded-full bg-green-700 leading-tight">
                          <EmailIcon sx={{ fontSize: "17px" }} />
                        </p>
                      </div>
                    </div>
                  </div>
                </figure>
              </Box>
            </SwiperSlide>
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
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  <div className="block justify-start px-4 py-4 absolute bottom-0 left-0 right-0 text-white tracking-tight">
                    <Typography
                      fontWeight={600}
                      variant="body1"
                      className="text-start card-head mb-2 uppercase truncate"
                    >
                      Jesica
                    </Typography>
                    <div className="card-body text-left">
                      <p className="uppercase text-start text-sm truncate leading-normal my-1">
                        Nguyễn Thị Nghĩa
                      </p>
                      <p className="leading-normal">
                        <Rating
                          name="text-feedback"
                          value={value}
                          emptyIcon={
                            <StarBorder
                              fontSize="inherit"
                              style={{ color: "white" }}
                            />
                          }
                          size="small"
                          readOnly
                        />
                      </p>
                    </div>
                    <div className="icon-contact absolute bottom-6 right-1">
                      <div className="mb-1 flex items-center justify-start ">
                        <p className="w-6 h-6 rounded-full bg-green-700 leading-tight">
                          <CallIcon sx={{ fontSize: "17px" }} />
                        </p>
                        <p className="mx-2 w-6 h-6 rounded-full bg-green-700 leading-tight">
                          <EmailIcon sx={{ fontSize: "17px" }} />
                        </p>
                      </div>
                    </div>
                  </div>
                </figure>
              </Box>
            </SwiperSlide>
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
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  <div className="block justify-start px-4 py-4 absolute bottom-0 left-0 right-0 text-white tracking-tight">
                    <Typography
                      fontWeight={600}
                      variant="body1"
                      className="text-start card-head mb-2 uppercase truncate"
                    >
                      Jesica
                    </Typography>
                    <div className="card-body text-left">
                      <p className="uppercase text-start text-sm truncate leading-normal my-1">
                        Nguyễn Thị Nghĩa
                      </p>
                      <p className="leading-normal">
                        <Rating
                          name="text-feedback"
                          value={value}
                          emptyIcon={
                            <StarBorder
                              fontSize="inherit"
                              style={{ color: "white" }}
                            />
                          }
                          size="small"
                          readOnly
                        />
                      </p>
                    </div>
                    <div className="icon-contact absolute bottom-6 right-1">
                      <div className="mb-1 flex items-center justify-start ">
                        <p className="w-6 h-6 rounded-full bg-green-700 leading-tight">
                          <CallIcon sx={{ fontSize: "17px" }} />
                        </p>
                        <p className="mx-2 w-6 h-6 rounded-full bg-green-700 leading-tight">
                          <EmailIcon sx={{ fontSize: "17px" }} />
                        </p>
                      </div>
                    </div>
                  </div>
                </figure>
              </Box>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default HomeCollection;
