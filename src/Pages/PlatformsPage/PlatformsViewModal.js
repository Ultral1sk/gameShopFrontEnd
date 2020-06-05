import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Box from "@material-ui/core/Box"
import playstationButton from '../../assets/backgroundImages/button.png'
import nintendoButton from '../../assets/backgroundImages/nintendoButton.png'
import xboxButton from '../../assets/backgroundImages/xboxButton.png'
import { useHistory } from "react-router-dom";
import img from '../../assets/backgroundImages/god1.jpg'

const PlatformsViewModal = (props) => {
  
  const history = useHistory()
  const data = props.data

  //const buyFunction = props.buy
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // can be an option to pass the data inside the edit buton only when it is clicked.

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //console.log("data where id", data._id)

  return (
    <div className={classes.root}>
      <button type="button" onClick={handleOpen} className={classes.viewButton} className="ps4button" data-toggle="modal" data-target=".bd-example-modal-lg">
        {history.location.pathname === `/playstation` ? <img src={playstationButton} width="30px" height="30px" alt="playstation" /> : null}
        {history.location.pathname === `/nintendo` ? <img style={{ borderRadius: '50%' }} className="bg-white" src={nintendoButton} width="30px" height="30px" alt="nintendo" /> : null}
        {history.location.pathname === `/xbox` ? <img src={xboxButton} width="30px" height="30px" alt="xbox" /> : null}
      </button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        style={{ overflow: 'auto' }}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <button onClick={handleClose} className={classes.closeButton}>&#xd7;</button>
            <Box display="flex">
              <Box className="leftPartModalElements">
                <h2>{data.name.toUpperCase()}</h2>
                <Carousel infiniteLoop={true} showIndicators={false}>

                  {data.images.slice(1).map((image, index) => {
                    return (
                      <div className="modalImage" key={index}>
                        <img alt="incomingimg" width="300px" height="100%" src={`http://localhost:5000/gamesimages/${image}`} />
                      </div>)
                  })}

                </Carousel>

                <Box className="pt-1 d-flex" >
                  <div >
                    <Box className="modalGameDescription ">
                      <h4 style={{ borderBottom: '1px solid gray' }}>GAME DESCRIPTION</h4>
                      <div className="descriptionScoreDateWrapper">
                        {data.description}
                        <Box className="reviewScore">
                          <Box className="mb-2 " >Reviewscore
                        <span style={{ border: '2px solid red', borderRadius: '50%', padding: '0.5rem', marginLeft: "0.5rem", fontWeight: "600" }}>{data.reviewscore}</span>
                          </Box>
                          <Box>Release date {data.releasedate} </Box>
                        </Box>
                      </div>
                    </Box>
                  </div>
                </Box>
              </Box>

            </Box>

          </div>
        </Fade>
      </Modal>
    </div >
  );
}



export default PlatformsViewModal


const useStyles = makeStyles((theme) => ({
  root: {  height: '100%', position: 'relative', color: 'white' },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    color: 'white'

  },
  paper: {
    width: '40vw',
    height: "auto",
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'cover',
    backgroundRepeat: 'noRepeat',
    marginTop: '2rem',

    boxShadow: theme.shadows[5],
    padding: theme.spacing(5, 4, 0),
    outline: 'none',
    color: 'white',
    border: '1px solid rgba(247, 202, 24, 1)',
    position: "relative"

  },
  closeButton: {
    backgroundColor: "transparent",
    color: "white",
    border: "none",
    fontSize: "3rem",
    position: "absolute",
    right: '30px',
    top: '20px'
  },
  
  
  dialog: {
    backgroundColor: "#071926",
    color: "white"
  },
 


}));