import React, { useState } from 'react';
import "./newspageCardVideoSmallScreens.scss"
const NewsCardSmall = () => {
  const [videosmallUri, setSmallVideoUri] = useState("fifa")
  const [smallkey, setsmallKey] = useState(1)

  function Clip({ uris }) {
    switch (smallkey) {
      case 1:
        setSmallVideoUri("fifa")
        break;
      case 2:
        setSmallVideoUri("digimon")
        break;
      case 3:
        setSmallVideoUri("cod")
        break;
      case 4:
        setSmallVideoUri("final")
        break;
      case 5:
        setSmallVideoUri("fortnite")
        break;

      default:
        break;
    }
    return (
      <video id="smallvideoPlayer" key={smallkey} controls autoPlay muted>
        <source
          src={`http://localhost:3000/newsvideos/${uris}.mp4`} type="video/mp4" />
      </video>
    );
  }
  const Sequence = (number) => {
    const newkey = smallkey + number
    setsmallKey(newkey)
    if (newkey === 6) {
      setsmallKey(1)
    } else if (newkey === 0) {
      setsmallKey(5)
    }
  }
  return (<div className="smallVideoCardPapa">
    <Clip uris={videosmallUri} />
    <div id="carouselExampleIndicators" data-interval="false" class="carousel" data-ride="carousel">

      <div className="carousel-inner">
        <div className="carousel-item active" id="fifa" style={{ height: "400px", position: "relative" }} >
          <img className="d-block w-100 h-100" src="http://localhost:3000/newsimages/fifa.jpg" alt="First slide" />

          <div className="carouselTexts"><h3 >FIFA 2020</h3>
            <h5>Future Stars Top Three Players in Real Life</h5></div>
        </div>

        <div className="carousel-item" id="digimon" style={{ height: "400px" }}>
          <img className="d-block w-100 h-100" src="http://localhost:3000/newsimages/digimon.jpg" alt="Second slide" />
          <div className="carouselTexts">
            <h3 >DIGIMON ADVENTURE</h3>
            <h5>Last Evolution Kizuna" Delivers Maturity and Heart</h5>
          </div>
        </div>
        <div className="carousel-item " style={{ height: "400px" }} >
          <img className="d-block w-100 h-100 " src="http://localhost:3000/newsimages/cod.jpg" alt="Third slide" />
          <div className="carouselTexts">
            <h3 >CALL OF DUTY WARZONE</h3>
            <h5>Update will match suspected cheaters together</h5>

          </div>
        </div>
        <div className="carousel-item" style={{ height: "400px" }} >
          <img className="d-block w-100 h-100 " src="http://localhost:3000/newsimages/final.jpg" alt="Fourth slide" />
          <div className="carouselTexts">
            <h3 >FINAL FANTASY 7</h3>
            <h5>Best weapon builds for Cloud Strife</h5>

          </div>
        </div>
        <div className="carousel-item" style={{ height: "400px" }} >
          <img className="d-block w-100 h-100 " src="http://localhost:3000/newsimages/fortnite.jpg" alt="Fifth slide" />
          <div className="carouselTexts">
            <h3 >FORTNITE V12.41 PATCH NOTES</h3>
            <h5>What's changed?</h5>

          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" onClick={() => Sequence(-1)}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={() => Sequence(1)}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div></div>
  );
}
export default NewsCardSmall