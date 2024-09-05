import { createTheme } from '@mui/material/styles';
import {colors} from './colors';

export const theme = createTheme({
    palette: {
      primary: {
        main: colors.green.green,
        dark: colors.green.darkGreen,
        contrastText: colors.green.white,
      }
    }
  });