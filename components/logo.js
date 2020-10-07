import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href="/">
        <a className="logo">
          <img src="../assets/icons/logo_texto.svg" />
        </a>
      </Link>
      <style jsx>{`
        .logo img {
          width: 130px;
        }
      `}</style>
    </>
  );
}
