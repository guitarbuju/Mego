/* eslint-disable react/prop-types */
import Carousel from "../../components/carrousel/Carousel";
import styles from "./home.module.css";
import heroes from "../../assets/‎heroes.‎001.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


const AnimatedOnScroll = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // 0.2 means 20% of the element is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 7 }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <div>
      <motion.div className="alert alert-warning mt-3 text-white drop-shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-current shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>Drag the carousel Left and Right to see your favourite action figures.</span>
      </motion.div>
      <Carousel />
      <AnimatedOnScroll>
        <img className={styles.img} src={heroes} />
      </AnimatedOnScroll>
      <AnimatedOnScroll>
        <div className={styles.founder}>
          <p>
            Originally founded in 1954 by Dave Abrams, Marty Abrams, now
            commonly known as the father of action figures, took the helm of the
            company in 1971 and shifted the direction to licensed action
            figures. He included the Worlds Greatest Super Heros line, celebrity
            dolls, and the Micronauts toy line. Mego became famous for their 8”
            scale figures with interchangeable bodies. Eventually this became an
            industry standard. Mego Corporation re-launched in 2018 with a
            partnership between Marty Abrams and Joel Rosenzweig, focusing on 8”
            Action figures and launching with popular licenses from CBS, Warner
            Brothers, Sony and Epic.
          </p>

          <img src="https://www.megomuseum.com/wp-content/uploads/2011/08/marty-abrams.jpg" />
        </div>
      </AnimatedOnScroll>
    </div>
  );
};

export default Home;
