import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import styles from './mainLayout.module.css'

const MainLayout = () => {
  return (
    <div>
      <div >
        <Header className={styles.header}/>
      </div>
      <div>
        <Outlet className={styles.outlet}/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
