import React, { useState, useRef } from 'react';
import { Box, TextField, Button, Typography, Card, Divider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Draggable from 'react-draggable';
import '../App.css';
import { useNavigate, Link } from 'react-router-dom';
import {useUserData} from '../context/UserDataContext';
const theme = createTheme({

  typography: { fontFamily: 'Lexend' },
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
});


export default function Login({handleLoginStatus}) {
 const {setUserData, userData} = useUserData();
 const navigate = useNavigate();
  function handleLoginStatusToApp(status){
    handleLoginStatus(status);
  }
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nodeRef = useRef(null); 

  //log ing form can just read from the context.

  const handleEmailChange = (e) => {setEmail(e.target.value);}
  const handlePasswordChange = (e) => setPassword(e.target.value);
  
  const handlelogin = () => {
    const emailExists = userData.some(
  user => user.email === email && user.password === password
);

if (emailExists) {
  setUserData(prev =>
    prev.map(user =>
      user.email === email && user.password === password
        ? { ...user, isLoggedIn: true }
        : user
    )
  );
  navigate('/dashboard');
}
else {
  alert("Invalid email or password");   
      return;
    };
    }
  
  const handleFacebookLogin = () => console.log('Facebook login');
  const handleGmailLogin = () => console.log('Gmail login');




  return (
    <ThemeProvider theme={theme}>
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: '#f0f0f0',
        }}
      >
        <Draggable nodeRef={nodeRef}>
          <Card
            ref={nodeRef} 
            sx={{ width: 350, padding: 3, cursor: 'move', zIndex: 999 }}
          >
            <Typography variant="h4" component="h1" gutterBottom align="center">
              sign up to Artfy
            </Typography>
            <Box component="form" sx={{ mt: 2 }}>
            
              <TextField fullWidth label="Email" type="email" value={email} onChange={handleEmailChange} margin="normal" required />
              <TextField fullWidth label="Password" type="password" value={password} onChange={handlePasswordChange} margin="normal" required />
              {/* <TextField fullWidth label="Re-Type the password" type="password" value={password} onChange={handlePasswordChange} margin="normal" required /> */}
              
              <Button fullWidth variant="contained" color="primary" onClick={handlelogin} sx={{ mt: 2, mb: 2 }}>
                Log in
              </Button>
            </Box>
            <Divider sx={{ my: 2 }}>or</Divider>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Button fullWidth variant="outlined" onClick={handleFacebookLogin} sx={{ backgroundColor: '#1877f2', color: 'white', '&:hover': { backgroundColor: '#166fe5' } }}>
                Sign up with Facebook
              </Button>
              <Button fullWidth variant="outlined" onClick={handleGmailLogin} sx={{ backgroundColor: '#db4437', color: 'white', '&:hover': { backgroundColor: '#c23321' } }}>
                 sign up with Gmail  </Button>
                 <Link to="/signup" style={{ textDecoration: 'none' }}>
              <Button fullWidth variant="outlined" onClick={handleGmailLogin} sx={{ backgroundColor: '#db453700', color: '#166fe5', '&:hover': { backgroundColor: '#218cc2' } }}>
                Don't have an account ? SIGN UP
              </Button>
              </Link>


            </Box>
          </Card>
        </Draggable>
      </Box>
    
    </ThemeProvider>
  );
}
