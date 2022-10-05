import React from "react";
import type { FC } from "react";
import { vesselTracksSelector } from "src/slices/vessel";
import { useSelector } from "src/store";
import ApexChart from "../general/ApexChart";
import { Box } from "@material-ui/core";

export interface ChartProps {
  isStatic: boolean;
}

const Chart: FC<ChartProps> = ({ isStatic }) => {
  const vesselTracks = useSelector((state) => vesselTracksSelector(state));

  return isStatic && vesselTracks ? (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <ApexChart
        id={"speed"}
        height={220}
        group={"tracks"}
        type="line"
        palette={"palette8"}
        series={[
          {
            name: "Speed",
            data: vesselTracks?.map((track) => track.SPEED / 10),
          },
        ]}
        xaxis={{
          type: "datetime",
          categories: vesselTracks?.map((track) => track.TIMESTAMP),
          labels: {
            datetimeUTC: false,
          },
        }}
        yaxis={{
          labels: {
            formatter: function (value: any) {
              return value ? value + " kn" : "";
            },
          },
          forceNiceScale: true,
        }}
        tooltipY={{
          formatter: (value: any) => {
            return value ? value + " kn" : "";
          },
        }}
      />
      <ApexChart
        id={"wind_speed"}
        group={"tracks"}
        height={220}
        type="line"
        palette={"palette4"}
        series={[
          {
            name: "Wind Speed",
            data: vesselTracks?.map((track) => track.WIND_SPEED),
          },
        ]}
        xaxis={{
          type: "datetime",
          categories: vesselTracks?.map((track) => track.TIMESTAMP),
          labels: {
            datetimeUTC: false,
          },
        }}
        yaxis={{
          labels: {
            formatter: function (value: any) {
              return value ? value + " kn" : "";
            },
          },
          forceNiceScale: true,
        }}
        tooltipY={{
          formatter: (value: any) => {
            return value ? value + " kn" : "";
          },
        }}
      />
      <ApexChart
        id={"wind_angle"}
        group={"tracks"}
        height={220}
        type="area"
        fillType={"gradient"}
        palette={"palette6"}
        series={[
          {
            name: "Wind Angle",
            data: vesselTracks?.map((track) => track.WIND_ANGLE),
          },
        ]}
        xaxis={{
          type: "datetime",
          categories: vesselTracks?.map((track) => track.TIMESTAMP),
          labels: {
            datetimeUTC: false,
          },
        }}
        yaxis={{
          labels: {
            formatter: function (value: any) {
              return value ? value + " °" : "";
            },
          },
          forceNiceScale: true,
        }}
        tooltipY={{
          formatter: (value: any) => {
            return value ? value + " °" : "";
          },
        }}
        annotations={{
          points: vesselTracks.map((track) => {
            return {
              x: track.TIMESTAMP,
              y: track.WIND_ANGLE,
              yAxisIndex: 0,
              seriesIndex: 0,
              borderWidth: 0,
              marker: {
                size: 3,
                fillColor: "#53cec6",
                strokeColor: "#53cec6",
                strokeWidth: 3,
                borderWidth: 0,
                shape: "circle",
                radius: 5,
                OffsetX: 0,
                OffsetY: 0,
              },
              label: {
                style: {
                  color: "#000",
                  background: "#53cec6",
                  borderWidth: 0,
                },
                text: track.WIND_ANGLE,
              },
            };
          }),
        }}
      />
    </Box>
  ) : (
    <></>
  );
};

export default Chart;
