import React, { useState } from 'react'
import { Paper, Typography, Button, Grid, TextField, FormControlLabel, FormGroup, Checkbox } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TimeKeeper from 'react-timekeeper';

import '../../css/map.css'

const useStyles = makeStyles((theme) => ({

    paper: {
        height: 'auto',
        width: '45%',
        margin: 'auto',
        position: 'relative',
        top: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px'
    },
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

const ClinicProfile = () => {
    const [time, setTime] = useState('9:00am')
    const [showTime, setShowTime] = useState(false)

    const [time1, setTime1] = useState('8:00pm')
    const [showTime1, setShowTime1] = useState(false)
    const classes = useStyles()

    return (
        <div >
            <Typography variant="h4" style={{ 'display': 'flex', 'alignItems': 'center', "justifyContent": 'center' }} >
                Creating Clinic Profile..
            </Typography>

            <Paper className={classes.paper} elevation={9}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="clinic"
                            name="clinic"
                            required
                            fullWidth
                            id="clinic"
                            label="Clinic Name"
                            autoFocus
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="city"
                            name="city"
                            required
                            fullWidth
                            id="city"
                            label="City"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            autoComplete="address"
                            name="address"
                            required
                            fullWidth
                            id="address"
                            label="Address"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="clinicNumber"
                            name="clinicNumber"
                            required
                            fullWidth
                            id="clinicNumber"
                            label="Clinic Number"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="fees"
                            name="fees"
                            required
                            fullWidth
                            id="fees"
                            label="Appointment Fee"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <label >Select day</label>
                        <select style={{ margin: '0 0 0 1.5rem' }}>
                            <option>Moday-Friday</option>
                            <option>Moday-Saturday</option>
                            <option>All Day</option>
                            
                        </select>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{"display":"flex","justifyContent":"space-evenly"}}>
                    <div>
                    {showTime &&
                        <TimeKeeper
                        
                            time={time}
                            onChange={(newTime) => setTime(newTime.formatted12)}
                            onDoneClick={() => setShowTime(false)}
                            switchToMinuteOnHourSelect
                        />
                    }
                    <TextField value={time} halfWidth style={{width:"70px"} }></TextField>
                    {!showTime &&
                        <button onClick={() => setShowTime(true)}><i class="fas fa-plus-circle"></i></button>
                    }
                    
                    </div>
          to
          <div>
            {showTime1 &&
                <TimeKeeper
    
                    time={time1}
                    onChange={(newTime) => setTime1(newTime.formatted12)}
                    onDoneClick={() => setShowTime1(false)}
                    switchToMinuteOnHourSelect
                />
            }
            <TextField value={time1} halfWidth style={{width:"70px"}}></TextField>
            {!showTime1 &&
                <button onClick={() => setShowTime1(true)}><i class="fas fa-plus-circle"></i></button>
            }
        </div>   
                    </Grid>
                    <Grid item xs={12} sm={12}>
                    </Grid>
                    <Typography variant="caption" >Add custom Day and time according to your wish</Typography>
                    <Button variant="contained" color="primary" style={{margin: '0  0 0 2rem' }} >Add</Button>
                    <Grid item xs={12} >
                        <FormGroup  aria-label="position" row>
                        <FormControlLabel
                        value="start"
                        control={<Checkbox color="primary" />}
                        label="Vedio Appointment"
                        labelPlacement="start"
                      />     
                      
                      <FormControlLabel
                        value="start"
                        control={<Checkbox color="primary" />}
                        label="In Clinic Appointment"
                        labelPlacement="start"
                      />   

                        </FormGroup>
                    
                    </Grid>
            </Grid>
            
            </Paper>
            
        </div>
        
    )
}

export default ClinicProfile
