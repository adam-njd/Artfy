import React, { useState, useRef } from 'react';
import { Box, TextField, Button, Typography, Card, Divider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Draggable from 'react-draggable';
import '../App.css';
import {Link as UseLink } from 'react-router-dom';
import {useUserData} from '../context/UserDataContext';
import { useNavigate } from 'react-router-dom';
const theme = createTheme({

  typography: { fontFamily: 'Lexend' },
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
});


export default function SignUp() {
 const {setUserData, userData} = useUserData();
  const navigate = useNavigate();
    // ...
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nodeRef = useRef(null); 

  //sign up form can just write to the context.
  const handleNameLogin = (e) => {setName(e.target.value);}
  const handleEmailChange = (e) => {setEmail(e.target.value);}
  const handlePasswordChange = (e) => setPassword(e.target.value);
  
  const handleSignUp = () => {
    const emailExists = userData.some(user => user.email === email);
    if (emailExists) {
      alert('Email already exists');
      return;
    }
    setUserData(prev => [...prev, {name, email, password,islogedIn: false}])
    alert('Sign up successfully')
    navigate('/login')
    ;
    console.log(name, email, password);
    console.log(userData);
  };
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
              sign up to Artfiy
            </Typography>
            <Box component="form" sx={{ mt: 2 }}>
              <TextField fullWidth label="Name" type="text" value={name} onChange={handleNameLogin} margin="normal" required />
              <TextField fullWidth label="Email" type="email" value={email} onChange={handleEmailChange} margin="normal" required />
              <TextField fullWidth label="Password" type="password" value={password} onChange={handlePasswordChange} margin="normal" required />
              {/* <TextField fullWidth label="Re-Type the password" type="password" value={password} onChange={handlePasswordChange} margin="normal" required /> */}
              
              <Button fullWidth variant="contained" color="primary" onClick={handleSignUp} sx={{ mt: 2, mb: 2 }}>
                Sign Up
              </Button>
            </Box>
            <Divider sx={{ my: 2 }}>or</Divider>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Button fullWidth variant="outlined" onClick={handleFacebookLogin} sx={{ backgroundColor: '#1877f2', color: 'white', '&:hover': { backgroundColor: '#166fe5' } }}>
                Sign up with Facebook
              </Button>
              <Button fullWidth variant="outlined" onClick={handleGmailLogin} sx={{ backgroundColor: '#db4437', color: 'white', '&:hover': { backgroundColor: '#c23321' } }}>
                 sign up with Gmail  </Button>
                 <UseLink to="/login" variant="body2" align="center">
              <Button fullWidth variant="outlined" onClick={handleGmailLogin} sx={{ backgroundColor: '#db453700', color: '#166fe5', '&:hover': { backgroundColor: '#218cc2' } }}>
                 Have an account ? log in
              </Button>
              </UseLink>


            </Box>
          </Card>
        </Draggable>
      </Box>
    
    </ThemeProvider>
  );
}
