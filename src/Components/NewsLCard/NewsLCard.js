import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fade from 'react-reveal/Fade';


const useStyles = makeStyles({
  root: { 
    maxWidth: 845,
     height: '100%',
     background: 'linear-gradient(180deg, rgba(75,75,75,0) 0%, rgba(164,164,164,0.5138830532212884) 50%, rgba(153,153,153,0) 90%);', 
      color: 'white',  
      border : '1px solid rgba(255, 255, 255, 0.08)' },
  media: { height: 476, backgroundSize : 'cover'},
  buttonClass: { textDecoration: 'underline'},
  boxStyling: { padding: '5px 0px', height : '100%'  }
});

export default function LandingNewsDynamicCard(props) {
  const data = props.data

  //console.log(`data changiing or not ?`, data);

  const classes = useStyles();

  return (<>

  
    <Card className={classes.root} key={data.id}>
    <Fade clear duration={1500}>
        <CardActionArea style={{height : '100%'}}>
          <CardMedia
            className={classes.media}
            image={data.image}
            //waiting for topicGamesImages
          
            title="Contemplative Reptile"
          />
          <CardContent className="rightCardDetails" style={{height : '100%'}}>
            <Typography className="titlesTXT" gutterBottom variant="h6" component="h5" >
              {data.newsTopic} {/* waitig for topic games props */}
            </Typography>
            <Typography className="detailsTXT" variant="body2" component="p" style={{height: '78px'}}>
              {data.details}
              {/*  waiting  topicgames details or explanation */}
            </Typography>
          <Box className={classes.boxStyling} display="flex" justifyContent="space-between" >
            <a href={`news/#${data.id}`} className="cardButton" size="small">
              READ MORE
        </a>
            <Typography style={{color : " rgb(252, 52, 52)"}} size="small" color="secondary">
              {data.date}
            </Typography>
          </Box>
            </CardContent>
        
        </CardActionArea>

    </Fade>
      </Card>
      </>
  );
}





