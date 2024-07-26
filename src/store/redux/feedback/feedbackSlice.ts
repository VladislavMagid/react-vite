import { createAppSlice } from "store/createAppSlice"

import { likesAndDislikesSliceState } from "./types"

const likeInitialState: likesAndDislikesSliceState = {
  count: 0,
}

const dislikeInitialState: likesAndDislikesSliceState = {
  count: 0,
}

export const feedbackLikesSlice = createAppSlice({
  name: "FEEDBACK_LIKES",
  initialState: likeInitialState,
  reducers: create => ({
    like: create.reducer((state: likesAndDislikesSliceState) => {
      state.count = state.count + 1
    }),
    recetLikes: create.reducer((state: likesAndDislikesSliceState) => {
      state.count = 0
    }),
  }),
  selectors: {
    count: (state: likesAndDislikesSliceState) => {
      return state.count
    },
  },
})

export const feedbackDislikesSlice = createAppSlice({
  name: "FEEDBACK_DISLIKES",
  initialState: dislikeInitialState,
  reducers: create => ({
    dislike: create.reducer((state: likesAndDislikesSliceState) => {
      state.count = state.count + 1
    }),
    recetDislikes: create.reducer((state: likesAndDislikesSliceState) => {
      state.count = 0
    }),
  }),
  selectors: {
    count: (state: likesAndDislikesSliceState) => {
      return state.count
    },
  },
})

export const feedbackLikesSliceSelectors = feedbackLikesSlice.selectors
export const feedbackLikesSliceActions = feedbackLikesSlice.actions

export const feedbackDislikesSliceSelectors = feedbackDislikesSlice.selectors
export const feedbackDislikesSliceActions = feedbackDislikesSlice.actions
