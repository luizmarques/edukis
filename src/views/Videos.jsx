
import { actionVideosGetAll } from "../store/videos/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"

const Videos = () => {
  const dispatch = useDispatch();
  const videosResult = useSelector((state) => state.video.videos) 
      useEffect(() => {
      dispatch(actionVideosGetAll())
    }, [])
  
  // const VideosExemplo = videosResult.map( function (item, i) {
  //   console.log(item)
  //   return <li key= {i}>{item.title}</li>
  // })
  return (

    <div className="Container">
      {JSON.stringify(videosResult)}
    </div>

  )
}

export default Videos;