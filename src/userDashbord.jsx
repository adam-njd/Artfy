import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
//icons
import { Box, Icon } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
//end icons
//import '../App.css';
import { useUserData } from './context/UserDataContext';
import { v4 as uuidv4 } from 'uuid';


export default function UserDashboard({useremail}) {
  const { userData } = useUserData();
  
  // Safety check for undefined or empty userData
  if (!userData || !Array.isArray(userData)) {
    return <div>Loading...</div>;
  }
  
   const thisUser=userData.filter(user => {
   if (user.email === useremail) {
    return user;
   }

    return null;});
    //user.imgs is the array of imgs that the user has uploaded, 
    // for now we can just use some dummy data to show the gallery,
    //  and later we can connect it to the upload function to show the real imgs.
    const itemData = [
    {"img": "../public/imgs/pc0.jpg","id":uuidv4(), "title": "pc1","likes":0},
    {"img": "../public/imgs/pc1.jpg","id":uuidv4(), "title": "pc2","likes":0},
    {"img": "../public/imgs/pc1.jpg","id":uuidv4(), "title": "pc2","likes":0},
    {"img": "../public/imgs/pc1.jpg","id":uuidv4(), "title": "pc2","likes":0},
    {"img": "../public/imgs/pc1.jpg","id":uuidv4(), "title": "pc2","likes":0},
    {"img": "../public/imgs/pc2.jpg","id":uuidv4(), "title": "pc3","likes":0},
    {"img": "../public/imgs/pc3.jpg","id":uuidv4(), "title": "pc4","likes":0},
    {"img": "../public/imgs/pc4.jpg","id":uuidv4(), "title": "pc5","likes":0},
    {"img": "../public/imgs/pc4.jpg","id":uuidv4(), "title": "pc5","likes":0},
    {"img": "../public/imgs/pc5.jpg","id":uuidv4(), "title": "pc6","likes":0},
    {"img": "../public/imgs/pc7.jpg","id":uuidv4(), "title": "pc7","likes":0},
    {"img": "../public/imgs/pc8.jpg","id":uuidv4(), "title": "pc8","likes":0},
    {"img": "../public/imgs/pc8.jpg","id":uuidv4(), "title": "pc8","likes":0},
    {"img": "../public/imgs/pc8.jpg","id":uuidv4(), "title": "pc8","likes":0},
    {"img": "../public/imgs/pc8.jpg","id":uuidv4(), "title": "pc8","likes":0},
    {"img": "../public/imgs/pc8.jpg","id":uuidv4(), "title": "pc8","likes":0},
    {"img": "../public/imgs/pc8.jpg","id":uuidv4(), "title": "pc8","likes":0},
    {"img": "../public/imgs/pc8.jpg","id":uuidv4(), "title": "pc8","likes":0},
    {"img": "../public/imgs/pc8.jpg","id":uuidv4(), "title": "pc8","likes":0},
    {"img": "../public/imgs/pc9.jpg","id":uuidv4(), "title": "pc9","likes":0},
    {"img": "../public/imgs/pc9.jpg","id":uuidv4(), "title": "pc9","likes":0}
  ];
  const finalName = thisUser && thisUser.length > 0 ? thisUser[0].name : 'Guest';
    console.log('this is the userData in userDashboard', userData);
    console.log('this is the useremail in userDashboard', useremail);
    console.log('this is the thisUser in userDashboard', thisUser);
  return (
 //   <Box sx={{display: 'flex', flexDirection: 'column',padding:'20px',backgroundColor:'#f0f0f0',width:'100vw',height:'100vh',marginTop:'5px'}}>
    <div className="user-dashboard" style={{width:'100vw',height:'98vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column', marginTop:'200px'}}>
        
      <h1 style={{margin:'5px'}}>Welcome, {finalName}!</h1>
      <h2>My Gallery</h2>
      
      <div className="explore-container" style={{width:'100vw',height:'100vh'}} >

         {/* <Typography variant="h3" component="div" gutterBottom>
        Give your favorite place more love <br/>with real artist's artworks.
        </Typography> */}
        <Card sx={{ minWidth: '99%', marginBottom: 2, marginTop: 2 }}>
         <Box sx={{ width: '99%', height: '90%',  overflowY: 'scroll' , margin: '0 auto', padding: '20px' }}>
       
        
        <ImageList variant="masonry" cols={3} gap={8} style={{padding:'10px'}}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
               
              <img
                className='storeImgs'
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"/>
               
            </ImageListItem>
          ))}
           <div style={{backgroundColor:'#c5c5c5',width:'100%',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer',borderRadius:'10px'}}>
                <AddBoxTwoToneIcon/>
                </div>
        </ImageList>
        
        </Box>
        </Card>
        </div>
        
    </div>
   // </Box>
  );
}