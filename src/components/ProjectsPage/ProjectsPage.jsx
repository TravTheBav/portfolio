import styles from './ProjectsPage.module.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

function ProjectsPage() {
    return (
        <>
            <section className={`banner ${styles.banner_img}`}>
                <h1 className={'banner_txt'}>Projects</h1>
            </section>
            <section className={`${styles.cards}`}>
                 <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    modules={[Navigation]}
                    navigation={true}
                    breakpoints={{
                        480: {
                            slidesPerView: 2
                        }
                    }}
                    >
                        <SwiperSlide>
                            <ProjectCard 
                                title='Secure Password Manager'
                                description='lorem ipsum'
                                imgName='password_manager.png'
                            />
                        </SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                    </Swiper>
            </section>
        </>
    )
}

export default ProjectsPage