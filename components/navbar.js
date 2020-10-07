import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import Logo from "./logo.js";

export default function Navbar() {
  return (
    <>
      <div className={styles.bussines}>
        <div className={styles.socialMedia}>
          <Link href="/">
            <img src="../assets/icons/whatsapp.png" />
          </Link>
          <Link href="https://www.instagram.com/tantitaculpa.mx/">
            <img src="../assets/icons/instagram.png" />
          </Link>
          <Link href="https://www.facebook.com/Tantita-Culpa-103841034691836">
            <img src="../assets/icons/facebook.png" />
          </Link>
        </div>
        <div className={styles.horary}>
          <p>Lunes a Viernes de 9 am a 6 pm</p>
          <p>Sábados de 9 am a 3 pm</p>
        </div>
      </div>
      <nav className={styles.nav}>
        <Logo />
        <h2 className={styles.eslogan}>
          ¡Botana artesanal!, que va con tu estilo.
        </h2>
        <img className={styles.senefa} src="../assets/senefa.svg" />
      </nav>
    </>
  );
}
