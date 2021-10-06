import { VIDEOS } from "../types"
import { videosGetAll } from "../../service/service.videos"

export const actionVideosGetAll = () => {
  
  return async(dispatch) => {
    const result = await videosGetAll ()
    //ordenando pelo parental guide
    const sortParentalGuide = ((a, b) => {
      if (a.parentalGuide > b.parentalGuide) {
        return 1;
      }
      if (a.parentalGuide < b.parentalGuide) {
        return -1;
      }
      return 0;
    })
    //montando o objeto separado por parental guide
    const videosByParentalGuide = result.data.sort(sortParentalGuide).reduce((acc, video) => {
      return {
        ...acc,
        [video.parentalGuide] : [
          ...(acc[video.parentalGuide] || []),
          video
        ],
      }
    },{})

    dispatch ({
      type: VIDEOS.VIDEOS_GET_ALL,
      data: videosByParentalGuide
    })
  }
}