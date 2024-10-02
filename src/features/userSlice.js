import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAccessToken, liveServer, sendError } from "../utils/utils";
import axios from "axios";

const initialState = {
  getUserLoading: false,
  getUserError: false,
  user: false,
};

export const getUser = createAsyncThunk("user/getUser", async () => {
  const url = `${liveServer}/user`;
  const accessToken = getAccessToken();
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    sendError(error);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.getUserLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.getUserLoading = false;
        state.getUserError = false;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.getUserLoading = false;
        state.getUserError = action.error.message;
        state.user = false;
      });
  },
});

export default userSlice.reducer;
