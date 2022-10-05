export interface VesselTrack {
  MMSI: number;
  IMO: number;
  STATUS: number;
  SPEED: number;
  LON: number;
  LAT: number;
  COURSE: number;
  HEADING: number;
  TIMESTAMP: string;
  SHIP_ID: number;
  WIND_ANGLE?: number;
  WIND_SPEED?: number;
  WIND_TEMP?: number;
  SIGNIFICANT_WAVE_HEIGHT?: number;
  WIND_WAVE_DIRECTION?: number;
  WIND_WAVE_HEIGHT?: number;
  WIND_WAVE_PERIOD?: number;
  SWELL_HEIGHT?: number;
  SWELL_PERIOD?: number;
  CURRENTS_ANGLE?: number;
  CURRENTS_SPEED?: number;
  SWELL_DIRECTION?: number;
}

export interface VesselFormValues {
  mmsi: string;
  from_date: string;
  to_date: string;
  daily: boolean;
  submit?: string | null;
}
