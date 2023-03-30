import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Logo } from "@/components/Logo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <Logo />
        <h1>Projeto fase 2</h1>
      </div>
    </>
  );
}
