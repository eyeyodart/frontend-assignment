import React, { useState } from "react";
import type { FC } from "react";
import {
  Box,
  Card,
  FormControlLabel,
  IconButton,
  makeStyles,
  Switch,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { MenuOutlined, WbSunny, Brightness2 } from "@material-ui/icons";
import VesselForm from "./SideBar.tsx/VesselForm";

export interface TopBarProps {
  mode: string;
  setMode: Function;
}

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    display: "flex",
    paddingRight: theme.spacing(2),
    alignItems: "center",
    justifyContent: "flex-end",
  },
  switch_label: {
    marginRight: theme.spacing(1),
  },
}));

const TopBar: FC<TopBarProps> = ({ mode, setMode, ...rest }) => {
  const classes = useStyles();
  const [openForm, setOpenForm] = useState<boolean>(true);
  const [isStatic, setIsStatic] = useState<boolean>(false);

  const handleChangeView = (isStatic: boolean, setIsStatic: Function): void => {
    if (isStatic) {
      setIsStatic(false);
    }
    if (!isStatic) {
      setIsStatic(true);
    }
  };

  return (
    <Card {...rest}>
      <Toolbar disableGutters variant="dense" className={classes.toolbar}>
        <Box display="flex" alignItems="center">
          <Typography className={classes.switch_label}>
            {"View Animation Route"}
          </Typography>
          <FormControlLabel
            value={isStatic}
            control={<Switch color="primary" name="animated" />}
            onChange={(e) => {
              handleChangeView(isStatic, setIsStatic);
            }}
            label={"View Static Positions"}
            labelPlacement="end"
          />
        </Box>
        {mode === "light" ? (
          <IconButton
            color="inherit"
            onClick={() => setMode("dark")}
            edge="end"
          >
            <Brightness2 />
          </IconButton>
        ) : (
          <IconButton
            color="inherit"
            onClick={() => setMode("light")}
            edge="end"
          >
            <WbSunny />
          </IconButton>
        )}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpenForm(!openForm)}
          edge="end"
        >
          <MenuOutlined />
        </IconButton>
      </Toolbar>
      <VesselForm open={openForm} isStatic={isStatic} />
    </Card>
  );
};

export default TopBar;
