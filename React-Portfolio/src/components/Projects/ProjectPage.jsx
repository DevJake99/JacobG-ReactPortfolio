import { useParams } from "react-router-dom";
import { projectList } from "../../helpers/projectList";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';


export default function DisplayProject() {
    const { id } = useParams();
    const project = projectList[id]
    return <>
        <div className="project">
            <h2>{project.name}</h2>
            <img src={project.image}></img>
            <a target='_blank' rel='noreferrer' href='https://github.com/devjake99'>
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
            </a>
        </div>

    </>
}