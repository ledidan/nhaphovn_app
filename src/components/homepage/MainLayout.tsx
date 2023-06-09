import { Box } from "@mui/material";
import React, { PropsWithChildren } from "react";

const MainLayout = (props: PropsWithChildren) => {
  return (
    <Box sx={{ maxWidth: "xxl" }} className="mx-auto">
      {props.children}
    </Box>
  );
};

export default MainLayout;
