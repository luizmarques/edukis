import http from "../config/http"

export const videosGetAll = () => http.get("/videos")