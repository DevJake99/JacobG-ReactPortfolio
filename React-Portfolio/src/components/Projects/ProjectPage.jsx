import { useParams } from "react-router-dom";
import { projectList } from "../../helpers/projectList";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import './projectPage.scss'
import Loader from 'react-loaders'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';


export default function DisplayProject() {
    const { id } = useParams();
    const project = projectList[id]
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    const h1 = project.name;
    const arr = h1.split('')
    return <>
        <div className="project container">
            <div className="text-zone">

                <div className="proj-header">
                    <h1><AnimatedLetters
                        letterClass={letterClass}
                        strArray={arr}
                        idx={15} /></h1>
                    <a target='_blank' rel='noreferrer' className='icon' href={project.link}>
                        <FontAwesomeIcon icon={faLink} color='#ffd700' />
                    </a>
                </div>
                <div className="proj-image" >
                    <img src={project.image}></img>
                </div>
                <br></br>

                <h3>Description: </h3>
                <p>{project.description}</p>


            </div>
        </div>
        <Loader type='eyemove' />

    </>
}