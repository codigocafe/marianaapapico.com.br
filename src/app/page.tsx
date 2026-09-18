import Frames from "@/_components/frame"

import Home from "@/_assets/css/home.module.scss"
import Link from "next/link"

const PageHome = () => {
    return (
        <>
            <section className={Home.container} >
                <div className={Home.wrapper}>
                    <h1 className={Home.title}>Comece pelo básico, pelo rabisco, pelo esboço.<br/>É o alicerce da sua arte.</h1>
                    {/* icone para ver mais */}
                    <div className={Home.frames}>
                        <Frames src="/images/art-000.webp" alt="E se A Viagem de Chihiro se passasse no Brasil?" />
                        <Frames src="/images/art-001.webp" alt="Eu personagem" />
                        <Frames src="/images/art-002.webp" alt="Mix de personagens: Etevaldo + Eva Unidade-01" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default PageHome