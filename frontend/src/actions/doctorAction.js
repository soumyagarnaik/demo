import {DOCTOR_REGISTER_REQUEST,DOCTOR_REGISTER_SUCCESS,DOCTOR_REGISTER_FAIL,DOCTOR_REGISTER_RESET,
    DOCTOR_LOGIN_REQUEST,DOCTOR_LOGIN_SUCCESS,DOCTOR_LOGIN_FAIL} from "../constants/doctorConstants"

    export const doctorLogin = (email, password) => async (dispatch) => {
        try {
          dispatch({
            type: DOCTOR_LOGIN_REQUEST,
          })
      
          const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
      
          const { data } = await axios.post(
            `${url}/api/users/login`,
            { email, password },
            config
          )
      
          dispatch({
            type: DOCTOR_LOGIN_SUCCESS,
            payload: data,
          })
      
          localStorage.setItem('doctorInfo', JSON.stringify(data))
        } catch (error) {
          dispatch({
            type: DOCTOR_LOGIN_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
        }
      }

export const doctorRegister = (name, email, password) => async (dispatch) => {
    try {
      dispatch({
        type: DOCTOR_REGISTER_REQUEST,
      })
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
  
      const { data } = await axios.post(
        `${url}/api/users`,
        { name, email, password },
        config
      )
  
      dispatch({
        type: DOCTOR_REGISTER_SUCCESS,
        payload: data,
      })
  
      dispatch({
        type: DOCTOR_LOGIN_SUCCESS,
        payload: data,
      })
  
      localStorage.setItem('doctorInfo', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: DOCTOR_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }