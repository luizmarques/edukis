import { VIDEOS } from "../types"

const INITIAL_STATE = {
  loading: false,
  videos: [],
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VIDEOS.VIDEOS_GET_ALL:
      return {
        ...state,
        videos: action.data
      }
    default:
      return state
  }
}

export default reducer