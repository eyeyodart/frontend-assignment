import L from "leaflet";
import markerUrl from "src/static/images/marker_icon.png";

export function getShipMarkerIcon(heading: number) {
  return L.divIcon({
    iconSize: [0, 0],
    iconAnchor: [0, 0],
    popupAnchor: [0, 0],
    html: `<div style="transform: rotate(${heading}deg)"><img src="${markerUrl}" alt="" /></div>`,
  });
}
