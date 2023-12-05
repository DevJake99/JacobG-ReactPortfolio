import './about.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faReact, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders'


function About() {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    const txt = 'About me'
    const arr = txt.split('')
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={arr} idx={15} />
                    </h1>
                    <p>Hello! My name is Jacob Garcia, a dynamic and motivated individual on the journey
                        to make a lasting impact in the tech industry.
                    </p>
                    <p>What fuels my enthusiasm for the tech industry is its pervasive influence on our daily
                        lives. As the digital landscape evolves, I'm inspired to contribute to this transformative
                        wave, leveraging my skills to create web solutions that resonate with and empower people.
                        The versatility of the tech field, not confined to any particular industry, allows me to explore
                        diverse opportunities and be part of the dynamic, ever-expanding online space.
                    </p>
                    <p>In my journey, I've discovered a profound satisfaction in coding from scratch, shaping ideas into
                        functional websites and applications. It's a powerful skill that resonates with my goal of making
                        a difference and creating change. While mastering technologies like Sassy CSS, and React, and even
                        delving into OOP and ORM programming, I've realized the potential to craft digital experiences that
                        matter. My search for a fulfilling career has led me to tech, where I see the chance to not just work
                        but to make an impact in the digital landscape. I'm on the lookout for roles where I can help pioneer new
                        solutions and technologies for your ongoing or future projects!
                    </p>

                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>

                        <div className='face2'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>

                        <div className='face3'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>

                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>

                        <div className='face5'>
                            <FontAwesomeIcon icon={faGitAlt} color="#EC" />
                        </div>

                        <div className='face6'>
                            <FontAwesomeIcon icon={faDatabase} color="#EC" />
                        </div>

                    </div>

                </div>

            </div>
            <Loader type="eyemove" />

        </>
    )
}

export default About;
