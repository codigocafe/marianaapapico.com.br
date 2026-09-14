import Header from "@/components/header"
import Frames from "@/components/frame"

import Home from "@/assets/css/home.module.scss"

const PageHome = () => {
    return (
        <>
            <Header />
            <section className={Home.container} >
                <article className={Home.wrapper}>
                    <Frames src="/images/example.webp" alt="Arte exemplo" />
                    <Frames src="/images/example.webp" alt="Arte exemplo" />
                    <Frames src="/images/example.webp" alt="Arte exemplo" />
                </article>
            </section>
        </>
    )
}

export default PageHome