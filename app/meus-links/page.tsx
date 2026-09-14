import Header from "@/components/header"

import Links from '@/assets/css/links.module.scss'

const MyLinks = () => {
    return (
        <>
            <Header/>
            <section className={Links.container}>
                <article className={Links.wrapper}>
                    <h1>Meus links</h1>
                    <ul>
                        <li>link 1</li>
                        <li>link 2</li>
                        <li>link 3</li>
                        <li>link 4</li>
                        <li>link 5</li>
                        <li>link 6</li>
                    </ul>
                </article>
            </section>
        </>
    );
}

export default MyLinks