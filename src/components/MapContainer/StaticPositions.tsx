import React from "react";
import { FC } from "react";
import { Marker, Popup } from "react-leaflet";
import { VesselTrack } from "src/types/vesseltrack";
import MarkerClusterGroup from "react-leaflet-cluster";
import { getShipMarkerIcon } from "src/utils/markerIcon";
import MarkerContainer from "./MarkerContainer";

interface StaticPositionsProps {
  vesselTracks: VesselTrack[] | null;
}

const StaticPositions: FC<StaticPositionsProps> = ({ vesselTracks }) => {
  return vesselTracks && vesselTracks.length > 0 ? (
    <MarkerClusterGroup
      chunkedLoading
      spiderfyOnMaxZoom={false}
      disableClusteringAtZoom={10}
    >
      {vesselTracks.map((track, index) => {
        return (
          <Marker
            key={index}
            position={[track.LAT, track.LON]}
            icon={getShipMarkerIcon(track.HEADING)}
          >
            <Popup>
              <MarkerContainer track={track} />
            </Popup>
          </Marker>
        );
      })}
    </MarkerClusterGroup>
  ) : (
    <></>
  );
};

export default StaticPositions;
