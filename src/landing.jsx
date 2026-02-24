import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import './App.css'
import Card from '@mui/material/Card';
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from '@mui/material';
import Explore from './MuiComponents/Explore';
import { v4 as uuidv4 } from 'uuid';
export default function Landing() {
  const itemData = [
    {"img": "../public/imgs/pc0.jpg", "title": "pc1","id":uuidv4()},
    {"img": "../public/imgs/pc1.jpg", "title": "pc2","id":uuidv4()},
    {"img": "../public/imgs/pc2.jpg", "title": "pc3","id":uuidv4()},
    {"img": "../public/imgs/pc3.jpg", "title": "pc4","id":uuidv4()},
    {"img": "../public/imgs/pc4.jpg", "title": "pc5","id":uuidv4()},
    {"img": "../public/imgs/pc4.jpg", "title": "pc5","id":uuidv4()},
    {"img": "../public/imgs/pc5.jpg", "title": "pc6","id":uuidv4()},
    {"img": "../public/imgs/pc7.jpg", "title": "pc7","id":uuidv4()},
    {"img": "../public/imgs/pc8.jpg", "title": "pc8","id":uuidv4()},
    {"img": "../public/imgs/pc9.jpg", "title": "pc9","id":uuidv4()},
    {"img": "../public/imgs/pc9.jpg", "title": "pc9","id":uuidv4()}
  ];
  console.log(itemData);
  const theme =createTheme({
    typography: {
      fontFamily: 'Lexend',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box>
           <div className="landing-container" >

         <Typography variant="h3" component="div" gutterBottom>
        Give your favorite place more love <br/>with real artist's artworks.
        </Typography>
        <Card sx={{ minWidth: 275, marginBottom: 2, marginTop: 2 }}>
         <Box sx={{ width: 800, height: 450,  overflowY: 'scroll' , margin: '0 auto', padding: '20px' }}>
       
        
        <ImageList variant="masonry" cols={3} gap={8} style={{padding:'10px'}}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}
            onClick={console.log("this is showing the img data", item)}>
              <img
                
                className='simpleImgs'
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"/>
            </ImageListItem>
          ))}
        </ImageList>
        
        </Box>
        </Card>
        <Link component={RouterLink} to="/explore" variant="body2">Explore More</Link>
          <Card sx={{width: 800, padding: 2 ,mt:6, mb:6, lineHeight: 2.334}}> 
        <Typography variant="h4" component="div" gutterBottom>
          Are you an artist?
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
          This App Disgined spicially for you to help you sell your artworks online.  <br/>
          Join Artfiy today and start showcasing your artwork to a wider audience. <br/>
          Connect with art enthusiasts, sell your creations, and grow your artistic career with us.
          to start with us pealse read <Link href="/how-it-works"><Typography variant="body2"> How does it work </Typography></Link>
            </Typography>
          </Card>
          <footer sx={{backgroundColor:'#fff',mb:4, mt:4, py:4}}>
      <Typography variant="body2" color="text.secondary" align="center">
        {'© '}
        <Link color="inherit" href="https://artfiy.com/" >
          Artfiy
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
          </footer>
    </div>
</Box>
 
    </ThemeProvider>
  )
}