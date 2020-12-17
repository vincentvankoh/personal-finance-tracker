import {combineReducers} from 'redux'
import reducer from './reducer'

const rootReducer =  combineReducers({
    generalReducer: reducer
})


export default rootReducer
