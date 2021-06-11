
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import HomePage from './components/HomePage';
import DoctorList from './components/DoctorList';
import DoctorFrontScreen from './Screen/doctorScreens/DoctorFrontScreen';
import DoctorPin from './Screen/doctorScreens/DoctorPin';
import DoctorProfile from './Screen/doctorScreens/DoctorProfile';
import ClinicDetails from './Screen/doctorScreens/ClinicDetails';
import ClinicProfile from './Screen/doctorScreens/ClinicProfile';
import AppointmentScreen from './Screen/doctorScreens/AppointmentScreen';
import StepsForProfileCreation from './Screen/doctorScreens/StepsForProfieCreation'
import DoctorLandingPage from './Screen/doctorScreens/DoctorLandingPage';
import DoctorNavbar from './components/DoctorNavbar';
import DoctorLogin from './Screen/doctorScreens/DoctorLogin'




function App() {
  return (
    <Router>
    <DoctorNavbar/>
    <Switch>
        <Route path="/" component={HomePage} exact  />
        <Route path="/login" component={DoctorLogin}  />
        <Route path="/doctors" component={DoctorLandingPage} exact  />
        <Route path="/doctorscreen" component={DoctorFrontScreen} />
        
        <Route path="/doctors/pin" component={DoctorPin}  exact/>
        <Route path="/doctors/profile" component={DoctorProfile}  exact/>
        <Route path="/doctors/steps" component={StepsForProfileCreation}  exact/>
        <Route path="/doctors/clinics" component={ClinicDetails}  exact/>
        <Route path="/doctors/clinics/details" component={ClinicProfile}  exact/>
        <Route path="/doctors/appointments" component={AppointmentScreen}  exact/>
      </Switch>
    </Router>
  );
}

export default App;
