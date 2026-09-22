import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="container">
        <div className="top">
          <Image
            alt="Logo da Mariana Apapico"
            src="/images/logo.png"
            width={80}
            height={24}
          />
          <Link href="/">@Mariana_Apapico</Link>
        </div>
        <nav></nav>
      </header>
    </>
  );
};

export default Header;
