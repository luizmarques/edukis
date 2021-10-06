
import { actionVideosGetAll } from "../store/videos/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"

import { VideosAll } from "../components/videosAll"

const Videos = () => {
  const dispatch = useDispatch();
  const videosResult = useSelector((state) => state.video.videos) 
      useEffect(() => {
      dispatch(actionVideosGetAll())
    }, [])
  
  
  return (
    <div>
      <VideosAll videos={videosResult} />
    </div>
    

  )
}

export default Videos;