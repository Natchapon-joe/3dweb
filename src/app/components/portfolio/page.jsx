import React from "react";
import styles from "./page.module.css";
import WeHelp from "./weHelp";
import PortfolioDetail from "./portfolio";
const Portfolio = () => {
  return (
    <div id="Portfolio" className={styles.container}>
      <PortfolioDetail />
      <WeHelp />
    </div>
  );
};

export default Portfolio;
