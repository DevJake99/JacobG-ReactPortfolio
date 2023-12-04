


export default function ProjectItem({ image, name }) {
    return <>
        <div className="projectItem">
            <div style={{ backgroundImage: `url(${image})` }} className="proj-image">
                <h2>{name}</h2>
            </div>

        </div>


    </>

}