import Link from "next/link";
import Frames from "@/_components/frame";
import Home from "@/_assets/css/home.module.scss";

const PageHome = () => {
  return (
    <>
      <section className={Home.container}>
        <div className={Home.wrapper}>
          <h1 className={Home.title}>
            Comece pelo básico, pelo rabisco, pelo esboço.
            <br />É o alicerce da sua arte.
          </h1>

          <article className={Home.content}>
            <h2>Sobre a artista</h2>
            <p>
              Mariana Apapico é ilustradora e contadora de histórias, apaixonada
              pelo universo da ilustração infantil e das histórias para
              crianças. Em seu trabalho, une arte, imaginação e narrativa para
              criar imagens que despertam a curiosidade e dão vida a novos
              mundos.
            </p>
            <Link
              href="https://www.instagram.com/mariana_apapico/"
              target="_blank"
            >
              Acompanhe o trabalho da Mariana no Instagram
            </Link>
          </article>

          <div className={Home.frames}>
            <Frames
              src="/images/art-000.webp"
              alt="E se A Viagem de Chihiro se passasse no Brasil?"
            />
            <Frames src="/images/art-001.webp" alt="Eu personagem" />
            <Frames
              src="/images/art-002.webp"
              alt="Mix de personagens: Etevaldo + Eva Unidade-01"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PageHome;
