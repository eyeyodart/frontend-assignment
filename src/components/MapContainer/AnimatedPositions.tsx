import React from "react";
import { FC } from "react";
import { Marker, Polyline, Tooltip } from "react-leaflet";
import { VesselTrack } from "src/types/vesseltrack";
import { getShipMarkerIcon } from "src/utils/markerIcon";
import { useSelector } from "src/store";
import MarkerContainer from "./MarkerContainer";

interface AnimatedPositionsProps {
  vesselTracks: VesselTrack[] | null;
}

const AnimatedPositions: FC<AnimatedPositionsProps> = ({ vesselTracks }) => {
  const isStatic: boolean = useSelector((state) => state.vessels.isStatic);
  const currentTrack: VesselTrack = useSelector(
    (state) => state.vessels.currentVesselTrack
  );

  return (
    <>
      {currentTrack && !isStatic && (
        <Marker
          key={currentTrack.TIMESTAMP}
          position={[currentTrack.LAT, currentTrack.LON] ?? [0, 0]}
          icon={getShipMarkerIcon(currentTrack.HEADING)}
        >
          <Tooltip sticky>
            <MarkerContainer track={currentTrack} />
          </Tooltip>
        </Marker>
      )}
      {vesselTracks && vesselTracks.length > 0 && !isStatic && (
        <Polyline
          positions={vesselTracks.map((vessel) => {
            return [vessel.LAT, vessel.LON];
          })}
          color="#4863A0"
          opacity={0.7}
        />
      )}
    </>
  );
};

export default AnimatedPositions;
