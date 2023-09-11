import { toys } from "../../index";
import styles from "./carousel.module.css";
import { motion } from "framer-motion";
import { useState,useRef,useEffect } from "react";

const Carousel = () => {
    
const [width,setWidth]= useState(0)
const carousel = useRef()

useEffect(()=>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
},[])

  return (
  
    <motion.div className={styles.carousel} ref={carousel}>
    
    <motion.div drag= 'x' dragConstraints={{right:0, left:-width}} className={styles.inner_carousel}>
      {toys.map((toy,index) => (
        <motion.div className= {styles.item} key={index}><img src={toy.img}/></motion.div>
      ))}
    </motion.div>
  </motion.div>
  
  );
};

export default Carousel;
