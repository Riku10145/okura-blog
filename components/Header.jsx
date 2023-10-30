import styles from "@/styles/Home.module.css";
import Link from "next/link";

export function Header() {
  return (
    <>
      <Link href={"/"}>
      <header className={styles.header}>オクラのブログ</header>
      </Link>
    </>
  );
}


