import Image from "next/image"
import Header from "@/components/header"

import Author from "@/assets/css/author.module.scss"

const PageAuthor = () => {
    return (
        <>
            <Header />
            <section className={Author.container}>
                <article>
                <div className={Author.wrapper}>
                        <Image 
                            alt="Imagem de apresentação da Mariana Apapico" 
                            src="/images/artista.png" 
                            width={570} 
                            height={500}
                            />
                    </div>
                    <h2>Sobre a artista</h2>
                    <p>Em comemoração ao Bicentenário de nossa cidade Tatuí, que personagem poderia melhor representar a nossa essência do que um Tatu? Um não, 200 Tatus.</p>
                    <p>Presente na etimologia da palavra que dá nome à nossa terra e contempla a fauna local, além de permear o imaginário infantil em livros e mascotes, da educação ao comércio. O Tatu está em toda parte e pode ser considerado sinônimo de “pé vermelho”, de nosso jeito caipira, pertencente e orgulhoso da terra em que nascemos.</p>
                    <p>A exposição conta com obras que ilustram um pouco dos símbolos e da vida em Tatuí, mostrando seu legado histórico e cultural de forma acessível e divertida para atrair a atenção de jovens e adultos.</p>
                    <p>Quem ilustra é a artista Mariana Apapico, nascida em Itapetininga-SP, despertou o interesse pelas artes desde muito cedo. Dedicou-se a explorar técnicas de artesanato e, antes dos 13 anos, já sabia tricô, crochê, marcenaria, pintura em diversos materiais, além de ser professora voluntária de bordado no Lions Club, dos 12 aos 15 anos.</p>
                    <p>Cursou Magistério pelo antigo CEFAM - Centro de Formação e Aperfeiçoamento do Magistério -, fez um ano de Artes Visuais pela UNB - Universidade Aberta de Brasília - e está no último ano do curso de Pedagogia na Uninter - Centro Universitário Internacional. Também está se aperfeiçoando no curso “Mestre Ilustrador” pelo Instituto Ocellaris.</p>
                    <p>Além de ilustradora, Mariana é professora e contadora de histórias, idealizadora do projeto LABORHISTÓRIAS, que busca estimular a criatividade e a curiosidade do pensamento crítico com histórias infantis e de práticas científicas.</p>
                    <p>As artes apresentadas são ilustrações tradicionais, feitas com materiais diversos como tinta acrílica, lápis de cor, aquarela, carvão e outros, até materiais recicláveis foram usados na confecção de algumas obras.</p>
                    <p>Em cada ilustração há Tatus escondidos para os olhos curiosos encontrarem. Ao todo são 200 Tatus escondidos, além das curiosidades por trás de cada obra.</p>
                </article>
            </section>
        </>
    )
}

export default PageAuthor