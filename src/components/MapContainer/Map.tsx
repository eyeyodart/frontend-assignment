import React, { useEffect, useState } from "react";
import { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { VesselTrack } from "src/types/vesseltrack";
import { useSelector } from "src/store";
import { vesselTracksSelector } from "src/slices/vessel";
import { useSnackbar } from "notistack";
import AnimatedPositions from "./AnimatedPositions";
import StaticPositions from "./StaticPositions";
import { LatLngTuple } from "leaflet";

interface MapProps {}

const Map: FC<MapProps> = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [center, setCenter] = useState<LatLngTuple>([40.866667, 34.566667]);
  const vesselTracks: VesselTrack[] | null = useSelector((state) =>
    vesselTracksSelector(state)
  );
  const isStatic: boolean = useSelector((state) => state.vessels.isStatic);

  useEffect(() => {
    if (vesselTracks && vesselTracks.length === 0) {
      enqueueSnackbar("There are no vessel tracks for the selected date", {
        variant: "error",
      });
    }
  }, [vesselTracks]);

  return (
    <MapContainer center={center} zoom={3}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {!isStatic ? (
        <AnimatedPositions vesselTracks={vesselTracks} />
      ) : (
        <StaticPositions vesselTracks={vesselTracks} />
      )}
    </MapContainer>
  );
};

export default Map;
