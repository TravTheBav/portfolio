import styles from './ProjectCard.module.css'

function ProjectCard({
    title,
    description,
    imgName,
    imgAltTxt,
    gitHubLink,
    demoLink
    }) {

    const img_src = `/screen_shots/${imgName}`

    return (
        <div className={`${styles.card}`}>
            <h2>{title}</h2>
            <img src={img_src} alt={imgAltTxt} />
            <p>{description}</p>
        </div>
    )
}

export default ProjectCard