import React from 'react'
import "./Loading.scss"
import LoadingImage from "../../assets/pacmanLoading.svg"

const Loading = () => {
    return (
        <div className="LoadingWrapper">
            <img src={LoadingImage} alt="" />
        </div>
    )
}

export default Loading
