import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getList from './missionAPI';

const slicename = 'missions';

export const getMissionsList = createAsyncThunk(
  'todo/getMissionList',
  async (_, { rejectWithValue }) => {
    try {
      const results = await getList();
      return results;
    } catch (err) {
      return rejectWithValue([], err);
    }
  },
);

export const missionSlice = createSlice({
  name: slicename,
  initialState: {
    missionsList: [],
    loader: false,
    filterParam: {},
  },
  reducers: {
    setFilterData: (state, action) => {
      state.filterParam = action.payload;
    },
  },
  extraReducers: {
    [getMissionsList.fulfilled]: (state, action) => {
      state.loader = false;
      state.missionsList = action.payload;
    },
    [getMissionsList.pending]: (state) => {
      state.loader = true;
    },
    [getMissionsList.rejected]: (state, { error }) => {
      state.loader = false;
      console.log(error);
    },
  },
});

export const { setFilterData } = missionSlice.actions;

export default missionSlice.reducer;
