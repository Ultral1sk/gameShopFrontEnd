import React, { useState } from 'react'
import NewsLCard from './NewsLCard'
import data from '../../data'
import Slide from 'react-reveal/Slide';

const NewsLSideCards = () => {
  const [selectCard, setSelectCard] = useState(data.news[0] || null)

  // newsTopic: "Call of Duty: Modern Warfare 2 has been remastered and is out today"
  // date: "March 31, 2020"
  // image: "/static/media/callofdutymodernwarfare.6d10fec3.jpg"
  // details: "After years of speculation, a remastered version of Call of Duty: Modern Warfare 2’s single-player campaign is finally here, bringing an enhanced version of one of the most iconic FPS games of the late 2000s onto modern hardware."
  // writer: "Taylor Lyles"
  // url: "https://www.theverge.com/2020/3/31/21201735/call

  const selectedCard = (id) => {

    const filteredData = data.news.filter(filteredCard => filteredCard.id === id)
    // console.log(`borabitch`,filteredData[0]);

    setSelectCard(filteredData[0])
  }

  const newsCard = data.news.map((newCard, i) => {
    return (<div key={i}>
      <section onClick={() => selectedCard(i)} key={i} className="side_card_inner_wrapper" tabIndex={i}>
        <div className="img_wrapper" >
          <img src={newCard.image} alt={newCard.newsTopic} /> {/* data images comming here as props */}
        </div>
        <div className="side_card_txt_wrapper">
          <div className="pt-2 lefetCardtitleStyles" >{newCard.newsTopic}</div> {/* data.title comming here as props */}
          <div className="side_card_description">{newCard.details}</div>
          {/* data description comming here as props */}
          <div className="d-flex justify-content-end pr-3">

            <time> {newCard.date}</time>
            {/* data.releasedate comming here as props */}
          </div>
        </div>
      </section>


    </div>)
  })


  return (
    <>
      <div className="side_card_main_wrapper">
        <div className="latest_news_outer_wrapper">
          <h2 className="latest_news_wrapper " style={{ color: 'white', borderLeft: '5px solid red', padding: '2rem 0rem' }}>
            <span className="pl-4">Latest</span> <br />

            <span style={{ color: 'gray', paddingLeft: '1.5rem' }}> News</span>
          </h2>
        </div>

        <div className="side_card_wrapper" >

          <div className="side_card_outer_wrapper" >
            <Slide left delay={500} >
              {newsCard}
            </Slide>
          </div>
          <Slide right delay={500}>
            {
              selectCard ? <div className="newsCardWrapper"><NewsLCard key={selectCard.id} data={selectCard} /></div> : <div></div>
            }

          </Slide>
        </div>
      </div>
    </>
  )
}

export default NewsLSideCards



