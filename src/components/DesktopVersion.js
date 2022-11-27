import React, { useState, useEffect } from "react";
import styles from "../App.css";
import { stateStore } from "../stores";

const DesktopVersion = () => {
  const { page, maxPage } = stateStore;

  return <div className={styles.scrollCol}>Desktop</div>;
};

export default DesktopVersion;
