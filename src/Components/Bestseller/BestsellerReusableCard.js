import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(({ breakpoints }) => ({
  root:       { display: 'flex',  backgroundColor : '#212121',  height : '56px',   
  [breakpoints.up('sm')]: { width : '20vw' },
  [breakpoints.up('md')]: { width : '40vw' },
},
  

  id :        { backgroundColor : 'black', color : 'white', borderRadius : '0 !important',  verticalAlign : 'middle',
               width : '25px', display  : 'flex', justifyContent : 'center',   alignItems: 'center' },

  details_Controller : { display: 'flex',  justifyContent : 'spaceAround', width : '100%',  padding : 0 },

  content:    { flex: '1', padding : '0.4rem', color : 'gray' },
  cover:      { width: 121, backgroundSize : 'cover',    borderLeft : '2px solid green' },
  cornerTxt : { fontSize : '.5vw', transform :' rotate(30deg)'},

  discount :  { backgroundColor : 'red', textAlign : 'center', width : '60px', padding : '0.6rem', margin : '0.5rem',  color : 'white' }
  
}));

export default function MediaControlCard(props) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
    <span className={classes.id}>{props.id}</span>

     <CardMedia
        className={classes.cover}
        image={props.img}                                //props.img
        title="Live from space album cover"
      >
        <div className={classes.corner}>
          <span className={classes.cornerTxt}>{props.corner}</span>  {/* props.something idk what kind of props here should be */}
        </div>                                     
      </CardMedia>
 
      <CardContent className={classes.details_Controller}>
        <CardContent className={classes.content}>

          <Typography  style={{color : 'gray'}}>
          {props.gameName} <br />                          {/* props.gameName Game Name */}
            Standard 
          </Typography>
        </CardContent> 

        <CardContent style={{padding : '0.4rem'}}>
          <Typography style={{color : 'gray'}}>
            <strike>{props.originalPrice}</strike>                 {/* props.originalPrice Original Price */}           
          </Typography>
          <Typography style={{color : 'green'}}>
           {props.discountPrice}                          {/* props.discountPrice discounted price */}
          </Typography>
        </CardContent>

        <Box >
        <Typography className={classes.discount}>
           {props.percentageDiscount}                                   {/* props.percentageDiscontPrice discounted price */} 
        </Typography> 
        </Box>

      </CardContent>
    </Card>
    
  );
}




