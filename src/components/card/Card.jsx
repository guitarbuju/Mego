/* eslint-disable react/prop-types */

import {motion } from 'framer-motion'
import styles from './card.module.css'

const Card = ({ title, img,price }) => {
  return (
    
    <motion.div
      className={styles.imgwrapper}
      whileHover={{ scale: 1.035, opacity: 0.8 }}
    >
     <h5 className={`text-white-700 text-sm font-bold mb-2 ${styles.title}`}>{title}</h5>
     <img className = {styles.img} src={img} />
     <p className={`text-white-700 text-sm font-bold mb-2 ${styles.title}`}>get it for only:{price} $</p>
     
   </motion.div>
   
  );
};

export default Card;