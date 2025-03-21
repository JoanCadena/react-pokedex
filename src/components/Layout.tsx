import { JSX } from "react";
import styles from "../styles/layout.module.scss";
import Header from "./Header";
import { SpeedInsights } from "@vercel/speed-insights/next";

interface ILayout {
  children: JSX.Element;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className={styles.layout}>
      <SpeedInsights />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
