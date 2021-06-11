import React from 'react'
import PinInput from 'react-pin-input'
import {Paper,Typography,Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    
    paper: {
        height: '60vh',
        width: '25%',
        margin: 'auto',
        position: 'relative',
        top: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
       justifyContent:'center',
        padding: '10px'
    },
    
}));
const DoctorPin = () => {
    const classes=useStyles()
    return (
        <>
           <Paper className={classes.paper} elevation={10}>
                <Typography variant="h6">enter 4 digit pin</Typography>

                <PinInput 
                        length={4} 
                        initialValue=""
                        secret 
                        onChange={(value, index) => {}} 
                        type="numeric" 
                        inputMode="number"
                        style={{padding: '10px',height:"10px"}}  
                        inputStyle={{borderColor: 'lightgrey'}}
                        inputFocusStyle={{borderColor: 'blue'}}
                        onComplete={(value, index) => {}}
                        autoSelect={true}
                        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                    />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                <Button variant="contained" color="primary" >Next</Button>
           </Paper> 
        </>
    )
}

export default DoctorPin
