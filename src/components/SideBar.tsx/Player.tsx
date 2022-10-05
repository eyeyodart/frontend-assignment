import React, { useEffect, useState } from "react";
import type { FC } from "react";
import { Box, IconButton, makeStyles, Slider, Theme } from "@material-ui/core";
import { useDispatch, useSelector } from "src/store";
import {
  setCurrentVesselTrack,
  setCurrentVesselTrackIndex,
  vesselTracksSelector,
} from "src/slices/vessel";
import {
  FastForwardRounded,
  FastRewindRounded,
  PauseRounded,
  PlayArrowRounded,
  ReplayRounded,
} from "@material-ui/icons";
import { VesselTrack } from "src/types/vesseltrack";

export interface PlayerProps {}

const useStyles = makeStyles((theme: Theme) => ({
  slider: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

const Player: FC<PlayerProps> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const vesselTracks: VesselTrack[] | null = useSelector((state) =>
    vesselTracksSelector(state)
  );
  const isStatic: boolean = useSelector((state) => state.vessels.isStatic);
  const currentIndex: number = useSelector(
    (state) => state.vessels.currentVesselTrackIndex
  );
  const [paused, setPaused] = useState<boolean>(false);
  const [delaySpeed, setDelaySpeed] = useState<number>(100);

  const handleReplayClick = () => {
    dispatch(setCurrentVesselTrackIndex(0));
    setDelaySpeed(100);
  };

  const handleSlowClick = () => {
    setDelaySpeed(1000);
  };

  const handleFastClick = () => {
    setDelaySpeed(0.01);
  };

  useEffect(() => {
    dispatch(setCurrentVesselTrackIndex(currentIndex + 1));
  }, [vesselTracks]);

  useEffect(() => {
    if (
      vesselTracks &&
      vesselTracks.length > 0 &&
      currentIndex < vesselTracks.length - 2 &&
      !paused
    ) {
      const interval: NodeJS.Timer = setInterval(() => {
        dispatch(setCurrentVesselTrackIndex(currentIndex + 1));
        dispatch(setCurrentVesselTrack(currentIndex + 1));
      }, delaySpeed);
      return () => {
        clearInterval(interval);
      };
    }
  }, [dispatch, currentIndex, delaySpeed, paused]);

  if (!vesselTracks || vesselTracks.length === 0 || isStatic) {
    return <></>;
  }

  return (
    <Box className={classes.slider}>
      <Slider
        min={0}
        max={vesselTracks.length - 1}
        value={currentIndex}
        color="primary"
      />
      <Box display="flex" alignItems="center" justifyContent="center">
        <IconButton onClick={handleSlowClick}>
          <FastRewindRounded fontSize="medium" />
        </IconButton>
        {currentIndex === vesselTracks.length - 2 ? (
          <IconButton onClick={handleReplayClick}>
            <ReplayRounded fontSize="medium" />
          </IconButton>
        ) : (
          <IconButton
            aria-label={paused ? "play" : "pause"}
            onClick={() => setPaused(!paused)}
          >
            {paused ? (
              <PlayArrowRounded fontSize="medium" />
            ) : (
              <PauseRounded fontSize="medium" />
            )}
          </IconButton>
        )}
        <IconButton onClick={handleFastClick}>
          <FastForwardRounded fontSize="medium" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Player;
