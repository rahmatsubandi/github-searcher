import { createMuiTheme } from "@material-ui/core/styles";

const color1 = "#12b844";
const color2 = "#3bb8b4";

export default createMuiTheme({
  palette: {
    primary: {
      main: `${color1}`,
    },
    secondary: {
      main: `${color2}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Roboto",
      textTransform: "none",
      fontWeight: "700",
      fontSize: "1rem",
    },
  },
});
