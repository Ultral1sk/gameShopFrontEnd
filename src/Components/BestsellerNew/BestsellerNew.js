import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Coverflow from 'react-coverflow';
import "./BestsellerNew.scss"
import { makeStyles } from '@material-ui/core/styles';
import { Row, Col } from 'reactstrap';
import ProgressCircle from "../ProgressCircle/ProgressCircle"
import StarRating from '../StarRating/StarRating';
import psLogo from "../../assets/images/logos/PS.png"
import xboxLogo from "../../assets/images/logos/xbox.png"
import windowsLogo from "../../assets/images/logos/windows.png"
import nintendoLogo from "../../assets/images/logos/nintendo.png"
import FastForwardIcon from '@material-ui/icons/FastForward';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  arrowleft: {
    height: "100%",
    width: "50px",
    backgroundColor: "white",
    color: "red",
    position: "absolute",
    top: "0",
    left: "0"
  },
  arrowright: {
    height: "100%",
    width: "50px",
    backgroundColor: "white",
    color: "red",
    position: "absolute",
    top: "0",
    right: "0"
  },
  seeMoreButton: {
    color: "white", backgroundColor: "red", fontWeight: "bold", zIndex: 10, margin: "0 5px 5px 0", marginLeft: "2%",
    "&:hover": {
      backgroundColor: "#E82200"
    }
  }
}));
const bestsellerState = [{ filt: "starwars", name: "Star Wars Jedi", platform: "PS4", description: "Star Wars Jedi: Fallen Order is an action-adventure game developed by Respawn Entertainment and published by Electronic Arts. It was released on November 15, 2019.", price: 40, discount: 25, rating: 4.1 },
{ filt: "final", name: "Final Fantasy VII Remake", platform: "PS4", description: "Final Fantasy VII Remake is an action role-playing game developed and published by Square Enix, released for PlayStation 4 on April 10, 2020.", price: 64.99, discount: 10, rating: 4.5 },
{ filt: "fifa", name: "FIFA 2020", platform: "XBOX", description: "FIFA 20 is a football simulation video game published by Electronic Arts as part of the FIFA series. It is the 27th installment in the FIFA series, and was released on 27 September 2019.", price: 54.99, discount: 20, rating: 4 },
{ filt: "gta", name: "Grand Theft Auto V", platform: "PS4", description: "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the first main entry in the Grand Theft Auto series since 2008's Grand Theft Auto IV.", price: 40, discount: 50, rating: 4.5 },
{ filt: "kingdom", name: "Kingdom Hearts III", platform: "XBOX", description: "Kingdom Hearts III is a 2019 action role-playing game developed and published by Square Enix for the PlayStation 4 and Xbox One. ", price: 29.99, discount: 10, rating: 4.1 },
{ filt: "nba", name: "NBA 2K20", platform: "NINTENDO", description: "NBA 2K20 is a basketball simulation video game published by 2K Sports. It is the 21st installment in the NBA 2K franchise and the successor to NBA 2K19", price: 28.99, discount: 10, rating: 3.5 }]
const BestsellerNew = () => {
  const [state, setState] = useState({ active: 0 })
  const [bestsellercurrent, setBestsellercurrent] = useState({ name: "Star Wars Jedi:Fallen Order", platform: "PS4", description: "Star Wars Jedi: Fallen Order is an action-adventure game developed by Respawn Entertainment and published by Electronic Arts. It was released on November 15, 2019.", price: 40, discount: 25, rating: 4.1 })
  const classes = useStyles();
  const history = useHistory()
  const imagesClick = (e) => {
    //console.log('image clicked', e.target.name);

    const result = bestsellerState.filter((item) => {
      return (item.filt === e.target.name)
    })
    setBestsellercurrent(result[0])
  }
  /*          const _handleClick=()=> {
             num+=1;
             setState({
               active: num
             });
           }
   */
  const logoDecide = (logoName, index) => {
    let Logo = "";
    switch (logoName) {
      case "PS4":
        Logo = psLogo;
        break;
      case "XBOX":
        Logo = xboxLogo;
        break;
      case "WIN":
        Logo = windowsLogo;
        break;

      case "NINTENDO":
        Logo = nintendoLogo;
        break;

      default:
        Logo = "";
    }
    return (
      <img src={Logo} alt="" key={index} style={{ width: "60px", height: "60px" }} />)
  }
  const SeeMore = () => {

    history.push("/store")
  }
  //const calculatedPrice = ((bestsellercurrent.price - (bestsellercurrent.price * bestsellercurrent.discount / 100)).toFixed(2))

  return (
    <Row className="bestSellerWrapper">
      <Col xs="12" md="4" className="descriptionPart">
        <div className="bestgames"><h2>Bestseller</h2><h2 style={{ color: "gray" }}>Games</h2>
        </div>
        <div className="descriptionPartUpper">
          <div className="ratings">
            <ProgressCircle value={bestsellercurrent.rating * 20} />
            <div className="starRating">
              <h5>Game Rating</h5>
              <StarRating rating={bestsellercurrent.rating} style={{ width: "100px" }} />
            </div>
          </div>

          <div className="platformsWrapper">
            {logoDecide(bestsellercurrent.platform)}
          </div>
        </div>

        <div className="titleDescription">
          <h2>{bestsellercurrent.name}</h2>
          <h5>{bestsellercurrent.description}</h5>
        </div>
        <div className="priceAndBuy">
          <Button variant="contained" className={classes.seeMoreButton} startIcon={<FastForwardIcon />} onClick={SeeMore}>
            SEE MORE
        </Button>
          {/*  <div className="boxPrices">
            {bestsellercurrent.discount ? (<>
              <h4 style={{ color: "white" }}><del>€{bestsellercurrent.price}</del></h4>
              <h2 style={{ color: "white" }}>€{calculatedPrice}</h2></>) : <h2 style={{ color: "white" }}>€{bestsellercurrent.price}</h2>}
          </div> */}
        </div>
      </Col>
      <Col md="1"></Col>
      <Col xs="10" md="6">          <div className="carouselFlowWrap">
        <Coverflow
          width={960}
          height={400}
          displayQuantityOfSide={1}
          navigation={false}
          enableHeading={false}
          active={state.active}
          className="carouselFlow"

        >
          <img src='http://localhost:3000/bestsellerImages/fifa.png' name="fifa" alt='FIFA' onClick={imagesClick} />
          <img src='http://localhost:3000/bestsellerImages/gta.jpg' name="gta" alt='GTA' onClick={imagesClick} />
          <img src='http://localhost:3000/bestsellerImages/nba2k.jpg' name="nba" alt='NBA' onClick={imagesClick} />
          <img src='http://localhost:3000/bestsellerImages/starwars.jpg' name="starwars" alt='Starwars' onClick={imagesClick} />
          <img src='http://localhost:3000/bestsellerImages/final.jpg' name="final" alt='Final Fantasy' onClick={imagesClick} />
          <img src='http://localhost:3000/bestsellerImages/kingdom.jpg' name="kingdom" alt='Kingdom Game' onClick={imagesClick} />
        </Coverflow>
      </div>
      </Col>
    </Row>
  );
}


export default BestsellerNew
