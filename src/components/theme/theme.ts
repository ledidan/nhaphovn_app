import { createTheme } from "@mui/material/styles";
const myTheme = createTheme({
  typography: {
    fontFamily: "Be Vietnam Pro",
    fontWeightRegular: 600,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "white",
          color: "black",
        },
      },
    },
  },
});

export default createTheme(myTheme);
