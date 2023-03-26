import React from "react";
import Image from "next/image";
import Tabs from "@mui/material/Tabs";
import { Box, Tab, Typography, Container } from "@mui/material";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
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
const HomeProperty = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <section className="home_properties relative overflow-hidden mt-20">
      <Container className="home_property_inner">
        <div className=" flex items-center justify-between">
          <Typography variant="h5">Tin bán nhà phố mới nhất</Typography>
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
            <div className="wiper-millions-cards  ">
              <Swiper
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                slidesPerView={1.15}
                scrollbar={{ draggable: true }}
                spaceBetween={15}
                className="mySwiper"
                breakpoints={{
                  640: {
                    width: 640,
                    slidesPerView: 2,
                  },
                  768: {
                    width: 768,
                    slidesPerView: 2,
                  },
                  1024: {
                    width: 1024,
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <Box className="rounded-lg overflow-hidden shadow-2xl relative cursor-pointer">
                    <Card sx={{ maxWidth: 345 }}>
                      <Image
                        alt="green iguana"
                        height={300}
                        width={300}
                        src="/README.jpg"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <button>Share</button>
                        <button>Learn More</button>
                      </CardActions>
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

export default HomeProperty;
