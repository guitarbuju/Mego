/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import styles from "./sliderpage.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelectedToyStore } from "../../store";

function Slider({ sum }) {
  
  
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const navigate= useNavigate()
  const resetCart = useSelectedToyStore((state) => state.resetCart);


  const onSubmit = (data) => {
      setData(JSON.stringify(data));
      navigate('/spinner');
      resetCart();
      
    }
  

  return (
    <div className={styles.container}>
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
       <label className="block text-gray-700 text-sm font-bold mt-2 mb-2">
          VISA or MASTER?
        </label>
        <select
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          {...register("category", { required: true })}
        >
          <option value="">Select your card</option>
          <option value="A">Visa</option>
          <option value="B">Master Card</option>
          <option value="B">American Express</option>
          <option value="B">Diners Club</option>
        </select>
        <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" >
          Card Holder Name:
        </label>
        <input
          {...register("firstName")}
          placeholder="your name as appears on the credit card."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2">
          Credit Card:
        </label>
        <input
          {...register("creditcard")}
          placeholder="your credit card number."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2">
          CVV:
        </label>
        <input
          {...register("firstName")}
          placeholder="CVV number on the back of your card."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
       
        <div
          className="relative mb-3"
          data-te-datepicker-init
          data-te-inline="true"
          data-te-input-wrapper-init
        >
          <label className="block text-gray-700 text-sm font-bold mb-2 mt-2">
            Expiration Date:
          </label>
          <input
            type="date"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          />
        </div>
        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2">
          Total Amount
        </label>
        <input
          {...register("totalAmount")}
          value={sum}
          type="number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
       

       
        <button
          type="submit"
          className="mt-4 bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    
    </div>
    

    </div>
  );
}

export default Slider;
