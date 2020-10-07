import Link from "next/link";
import styles from "../styles/Menu.module.scss";

export default function Menu() {
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.items}>
          <div className={styles.link}>
            <Link href="/">
              <img src="../assets/icons/home.png" />
            </Link>
            <small>Inicio</small>
          </div>
          <div className={styles.link}>
            <Link href="/">
              <img src="../assets/icons/lista.png" />
            </Link>
            <small>Productos</small>
          </div>
          <div className={styles.link}>
            <Link href="/">
              <img src="../assets/icons/cart.png" />
            </Link>
            <small>Carrito</small>
          </div>
        </div>
      </div>
    </>
  );
}
