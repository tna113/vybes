import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.theme1.green,
      dark: colors.theme1.darkerGreen,
      contrastText: colors.theme1.white,
    },
  },
});
