import styles from './HomePage.module.css'
import portrait from '../../assets/portrait.jpg'
import { DiPython } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { FaNode } from "react-icons/fa6";
import { DiMysql } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { DiRuby } from "react-icons/di";

function HomePage() {
    return (
        <>
        <section className={`${styles.bg_img} ${styles.img_1}`}>
            <h1 className={`${styles.img_text}`}>Travis Zito</h1>
        </section>
        <section className={`${styles.geometric} ${styles.circle_pattern}`}>
            <div className={`${styles.bio} ${styles.flex}`}>
                <div>
                    <p className={`large_text`}>
                        Hello there, I'm Travis. I am a hobbyist coder, with a passion for
                        web development and design. I recently graduated from Oregon State University
                        with a Bachelors of Science in Comp Sci, and am looking to become a professional
                        software developer. Aside from coding, I love reading about history, going for walks
                        in nature, playing video games, and hanging out with my cats.
                    </p>
                </div>
                <div>
                    <img className={`${styles.portrait}`} src={portrait}/>
                </div>
            </div>
        </section>
        <section className={`${styles.technologies}`}>
            <h2>Frequently Used Technologies</h2>
            <div className={`${styles.tech_icons}`}>
                <div>
                    <p className='large_text'>Python</p>
                    <i><DiPython /></i>
                </div>
                <div>
                    <p className='large_text'>Git</p>
                    <i><DiGit /></i>
                </div>
                <div>
                    <p className='large_text'>GitHub</p>
                    <i><DiGithubBadge /></i>
                </div>
                <div>
                    <p className='large_text'>HTML</p>
                    <i><DiHtml5 /></i>
                </div>
                <div>
                    <p className='large_text'>CSS</p>
                    <i><DiCss3 /></i>
                </div>
                <div>
                    <p className='large_text'>JavaScript</p>
                    <i><DiJavascript1 /></i>
                </div>
                <div>
                    <p className='large_text'>Node.js</p>
                    <i><FaNode /></i>
                </div>
                <div>
                    <p className='large_text'>MySQL</p>
                    <i><DiMysql /></i>
                </div>
                <div>
                    <p className='large_text'>React</p>
                    <i><DiReact /></i>
                </div>
                <div>
                    <p className='large_text'>VS Code</p>
                    <i><VscVscode /></i>
                </div>
                <div>
                    <p className='large_text'>Ruby</p>
                    <i><DiRuby /></i>
                </div>
            </div>
        </section>
        <section className={`${styles.geometric} ${styles.hex_pattern}`}>
            <div className={`${styles.bio}`}>
                <h2>The Cats</h2>
                <div className={`${styles.flex}`}>
                    <div>test</div>
                    <div>test</div>
                </div>
                <div className={`${styles.flex}`}>
                    <div>test</div>
                    <div>test</div>
                </div>
            </div>
        </section>
        </>
    )
}

export default HomePage