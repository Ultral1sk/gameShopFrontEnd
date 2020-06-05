import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root:{
      width:"50px",
      height:"50px",
      position:"relative",
    display:"flex",
    alignItems:"center",
  },
    percentage: {
    position:"absolute",
    top:"27%",
    left:"24%",
    fontWeight:"600"
  },
}));

export default function ProgressCircle({value}) {
  const classes = useStyles();

  return (
<div className={classes.root}>
<span className={classes.percentage}>{value}</span>
      <CircularProgress variant="static" color="secondary"  thickness={6.8} value={value} ></CircularProgress>
</div>
  
  );
}