import styles from './ProjectCard.module.css'
import { DiGithubBadge } from "react-icons/di";
import { Link } from 'react-router';

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
            <div className={`${styles.links}`}>
                {gitHubLink ?
                <a href={gitHubLink} target='_blank'>
                    <DiGithubBadge className={`${styles.github_link}`} />
                </a> : null}
                {demoLink ?
                <a href={demoLink} target='_blank' className={`button_link ${styles.demo_link}`}>live demo</a> : null}
            </div>
        </div>
    )
}

export default ProjectCard