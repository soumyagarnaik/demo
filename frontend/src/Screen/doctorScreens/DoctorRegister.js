import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ReCAPTCHA from "react-google-recaptcha"
import AOS from 'aos';
import 'aos/dist/aos.css';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


AOS.init({
  offset: 300
})

export default function Form() {
  const classes = useStyles();
  const[firstName,setFirstName] =useState('')
  const[lastName,setLastName] =useState('')
 

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log(firstName,lastName,date,time,city,phone)
  }

  return (
    <Container component="main" maxWidth="xs" data-aos="fade-left">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form}   onSubmit={submitHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onChange={e=>setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={e=>setEmail(e.target.value)}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="phone "
              label="phone"
              name="phone"
              
              value={phone}
              onChange={e=>setPhone(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
          <TextField
          fullWidth
          variant="outlined"
          default="dd-mm-yyyy"
          id="date"
          type="date"
            value={date}
            onChange={e=>setDate(e.target.value)}
         />
         </Grid>

         <Grid item xs={12} sm={6}>
          
          <TextField
          variant="outlined"
          id="time"
          type="time"
          value={time}
          fullWidth
          onChange={e=>setTime(e.target.value)}
    
         />
         </Grid>

         <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="city"
                label="City"
                name="city"
                autoComplete="city"
                value={city}
                onChange={e=>setCity(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="streetAdress"
                label="Street Adress"
                name="streetAdress"
                autoComplete="adress"
                value={streetAdress}
                onChange={e=>setStreetAdress(e.target.value)}
              />
            </Grid>
        <Grid item xs={12}>
            <TextField
            id="outlined-multiline-static"
            label="Your Message"
            fullWidth
            multiline
            rows={4}
            
            variant="outlined"
            value={message}
            onChange={e=>setMessage(e.target.value)}
        />
            </Grid>
            <Grid item xs={12}>
              <p>By Clicking submit Button you agree to our updated terms and conditions</p>
            </Grid>
          </Grid>
          
          <Grid item xs={12} >
          <ReCAPTCHA
          sitekey="Your client site key"
          //onChange={onChange}
         />
         </Grid>
         <Grid item xs={12} >
          <Button
          type="submit"
          
          variant="contained"
         
          className={classes.submit}
          
        >
          Submit
        </Button>
        
        </Grid>
        
          
        </form>
      </div>
      
    </Container>
  );
}