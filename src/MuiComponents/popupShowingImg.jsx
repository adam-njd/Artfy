import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
//icons
import { Box, Icon } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LoginRequiredDialog from './loginRequier';
import ShareIcon from '@mui/icons-material/Share';
//end icons
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({openImg, onClose,imgData,handleLikee,islogedIn}) {
console.log('imgData in popup is', imgData)
    const imgsrc = imgData?.img ?? '';

  const [open, setOpen] = React.useState(false);
  const [isliked, setIsliked] = React.useState(false);
  React.useEffect(() => {
    setOpen(openImg);
  }, [openImg]);

  React.useEffect(() => {
    // initialize local liked state from the passed image's likes
    setIsliked(Boolean(imgData?.likes));
  }, [imgData]);


//   const handleClickOpen = () => {
//     setOpen(true);
//   };

console.log('openimg is',openImg)
      const handleClose = () => {
    // reset local like state when closing
    setIsliked(false);
    setOpen(false);
    if (onClose) {
      onClose();
    }

  };
const handleLike = () => {

  if (!islogedIn) {
    <loginRequiredDialog open={true} onClose={() => {}} />;
    return;
  }

  setIsliked(prev => !prev);

  if (handleLikee) {
    handleLikee();
  }
};


  const passingID = () => {
    console.log("this is the img ID is", imgData.id);
    return imgData.id;
  }
  
  return (
    <React.Fragment>
       <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
      backgroundColor: '#000',
    }}>
      <BootstrapDialog
      sx={{width:'100vw',height:'100vh'}}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
       
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers onClick={passingID}>
         <h2>price</h2>

         <img src={imgsrc}
         onClick={passingID}
         style={{
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain',
        }}
         ></img>
         <Typography className='ImgDisc' gutterBottom sx={{marginTop:2,display:'flex',justifyContent:'center',alignItems:'center'}} >
            discrption
         </Typography>
         <div className='footeri' style={{marginTop:'2px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
         <IconButton onClick={handleLike}>
          <FavoriteBorderIcon sx={{ color: 'red' }} />
         {islogedIn ? (
  isliked ? (
    <FavoriteIcon sx={{ color: 'red' }} />
  ) : (
    <></>
  )
) : (
  <LoginRequiredDialog open={true} onClose={() => {}} />
)}

</IconButton>

          <button style={{backgroundColor:'#59e3ac',color:'#fff',cursor:'pointer'}}>Buy</button>
         </div>
        </DialogContent>
        
      </BootstrapDialog>
      </Box>
    </React.Fragment>
  );
}
