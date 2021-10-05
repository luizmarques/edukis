import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import videoReducer from "./videos/reducer" 

const reducers = combineReducers ({ video: videoReducer })

const middlewares = [thunk]

const compose = composeWithDevTools (applyMiddleware(...middlewares))

const store = createStore(reducers, compose)

export default store