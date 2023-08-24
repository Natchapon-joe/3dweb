import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
export default function WeHelp() {
  return (
    <>
      <h1 className={styles.selectTitle}>WE HELP GROW YOUR BUSINESS</h1>
      <div className="flex gap-[50px] flex-col md:flex-row justify-center md:justify-start items-center">
        <Link href="" className={styles.item}>
          <div className={styles.title}>
            <span>EFFECTIVE BUDGET CONTROL</span>
            <p>
              Reduce your dispensable cost on each time recruiting management.
            </p>
          </div>
        </Link>
        <Link href="" className={styles.item}>
          <div className={styles.title}>
            <span>IMPRESSIVE WORKFLOW</span>
            <p>
              Decrease your excessive recruiting activity on each round and
              well-managed man power.
            </p>
          </div>
        </Link>
        <Link href="" className={styles.item}>
          <div className={styles.title}>
            <span>ACCURACY WITHOUT BIAS</span>
            <p>
              Find exactly the right person who fit in your organization with
              credible, systematic information in which you can keep as the 1st
              party data.
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
