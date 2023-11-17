"use client";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import NavigationScroll from "./NavigationScroll";
import theme from "@/assets/theme";
import useNotifier from "@/hooks/useNotifier";

const MaterialWrapper = ({ children }) => {
  useNotifier();
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavigationScroll>
          <SnackbarProvider
            dense
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {children}
          </SnackbarProvider>
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default MaterialWrapper;
