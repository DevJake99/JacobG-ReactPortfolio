import { useState, useEffect } from 'react'
import './home.scss'
import LogoJ from '../../assets/images/logo-j.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'


function Home() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const name = 'acob';
    const nameArray = name.split('');
    const title = 'Web Developer';
    const titleArray = title.split('');

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>&apos;m</span>
                    <img src={LogoJ} alt='developer'></img>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={titleArray} idx={22} />
                </h1><br />
                <h2> MERN Stack Expert / JavaScript / React / Node.js/ Databases</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
    )
}

export default Home
