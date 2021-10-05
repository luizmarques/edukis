import { VIDEOS } from "../types"
import { videosGetAll } from "../../service/service.videos"

export const actionVideosGetAll = () => {
  
  return async(dispatch) => {
    const result = await videosGetAll ()
    console.log("#####", result.data)
    dispatch ({
      type: VIDEOS.VIDEOS_GET_ALL,
      data: result.data
    })
  }
}