"use client";
import React from "react";
import styles from "./home.module.css";
import About from "./About/About";
import Special from "./Special/Special";
import Gallery from "./Gallery/Gallery";
import Order from "./Oder/Order";
import Link from "next/link";

export default function index() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className={styles.home}>
        <center>
          <div className={styles.header}>
            <h1 style={{ fontFamily: "__Raleway_e42c30" }}>Hunger Bites</h1>{" "}
            <br />
            <Link href={"/dinein"} className={styles.btn}>
              <b>ORDER ONLINE</b>
            </Link>
          </div>
        </center>
      </div>
      <About />
      <Special />
      <br />
      <br />
      <Gallery />
      <br />
      <br />
      <Order />
      <br />
    </div>
  );
}
