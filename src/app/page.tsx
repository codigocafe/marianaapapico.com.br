import Header from "@/_components/header"
import Frames from "@/_components/frame"

import Home from "@/_assets/css/home.module.scss"

const PageHome = () => {
    return (
        <>
            <Header />
            <section className={Home.container} >
                <article className={Home.wrapper}>
                    <h1 className={Home.title}>
                        Comece pelo básico, pelo rabisco, pelo esboço. É o alicerce da sua arte.
                    </h1>
                    {/* icone para ver mais */}
                    <div className={Home.frames}>
                        <Frames src="/images/example.webp" alt="Arte exemplo" />
                        <Frames src="/images/example.webp" alt="Arte exemplo" />
                        <Frames src="/images/example.webp" alt="Arte exemplo" />
                    </div>
                </article>
            </section>
        </>
    )
}

export default PageHome