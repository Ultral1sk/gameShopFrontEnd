import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles({
    root: {
        maxWidth: 545,

        background: 'linear-gradient(180deg, rgba(75,75,75,0.5) 0%, rgba(164,164,164,0.5138830532212884) 60%, rgba(153,153,153,0) 100%);',
        marginTop: '4rem',
        height: 750,

    },

    gameInfoRoot: { width: 355, height: 400, marginTop: '3.6rem' },
    gameInfoTextWrapper: { padding: 0, margin: 0, height: '100%' },
    gameInfoTitle: { width: '7vw', margin: '10px 20px', borderRight: '1px solid grey' },
    gameInfoData: { margin: '10px 20px', },
    media: {
        height: 540,


    },
    buttonContainer: {
        width: "100%",
        display: 'flex',
        justifyContent: 'space-between',

    },
    buyButton: {
        color: "black", width: '100%', backgroundColor: "rgba(247, 202, 24, 1)", fontWeight: "bold", zIndex: 10, margin: "0 5px 5px 0", padding: "1rem 0.5rem", textAlign: "center",
        "&:hover": {
            backgroundColor: `rgba(247, 202, 24, 1)`,

        }
    },
    boxDiscount: {
        backgroundColor: "#f44336", fontWeight: "bold", color: "white", fontSize: "1.1rem"
    },
    borderContainer: { borderRight: '1px solid gray', width: '1px', margin: '0 15px' }

});

export default function MediaCard(props) {

    //console.log(`Data comming to modal card`, props)
    const data = props.data
    const logos = props.logos
    const calculatedPrice = props.calculatedPrice
    const languages = data.language
    const genres = data.genre
    const classes = useStyles();

    //reusable looper
    const dataLooper = (arr) => arr.map((dataArray, key) => <Box key={key} className="pr-1 pl-1" >{dataArray.charAt(0).toUpperCase() + dataArray.slice(1)}</Box>)



    return (<div className="d-flex-column justify-content-between align-items-center h-100">
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`http://localhost:5000/gamesimages/${data.images[0]}`}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <div className="d-flex justify-content-between">
                        <Typography className="pt-1 text-white" color="textSecondary" gutterBottom variant="h5" component="h3">
                            Platform
                        </Typography>
                        <Typography className="pr-0" color="textSecondary" gutterBottom variant="h5" component="h4">
                            {logos}
                        </Typography>
                    </div>


                    <CardActions className={classes.buttonContainer}>
                        {data.discount ?
                            <Box p={2} className={classes.boxDiscount}>
                                {data.discount}%
                    </Box> : null}
                        <div className="boxPrices ml-5">
                            {data.discount ? (
                                <>
                                    <h4 style={{ color: "white" }}><del>€{data.price}</del></h4>
                                    <h2 style={{ color: "white" }}>€{calculatedPrice}</h2>
                                </>) : <h2 style={{ color: "white", }}>€{data.price}</h2>}
                        </div>


                    </CardActions>
                    <div variant="contained" className={classes.buyButton} startIcon={<ShoppingCartIcon />} onClick={props.Buy}>
                        ADD TO CART
                    </div>
                </CardContent>
            </CardActionArea>

        </Card>

        <Box className={classes.gameInfoRoot} variant="outlined">

            <CardContent className={classes.gameInfoTextWrapper}>
                <Box>
                    <h4 style={{ borderBottom: '1px solid gray' }}>GAME INFORMATION</h4>
                </Box>
                <table className="table text-white">

                    <tbody>

                        <tr>
                            <td className="mr-2  borderOFF">Publisher</td>
                            <th style={{ borderRight: '1px solid lightgray', margin: '0.5rem 0' }} className="borderButtonOFF" scope="row"></th>
                            <td className="mr-2  borderOFF">{data.publisher.toUpperCase()}</td>
                        </tr>
                        <tr>
                            <td className="mr-2  borderOFF">Game Website</td>
                            <th style={{ borderRight: '1px solid lightgray', }} className="borderButtonOFF" scope="row"></th>
                            <td className="mr-2   borderOFF wrappedTXT">{data.gamewebsite.toLowerCase()}</td>
                        </tr>
                        <tr>
                            <td className="mr-2   borderOFF">Age Limit</td>
                            <th style={{ height: '5px', borderRight: '1px solid lightgray', }} className="borderButtonOFF" scope="row"></th>
                            <td className="mr-2   borderOFF wrappedTXT">{data.agelimit}</td>
                        </tr>
                        <tr>
                            <td className="mr-2   borderOFF">Genres</td>
                            <th style={{ height: '5px', borderRight: '1px solid lightgray', }} className="borderButtonOFF" scope="row"></th>
                            <td className="mr-5   borderOFF wrappedTXT">{dataLooper(genres)}</td>
                        </tr>
                        <tr>
                            <td className="mr-2   borderOFF">Languages</td>
                            <th style={{ height: '5px', borderRight: '1px solid lightgray', }} className="borderButtonOFF" scope="row"></th>
                            <td className="mr-2  borderOFF wrappedTXT d-flex flex-wrap">{dataLooper(languages)}</td>
                        </tr>

                    </tbody>
                </table>
            </CardContent>

        </Box>

    </div>
    );
}




