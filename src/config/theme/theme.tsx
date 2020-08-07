import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#FFF2F4",
      main: "#F2526B",
      // main: "#F2A4B0",
      dark: "#F2526B",
    },
    secondary: {
      light: "#ABE3F0",
      main: "#62BED3",
      dark: "#E1F7FB",
    },
  },
});

export default theme;

// import { iOSColors } from "react-native-typography";
// import * as DanceStyles from "@globals/danceStyles";
// export default {
//   colors: {
//     primary: {
//       main: "#62BED3",
//       light: "#ABE3F0",
//       lighter: "#E1F7FB"
//     },
//     accent: {
//       main: "#F2526B",
//       light: "#F2A4B0",
//       lighter: "#FFF2F4"
//     },
//     danceStyles: {
//       [DanceStyles.CUBAN_SALSA]: {
//         main: "#F26F27",
//         light: "#FFB89B",
//         lighter: "#FFEBE2"
//       },
//       [DanceStyles.CROSSBODY_SALSA]: {
//         main: "#419EB6",
//         light: "#98EAFF",
//         lighter: "#CDF2FC"
//       },
//       [DanceStyles.SENSUAL_BACHATA]: {
//         main: "#C86D9A",
//         light: "#FFC7E3",
//         lighter: "#FFEAF4"
//       },
//       [DanceStyles.DOMINICAN_BACHATA]: {
//         main: "#6CC6BB",
//         light: "#96E7E1",
//         lighter: "#E6FAF8"
//       },
//       [DanceStyles.KIZOMBA]: {
//         main: "#DA9018",
//         light: "#FDE2A9",
//         lighter: "#FFF1D6"
//       }
//     },
//     grays: {
//       dark1: "#1F242A",
//       dark2: "#28374B",
//       dark3: "#8798AD",
//       light1: "#C5D1E0",
//       light2: "#F2F2F7",
//       light3: "#FFFFFF"
//     },
//     text: {
//       dark: "#1F242A",
//       accent: "#F2526B",
//       light: "#8996A6",
//       lighter: "#C5D1E0",
//       white: "#FFFFFF"
//     }
//   }
// };
