import { red, purple, green } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: purple,

    secondary: green,

    error: red,

    background: {
      default: "#fff",
    },
  },
});

export default theme;
