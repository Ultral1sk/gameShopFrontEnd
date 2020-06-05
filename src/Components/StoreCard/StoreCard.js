import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Box from "@material-ui/core/Box"
import psLogo from "../../assets/images/logos/PS.png"
import xboxLogo from "../../assets/images/logos/xbox.png"
import windowsLogo from "../../assets/images/logos/windows.png"
import nintendoLogo from "../../assets/images/logos/nintendo.png"
import ViewModal from '../ViewModal/ViewModal';
import { clearCartItem, addCartItem, removeCartItem } from "../../Redux/cart/cartActions"
import { connect } from "react-redux"
const StoreCard = ({ gamesData, history, clearItem, addItem, removeItem, admin }) => {

    //console.log('gamesdata store card', gamesData);
    //console.log("admin value in store card", admin)
    const classes = makeStyles({
        root: {
            maxWidth: 345, height: 450, background: `url(http://localhost:5000/gamesimages/${gamesData.images[0]})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", position: "relative", margin: '0rem 1rem',
        },
        storeCard: {
            background: "linear-gradient(180deg, rgba(13,13,13,0) 45%, rgba(0,0,0,0.8) 55%, rgba(0,0,0,1) 100%);", backgroundSize: "contain", backgroundRepeat: "no-repeat", height: 450, display: "flex", flexDirection: "column", justifyContent: "flex-end",
        },
        cardContent: {
            color: "#e0e0e0"
        },
        avatar: {
            width: "30px", height: "30px", marginRight: "10px"
        },
        buttonContainer: {
            width: "100%", justifyContent: "space-between"
        },
        buyButton: {
            color: "black", backgroundColor: "rgba(247, 202, 24, 1)", fontWeight: "bold", zIndex: 10, margin: "0 5px 5px 0", padding: "1rem 0.5rem",
            "&:hover": {
                backgroundColor: "rgba(247, 202, 24, 1)"
            }
        },
        onHover: {
            opacity: 0, zIndex: 8, top: 0, left: 0, height: 450, width: "100%", position: "absolute", transition: "opacity .5s ease-in-out",
            "&:hover": {
                backgroundColor: "rgba(0,0,0,0.8)", opacity: 1
            }
        },

        boxDiscount: {
            backgroundColor: "#f44336", fontWeight: "bold", color: "white", fontSize: "1.1rem"
        }

    })();
    // console.log(`propshistory  comming from store card`, history)
    const logos = gamesData.platform.map(

        (logoNAme, index) => {
            let Logo = "";
            switch (logoNAme) {
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
                <img src={Logo} alt="" key={index} style={{ width: "50px", height: "50px" }} />)
        }
    )

    const calculatedPrice = ((gamesData.price - (gamesData.price * gamesData.discount / 100)).toFixed(2))


    const Buy = () => {
        console.log('Buy Function in store card', gamesData);
        addItem(gamesData)

    }
    return (
        <Card className={classes.root}>
            <div className={classes.onHover} >
                <ViewModal history={history} Buy={Buy} calculatedPrice={calculatedPrice} logos={logos} data={gamesData} admin={admin} key={gamesData._id} />
                {/* this should be where the buy button is right now is here because of styling purpouses */}
            </div>
            <CardActionArea className={classes.storeCard}>
                <CardContent className={classes.cardContent} >
                    <Typography gutterBottom variant="h5" component="h2">
                        {gamesData.name}
                    </Typography>

                </CardContent>
                <div className="logos">
                    {logos}</div>

                <CardActions className={classes.buttonContainer}>
                    {gamesData.discount ?
                        <Box p={2} className={classes.boxDiscount}>
                            {gamesData.discount}%
                    </Box> : null}
                    <div className="boxPrices">
                        {gamesData.discount ? (<>
                            <h4 style={{ color: "white" }}><del>€{gamesData.price}</del></h4>
                            <h2 style={{ color: "white" }}>€{calculatedPrice}</h2></>) : <h2 style={{ color: "white" }}>€{gamesData.price}</h2>}
                    </div>
                    <div variant="contained" className={classes.buyButton} startIcon={<ShoppingCartIcon />} onClick={Buy}>
                        ADD TO CART
                    </div>
                </CardActions>
            </CardActionArea>

        </Card>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearCartItem(item)),
    addItem: item => dispatch(addCartItem(item)),
    removeItem: item => dispatch(removeCartItem(item))


});
export default connect(null, mapDispatchToProps)(StoreCard);