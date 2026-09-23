import Link from "next/link";
import Error from "@/_assets/css/notfound.module.scss";

const NotFound = () => {
  return (
    <>
      <div className={Error.container}>
        <article className={Error.wrapper}>
          <h2>Ilustração encontrada. Página não.</h2>
          <h3>Talvez ela esteja escondida em algum cantinho da imaginação.</h3>
          <Link href="/">Recomeçar a história</Link>
        </article>
      </div>
    </>
  );
};

export default NotFound;
