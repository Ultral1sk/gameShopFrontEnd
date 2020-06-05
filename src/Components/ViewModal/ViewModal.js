import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Box from "@material-ui/core/Box"
import ModalCard from '../ModalCard/ModalCard'
import axios from "axios"
import img from '../../assets/backgroundImages/god1.jpg'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const ViewModal = (props) => {

  const data = props.data
  const logos = props.logos
  const admin = props.admin



  //const buyFunction = props.buy
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  // can be an option to pass the data inside the edit buton only when it is clicked.
  const dataCarrier = (data) => props.history.push('admin/editgame', data)

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };
  //console.log("data where id", data._id)
  const deleteCard = () => {
    axios.post("http://localhost:5000/admin/deletegame", { id: data._id }).then((response) => {
      console.log("response", response)
      if (response.data.status === "success") {
        console.log("success", response.status)
        props.history.push("/")
        //console.log(response)
      } else (console.log("errror"))

    }).catch(err => {
      console.log(`error comming from post req deletegame`, err)
    })
  }
  return (
    <div className={classes.root}>
      <Button type="button" onClick={handleOpen} className={classes.viewButton} startIcon={<ShoppingCartIcon />}>
        VIEW
      </Button>
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
            {admin ?
              (<div style={{ width: "100%" }}><Button onClick={() => dataCarrier(data)} className={classes.editButton} variant="contained" color="primary" size="medium" >
                Edit
            </Button>
                <Button variant="contained" className={classes.deleteButton} size="medium" onClick={handleDeleteOpen} >
                  Delete
            </Button></div>) : null}
            <Box display="flex">
              <Box className="leftPartModalElements">
                <h2>{data.name}</h2>


                <Carousel infiniteLoop={true} showIndicators={false}>



                  {data.images.slice(1).map((image, index) => {
                    return (
                      <div className="modalImage" key={index}>
                        <img alt="incomingimg" width="300px" height="100%" src={`http://localhost:5000/gamesimages/${image}`} />
                      </div>)
                  })}




                </Carousel>

                <Box className="pt-1" >
                  <h4 style={{ borderBottom: '1px solid gray' }}>GAME DESCRIPTION</h4>
                  <Box className="description">
                    <Box>
                      {data.description}
                    </Box>
                    <Box className="reviewScore">
                      <Box className="mb-2 " >Reviewscore
                    <span style={{ border: '2px solid red', borderRadius: '50%', padding: '0.5rem', marginLeft: "0.5rem", fontWeight: "600" }}>{data.reviewscore}</span>
                      </Box>
                      <Box>Release date {data.releasedate} </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box mx={3} >
                <ModalCard Buy={props.Buy} calculatedPrice={props.calculatedPrice} logos={logos} data={data} />
                {/* this is t he box where the card will be */}
              </Box>
            </Box>

          </div>
        </Fade>
      </Modal>
      <Dialog
        open={deleteOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.dialog}
        PaperProps={{
          style: {
            backgroundColor: '#848E99',
            boxShadow: 'none',
            color: "black"
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Game will be deleted from database permanently
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={deleteCard} className={classes.deleteConfirmButton} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}



export default ViewModal


const useStyles = makeStyles((theme) => ({
  root: { width: '100%', height: '100%', position: 'relative', color: 'white' },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    color: 'white'

  },
  paper: {
    width: '60vw',
    height: "auto",
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'cover',
    backgroundRepeat: 'noRepeat',
    marginTop: '2rem',

    boxShadow: theme.shadows[5],
    padding: theme.spacing(10, 4, 0),
    outline: 'none',
    color: 'white',
    border: '1px solid rgba(247, 202, 24, 1)',
    position: "relative"

  },
  viewButton: {
    color: "black", backgroundColor: "rgba(247, 202, 24, 1)", fontWeight: "bold", zIndex: 10, position: "absolute", top: "40%", left: "38%", margin: "0 5px 5px 0",
    "&:hover": {
      backgroundColor: "rgba(247, 202, 24, 1)"
    }
  },
  deleteButton: {
    backgroundColor: "#9E1745",
    color: "white",
    width: "50%",
    marginBottom: "20px"


  },
  editButton: {
    backgroundColor: "#1A679E",
    color: "white",
    width: "50%",
    marginBottom: "20px"
  },
  dialog: {
    backgroundColor: "#071926",
    color: "white"
  },
  deleteConfirmButton: {
    backgroundColor: "#9E1745",
    color: "white"
  },
  closeButton: {
    backgroundColor: "black",
    color: "white",
    border: "none",
    fontSize: "3rem",
    position: "absolute",
    right: 0,
    top: 0
  }


}));