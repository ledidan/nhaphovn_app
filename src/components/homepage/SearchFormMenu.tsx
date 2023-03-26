import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import TextField from "@mui/material/TextField";
import { Box, InputLabel } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function SearchFormMenu({ isOpenDialog, setOpenDialog }: any) {
  // const [open, setOpen] = React.useState(false);
  const [isSell, setIsSell] = React.useState(false);
  const [type, setType] = React.useState("");
  const [province, setProvince] = React.useState("");
  const [district, setDistrict] = React.useState("");
  const [ward, setWard] = React.useState("");
  const [area, setArea] = React.useState("");
  const [priceRange, setPriceRange] = React.useState("");
  const [aimUsed, setAimUsed] = React.useState("");
  const [aspect, setAspect] = React.useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  const handleIsSellOrRent = () => {
    if (!isSell) {
      setIsSell(true);
    } else {
      setIsSell(false);
    }
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <Dialog
        sx={{ display: { lg: "none", md: "block" } }}
        fullScreen
        open={isOpenDialog}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{ sx: { display: "block" } }}
      >
        <Toolbar sx={{ position: "relative", justifyContent: "end" }}>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            size="large"
          >
            <CloseIcon fontSize="large" />
          </IconButton>
        </Toolbar>
        <Box
          component="form"
          sx={{
            display: { width: "100%" },
          }}
          noValidate
          autoComplete="on"
          onSubmit={(e: any) => handleSubmit(e)}
        >
          <ListItem>
            <TextField label="Nhập từ khoá" variant="standard" fullWidth />
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              onClick={handleIsSellOrRent}
              variant={!isSell ? "outlined" : "contained"}
              sx={{ marginRight: "1rem" }}
              fullWidth
            >
              Cần bán
            </Button>
            <Button
              onClick={handleIsSellOrRent}
              variant={!isSell ? "contained" : "outlined"}
              fullWidth
            >
              Cho thuê
            </Button>
          </ListItem>
          <ListItem sx={{ display: "block" }}>
            <FormControl variant="standard" sx={{ minWidth: 120 }} fullWidth>
              <InputLabel id="property_type">Loại hình bất động sản</InputLabel>
              <Select
                labelId="property_type"
                id="property_type"
                value={type}
                onChange={(e: any) => setType(e.target.value)}
                label="property_type"
                fullWidth
              >
                <MenuItem value="">Loại hình bất động sản</MenuItem>
                <MenuItem value={1}>Ten</MenuItem>
                <MenuItem value={2}>Twenty</MenuItem>
                <MenuItem value={3}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          <ListItem sx={{ display: "block" }}>
            <FormControl variant="standard" sx={{ minWidth: 120 }} fullWidth>
              <InputLabel id="province">Tỉnh/Thành phố</InputLabel>
              <Select
                labelId="province"
                id="province"
                value={province}
                onChange={(e: any) => setProvince(e.target.value)}
                label="province"
                fullWidth
              >
                <MenuItem value="">Tỉnh/Thành phố</MenuItem>
                <MenuItem value={4}>Ten</MenuItem>
                <MenuItem value={5}>Twenty</MenuItem>
                <MenuItem value={6}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          <ListItem sx={{ display: "block" }}>
            <FormControl variant="standard" sx={{ minWidth: 120 }} fullWidth>
              <InputLabel id="district">Quận/huyện</InputLabel>
              <Select
                labelId="district"
                id="district"
                value={district}
                onChange={(e: any) => setDistrict(e.target.value)}
                label="district"
                fullWidth
              >
                <MenuItem value="">Quận/huyện</MenuItem>
                <MenuItem value={7}>Ten</MenuItem>
                <MenuItem value={8}>Twenty</MenuItem>
                <MenuItem value={9}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          <ListItem sx={{ display: "block" }}>
            <FormControl variant="standard" sx={{ minWidth: 120 }} fullWidth>
              <InputLabel id="ward">Phường/Xã</InputLabel>
              <Select
                labelId="ward"
                id="ward"
                value={ward}
                onChange={(e: any) => setWard(e.target.value)}
                label="ward"
                fullWidth
              >
                <MenuItem value="">Phường/Xã</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={11}>Twenty</MenuItem>
                <MenuItem value={12}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          <ListItem sx={{ display: "block" }}>
            <FormControl variant="standard" sx={{ minWidth: 120 }} fullWidth>
              <InputLabel id="area">Diện tích</InputLabel>
              <Select
                labelId="area"
                id="area"
                value={area}
                onChange={(e: any) => setArea(e.target.value)}
                label="area"
                fullWidth
              >
                <MenuItem value="">Diện tích</MenuItem>
                <MenuItem value={13}>Ten</MenuItem>
                <MenuItem value={14}>Twenty</MenuItem>
                <MenuItem value={15}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          <ListItem sx={{ display: "block" }}>
            <FormControl variant="standard" sx={{ minWidth: 120 }} fullWidth>
              <InputLabel id="price_range">Mức giá</InputLabel>
              <Select
                labelId="price_range"
                id="price_range"
                value={priceRange}
                onChange={(e: any) => setPriceRange(e.target.value)}
                label="price_range"
                fullWidth
              >
                <MenuItem value="">Mức giá</MenuItem>
                <MenuItem value={16}>Ten</MenuItem>
                <MenuItem value={17}>Twenty</MenuItem>
                <MenuItem value={18}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          <ListItem sx={{ display: "block" }}>
            <FormControl variant="standard" sx={{ minWidth: 120 }} fullWidth>
              <InputLabel id="aim_used">Mục đích sử dụng</InputLabel>
              <Select
                labelId="aim_used"
                id="aim_used"
                value={aimUsed}
                onChange={(e: any) => setAimUsed(e.target.value)}
                label="aim_used"
                fullWidth
              >
                <MenuItem value="">Mục đích sử dụng</MenuItem>
                <MenuItem value={19}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={21}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          <ListItem sx={{ display: "block" }}>
            <FormControl variant="standard" sx={{ minWidth: 120 }} fullWidth>
              <InputLabel id="property_aspect">Hướng nhà</InputLabel>
              <Select
                labelId="property_aspect"
                id="property_aspect"
                value={aspect}
                onChange={(e: any) => setAspect(e.target.value)}
                label="property_aspect"
                fullWidth
              >
                <MenuItem value="">Hướng nhà</MenuItem>
                <MenuItem value={22}>Ten</MenuItem>
                <MenuItem value={23}>Twenty</MenuItem>
                <MenuItem value={24}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          <ListItem sx={{ marginY: "2rem" }}>
            <Button variant="contained" fullWidth size="large" type="submit">
              Tìm Kiếm
            </Button>
          </ListItem>
        </Box>
      </Dialog>
    </div>
  );
}
