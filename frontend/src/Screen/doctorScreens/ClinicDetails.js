import React from 'react'
import { Paper, Typography, Button, Grid,TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GoogleMapReact from 'google-map-react'
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

}));

const ClinicDetails = () => {
    
    const classes=useStyles()
    return (
        <div >
            <Typography variant="h4" style={{'display':'flex','alignItems':'center',"justifyContent":'center'}} >
               Add Clinic to your Profie
            </Typography>

            <Paper className={classes.paper}>
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
            <Grid item xs={12} sm={6}>
                <TextField
                    autoComplete="location"
                    name="location"
                    required
                    fullWidth
                    id="location"
                    label="Location"
                    autoFocus
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    autoComplete="landmark"
                    name="landmark"
                    required
                    fullWidth
                    id="landmark"
                    label="Landmark"
                    autoFocus
                />
            </Grid>

            </Grid>
            </Paper>
            
        </div>
    )
}

export default ClinicDetails
