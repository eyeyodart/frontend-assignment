import { useTheme } from "@material-ui/core";
import { ApexOptions } from "apexcharts";
import React, { FC } from "react";
import Chart from "react-apexcharts";

export interface ApexChartProps {
  id?: string;
  group?: string;
  width?: number;
  series?: any;
  xaxis?: any;
  yaxis?: any;
  title?: any;
  type?: any;
  showGrid?: boolean;
  showToolbar?: boolean;
  zoom?: boolean;
  download?: boolean;
  height?: number;
  dataLabels?: any;
  forecastDataPoints?: any;
  markerSize?: number;
  fillType?: any;
  curve?: any;
  colors?: any;
  legend?: any;
  strokeWidth?: number;
  palette?: any;
  plotOptions?: any;
  monochrome?: any;
  shared?: any;
  tooltipX?: any;
  tooltipY?: any;
  tooltipCustom?: ApexTooltip;
  annotations?: any;
  stacked?: boolean;
  stackType?: any;
}

const ApexChart: FC<ApexChartProps> = ({
  id = "",
  group = "",
  width = 500,
  series,
  xaxis,
  yaxis,
  title = "",
  type = "",
  height = 350,
  dataLabels = {
    enabled: false,
  },
  forecastDataPoints = {
    count: 0,
    fillOpacity: 0.5,
    strokeWidth: undefined,
    dashArray: 4,
  },
  showGrid = true,
  zoom = true,
  download = true,
  markerSize = 0,
  fillType = "gradient",
  stacked = false,
  stackType = "normal",
  legend = {
    show: true,
    position: "top",
    horizontalAlign: "center",
  },
  showToolbar = true,
  curve = "smooth",
  strokeWidth = 2,
  plotOptions = {},
  palette = null,
  monochrome = { enabled: false },
  shared = true,
  tooltipX = {
    format: "dd/MM/yy HH:mm",
  },
  tooltipY = {},
  tooltipCustom = {},
  annotations = {
    xaxis: [],
  },
}) => {
  const theme = useTheme();

  let options: ApexOptions = {
    chart: {
      id: id,
      group: group,
      width: width,
      background: "transparent",
      height: height,
      stacked: stacked,
      stackType: stackType,
      type: type,
      offsetX: 0,
      offsetY: 0,
      toolbar: {
        show: showToolbar,
        tools: {
          download: download,
        },
      },
      zoom: {
        enabled: zoom,
      },
      animations: {
        enabled: false,
      },
    },
    grid: {
      show: showGrid,
      borderColor: theme.palette.divider,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: dataLabels,
    plotOptions: plotOptions,
    title: {
      text: title,
    },
    markers: {
      size: markerSize,
      strokeWidth: 3,
    },
    fill: {
      type: fillType,
    },
    forecastDataPoints: forecastDataPoints,
    stroke: {
      curve: curve,
      width: strokeWidth,
    },
    theme: {
      mode: theme.palette.type,
      palette: palette,
      monochrome: monochrome,
    },
    legend: legend,
    xaxis: xaxis,
    yaxis: yaxis,
    tooltip: tooltipCustom ?? {
      theme: "theme.palette.type",
      shared: shared,
      intersect: true,
      x: tooltipX,
      y: tooltipY,
    },
    annotations: annotations,
  };

  return (
    <div id={`${id}`}>
      <Chart
        id={id}
        height={height}
        width={width}
        options={options}
        type={type}
        series={series}
      />
    </div>
  );
};
export default ApexChart;
