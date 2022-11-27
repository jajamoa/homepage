import React, { useState, useEffect } from "react";
import styles from "../App.css";
import { stateStore } from "../stores";

const MobiileVersion = () => {
  const { page, maxPage } = stateStore;

  return <div className={styles.scrollCol}>Mobile</div>;
};

export default MobiileVersion;
