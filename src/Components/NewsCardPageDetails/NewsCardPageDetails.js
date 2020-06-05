import React from 'react'
import data from '../../data';
import "./NewsCardPageDetails.scss"
const NewsCardPageDetails = () => {
    // id: 0
    // newsTopic: "Call of Duty: Modern Warfare 2 has been remastered and is out today"
    // date: "March 31, 2020"
    // image: "/static/media/callofdutymodernwarfare.6d10fec3.jpg"
    // details: "After years of speculation, a remastered version of Call of Duty: Modern Warfare 2’s single-player campaign is finally here, bringing an enhanced version of one of the most iconic FPS games of the late 2000s onto modern hardware."
    // writer: "Taylor Lyles"
    // url: "https://www.theverge.com/2020/3/31/21201735/call-of-duty-mo

    const cardDetails = data.news.map(news => {
        // console.log(news);
        return (
            <div key={news.id} id={news.id} className="mb-5 newscardsWrapper" >
                <hr style={{ backgroundColor: 'dark-gray' }} />

                <h2 >{news.newsTopic}</h2>
                <div style={{ paddingLeft: "17px" }}>
                    <small className="mt-2 dotsbefore"><span>&#8226;</span>  {news.date}</small> <br />
                    <small><span>&#8226;</span>  By {news.writer}</small>
                </div>

                <article>
                    <div className="d-flex pt-3">
                        <div >
                            <img className="newscardsImage" src={news.image} alt="" />
                        </div>
                        <div className="pl-4">
                            {news.details}

                        </div>
                    </div>
                </article>
                <div style={{ textAlign: 'end', paddingRight: '2rem' }}>
                    <a style={{ color: 'rgb(252, 52, 52)' }} href={news.url} rel="noopener noreferrer" target="_blank">
                        Read more
                    </a>
                </div>

            </div>
        )
    })

    return (
        <div>

            {cardDetails}


        </div>
    )
}

export default NewsCardPageDetails
