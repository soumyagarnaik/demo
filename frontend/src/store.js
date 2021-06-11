import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {docotorRegisterReducer,doctorLoginReducer} from  "./reducers/doctorReducer"

const reducer=combineReducers({
    doctorLogin:doctorLoginReducer,
    doctorRegister:doctorLoginReducer
})

const middleware=[thunk]

const initialstate={}
const store=createStore(reducer,initialstate,composeWithDevTools(applyMiddleware(...middleware)))


export default store