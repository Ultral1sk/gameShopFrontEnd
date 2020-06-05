import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightRegular,
        color: 'white',
    },
    expansionHeader: {
        backgroundColor: 'black',
        'borderBottom': '3px solid red',
    },
    expandIcon: { color: 'white' }
}));
const AccountFAskedQuestions = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="container pt-3">
                <div className="mt-5 pt-5 pb-2">
                    <h2 className="text-white text-center pt-3 pb-3">Frequently Asked Questions</h2>
                </div>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className={classes.expansionHeader}
                    >
                        <Typography className={classes.heading}>How do refunds work on the GameShop?</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="detailsBG">
                        <Typography className="text-white">
                            All games are eligible for refund within 14 days of purchase for any reason, as long as you’ve had the game running for less than 2 hours. You will not be eligible for refunds for games from which you have been banned or for which you have otherwise violated the Terms of Service. Learn more about our refund policy here.

                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        className={classes.expansionHeader}
                    >
                        <Typography className={classes.heading}>How do I contact support?</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="detailsBG">
                        <Typography className="text-white">
                            You can contact our support team here. We also recommend browsing our support center articles, which may help answer questions or resolve issues.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        className={classes.expansionHeader}
                    >
                        <Typography className={classes.heading}>Is my GameShop account secure?
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="detailsBG">
                        <Typography className="text-white">
                            GameShop account system has never been compromised. However, specific individual GameShop accounts have been compromised by hackers using lists of email addresses and passwords leaked from other sites which have been compromised.                         </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        className={classes.expansionHeader}
                    >
                        <Typography className={classes.heading}>When will I be charged for orders on the GameShop?
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="detailsBG">
                        <Typography className="text-white">
                            All purchases made on the GameShop are charged immediately when the order is placed, regardless of payment method used or product purchased.                         </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        className={classes.expansionHeader}
                    >
                        <Typography className={classes.heading}>What languages does the GameShop support?
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="detailsBG">
                        <Typography className="text-white">
                            The GameShop currently supports just English for now. In-game language support varies per game, as provided by the developer; check each game’s store page for language availability.                                          </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        className={classes.expansionHeader}
                    >
                        <Typography className={classes.heading}>Which payment methods are supported?
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="detailsBG">
                        <Typography className="text-white">
                            The GameShop supports credit card payment method.                         </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        className={classes.expansionHeader}
                    >
                        <Typography className={classes.heading}>Is the online store optimized for mobile devices? </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="detailsBG">
                        <Typography className="text-white">
                            You can access and purchase from the PlayStation Store from all major mobile browsers. Go to https://store.playstation.com/.                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        className={classes.expansionHeader}
                    >
                        <Typography className={classes.heading}>Invoice

                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="detailsBG">
                        <Typography className="text-white">
                            You will receive your invoice via e-mail together with the ticket (as PDF attachment).
                            If you would like to request a correction of your invoice, please proceed as follows: send us the original invoice by e-mail to gameshopJB@gmx.de . Please also provide us with the new address and any other information to be corrected. We will correct your invoice accordingly and send you the new invoice by e-mail.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        </div>

    )
}

export default AccountFAskedQuestions



