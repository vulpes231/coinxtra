import axios from "axios";
import { getAccessToken, liveServer, sendError } from "../utils/utils";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  withdrawLoading: false,
  withdrawError: false,
  withdrawSuccess: false,
  depositLoading: false,
  depositError: false,
  depositSuccess: false,
  getUserTrnxLoading: false,
  getUserTrnxError: false,
  userTrnxs: false,
};

export const withdrawFunds = createAsyncThunk(
  "trnx/withdrawFunds",
  async (formData) => {
    const url = `${liveServer}/transaction/withdraw`;
    const accessToken = getAccessToken();
    try {
      const response = axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      sendError(error);
    }
  }
);

export const depositFunds = createAsyncThunk(
  "trnx/depositFunds",
  async (formData) => {
    const url = `${liveServer}/transaction/deposit`;
    const accessToken = getAccessToken();
    try {
      const response = axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      sendError(error);
    }
  }
);

export const getUsertrnxs = createAsyncThunk("trnx/getUsertrnxs", async () => {
  const url = `${liveServer}/transaction`;
  const accessToken = getAccessToken();
  try {
    const response = axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    sendError(error);
  }
});

const trnxSlice = createSlice({
  name: "trnx",
  initialState,
  reducers: {
    resetWithdraw(state) {
      state.withdrawError = false;
      state.withdrawSuccess = false;
      state.withdrawLoading = false;
    },
    resetDeposit(state) {
      state.depositError = false;
      state.depositSuccess = false;
      state.depositLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(withdrawFunds.pending, (state) => {
        state.withdrawLoading = true;
      })
      .addCase(withdrawFunds.fulfilled, (state) => {
        state.withdrawLoading = false;
        state.withdrawSuccess = true;
        state.withdrawError = false;
      })
      .addCase(withdrawFunds.rejected, (state, action) => {
        state.withdrawLoading = false;
        state.withdrawSuccess = false;
        state.withdrawError = action.error.message;
      });

    builder
      .addCase(depositFunds.pending, (state) => {
        state.depositLoading = true;
      })
      .addCase(depositFunds.fulfilled, (state) => {
        state.depositLoading = false;
        state.depositSuccess = true;
        state.depositError = false;
      })
      .addCase(depositFunds.rejected, (state, action) => {
        state.depositLoading = false;
        state.depositSuccess = false;
        state.depositError = action.error.message;
      });

    builder
      .addCase(getUsertrnxs.pending, (state) => {
        state.getUserTrnxLoading = true;
      })
      .addCase(getUsertrnxs.fulfilled, (state, action) => {
        state.getUserTrnxLoading = false;
        state.userTrnxs = action.payload.trnxs;
        state.getUserTrnxError = false;
      })
      .addCase(getUsertrnxs.rejected, (state, action) => {
        state.getUserTrnxLoading = false;
        state.userTrnxs = false;
        state.getUserTrnxError = action.error.message;
      });
  },
});

export const { resetWithdraw, resetDeposit } = trnxSlice.actions;
export default trnxSlice.reducer;
