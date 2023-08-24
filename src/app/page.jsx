import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";
import About from "./components/about/page";
import Portfolio from "./components/portfolio/page";
import Contact from "./components/contact/page";
import Service from "./components/service";
import Team from "./components/team";
import EarthCanvas from "./components/canvas/earth";
export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: 40 }}>
      <div className={styles.container}>
        <div className="flex flex-col h-auto gap-10">
          <h1 className={styles.title}>WELCOME TO THE MATHER.</h1>
          <p className={styles.desc}>
            Turning your Idea into Reality. We bring together the teams from the
            global tech industry.
          </p>
          <Button url="/portfolio" text="See Our Works" />
        </div>
        {/* <div className={styles.item}> */}
        <div className="flex flex-col h-[500px] w-full gap-10">
          <EarthCanvas />
        </div>
        {/* <Image src={Hero} alt="" className={styles.img} /> */}
        {/* </div> */}
      </div>
      <Service />
      <Portfolio />
      <Team />
      <About />
      <Contact />
    </div>
  );
}
