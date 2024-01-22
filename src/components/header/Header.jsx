import styles from "./header.module.css";
import { Link, useLocation } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelectedToyStore } from "../../store";

const Header = () => {
  const cart = useSelectedToyStore((state) => state.cart);
  const location=useLocation()
  return (
    <div className={` bg-purple-500  flex align-middle justify-between p-4`}>
      <Link to="/">
        <img 
        className="w-24"
        src="https://megofigures.com/wp-content/uploads/2020/01/logo.png" />
      </Link>
      <h2 className="font-lucky text-5xl md:text-7xl md:mt-4 text-white "
      style={{textShadow: '1px 1px 1px gray,2px 2px 2px black'}}>
        MEGO <span className="text-yellow-400">TOY</span>STORE
      </h2>
      <div className="flex justify-between flex-wrap">
         <Link to="/toys">
        <button className={`btn btn-warning text-white ml-2 text-xs`}>See the Toys</button>
      </Link>
      {cart.length > 0 && (
        <Link to="/checkout">
        <div className={`lg:tooltip tooltip-secondary ${styles.cartwrapper}`} data-tip={(location.pathname === '/checkout')?"¡¡Now you've gotta pay!!":"Click to CHECKOUT"}>

            <p className="text-xs">checkout</p>
            <div className={styles.cart}>
              <ShoppingCartOutlinedIcon className={styles.customIcon} />
              <span className={styles.circle}>{cart.length}</span>
            </div>
          </div>
        </Link>
      )}
      
      </div>
     
    </div>
  );
};

export default Header;
