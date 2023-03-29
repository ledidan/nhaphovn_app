import { Box, Button, ButtonGroup, Paper, Stack, Toolbar } from "@mui/material";
import * as React from "react";

const SortBar = () => {
  const [isSell, setIsSell] = React.useState(false);
  const handleIsSellOrRent = () => {
    if (!isSell) {
      setIsSell(true);
    } else {
      setIsSell(false);
    }
  };

  return (
    <Paper className="sort-bar-section" elevation={3}>
      <Box className="py-6">
        <div className="flex items-center justify-between ">
          <ButtonGroup className="left-rentOrSell-button">
            <Button
              onClick={handleIsSellOrRent}
              variant={!isSell ? "outlined" : "contained"}
            >
              Cần bán
            </Button>
            <Button
              onClick={handleIsSellOrRent}
              variant={!isSell ? "contained" : "outlined"}
            >
              Cho thuê
            </Button>
          </ButtonGroup>
          <div className="selectSort-bar">hello</div>
          <div className="right-selectSort-bar">hello</div>
        </div>
      </Box>
    </Paper>
  );
};

export default SortBar;
