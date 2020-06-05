import React from 'react'
import { useState } from 'react'
import { Row, Col } from 'reactstrap';
import "./NewspageCardVideoImages.scss"

function NewsPage() {
    const [videoUri, setVideoUri] = useState("fifa")
    const [key, setKey] = useState(1)
    const videoChanger = (itemkey, itemUri) => {
        setVideoUri(itemUri)
        setKey(itemkey)
    }

    function Clip({ uri }) {
        return (
            <video id="videoPlayer" key={key} controls autoPlay muted>
                <source
                    src={`http://localhost:3000/newsvideos/${uri}.mp4`} type="video/mp4" />
            </video>
        );
    }
    return (
        <div className="newsCardContainer">
            <Row className="newsCardWrapper">
                <Row className="firstrow">
                    <Col xs="12" md="8" className="newsvideo">
                        <Clip uri={videoUri} />
                    </Col>
                    <Col xs="12" md="4" className="videoRightImagesCol">
                        <div className="videoRightImagesWrapper">
                            <img id="cod" className="rightImages" alt="fifa" src={`http://localhost:3000/newsimages/fifa.jpg`} onClick={() => videoChanger(1, "fifa")}></img>
                            <img className="rightImages" alt="digimon" src={`http://localhost:3000/newsimages/digimon.jpg`} onClick={() => videoChanger(2, "digimon")}></img>
                        </div>
                    </Col>
                </Row>
                <Row className="secondrow">
                    <Col xs="12" md="8" className="secondrow2ImagesWrapper" >
                        <Col xs="12" md="6" style={{ paddingRight: 0 }}> <img className="secondrow2Images" alt="call of duty" src={`http://localhost:3000/newsimages/cod.jpg`} onClick={() => videoChanger(3, "cod")}></img></Col>
                        <Col xs="12" md="6" p-0="true"> <img className="secondrow2Images" alt="final fantasy" src={`http://localhost:3000/newsimages/final.jpg`} onClick={() => videoChanger(4, "final")}></img></Col>
                    </Col>
                    <Col xs="12" md="4" className="secondrowImagesWrapper"><img className="secondrowImages" alt="fortnite" src={`http://localhost:3000/newsimages/fortnite.jpg`} onClick={() => videoChanger(5, "fortnite")}></img></Col>
                </Row>
            </Row>
        </div>

    )
}

export default NewsPage
