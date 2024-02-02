"use client";

import { useMediaQuery } from "react-responsive";
import AutoPlayMobile from "@/components/AutoPlayMobile";
import AutoPlayLaptop from "@/components/AutoPlayLaptop";
import Footer from "@/components/Footer";
import styles from "@/app/localHome.module.css";
import DetailsFooter from "@/components/DetailsFooter";
import NavBar from "@/components/NavBar";
import FoodGalleryResto from "@/components/FoodGalleryResto";
import Image from "next/image";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  return (
    <>
      <div className={"bg-black"}>
        <NavBar />
        <div className={styles.paragraph}>
          <p>This content is coming soon!</p>
          <Image
            src="/pictures/phoViet.png"
            alt="Viet80s Logo"
            width={1920}
            height={500}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <DetailsFooter location="restaurant" />
      <Footer />
    </>
  );
}
