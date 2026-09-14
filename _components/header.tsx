import Link from "next/link"
import Image from "next/image"

const Header = () => {
    return (
        <>
            <header className="container">
                <div className="top">
                    <Image alt="Logo da Mariana Apapico" src="/images/logo.png" width={80} height={24} />
                    <h1>@Mariana_Apapico</h1>
                </div>
                <nav>
                    <Link href='/'>Início</Link>
                    <Link href='/sobre-a-artista'>Sobre mim</Link>
                    <Link href='/meus-links'>Meus links</Link>
                </nav>
            </header>
        </>
    )
}

export default Header