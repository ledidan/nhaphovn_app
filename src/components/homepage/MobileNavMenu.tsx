import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Link from "next/link";

const MobileNavMenu = ({ pages }: any) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1, 4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: "10px",
  }));
  return (
    <Box sx={{ display: { lg: "none", md: "none", xs: "auto" } }}>
      <div className="mobile__nav bg-slate-200 py-6 px-4 overflow-auto my-10">
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={3}
          alignItems={"center"}
        >
          {pages.map((page: any, index: number) => (
            <Item key={index}>
              <span>{page.mobileImg}</span>
              <Typography
                align="center"
                className="mt-3"
                width={"max-content"}
                fontWeight={500}
              >
                <Link href={page.urlLink}>{page.name}</Link>
              </Typography>
            </Item>
          ))}
        </Stack>
      </div>
    </Box>
  );
};

export default MobileNavMenu;
