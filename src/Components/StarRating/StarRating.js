import StarRatings from 'react-star-ratings';
import React from 'react';

const StarRating = ({ rating }) => {
    return (
        <StarRatings
            rating={rating}
            starRatedColor="red"
            numberOfStars={5}
            name='rating'
            starDimension='15px'
            starSpacing='5px'
        />
    );
}
export default StarRating