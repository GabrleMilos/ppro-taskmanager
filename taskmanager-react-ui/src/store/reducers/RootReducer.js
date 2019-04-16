import AuthenticationReducer from './AuthenticationReducer'
import ProjectReducer from './ProjectReducer'
import TaskReducer from './TaskReducer'
import {combineReducers} from "redux";

const RootReducer = combineReducers({
    authentication: AuthenticationReducer,
    project: ProjectReducer,
    task: TaskReducer

});
export default RootReducer