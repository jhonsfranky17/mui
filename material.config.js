import { createTheme } from "@mui/material";
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#D81F48",
      contrastText: "#ccc",
    },
    secondary: {
      main: "#0C2333",
    },
  },
});

export default theme;
