import styles from "./header.module.css";
import { Link, useLocation } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelectedToyStore } from "../../store";

const Header = () => {
  const cart = useSelectedToyStore((state) => state.cart);
  const location=useLocation()
  return (
    <div className={`bg-purple-500  ${styles.container}`}>
      <Link to="/">
        <img src="https://megofigures.com/wp-content/uploads/2020/01/logo.png" />
      </Link>
      <h2>
        MEGO <span>TOY</span>STORE
      </h2>
      <Link to="/toys">
        <button className={`btn btn-warning text-white ${styles.button1}`}>See the Toys</button>
      </Link>
      {cart.length > 0 && (
        <Link to="/checkout">
        <div className={`lg:tooltip tooltip-secondary ${styles.cartwrapper}`} data-tip={(location.pathname === '/checkout')?"¡¡Now you've gotta pay!!":"Click to CHECKOUT"}>

            <p>checkout</p>
            <div className={styles.cart}>
              <ShoppingCartOutlinedIcon className={styles.customIcon} />
              <span className={styles.circle}>{cart.length}</span>
            </div>
          </div>
        </Link>
      )}
      
    </div>
  );
};

export default Header;
