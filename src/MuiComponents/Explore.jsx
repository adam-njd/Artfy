import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
//import '../App.css'
import Card from '@mui/material/Card';
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import CustomizedDialogs from './popupShowingImg'
import { v4 as uuidv4 } from 'uuid';
export default function Explore( {islogedIn} ) {
  const [imgData, setImgData] = useState({});
  const[openImg,setOpenImg]=useState(false);
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
  const theme =createTheme({
    typography: {
      fontFamily: 'Lexend',
    },
  });
  function handleOpenImg(itemData){
    setOpenImg(true)
    setImgData(itemData)
    //  console.log("this is showing the img data", item)
  }

  function handleCloseImg(){
    setOpenImg(false)
  }
  const handleLike=()=>{
        islogedIn ? setImgData(prev => ({...prev, likes: prev.likes + 1})) : alert("Please log in to like the image");
    //    setImgData(prev => ({...prev, likes: prev.likes + 1}));
  }
  
  return (
    <ThemeProvider theme={theme}>
    <div className="explore-container" style={{width:'100vw',height:'100vh'}} >

         {/* <Typography variant="h3" component="div" gutterBottom>
        Give your favorite place more love <br/>with real artist's artworks.
        </Typography> */}
        <Card sx={{ minWidth: '99%', marginBottom: 2, marginTop: 2 }}>
         <Box sx={{ width: '99%', height: '90%',  overflowY: 'scroll' , margin: '0 auto', padding: '20px' }}>
       
        
        <ImageList variant="masonry" cols={3} gap={8} style={{padding:'10px'}}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
                <Link component={RouterLink} to="/explore" color="inherit" underline="none">
              <img
                onClick={() => handleOpenImg(item)}
                className='storeImgs'
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"/>
                </Link>
            </ImageListItem>
          ))}
        </ImageList>
        <CustomizedDialogs style={{height:'0vh'}} openImg={openImg} onClose={handleCloseImg} imgData={imgData} handleLike={() =>  handleLike(imgData) } islogedIn={islogedIn} />
        
        </Box>
        </Card>
        </div>
        </ThemeProvider>)}