import React from "react";
import { FC } from "react";
import { VesselTrack } from "src/types/vesseltrack";
import { Box, Divider, Typography } from "@material-ui/core";
import getStatus from "src/static/status";
import moment from "moment";
import Flag from "react-world-flags";
import { getFlag, getLabel } from "src/static/flags";

interface MarkerContainerProps {
  track: VesselTrack | null;
}

const MarkerContainer: FC<MarkerContainerProps> = ({ track }) => {
  const flagCode =
    (track && getFlag(parseInt(track?.MMSI.toString().slice(0, 3)))) ?? "";

  const flagLabel =
    (track && getLabel(parseInt(track?.MMSI.toString().slice(0, 3)))) ?? "";

  return (
    track && (
      <>
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <Flag code={flagCode} fallback={<span>Unknown</span>} height={16} />
          <Typography style={{ paddingLeft: 18 }} variant="h6">
            {flagLabel}
          </Typography>
        </Box>
        <Divider />
        <Typography variant="subtitle1">{`MMSI: ${track.MMSI}`}</Typography>
        <Typography variant="subtitle1">{`Status: ${getStatus(
          track.STATUS
        )}`}</Typography>
        <Typography variant="subtitle1">{`[LAT, LON]: [${track.LAT}, ${track.LON}]`}</Typography>
        <Typography variant="subtitle1">{`Speed: ${
          track.SPEED / 10
        } kn`}</Typography>
        <Typography variant="subtitle1">{`Course: ${track.COURSE}°`}</Typography>
        <Typography variant="subtitle1">{`Position received: ${moment(
          track.TIMESTAMP
        ).format("YYYY-MM-DD HH:MM:SS")}`}</Typography>
      </>
    )
  );
};

export default MarkerContainer;
