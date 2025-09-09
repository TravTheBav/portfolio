import styles from './ContactPage.module.css'

function ContactPage() {
    return (
        <>
        <section className={`banner ${styles.banner_img}`}>
            <>
            <h1 className={`banner_txt`}>Contact</h1>
            </>
        </section>
        <section className={`geometric circle_pattern`}>
            <div className={'content_box maroon_bg'}>
                <h2 className='xxl_text'>Let's build something great together</h2>
                <p className='large_text'>
                    I would love to chat with you, whether it is a project concept, or just to say hi! Feel free to
                    email me at <strong>tzito93@gmail.com</strong>.
                </p>
            </div>
        </section>
        </>
    )
}

export default ContactPage