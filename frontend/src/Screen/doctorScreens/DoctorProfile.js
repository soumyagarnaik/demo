
import React from 'react'
import { Paper, Typography, Button, Grid,TextField ,FormControlLabel,Checkbox,FormLabel,Radio,RadioGroup} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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


const DoctorProfile = () => {

    const classes = useStyles()
    return (
        <Paper className={classes.paper} elevation={9}>
            <Typography component="h4" variant="h5">
                Create Profile
           </Typography>
            <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="fname"
                            name="firstName"
                            
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="lname"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <RadioGroup row aria-label="gender" name="gender1" >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
        
                  </RadioGroup>
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    name="city"
                    label="city"
                    type="city"
                    id="city"
                    autoComplete="current-city"
                />
                    
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="speciality"
                        name="speciality"
                        
                        required
                        fullWidth
                        id="speciality"
                        label="Speciality"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="qualification"
                        label="Education Qualification"
                        name="qualification"
                        autoComplete="Qualification"
                    />
                </Grid>

                <Grid item xs={12} >
                <TextField
                    required
                    fullWidth
                    name="registrtion"
                    label="Registrtion Details"
                    type="registrtion"
                    id="registrtion"
                    autoComplete="registrtion"
                />
             </Grid>
             <Grid item xs={12} sm={12}>
             <TextField
                 required
                 fullWidth
                 name="experience"
                 label="Years of experience"
                 type="experience"
                 id="experience"
                 autoComplete="current-experience"
             />
         </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            name="confirPassword"
                            label="Confirm Password"
                            type="confirPassword"
                            id="confirPassword"
                            autoComplete="confirPassword"
                        />
                    </Grid>
                    
                </Grid>
                <br></br>
                <br></br>
                <br></br>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Create Profile
        </Button>
        </form>
        </Paper>
    )
}

export default DoctorProfile
