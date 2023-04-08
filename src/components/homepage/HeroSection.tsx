import { Box, Button, Menu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import React from "react";
import useOutsideClickDetector from "components/context/OutSideClickHOF";

const HeroSection = (props: any) => {
  const bgUrl = "https://tecdn.b-cdn.net/img/new/slides/146.webp";
  const backgroundStyle = {
    backgroundPosition: "50%",
    backgroundImage: `url(${bgUrl})`,
    height: 500,
  };
  const [age, setAge] = React.useState<any>("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectOpen, setSelectOpen] = React.useState(false);
  const [reset, setReset] = React.useState("");
  const menuRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    const handlerBtnSort = (e: any) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setAnchorEl(null);
        setAnchorEl(e.currentTarget);
        setSelectOpen(false);
      }
      document.addEventListener("mousedown", handlerBtnSort);
      return () => {
        document.removeEventListener("mousedown", handlerBtnSort);
      };
    };
  }, [anchorEl, menuRef]);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    setAnchorEl(event.currentTarget);
    setSelectOpen(true);
  };

  const handleOutSideClick = () => {
    setSelectOpen(false);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  // Reset Form
  const resetForm = () => {
    setAge("");
  };
  // Catch menuRef with event click outside
  useOutsideClickDetector(menuRef, handleOutSideClick);
  console.log(age);
  return (
    <>
      <Box
        className="relative overflow-hidden bg-cover bg-no-repeat"
        style={backgroundStyle}
        sx={{ display: { lg: "flex", md: "none", xs: "none" } }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="w-1/2 px-6 text-center md:px-12">
              <div className=" shadow p-5 rounded-lg bg-white">
                <div className="relative mb-3">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Nhập từ khoá..."
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-md px-7 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Tìm kiếm
                  </button>
                </div>
                <div className="text-end">
                  <Button
                    type="reset"
                    variant="text"
                    color="inherit"
                    onClick={resetForm}
                    startIcon={<RestartAltIcon />}
                  >
                    Đặt lại
                  </Button>
                </div>
                <Box>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                      displayEmpty
                      value={age}
                      onChange={handleChange}
                      open={selectOpen}
                      ref={menuRef}
                      onOpen={() => setSelectOpen(true)}
                      // renderValue={() => `${age}`}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10} onClick={handleClose}>
                        Ten
                      </MenuItem>
                      <MenuItem value={20} onClick={handleClose}>
                        Twenty
                      </MenuItem>
                      <MenuItem value={30} onClick={handleClick}>
                        Thirty {">"}
                      </MenuItem>
                    </Select>
                    <Menu
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "center",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "center",
                        horizontal: "left",
                      }}
                      sx={{ width: 150 }}
                    >
                      <MenuItem
                        value={40}
                        onClick={() => {
                          setAge(40);
                          setSelectOpen(false);
                          handleClose();
                        }}
                        style={{
                          maxWidth: 150,
                        }}
                      >
                        Fourty
                      </MenuItem>
                      <MenuItem
                        value={50}
                        onClick={() => {
                          setAge(50);
                          setSelectOpen(false);
                          handleClose();
                        }}
                        style={{
                          maxWidth: 150,
                        }}
                      >
                        Fifty
                      </MenuItem>
                    </Menu>
                  </FormControl>

                  {/* <select className="cursor-pointer hover:border-black hover:border transition duration-100 px-4 py-3 w-full rounded-md bg-white border border-gray-400  border-transparent  focus:border-gray-600 focus:bg-white focus:text-black focus:ring-0 text-sm">
                      <option value="0">Furnish Type</option>
                      <option value="fully-furnished">Fully Furnished</option>
                      <option value="partially-furnished">
                        Partially Furnished
                      </option>
                      <option value="not-furnished">Not Furnished</option>
                    </select>
                    <select className="cursor-pointer hover:border-black hover:border transition duration-100 px-4 py-3 w-full rounded-md bg-white border border-gray-400  border-transparent  focus:border-gray-600 focus:bg-white focus:text-black focus:ring-0 text-sm">
                      <option value="0">Any Price</option>
                      <option value={1000}>RM 1000</option>
                      <option value={2000}>RM 2000</option>
                      <option value={3000}>RM 3000</option>
                      <option value={4000}>RM 4000</option>
                    </select>
                    <select className="cursor-pointer hover:border-black hover:border transition duration-100 px-4 py-3 w-full rounded-md bg-white border border-gray-400  border-transparent  focus:border-gray-600 focus:bg-white focus:text-black focus:ring-0 text-sm">
                      <option value="0">Floor Area</option>
                      <option value={200}>200 sq.ft</option>
                      <option value={400}>400 sq.ft</option>
                      <option value={600}>600 sq.ft</option>
                      <option value="800 sq.ft">800</option>
                      <option value="1000 sq.ft">1000</option>
                      <option value="1200 sq.ft">1200</option>
                    </select>
                    <select className="cursor-pointer hover:border-black hover:border transition duration-100 px-4 py-3 w-full rounded-md bg-white border border-gray-400  border-transparent  focus:border-gray-600 focus:bg-white focus:text-black focus:ring-0 text-sm">
                      <option value="0">Bedrooms</option>
                      <option value={1}>1 bedroom</option>
                      <option value={2}>2 bedrooms</option>
                      <option value={3}>3 bedrooms</option>
                      <option value={4}>4 bedrooms</option>
                      <option value={5}>5 bedrooms</option>
                    </select>
                    <select className="cursor-pointer hover:border-black hover:border transition duration-100 px-4 py-3 w-full rounded-md bg-white border border-gray-400  border-transparent  focus:border-gray-600 focus:bg-white focus:text-black focus:ring-0 text-sm">
                      <option value="0">Bathrooms</option>
                      <option value={1}>1 bathroom</option>
                      <option value={2}>2 bathrooms</option>
                      <option value={3}>3 bathrooms</option>
                      <option value={4}>4 bathrooms</option>
                      <option value={5}>5 bathrooms</option>
                    </select>
                    <select className="cursor-pointer hover:border-black hover:border transition duration-100 px-4 py-3 w-full rounded-md bg-white border border-gray-400  border-transparent  focus:border-gray-600 focus:bg-white focus:text-black focus:ring-0 text-sm">
                      <option value="0">Bathrooms</option>
                      <option value={1}>1 space</option>
                      <option value={2}>2 space</option>
                      <option value={3}>3 space</option>
                    </select> */}
                </Box>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default HeroSection;
