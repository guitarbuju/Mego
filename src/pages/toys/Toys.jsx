/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./toys.module.css";
import { toys } from "../../index";
import Card from "../../components/card/Card";
import { useState } from "react";
import { useSelectedToyStore } from "../../store.js";
import { useNavigate } from "react-router-dom";


const Toys = () => {
  const [selected, setSelected] = useState(false);
  const [selectedToy, setSelectedToy] = useState("");

  const selectToy = useSelectedToyStore((state)=> state.setSelectedToy)
   const navigate=useNavigate()

   

   const pickAtoy=(toy)=>{
    selectToy(toy);
    navigate('/detail')

   }

  console.log(selectedToy,selected);
  return (
    <div>
      <ul className={`${styles.container} container`}>
        {toys.map((toy, index) => (
          <li
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => {
              pickAtoy(toy)
              
            }}
          >
            <Card title={toy.title} img={toy.img} price={toy.price}/>
           
          </li>
        ))}
      </ul>
   
    </div>
  );
};

export default Toys;
