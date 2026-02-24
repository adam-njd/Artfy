import { Routes, Route } from "react-router-dom";
import Link from "@mui/material/Link";
import { Link as RouterLink , Navigate} from "react-router-dom";
import { CssBaseline } from '@mui/material';
import './App.css'
import Landing from './landing.jsx'
import SignUp from './MuiComponents/signUp.jsx'
import Explore from "./MuiComponents/Explore.jsx";
import Login from "./MuiComponents/login.jsx";
import UserDashboard from "./userDashbord.jsx";
import{useState} from 'react';
function App() {
  const[islogedIn,setIsLogedIn]=useState(false);
  function handleLoginStatus(status){
    setIsLogedIn(status);
  }
  return (
    <>
      <CssBaseline />

      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <Link component={RouterLink} to="/sell" color="inherit">
          <h2>Sell</h2>
        </Link>
        <Link component={RouterLink} to="/home" color="inherit" underline="none">
        <h1>Artfy</h1>
        </Link>
        <Link component={RouterLink} to="/buy" color="inherit">
          <h2>Buy</h2>
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/sell" element={<SignUp/>} />
        <Route path="/buy" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Landing loge islogedIn={islogedIn} handleLoginStatus={handleLoginStatus}/>} />
        <Route path="/explore" element={<Explore islogedIn={islogedIn}/>}/>
        <Route path="/login" element={<Login handleLoginStatus={handleLoginStatus}/>}/>
        <Route path="/dashboard" element={<UserDashboard/>}/>
      </Routes>
    </>
  );
}


export default App
