import React from 'react'
import AccountFAskedQuestions from '../../Components/AccountFAskedQuestions/AccountFAskedQuestions'
import AccountContactFormPage from '../../Components/AccountContactFormPage/AccountContactFormPage'
import particles1 from '../../assets/particles1.jpg'

const SupportPage = () => {
    return (
        <div style={{backgroundImage : `url(${particles1})`}}>
       
            <AccountFAskedQuestions />
            <AccountContactFormPage />

        </div>
    )
}

export default SupportPage
