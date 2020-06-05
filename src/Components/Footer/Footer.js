import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import Logo from "../../assets/gameShopLogo.png"
import Avatar from "@material-ui/core/Avatar"
//import sitter from "../../assets/images/footer/deadpool.png"

function Copyright() {
  return (
    <Typography style={{ color: `rgba(119, 119, 119, 0.671)`, padding: '0rem 0' }} variant="body2" color="textSecondary" align="center">
      {'Copyright © '}

      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  heroContent: {
    color: `rgba(159, 159, 159, 0.671)`,
    padding: theme.spacing(8, 0, 6),
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'

  },
  Links: {
    margin: "0px 0",
    fontSize: '5px',
    flex: '1'
  },
  footer: {
    width: '100%',
    color: `rgba(119, 119, 119, 0.671)`,
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    margin: "10px auto",
    textAlign: 'center'
  },


}));
const Footer = () => {
  const classes = useStyles();

  return (
    <div className="footerBG">
      <CssBaseline />
      <main className="footerWrapper">
        <div id="footer" className={classes.heroContent}>
          <Container>
            <Avatar className={classes.large} alt="Company Logo" src={Logo} />
            <div className={classes.Links}>
              <Grid className="footerTXTWrapper" container spacing={2} justify="center">
                <Grid item>
                  <Link to="/store" variant="h5" color="dark">
                    STORE
                  </Link>
                </Grid>
                <span className="linesBetween">|</span>
                <Grid item>
                  <Link to="/news" variant="h5" color="dark">
                    NEWS
                  </Link>
                </Grid>
                <span className="linesBetween">|</span>
                <Grid item>
                  <Link to="/support" variant="h5" color="secondary">
                    SUPPORT
                  </Link>
                </Grid>
                <span className="linesBetween">|</span>
                <Grid item>
                  <Link to="/platforms" variant="h5" color="secondary">
                    PLATFORMS
                  </Link>
                </Grid>

              </Grid>
            </div>
            <Typography className="pt-3" variant="h6" align="center" color="initial" paragraph>
              Best Online Video Game Store in Germany.
            </Typography>
          </Container>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography className={classes.footer} align="center">
          <Link style={{ color: `rgba(139, 139, 139, 1)`, margin: '2rem 0' }} to="https://www.google.com/">
            GAMESTORE GmbH, ALL RIGHTS RESERVED
      </Link>{' '}
        </Typography>
        <Typography className={classes.footer} variant="subtitle1" align="center" color="textSecondary" component="p">
          All trademarks referenced herein are the properties of their respective owners.
        </Typography>
        <div className="pt-1 pb-3">
          <Copyright />

        </div>
      </footer>
      {/* End footer */}
    </div>
  );
}
export default Footer;