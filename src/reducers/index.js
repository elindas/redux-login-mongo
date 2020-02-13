import {combineReducers} from "redux"
import users from "./users.reducer"
import todos from "./todos.reducer";


export default combineReducers({users, todos})