
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          textTransform: 'none',
        },
        
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#111827",
        }
      }
    }
  },
});

export default theme;