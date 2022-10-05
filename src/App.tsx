import React, { FC, useState } from "react";
import "./App.css";
import Map from "./components/MapContainer/Map";
import TopBar from "./components/TopBar";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { SnackbarProvider } from "notistack";
import { ThemeProvider, createTheme } from "@material-ui/core";

const App: FC = () => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");

  const customTheme = createTheme({
    palette: {
      type: themeMode,
      primary: {
        main: "#307D7E",
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <SnackbarProvider dense maxSnack={3}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <TopBar mode={themeMode} setMode={setThemeMode} />
            <Map />
          </MuiPickersUtilsProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
