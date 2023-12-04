import './projects.scss'
import ProjectItem from "./ProjectItem";
import CryptoZone from '../../assets/images/cryptoZone.png'
import MVCProject from '../../assets/images/mvctechblog.png'
import { projectList } from '../../helpers/projectList';

export default function Projects() {

    return (
        <>
            <div className="project-container">

                <div className="project-header">
                    <h2>Projects: </h2>
                    <hr></hr>
                </div>
                <div className="project-list">
                    {projectList.map((project) => {
                        return <ProjectItem name={project.name} image={project.image} />;
                    })}
                </div>


            </div>

        </>
    )
}