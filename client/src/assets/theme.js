import { createTheme } from '@mui/material/styles';
import {colors} from './colors';

export const theme = createTheme({
    palette: {
      primary: {
        main: colors.green.primary,
        dark: colors.green.secondary,
        contrastText: colors.green.text,
      }
    }
  });