import React from 'react'
import img1 from '../../assets/images/cardImages/starwarsjedi1.jpg'
import img2 from '../../assets/images/cardImages/mortalcombat2.jpg'
import img3 from '../../assets/images/cardImages/codmodernwarfare.jpg'
import img4 from '../../assets/images/cardImages/nba2k1.jpg'

import BestsellerCard from './BestsellerReusableCard'

const testData = [
    { id: 1, gameName: 'Star Wars', img: img1, originalPrice: '33.99', discountPrice: '3.99', percentageDiscount: '10%', corner: "MM" },
    { id: 2, gameName: 'Call of Duty', img: img2, originalPrice: '60.99', discountPrice: '30.99', percentageDiscount: '50%', corner: "MM" },
    { id: 3, gameName: 'NBA 2k', img: img3, originalPrice: '40.99', discountPrice: '10.99', percentageDiscount: '25.2%', corner: "MM" },
    { id: 4, gameName: 'Assassin"s Creed', img: img4, originalPrice: '33.99', discountPrice: '3.99', percentageDiscount: '10%', corner: "MM" },
];


const BestellerWrapper = () => {

    const bestseller = testData.map((data) => {
        return <BestsellerCard
            id={data.id}
            gameName={data.gameName}
            img={data.img}
            originalPrice={data.originalPrice}
            discountPrice={data.discountPrice}
            percentageDiscount={data.percentageDiscount}
            corner={data.corner}
            key={data.id}
        />
    });

    return (
        // for mobile and other responsiveness we need to make this container 100%
        <div style={{ margin: '0 auto', width: '100%' }} > /
            <div className="bestseller_controller" >

                <div className="bestseller_wrapper" >
                    <h2>BESTSELLERS</h2>
                    {bestseller}

                </div>
                {/* <div className="bestseller_wrapper" >
                    <h2>WISHLIST</h2>
                    {bestseller}
                </div> */}

            </div>

        </div>

    );
}

export default BestellerWrapper
