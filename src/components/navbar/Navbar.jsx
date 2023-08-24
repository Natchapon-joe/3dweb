"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Service",
    url: "/service",
  },
  {
    id: 3,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 4,
    title: "Team",
    url: "/team",
  },
  // {
  //   id: 5,
  //   title: "Blog",
  //   url: "/blog",
  // },
  // {
  //   id: 6,
  //   title: "About",
  //   url: "/about",
  // },
  {
    id: 7,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 8,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();
  const handleClick = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image src="/banner.png" width={250} height={65} alt="banner" />
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <p
            key={link.id}
            className={styles.link}
            onClick={() => handleClick(link.title)}
          >
            {link.title}
          </p>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
