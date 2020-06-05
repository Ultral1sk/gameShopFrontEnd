import React from 'react'
import NewsPageCard from "../../Components/newspageCardVideoImages/NewspageCardVideoImages"
import NewsCardSmall from "../../Components/newspageCardVideoSmallScreens/newspageCardVideoSmallScreens"
import { Container } from 'reactstrap'
import NewsCardPageDetails from '../../Components/NewsCardPageDetails/NewsCardPageDetails'
import "./NewsPage.styles.scss"
import brush from "../../assets/backgroundImages/brush.png"
function NewsPage() {

    return (
        <div className="newspageWrapper pt-5">
            <div className="newsPageBg">
                <div className="titleWrapper">
                    <img className="brushImage" src={brush} alt="" />
                    <div className="newspageTitles">Game Highlights</div>
                </div>
                <Container >
                    <NewsPageCard />
                    <NewsCardSmall />
                </Container>
                <div className="titleWrapper">
                    <img className="brushImage" src={brush} alt="" />
                    <div className="newspageTitles">Latest News</div>
                </div>
                <Container>
                    <NewsCardPageDetails />
                </Container>
            </div>
        </div>
    )
}

export default NewsPage
