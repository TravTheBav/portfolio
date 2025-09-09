import styles from './ProjectsPage.module.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function ProjectsPage() {
    return (
        <>
            <section className={`banner ${styles.banner_img}`}>
                <h1 className={'banner_txt'}>Projects</h1>
            </section>
            <section className={`${styles.cards}`}>
                <p>
                    <em>
                        *While I have tried to include links to live demos and repositories where possible, some projects {}
                        here have private repositories which I cannot expose. As well, certain projects do not have live demos, {}
                        as I cannot afford to run multiple database instances at the same time.
                    </em>
                </p>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    modules={[Navigation, Pagination]}
                    navigation={true}
                    pagination={{clickable: true}}
                    breakpoints={{
                        480: {
                            slidesPerView: 2
                        },
                        992: {
                            slidesPerView: 3
                        }
                    }}
                >
                    <SwiperSlide>
                        <ProjectCard 
                            title={'Secure Password Manager'}
                            description={'An application for safely storing passwords in an encrypted vault.'}
                            imgName={'password_manager.png'}
                            imgAltTxt={'Screenshot of the password manager security check feature.'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectCard
                            title={'Flashy Cards'}
                            description={'A tool for creating, organizing, and studying flash card sets.'}
                            imgName={'flash_cards.png'}
                            imgAltTxt={'Screenshot of the Flashy Cards dashboard.'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectCard
                            title={'BookFlow'}
                            description={'An administrative portal for managing database tables for an online bookstore.'}
                            imgName={'bookflow.png'}
                            imgAltTxt={'Screenshot of the BookFlow .'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectCard
                            title={'Starcraft 2 Resource Calculator'}
                            description={'Calculates mineral and vespene income for a game of Starcraft 2.'}
                            imgName={'starcraft.png'}
                            imgAltTxt={'Screenshot of the Starcraft Resource Calculator dashboard.'}
                            gitHubLink={'https://github.com/TravTheBav/sc2-resource-calculator'}
                            demoLink={'https://sc2resourcecalculator.com/'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectCard
                            title={'Freecell Solitaire'}
                            description={'Freecell solitaire variant made with PyGame.'}
                            imgName={'freecell.png'}
                            imgAltTxt={'Screenshot of Freecell solitaire, made with Python and PyGame.'}
                            gitHubLink={'https://github.com/TravTheBav/freecell'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectCard
                            title={'To Do App'}
                            description={'A light-weight task management app.'}
                            imgName={'todo.png'}
                            imgAltTxt={'Screenshot of the To Do app.'}
                            gitHubLink={'https://github.com/TravTheBav/to-do-app'}
                            demoLink={'https://travthebav.github.io/to-do-app/'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectCard
                            title={'Etch-a-Sketch'}
                            description={'An Etch-a-Sketch made with HTML, CSS, and JavaScript.'}
                            imgName={'etch_a_sketch.png'}
                            imgAltTxt={'Screenshot of the Etch-a-Sketch app.'}
                            gitHubLink={'https://github.com/TravTheBav/Etch-a-Sketch'}
                            demoLink={'https://travthebav.github.io/Etch-a-Sketch/'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectCard
                            title={'Calculator'}
                            description={'Add numbers. Do multiplication. Save the world.'}
                            imgName={'calculator.png'}
                            imgAltTxt={'Screenshot of a calculator made with JavaScript.'}
                            gitHubLink={'https://github.com/TravTheBav/calculator'}
                            demoLink={'https://travthebav.github.io/calculator/'}
                        />
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}

export default ProjectsPage