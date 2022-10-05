import React, { useEffect } from "react";
import type { FC } from "react";
import NProgress from "nprogress";
import { Box, LinearProgress, makeStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    alignItems: "center",
    backgroundColor: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    minHeight: "100%",
    padding: theme.spacing(3),
  },
}));

interface LoadingScreenProps {
  width?: number;
}

const LoadingScreen: FC<LoadingScreenProps> = ({ width = 400, ...rest }) => {
  const classes = useStyles();

  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <div className={classes.root}>
      <Box width={width}>
        <LinearProgress role={"progressbar"} />
      </Box>
    </div>
  );
};

export default LoadingScreen;
