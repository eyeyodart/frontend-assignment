import type { VesselTrack } from "src/types/vesseltrack";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AppThunk, RootState } from "src/store";
import axios from "src/utils/axios";

interface VesselsState {
  vesselTracks: VesselTrack[] | null;
  currentVesselTrack: any | null;
  currentVesselTrackIndex: number;
  isStatic: boolean;
}

const initialState: VesselsState = {
  vesselTracks: null,
  currentVesselTrack: null,
  currentVesselTrackIndex: 0,
  isStatic: false,
};

const slice = createSlice({
  name: "vessels",
  initialState,
  reducers: {
    getVesselTracks(
      state: VesselsState,
      action: PayloadAction<VesselTrack[] | null>
    ) {
      state.vesselTracks = action.payload;
    },
    setCurrentVesselTrackIndex(
      state: VesselsState,
      action: PayloadAction<number>
    ) {
      state.currentVesselTrackIndex = action.payload;
    },
    setCurrentVesselTrack(state: VesselsState, action: PayloadAction<number>) {
      if (!state.vesselTracks) {
        state.vesselTracks = [];
      }
      state.currentVesselTrack = state.vesselTracks.find(
        (vessel, index) => index === action.payload
      );
    },
    setMode(state: VesselsState, action: PayloadAction<boolean>) {
      state.isStatic = action.payload;
    },
  },
});

export const reducer = slice.reducer;

//Selectors
export const vesselTracksSelector = (
  state: RootState
): VesselTrack[] | null => {
  return state.vessels.vesselTracks;
};

export const getVesselTracks =
  (
    id: string,
    from_date: string,
    to_date: string,
    isStatic: boolean
  ): AppThunk =>
  async (dispatch) => {
    dispatch(slice.actions.getVesselTracks(null));
    dispatch(slice.actions.setCurrentVesselTrackIndex(0));

    let url = `${process.env.REACT_APP_API_BASE_URL}exportvesseltrack/${process.env.REACT_APP_API_KEY}/v:3/fromdate:${from_date}/todate:${to_date}/`;

    if (isStatic) {
      url = `${process.env.REACT_APP_API_BASE_URL}exportvesseltrack/${process.env.REACT_APP_API_KEY}/v:3/msgtype:extended/fromdate:${from_date}/todate:${to_date}/period:daily/`;
    }

    url += `mmsi:${id}/protocol:jsono`;

    const response = await axios.get(url);

    if (response.status === 200) {
      dispatch(slice.actions.setMode(isStatic));
      dispatch(slice.actions.getVesselTracks(response.data));
    } else {
      console.error(response.data);
    }
  };

export const setCurrentVesselTrack =
  (trackIndex: number): AppThunk =>
  async (dispatch) => {
    dispatch(slice.actions.setCurrentVesselTrack(trackIndex));
  };

export const setCurrentVesselTrackIndex =
  (index: number): AppThunk =>
  async (dispatch) => {
    dispatch(slice.actions.setCurrentVesselTrackIndex(index));
  };

export const setMode =
  (isStatic: boolean): AppThunk =>
  async (dispatch) => {
    dispatch(slice.actions.setMode(isStatic));
  };
export default slice;
