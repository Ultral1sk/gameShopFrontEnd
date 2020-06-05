import React, { useState } from 'react'
import makeCarousel from 'react-reveal/makeCarousel';
// we'll need the Slide component for sliding animations
// but you can use any other effect
import Fade from 'react-reveal/Fade';
// we'll use styled components for this tutorial
// but you can use any other styling options ( like plain old css )
import styled, { css } from 'styled-components';
import acreedImg from '../../assets/images/headerBackgroundImg/asassins.jpg'; 
import cod from '../../assets/images/headerBackgroundImg/cod.jpg';
import doom from '../../assets/images/headerBackgroundImg/doom2.jpg'; 
import avengers1 from '../../assets/images/headerBackgroundImg/avengers.png';
import csgo from '../../assets/images/headerBackgroundImg/csgo1.png';
import owatch from '../../assets/images/headerBackgroundImg/overwatch.png';


import PublicIcon from '@material-ui/icons/Public';

import { NavLink } from 'reactstrap'

const data = [
    { id: 1,  image: acreedImg, title: "Assassin's Creed", releaseDate: `October 5, 2018 `, website : 'https://assassinscreed.ubisoft.com/game/en-us/home', description: `Assassin's Creed are set in an open world and presented from the third-person perspective where the protagonists take down targets using their combat and stealth skills with the exploitation of the environment. Players have freedom to explore the historical settings as they finish main and side quests.`, }, // eslint-disable-next-line max-len 
    { id: 2,  image: cod ,      title: "Call of Duty",     releaseDate: `October 25, 2019`, website : 'https://www.callofduty.com/home',                    description : 'allowed players to advance through World War II in a series of campaigns or to battle it out against human opponents in its multiplayer mode.'},
    { id: 3,  image: doom ,     title: 'DOOM',             releaseDate: `May 13, 2016`,     website:  'https://bethesda.net/en/game/doom',                  description : `Doom takes place during the year 2162 in a research facility on Mars owned by the Union Aerospace Corporation, run by Dr. ... The facility is overrun by demons after one of Hayden's researchers, Olivia Pierce, makes a pact with them and uses the Tower to open a portal to Hell.`},
    { id: 4,  image: avengers1, title: 'Avengers',         releaseDate: `September 4, 2020`,website:  'https://avengers.square-enix-games.com/en-us/',      description : `The game's main storyline takes place five years after A-Day, a celebratory day for the Avengers wherein a tragedy resulted in death and destruction, and the Avengers were blamed. The team is forced to reassemble to save the world from peril.`  },
    { id: 5,  image: csgo,      title: 'Global Offensive', releaseDate: `August 21, 2012 `, website:  'https://blog.counter-strike.net/',                   description : `Two teams compete in multiple rounds of objective-based game modes with the goal of winning enough rounds to win the match. CS:GO features new maps, characters, and weapons `},
    { id: 6,  image: owatch,    title: 'Overwatch',        releaseDate: `May 24, 2016    `, website:  'https://playoverwatch.com/en-us/',                   description : `Image result for overwatch game purpose Players on a team work together to secure and defend control points on a map or escort a payload across the map in a limited amount of time. Players gain cosmetic rewards that do not affect gameplay, such as character skins and victory poses`},
];



const width = '100%', height = '100vh';
const Container = styled.div`
  
  position: relative;
  overflow: hidden;
  width: ${width};
  height: ${height};

`;
const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  color : white;
  top: 10%;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`right: 5%;` : css`left:5% ;`}
`;

const CarouselUI = ({ position, handleClick, children }) => {
    const [toggleLeft, setToggleLeft] = useState(false)
    const [toggleRight, setToggleRight] = useState(false)
    const toggleCheckerLeft = () => {

        setToggleLeft(true)
        setToggleRight(false)
    }

    const toggleCheckerRight = () => {
        setToggleLeft(false)
        setToggleRight(true)
    }
    return (
        <Container>
            {children}
            <Arrow onClick={handleClick} data-position={position - 1}>
                <svg onClick={toggleCheckerLeft} id={toggleLeft ? "on" : 'off'} className="bi bi-chevron-compact-left" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 01.223.67L6.56 8l2.888 5.776a.5.5 0 11-.894.448l-3-6a.5.5 0 010-.448l3-6a.5.5 0 01.67-.223z" clipRule="evenodd" />
                </svg>
            </Arrow>
            <Arrow right onClick={handleClick} data-position={position + 1}>
                <svg onClick={toggleCheckerRight} id={toggleRight ? "on" : "off"} className="bi bi-chevron-compact-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 01.671.223l3 6a.5.5 0 010 .448l-3 6a.5.5 0 11-.894-.448L9.44 8 6.553 2.224a.5.5 0 01.223-.671z" clipRule="evenodd" />
                </svg>

            </Arrow>
        </Container>
    )
};


const Carousel = makeCarousel(CarouselUI);

const NewCarousel = () => {

    const dataInfoDisplay = data.map(({ id, title,  image, description, website, releaseDate }, i) => (

        <Fade duration={3000} clear key={id}>
            <div key={id}>
            {/* carousel backgroudn images and the rest of the data inside */}
                <div style={{
                    background: `url(${image}) bottom   no-repeat`,
                    backgroundSize: '100% 100%',
                    width: '100%',
                    height: '100vh',
                    zIndex: -999
                }}
                >
                    <div className="gradient"></div>
                    <div className="text_wrapper text-light">
                        <div className="text_inner_wrapper_controller">
                            <div className="subtitle_time_wrapper">
                                <li className="pl-1 pt-2" style={{ listStyleType: 'none' }}> {releaseDate}</li>
                            </div>
                            <h1 className="text-light pt-3 pb-3" >{title}</h1>
                            <div>{description}</div>
                            <NavLink href="/" className="p-0 pt-3 text-light">
                                <PublicIcon />
                                <span >{website}</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    ))

    return (
        <Carousel>
            {dataInfoDisplay}
        </Carousel>
    )
}

export default NewCarousel


